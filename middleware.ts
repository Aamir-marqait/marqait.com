// middleware.ts — place at the ROOT of your Next.js project
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const TRUINTEL_BRAND_ID = "b9610a8c-99b3-4bcf-b03b-6462aa3a4b85";
const TRUINTEL_API = "https://api.truintel.ai/api/v1/traffic/collect";

// Bot detection: matches AI crawlers & non-browser UAs
const BOT_PATTERN =
  /bot|crawler|spider|scraper|GPTBot|ChatGPT-User|OAI-SearchBot|ClaudeBot|Claude-Web|anthropic-ai|Google-Extended|PerplexityBot|Bytespider|Applebot-Extended|CCBot|FacebookBot|Meta-ExternalAgent|cohere-ai|AI2Bot|Amazonbot|YouBot|Diffbot/i;
const BROWSER_PATTERN = /Mozilla\/5\.0.*AppleWebKit/;

function isBot(ua: string): boolean {
  if (!ua) return true;
  // If it looks like a real browser AND has no bot keyword, skip
  if (BROWSER_PATTERN.test(ua) && !BOT_PATTERN.test(ua)) return false;
  return true;
}

export function middleware(request: NextRequest) {
  const ua = request.headers.get("user-agent") || "";

  if (isBot(ua)) {
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      request.headers.get("x-real-ip") ||
      "";

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

// Only run on page routes, skip static assets
export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|css|js)$).*)",
  ],
};
