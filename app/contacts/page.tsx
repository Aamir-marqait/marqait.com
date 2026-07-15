"use client";

// Marqait's /contacts lead-capture form has been replaced by a TruIntel CTA so
// every contact action funnels to TruIntel.
import { useSEO } from "@/utils/seo";
import { TruIntelContactCTA } from "@/components/truintel";

export default function ContactPage() {
  useSEO({
    canonical: "https://www.marqait.com/contacts",
    title: "Contact TruIntel | Book a Demo",
    description:
      "Talk to the TruIntel team about AI search visibility and SEO, or start free in 60 seconds.",
  });

  return (
    <div className="min-h-screen bg-[#05000A] w-full overflow-x-hidden flex items-center">
      <div className="w-full py-16">
        <TruIntelContactCTA />
      </div>
    </div>
  );
}
