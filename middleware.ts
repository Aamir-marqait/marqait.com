// middleware.ts (project root)
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const BRAND_ID = 'cmkz2euaa0004l204a27yigk1';
const TRUINTEL_API = 'https://truintel.vercel.app/api/traffic/collect';

// Comprehensive list of AI crawler patterns (updated January 2026)
// Sources: Cloudflare, Search Engine Journal, PageRadar, official documentation
const AI_CRAWLERS = [
    // ========== OpenAI ==========
    'gptbot',                    // Training data collection for GPT models
    'chatgpt-user',              // Real-time web browsing for ChatGPT users
    'oai-searchbot',             // ChatGPT Search indexing

    // ========== Anthropic (Claude) ==========
    'claudebot',                 // Training data collection for Claude
    'claude-user',               // Real-time web access for Claude users
    'claude-searchbot',          // Claude search capabilities
    'claude-web',                // Claude web exploration/indexing
    'anthropic-ai',              // General Anthropic crawler
    'anthropic-claude',          // Alternative Claude identifier

    // ========== Google ==========
    'google-extended',           // Controls AI training usage (Gemini/Bard/Vertex AI)
    'google-cloudvertexbot',     // Vertex AI Agent Builder
    'gemini-deep-research',      // Gemini Deep Research feature
    'googleother',               // Google's other crawling purposes
    'bard-ai',                   // Google Bard assistant
    'gemini-ai',                 // Google Gemini
    'google-notebooklm',         // NotebookLM source fetching
    'googleagent-mariner',       // Project Mariner agentic browser

    // ========== Microsoft/Bing ==========
    'bingbot',                   // Bing Search and Copilot AI
    'bingpreview',               // Bing preview crawler

    // ========== Perplexity ==========
    'perplexitybot',             // Perplexity AI search indexing
    'perplexity-user',           // Real-time browsing for Perplexity users

    // ========== Meta ==========
    'meta-externalagent',        // Meta AI training (Llama, etc.)
    'meta-webindexer',           // Meta AI search capabilities
    'facebookexternalhit',       // Facebook/Meta general crawler
    'facebookbot',               // Facebook bot

    // ========== ByteDance/TikTok ==========
    'bytespider',                // ByteDance LLM training (Doubao)
    'tiktokspider',              // TikTok crawler

    // ========== Amazon ==========
    'amazonbot',                 // Amazon AI services (Alexa)

    // ========== Apple ==========
    'applebot',                  // Apple search/Siri
    'applebot-extended',         // Apple AI training (Apple Intelligence)

    // ========== DuckDuckGo ==========
    'duckduckbot',               // DuckDuckGo search
    'duckassistbot',             // DuckDuckGo AI assistant

    // ========== Mistral AI ==========
    'mistralai-user',            // Mistral's Le Chat citations

    // ========== xAI (Grok) ==========
    'xai-bot',                   // Elon Musk's xAI for Grok

    // ========== DeepSeek ==========
    'deepseekbot',               // DeepSeek AI training

    // ========== Cohere ==========
    'cohere-ai',                 // Cohere training
    'cohere-command',            // Cohere Command model

    // ========== You.com ==========
    'youbot',                    // You.com AI search

    // ========== Hugging Face ==========
    'huggingface-bot',           // Hugging Face open-source AI

    // ========== Common Crawl ==========
    'ccbot',                     // Open-source training data

    // ========== Character.AI ==========
    'character-ai',              // Character.AI training

    // ========== Huawei ==========
    'petalbot',                  // Huawei AI crawler

    // ========== Other AI Companies ==========
    'diffbot',                   // Diffbot knowledge graphs
    'webzio',                    // Webz.io data extraction
    'webzio-extended',           // Webz.io extended
    'ai2bot',                    // Allen Institute for AI
    'replicate-bot',             // Replicate platform
    'together-bot',              // Together AI
    'runpod-bot',                // RunPod cloud AI
    'groq-bot',                  // Groq inference
    'imagesiftbot',              // Image generation training
    'timpibot',                  // Timpi LLM training
    'icc-crawler',               // ICC AI/ML data
    'andibot',                   // Andi AI search
    'brightbot',                 // Bright Data AI
    'crawlspace',                // AI crawling service
    'firecrawlagent',            // Firecrawl for LLMs
    'devin',                     // Cognition AI code assistant
    'iboubot',                   // Ibou.io ethical search

    // ========== Chinese AI Crawlers ==========
    'pangubot',                  // Pangu models
    'kangaroo bot',              // Chinese AI
    'cotoyogi',                  // Japanese AI

    // ========== Data/Training Services ==========
    'omgili',                    // Webz.io (formerly Omgili)
    'omgilibot',                 // Webz.io bot
    'img2dataset',               // Image dataset collection

    // ========== Potentially Stealth (harder to detect) ==========
    'terracotta',                // Ceramic AI crawler
    'akirabot',                  // Malicious AI spam bot
];

export function middleware(request: NextRequest) {
    const ua = (request.headers.get('user-agent') || '').toLowerCase();
    const fullUserAgent = request.headers.get('user-agent') || '';

    // Find matching AI crawler
    const match = AI_CRAWLERS.find(p => ua.includes(p));

    // Determine crawler type category
    let crawlerCategory = 'human';
    if (match) {
        if (['gptbot', 'claudebot', 'google-extended', 'meta-externalagent', 'bytespider', 'ccbot', 'amazonbot', 'petalbot'].some(t => match.includes(t))) {
            crawlerCategory = 'ai_training';
        } else if (['chatgpt-user', 'claude-user', 'perplexity-user', 'mistralai-user', 'duckassistbot', 'bard-ai', 'gemini-ai'].some(t => match.includes(t))) {
            crawlerCategory = 'ai_assistant';
        } else if (['oai-searchbot', 'perplexitybot', 'claude-searchbot', 'bingbot', 'youbot', 'andibot'].some(t => match.includes(t))) {
            crawlerCategory = 'ai_search';
        } else {
            crawlerCategory = 'ai_other';
        }
    }

    // Always send the signal
    fetch(TRUINTEL_API, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            brandId: BRAND_ID,
            page: request.nextUrl.pathname,
            userAgent: fullUserAgent,
            sessionId: match
                ? `ai_${match}_${Date.now()}`
                : `visitor_${Date.now()}`,
            crawlerType: match || 'human',
            crawlerCategory: crawlerCategory,
            isAiCrawler: !!match,
            mouseMovements: 0,
            scrollEvents: 0,
            timeOnPage: 0,
            timestamp: new Date().toISOString(),
        }),
    }).catch(() => { });

    return NextResponse.next();
}

export const config = {
    matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};