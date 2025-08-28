"use client";

import AIProductsSection from "@/components/products/ai-products-section";
import ProductsHeroSection from "@/components/products/products-hero-section";
import { useSEO } from "@/utils/seo";

const AITools = () => {
  useSEO({
    title: "Best AI Tools for Marketing Automation - Marqait AI",
    description: "Explore AI tools for Marketing automation at Marqait AI. Get free ai logo generator, social media post generator, campaign generator and more.",
    canonical: "https://www.marqait.com/ai-tools",
    keywords: "AI tools, marketing automation, AI logo generator, social media post generator, campaign generator, free AI tools",
    ogType: "website",
    twitterCard: "summary_large_image"
  });

  return (
    <div className="min-h-screen bg-[#05000A] w-full overflow-x-hidden">
      <div className="w-full max-w-none">
        <ProductsHeroSection />
        <AIProductsSection />
      </div>
    </div>
  );
};

export default AITools;