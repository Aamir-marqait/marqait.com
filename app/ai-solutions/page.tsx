import type { Metadata } from "next";
import HeroSection from "@/components/growth-pods/hero-section";
import CTASection from "@/components/growth-pods/cta-section";
import EveryIndustry from "@/components/ai-solutions/ai-sol-every-industry";
import Why from "@/components/ai-solutions/why";
import CaseStudies from "@/components/ai-solutions/case-studies";

export const metadata: Metadata = {
  title:
    "AI-Powered Growth Pods for Business, Startups & Creators - Marqait AI",
  description:
    "Marqait's AI-Powered Growth Pods: Dedicated teams that build custom AI marketing automation for startups, creators, agencies, and eCommerce brands.",
  keywords:
    "growth pods, AI marketing automation, custom AI solutions, startups, creators, agencies, eCommerce",
  alternates: {
    canonical: "https://www.marqait.com/growth-pods",
  },
  openGraph: {
    title:
      "AI-Powered Growth Pods for Business, Startups & Creators - Marqait AI",
    description:
      "Marqait's AI-Powered Growth Pods: Dedicated teams that build custom AI marketing automation for startups, creators, agencies, and eCommerce brands.",
    url: "https://www.marqait.com/growth-pods",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "AI-Powered Growth Pods for Business, Startups & Creators - Marqait AI",
    description:
      "Marqait's AI-Powered Growth Pods: Dedicated teams that build custom AI marketing automation for startups, creators, agencies, and eCommerce brands.",
  },
};

export default function GrowthPods() {
  return (
    <div className="min-h-screen bg-[#05000A] w-screen overflow-x-hidden">
      <HeroSection />
      <EveryIndustry />
      <Why />
      <CaseStudies />
      <CTASection />
    </div>
  );
}
