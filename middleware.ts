// middleware.ts (project root)
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const BRAND_ID = 'cmkz2euaa0004l204a27yigk1';
const TRUINTEL_API = 'https://truintel.vercel.app/api/traffic/collect';

// Comprehensive list of AI crawler patterns
const AI_CRAWLERS = [
    // OpenAI
    'gptbot', 'chatgpt-user', 'oai-searchbot', 'openai',
    // Anthropic (Claude)
    'claudebot', 'claude-web', 'anthropic-ai', 'claude-searchbot',
    // Google (Gemini)
    'google-extended', 'googlebot', 'googleother',
    // Perplexity
    'perplexitybot', 'perplexity-user',
    // Microsoft (Bing/Copilot)
    'bingbot', 'bingpreview',
    // Meta
    'facebookexternalhit', 'meta-externalagent',
    // ByteDance
    'bytespider', 'tiktokspider',
    // Amazon
    'amazonbot', 'amazonbuyforme',
    // Apple
    'applebot', 'applebot-extended',
    // DuckDuckGo
    'duckduckbot', 'duckassistbot',
    // Common Crawl
    'ccbot',
    // Cohere
    'cohere-ai', 'cohere-training-data-crawler',
    // You.com
    'youbot',
    // Phind
    'phindbot',
    // Other
    'img2dataset'
];

export function middleware(request: NextRequest) {
    const ua = (request.headers.get('user-agent') || '').toLowerCase();
    const match = AI_CRAWLERS.find(p => ua.includes(p));

    // Always send the signal, regardless of match
    fetch(TRUINTEL_API, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            brandId: BRAND_ID,
            page: request.nextUrl.pathname,
            userAgent: request.headers.get('user-agent'),
            sessionId: match
                ? `ai_${match}_${Date.now()}`
                : `visitor_${Date.now()}`,
            crawlerType: match || 'human',  // 'human' if no AI crawler matched
            isAiCrawler: !!match,
            mouseMovements: 0,
            scrollEvents: 0,
            timeOnPage: 0,
        }),
    }).catch(() => { });

    return NextResponse.next();
}

export const config = {
    matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};