declare global {
  interface Window {
    gtag: (
      command: string,
      targetId: string,
      config?: Record<string, unknown>
    ) => void;
  }
}

export const pageview = (url: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag("config", "G-F9REM2WQ5H", {
      page_path: url,
    });
  }
};

export const trackEvent = (
  action: string,
  category = "engagement",
  label: string | null = null,
  value: number | null = null
) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag("event", action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

export const trackCTAClick = (ctaName: string, location: string | null = null) => {
  trackEvent(
    "cta_click",
    "conversion",
    `${ctaName}${location ? ` - ${location}` : ""}`,
    1
  );
};
