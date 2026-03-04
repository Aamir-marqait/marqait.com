// middleware.ts — place at the ROOT of your Next.js project
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const TRUINTEL_BRAND_ID = "dca071f0-badc-4e3a-9756-bc1f4f18d9f0";
const TRUINTEL_API = "https://api.truintel.ai/api/v1/i/e";

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

export function middleware(request: NextRequest) {
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
    "/((?!_next/static|_next/image|favicon.ico|api/|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|css|js|woff|woff2)$).*)",
  ],
};
