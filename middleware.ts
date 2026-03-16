// middleware.ts — place at the ROOT of your Next.js project
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const TRUINTEL_BRAND_ID = "cfdb70b4-7f8b-4dca-b613-3d971d3dd5be";
const TRUINTEL_API = "https://api.truintel.ai/api/v1/i/e";
const TRUINTEL_BASE = "https://api.truintel.ai/api/v1";

// AI crawlers — OpenAI, Anthropic, Google, Meta, xAI, etc.
const AI_CRAWLERS = [
  "GPTBot",
  "ChatGPT-User",
  "OAI-SearchBot",
  "ChatGPT-Agent",
  "ClaudeBot",
  "Claude-Web",
  "Claude-SearchBot",
  "Claude-User",
  "anthropic-ai",
  "Google-Extended",
  "GoogleOther",
  "Gemini-Deep-Research",
  "Google-CloudVertexBot",
  "Google-NotebookLM",
  "GoogleAgent-Mariner",
  "bingbot",
  "BingPreview",
  "Copilot",
  "AzureAI-SearchBot",
  "PerplexityBot",
  "Perplexity-User",
  "Meta-ExternalAgent",
  "Meta-ExternalFetcher",
  "meta-webindexer",
  "Applebot",
  "Applebot-Extended",
  "GrokBot",
  "xAI-Grok",
  "Grok-DeepSearch",
  "xAI-Bot",
  "Bytespider",
  "TikTokSpider",
  "DeepseekBot",
  "MistralAI-User",
  "mistralbot",
  "cohere-ai",
  "Cohere-Command",
  "cohere-training-data-crawler",
  "Amazonbot",
  "Amzn-SearchBot",
  "AmazonBuyForMe",
  "CCBot",
  "AI2Bot",
  "Ai2Bot-Dolma",
  "Diffbot",
  "HuggingFace",
  "YouBot",
  "PhindBot",
  "KagiBot",
  "BraveSearch",
  "DuckAssistBot",
  "Andibot",
  "TavilyBot",
  "iaskspider",
  "LinkupBot",
  "Groq-Bot",
  "FirecrawlAgent",
  "PetalBot",
  "ChatGLM-Spider",
  "Devin",
  "Manus-User",
  "Cloudflare-AutoRAG",
  "Webzio-Extended",
  "omgili",
  "ImagesiftBot",
  "Timpibot",
];

// Search engine + social preview bots
const OTHER_BOTS = [
  "Googlebot",
  "Googlebot-Image",
  "Googlebot-Video",
  "DuckDuckBot",
  "YandexBot",
  "Baiduspider",
  "SeznamBot",
  "Slackbot",
  "Twitterbot",
  "LinkedInBot",
  "facebookexternalhit",
  "WhatsApp",
  "Discordbot",
  "TelegramBot",
  "Redditbot",
  "Embedly",
];

const ALL_PATTERNS = [...AI_CRAWLERS, ...OTHER_BOTS];
const BOT_REGEX = new RegExp(
  ALL_PATTERNS.map((p) => p.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|"),
  "i",
);
const BROWSER =
  /Mozilla\/5\.0\s*\([^)]*(?:Windows|Macintosh|Linux|iPhone|Android)[^)]*\)\s*AppleWebKit/;
const GENERIC_BOT = /compatible;|bot\/|spider\/|crawler\//i;

function isBot(ua: string): boolean {
  if (!ua) return true;
  if (BOT_REGEX.test(ua)) return true;
  if (GENERIC_BOT.test(ua)) return true;
  if (BROWSER.test(ua)) return false;
  return true; // non-browser UA = likely a bot
}

// TruIntel proxy paths: /ti/traffic/collect and /ti/leads/verify
// Next.js rewrites don't forward POST bodies, so we proxy here instead
const TI_PROXY_MAP: Record<string, string> = {
  "/ti/traffic/collect": `${TRUINTEL_BASE}/traffic/collect`,
  "/ti/leads/verify": `${TRUINTEL_BASE}/leads/verify`,
};

export async function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;

  // --- TruIntel proxy (handles /ti/* POST and OPTIONS requests) ---
  const proxyDest = TI_PROXY_MAP[path];
  if (proxyDest) {
    // Handle CORS preflight for fetch() fallback
    if (request.method === "OPTIONS") {
      return new NextResponse(null, {
        status: 204,
        headers: {
          "Access-Control-Allow-Origin":
            request.headers.get("origin") || "*",
          "Access-Control-Allow-Methods": "POST, OPTIONS",
          "Access-Control-Allow-Headers":
            "Content-Type, User-Agent, X-Forwarded-For",
          "Access-Control-Max-Age": "86400",
        },
      });
    }

    if (request.method === "POST") {
      try {
        const body = await request.text();
        const res = await fetch(proxyDest, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "User-Agent": request.headers.get("user-agent") || "",
            "X-Forwarded-For":
              request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
              "",
          },
          body,
        });
        const data = await res.text();
        return new NextResponse(data, {
          status: res.status,
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin":
              request.headers.get("origin") || "*",
          },
        });
      } catch {
        return new NextResponse(
          JSON.stringify({ success: false, message: "Proxy error" }),
          { status: 502, headers: { "Content-Type": "application/json" } },
        );
      }
    }
  }

  // --- Bot detection (fire-and-forget to TruIntel) ---
  const ua = request.headers.get("user-agent") || "";

  if (isBot(ua)) {
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "";

    // Fire-and-forget — does NOT block or slow down the response
    fetch(TRUINTEL_API, {
      method: "POST",
      headers: { "Content-Type": "application/json", "X-Forwarded-For": ip },
      body: JSON.stringify({
        brand_id: TRUINTEL_BRAND_ID,
        page: request.nextUrl.pathname + request.nextUrl.search,
        user_agent: ua,
        referrer: request.headers.get("referer") || null,
        is_new_session: true,
        is_new_visitor: true,
      }),
    }).catch(() => {});
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    // Match all pages + /ti/* proxy paths, exclude static assets
    "/((?!_next/static|_next/image|favicon.ico|api/|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|css|js|woff|woff2)$).*)",
    "/ti/:path*",
  ],
};
