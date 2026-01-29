// middleware.ts (project root)
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const BRAND_ID = 'cmkxzgefz0004dcn0gbg6mpts';
const TRUINTEL_API = 'https://truintel.vercel.app/api/traffic/collect';

const AI_CRAWLERS = [
    'gptbot', 'chatgpt-user', 'claudebot', 'claude-web',
    'perplexitybot', 'googlebot', 'google-extended',
    'bingbot', 'facebookexternalhit', 'applebot', 'amazonbot'
];

export function middleware(request: NextRequest) {
    const ua = (request.headers.get('user-agent') || '').toLowerCase();
    const match = AI_CRAWLERS.find(p => ua.includes(p));

    if (match) {
        fetch(TRUINTEL_API, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                brandId: BRAND_ID,
                page: request.nextUrl.pathname,
                userAgent: request.headers.get('user-agent'),
                sessionId: `ai_${match}_${Date.now()}`,
                mouseMovements: 0, scrollEvents: 0, timeOnPage: 0,
            }),
        }).catch(() => { });
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};