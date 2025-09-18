import type { Metadata } from "next";
import HeroSection from "./hero-section";
import Introduction from "./introduction";
import Benefits from "./benefit";
import BrandPage from "./brand";
import MadeEveryBrand from "./made-everybrand";
import FaqSection from "./faq-section";
import FinalCtaSection from "./final-cta";

export const metadata: Metadata = {
  title: "AI Reel Generator - Marqait AI",
  description:
    "Create engaging video reels instantly with AI. Generate viral social media content, short-form videos, and captivating reels for Instagram, TikTok, and other platforms.",
  keywords:
    "AI reel generator, video content creator, AI video tools, social media reels, Instagram reels, TikTok videos, short-form content, viral videos",
  alternates: {
    canonical: "https://www.marqait.com/ai-reel-generator",
  },
  openGraph: {
    title: "Free AI Reel Generator - Marqait AI",
    description:
      "Create engaging video reels instantly with AI. Generate viral social media content, short-form videos, and captivating reels for Instagram, TikTok, and other platforms.",
    url: "https://www.marqait.com/ai-reel-generator",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free AI Reel Generator - Marqait AI",
    description:
      "Create engaging video reels instantly with AI. Generate viral social media content, short-form videos, and captivating reels for Instagram, TikTok, and other platforms.",
  },
};

export default function AISocialMediaPostGenerator() {
  return (
    <div className="min-h-screen bg-[#05000A] w-full overflow-x-hidden">
      <div className="absolute -left-/4 top-0 w-[40rem] h-[40rem] bg-[#850DB8] opacity-20 rounded-full blur-3xl"></div>
      <div className="absolute right-32 top-96 transform -translate-y-1/2 w-[50rem] h-[40rem] bg-[#850DB8] opacity-20 rounded-full blur-3xl"></div>
      <HeroSection />
      <Introduction />
      <Benefits />
      <BrandPage />
      <MadeEveryBrand />
      <FaqSection />
      <FinalCtaSection />
    </div>
  );
}
