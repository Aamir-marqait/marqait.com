"use client";
import WhatGrowthPods from "@/components/growth-pods/what-growth-pod";
import HeroSection from "@/components/growth-pods/hero-section";
import { useSEO } from "@/utils/seo";
import HowGrowthPodsWork from "@/components/growth-pods/how-growth-pods-works";
import WhoItsForSection from "@/components/growth-pods/who-its-for-section";
import WhyBusinessNeedsSection from "@/components/growth-pods/why-business-needs-section";
import FAQSection from "@/components/growth-pods/faq-section";
import CTASection from "@/components/growth-pods/cta-section";

export default function GrowthPods() {
  useSEO({
    canonical: "https://www.marqait.com/growth-pods",
  });

  return (
    <div className="min-h-screen bg-[#05000A] w-full overflow-x-hidden">
      <HeroSection />
      <WhatGrowthPods />
      <HowGrowthPodsWork />
      <WhoItsForSection />
      <WhyBusinessNeedsSection />
      <FAQSection />
      <CTASection />
    </div>
  );
}
