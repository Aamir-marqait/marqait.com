import type { Metadata } from "next";
import AiPowerhouseHero from "@/components/products/products-hero-section";
import KeyBenefits from "@/components/products/key-benefits";
import OurPowerfulTools from "@/components/products/our-powerful-tools";
import WhatAreTools from "@/components/products/what-are-ai-tools";
import FaqSection from "@/components/products/faq-section";

export const metadata: Metadata = {
  title: "Best AI Tools for Marketing Automation - Marqait AI",
  description:
    "Explore AI tools for Marketing automation at Marqait AI. Get free ai logo generator, social media post generator, campaign generator and more.",
  keywords:
    "AI tools, marketing automation, AI logo generator, social media post generator, campaign generator, free AI tools",
  alternates: {
    canonical: "https://www.marqait.com/ai-tools",
  },
  openGraph: {
    title: "Best AI Tools for Marketing Automation - Marqait AI",
    description:
      "Explore AI tools for Marketing automation at Marqait AI. Get free ai logo generator, social media post generator, campaign generator and more.",
    url: "https://www.marqait.com/ai-tools",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best AI Tools for Marketing Automation - Marqait AI",
    description:
      "Explore AI tools for Marketing automation at Marqait AI. Get free ai logo generator, social media post generator, campaign generator and more.",
  },
};

const AITools = () => {
  return (
    <div className="min-h-screen bg-[#05000A] w-full overflow-x-hidden">
      <div className="w-full max-w-none">
        <AiPowerhouseHero />
        <KeyBenefits />
        <OurPowerfulTools />
        <WhatAreTools />
        <FaqSection/>
      </div>
    </div>
  );
};

export default AITools;
