/**
 * TruIntel Lead Verification — explicit fire-and-forget calls.
 * Sends lead data to /ti/leads/verify (proxied to TruIntel API by middleware).
 * Non-blocking: never delays or breaks the form submission.
 */

const BRAND_ID = "cfdb70b4-7f8b-4dca-b613-3d971d3dd5be";
const VERIFY_URL = "/ti/leads/verify";

interface LeadData {
  email: string;
  name?: string;
  company?: string;
  phone?: string;
  message?: string;
  subject?: string;
}

function detectSource(ref: string): string {
  if (!ref) return "Direct";
  const url = ref.toLowerCase();
  if (url.includes("chat.openai.com") || url.includes("chatgpt.com"))
    return "ChatGPT";
  if (url.includes("claude.ai")) return "Claude";
  if (url.includes("perplexity.ai")) return "Perplexity";
  if (url.includes("gemini.google.com")) return "Gemini";
  if (
    url.includes("google.com/search") ||
    url.includes("bing.com/search") ||
    url.includes("duckduckgo.com")
  )
    return "Organic";
  if (url.includes("linkedin.com")) return "LinkedIn";
  if (url.includes("twitter.com") || url.includes("x.com")) return "Twitter";
  if (url.includes("facebook.com")) return "Facebook";
  if (url.includes("reddit.com")) return "Reddit";
  return "Referral";
}

export function verifyLead(data: LeadData): void {
  try {
    const ti = (window as any).TruIntel || {};

    const payload = {
      brand_id: BRAND_ID,
      email: data.email,
      name: data.name || undefined,
      company: data.company || undefined,
      phone: data.phone || undefined,
      message: data.message || undefined,
      subject: data.subject || undefined,
      session_id: ti.sessionId || undefined,
      source: detectSource(document.referrer),
      page: window.location.pathname + window.location.search,
      referrer: document.referrer || undefined,
      user_agent: navigator.userAgent,
    };

    const body = JSON.stringify(payload);

    // Primary: sendBeacon (survives page navigation)
    if (navigator.sendBeacon) {
      const blob = new Blob([body], { type: "application/json" });
      if (navigator.sendBeacon(VERIFY_URL, blob)) return;
    }

    // Fallback: fetch with keepalive
    fetch(VERIFY_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body,
      keepalive: true,
    }).catch(() => {});
  } catch {
    // Never interfere with the form
  }
}
