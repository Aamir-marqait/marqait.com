// middleware.ts (project root)
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const BRAND_ID = 'cmkz2euaa0004l204a27yigk1';
const TRUINTEL_API = 'https://truintel.vercel.app/api/traffic/collect';

// Comprehensive AI crawler patterns (Updated January 2026)
// Sources: Cloudflare, Search Engine Journal, PageRadar, official docs
const AI_CRAWLERS: Record<string, { company: string; category: string }> = {
    // OpenAI
    'gptbot': { company: 'OpenAI', category: 'ai_training' },
    'chatgpt-user': { company: 'OpenAI', category: 'ai_assistant' },
    'oai-searchbot': { company: 'OpenAI', category: 'ai_search' },
    // Anthropic (Claude)
    'claudebot': { company: 'Anthropic', category: 'ai_training' },
    'claude-user': { company: 'Anthropic', category: 'ai_assistant' },
    'claude-searchbot': { company: 'Anthropic', category: 'ai_search' },
    'claude-web': { company: 'Anthropic', category: 'ai_assistant' },
    'anthropic-ai': { company: 'Anthropic', category: 'ai_training' },
    // Google
    'google-extended': { company: 'Google', category: 'ai_training' },
    'google-cloudvertexbot': { company: 'Google', category: 'ai_training' },
    'gemini-deep-research': { company: 'Google', category: 'ai_search' },
    'googleother': { company: 'Google', category: 'ai_training' },
    'bard-ai': { company: 'Google', category: 'ai_assistant' },
    'gemini-ai': { company: 'Google', category: 'ai_assistant' },
    'google-notebooklm': { company: 'Google', category: 'ai_assistant' },
    'googleagent-mariner': { company: 'Google', category: 'ai_assistant' },
    // Microsoft
    'bingbot': { company: 'Microsoft', category: 'ai_search' },
    'bingpreview': { company: 'Microsoft', category: 'ai_search' },
    // Perplexity
    'perplexitybot': { company: 'Perplexity AI', category: 'ai_search' },
    'perplexity-user': { company: 'Perplexity AI', category: 'ai_assistant' },
    // Meta
    'meta-externalagent': { company: 'Meta', category: 'ai_training' },
    'meta-webindexer': { company: 'Meta', category: 'ai_search' },
    'facebookexternalhit': { company: 'Meta', category: 'ai_training' },
    'facebookbot': { company: 'Meta', category: 'ai_training' },
    // ByteDance
    'bytespider': { company: 'ByteDance', category: 'ai_training' },
    'tiktokspider': { company: 'ByteDance', category: 'ai_training' },
    // Amazon
    'amazonbot': { company: 'Amazon', category: 'ai_search' },
    'amazonbuyforme': { company: 'Amazon', category: 'ai_assistant' },
    // Apple
    'applebot': { company: 'Apple', category: 'ai_search' },
    'applebot-extended': { company: 'Apple', category: 'ai_training' },
    // DuckDuckGo
    'duckduckbot': { company: 'DuckDuckGo', category: 'ai_search' },
    'duckassistbot': { company: 'DuckDuckGo', category: 'ai_assistant' },
    // Mistral
    'mistralai-user': { company: 'Mistral AI', category: 'ai_assistant' },
    // xAI (Grok)
    'xai-bot': { company: 'xAI', category: 'ai_training' },
    // DeepSeek
    'deepseekbot': { company: 'DeepSeek', category: 'ai_training' },
    // Cohere
    'cohere-ai': { company: 'Cohere', category: 'ai_training' },
    'cohere-command': { company: 'Cohere', category: 'ai_assistant' },
    // You.com
    'youbot': { company: 'You.com', category: 'ai_search' },
    // Hugging Face
    'huggingface-bot': { company: 'Hugging Face', category: 'ai_training' },
    // Common Crawl
    'ccbot': { company: 'Common Crawl', category: 'ai_training' },
    // Character.AI
    'character-ai': { company: 'Character.AI', category: 'ai_training' },
    // Huawei
    'petalbot': { company: 'Huawei', category: 'ai_training' },
    // Phind
    'phindbot': { company: 'Phind', category: 'ai_search' },
    // Other
    'diffbot': { company: 'Diffbot', category: 'ai_training' },
    'ai2bot': { company: 'Allen Institute', category: 'ai_training' },
    'groq-bot': { company: 'Groq', category: 'ai_assistant' },
    'firecrawlagent': { company: 'FireCrawl', category: 'ai_training' },
    'devin': { company: 'Cognition', category: 'ai_assistant' },
    'img2dataset': { company: 'LAION', category: 'ai_training' },
};

export function middleware(request: NextRequest) {
    const ua = (request.headers.get('user-agent') || '').toLowerCase();
    const fullUserAgent = request.headers.get('user-agent') || '';

    // Find matching AI crawler
    let matchedCrawler: string | null = null;
    let crawlerInfo: { company: string; category: string } | null = null;

    for (const [pattern, info] of Object.entries(AI_CRAWLERS)) {
        if (ua.includes(pattern)) {
            matchedCrawler = pattern;
            crawlerInfo = info;
            break;
        }
    }

    // Only send if AI crawler detected
    if (matchedCrawler && crawlerInfo) {
        fetch(TRUINTEL_API, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                brandId: BRAND_ID,
                page: request.nextUrl.pathname,
                userAgent: fullUserAgent,
                crawlerType: matchedCrawler,
                crawlerCategory: crawlerInfo.category,
                isAiCrawler: true,
                sessionId: `ai_${matchedCrawler}_${Date.now()}`,
                mouseMovements: 0,
                scrollEvents: 0,
                timeOnPage: 0,
            }),
        }).catch(() => { });
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};