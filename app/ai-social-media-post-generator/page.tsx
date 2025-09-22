import type { Metadata } from "next";
import HeroSection from "./hero-section";
import Introduction from "./introduction";
import WhyToChoose from "./why-to-choose";
import DevelopmentProcessSection from "./developmet-process";
import UseAISocialMedia from "./use-ai-social";
import FaqSection from "./faq-section";
import FinalCtaSection from "./final-cta-section";

export const metadata: Metadata = {
  title: "Free AI Social Media Post Generator - Marqait AI",
  description:
    "Generate engaging social media posts for free with a simple text prompt using Marqait's free AI social media post generator.",
  keywords:
    "AI social media post generator, free social media generator, social media content creation, AI marketing tools",
  alternates: {
    canonical: "https://www.marqait.com/ai-social-media-post-generator",
  },
  openGraph: {
    title: "Free AI Social Media Post Generator - Marqait AI",
    description:
      "Generate engaging social media posts for free with a simple text prompt using Marqait's free AI social media post generator.",
    url: "https://www.marqait.com/ai-social-media-post-generator",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free AI Social Media Post Generator - Marqait AI",
    description:
      "Generate engaging social media posts for free with a simple text prompt using Marqait's free AI social media post generator.",
  },
};

export default function AISocialMediaPostGenerator() {
  return (
    <div className="min-h-screen bg-[#05000A] w-full overflow-x-hidden">
      <HeroSection />
      <Introduction />
      <WhyToChoose />
      <DevelopmentProcessSection />
      <UseAISocialMedia />
      <FaqSection />
      <FinalCtaSection />
    </div>
  );
}
