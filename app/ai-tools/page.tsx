import type { Metadata } from "next";
import AIProductsSection from "@/components/products/ai-products-section";
import AiPowerhouseHero from "@/components/products/products-hero-section";
import KeyBenefits from "@/components/products/key-benefits";
import OurPowerfulTools from "@/components/products/our-powerful-tools";

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
        <AIProductsSection />
      </div>
    </div>
  );
};

export default AITools;
