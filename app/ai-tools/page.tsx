import type { Metadata } from "next";
import AiPowerhouseHero from "@/components/products/products-hero-section";
import KeyBenefits from "@/components/products/key-benefits";
import OurPowerfulTools from "@/components/products/our-powerful-tools";
import WhatAreTools from "@/components/products/what-are-ai-tools";
import FaqSection from "@/components/products/faq-section";
import FinalCtaSection from "@/components/products/final-cta-section";

export const metadata: Metadata = {
  title: "Free AI Marketing Tools - Marqait AI",
  description:
    "Marqait AI offers free AI marketing tools to automate content creation, ad campaigns, social media posts, and more for smarter marketing.",
  keywords:
    "AI tools, marketing automation, AI logo generator, social media post generator, campaign generator, free AI tools",
  alternates: {
    canonical: "https://www.marqait.com/ai-tools",
  },
  openGraph: {
    title: "Free AI Marketing Tools - Marqait AI",
    description:
      "Marqait AI offers free AI marketing tools to automate content creation, ad campaigns, social media posts, and more for smarter marketing.",
    url: "https://www.marqait.com/ai-tools",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free AI Marketing Tools - Marqait AI",
    description:
      "Marqait AI offers free AI marketing tools to automate content creation, ad campaigns, social media posts, and more for smarter marketing.",
  },
};

const AITools = () => {
  return (
    <div className="min-h-screen bg-[#05000A] w-full overflow-x-hidden">
      <div className="w-full max-w-none">
        <AiPowerhouseHero />
        <OurPowerfulTools />
        <KeyBenefits />
        <WhatAreTools />
        <FaqSection />
        <FinalCtaSection />
      </div>
    </div>
  );
};

export default AITools;
