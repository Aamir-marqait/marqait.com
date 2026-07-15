// Shared TruIntel promo content used across all Marqait pages.
// TruIntel (https://truintel.ai) is Marqait's sister product: an AI Search
// Monitoring & SEO platform that tracks how brands appear inside ChatGPT,
// Gemini, Google AI Overviews, Perplexity and Claude.

export const TRUINTEL = {
  name: "TruIntel",
  tagline: "AI is recommending your competitors. Find out why.",
  subtitle:
    "TruIntel helps your brand become the answer inside ChatGPT, Gemini, Google AI Overviews, Perplexity and Claude.",
  urls: {
    home: "https://truintel.ai/?utm_source=marqait&utm_medium=cross-promo",
    audit:
      "https://truintel.ai/website-audit?utm_source=marqait&utm_medium=cross-promo",
    register:
      "https://app.truintel.ai/register?utm_source=marqait&utm_medium=cross-promo",
  },
  // AI platforms TruIntel tracks — rendered as a small trust ribbon.
  platforms: ["ChatGPT", "Gemini", "Google AI", "Perplexity", "Claude"],
} as const;

export interface TruIntelFeature {
  title: string;
  description: string;
}

export const TRUINTEL_FEATURES: TruIntelFeature[] = [
  {
    title: "AI Search Visibility",
    description:
      "Track brand mentions and citations across ChatGPT, Gemini, Google AI Overviews, Perplexity and Claude.",
  },
  {
    title: "SEO Intelligence",
    description:
      "See what competitors rank for, where they beat you, and how to close the gap with actionable insights.",
  },
  {
    title: "AI CMS",
    description:
      "Create, optimize and publish SEO content at scale — auto content, on-page SEO and internal linking.",
  },
  {
    title: "Competitor Research",
    description:
      "Deep insight into competitor SEO and AI visibility. Spot the gaps and act on data-driven recommendations.",
  },
  {
    title: "Prompt Research",
    description:
      "Discover the real prompts and queries people ask AI in your niche — and win those answers.",
  },
  {
    title: "TruIntel Plus",
    description:
      "AI-generated blogs, FAQs, schema, meta tags, listings and citation plans to boost your AI footprint.",
  },
];
