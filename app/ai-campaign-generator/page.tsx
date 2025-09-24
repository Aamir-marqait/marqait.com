import type { Metadata } from "next";
import HeroSection from "./hero-section";
import Introduction from "./introduction";
import Benefits from "./benefit";
import BrandPage from "./brand";
import MadeEveryBrand from "./made-everybrand";
import FaqSection from "./faq-section";
import FinalCtaSection from "./final-cta";

export const metadata: Metadata = {
  title: "Free AI Campaign Generator - Marqait AI",
  description:
    "Create comprehensive marketing campaigns instantly with AI. Generate campaign strategies, content plans, social media posts, email sequences, and advertising copy across multiple channels.",
  alternates: {
    canonical: "https://www.marqait.com/ai-campaign-generator",
  },
  openGraph: {
    title: "Free AI Campaign Generator - Marqait AI",
    description:
      "Create comprehensive marketing campaigns instantly with AI. Generate campaign strategies, content plans, social media posts, email sequences, and advertising copy across multiple channels.",
    url: "https://www.marqait.com/ai-campaign-generator",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free AI Campaign Generator - Marqait AI",
    description:
      "Create comprehensive marketing campaigns instantly with AI. Generate campaign strategies, content plans, social media posts, email sequences, and advertising copy across multiple channels.",
  },
};

export default function AISocialMediaPostGenerator() {
  return (
    <div className="min-h-screen bg-[#05000A] w-full overflow-x-hidden">
      <div className="pointer-events-none absolute -left-/4 top-0 w-[40rem] h-[40rem] bg-[#850DB8] opacity-20 rounded-full blur-3xl"></div>
      <div className="pointer-events-none absolute right-32 top-96 transform -translate-y-1/2 w-[50rem] h-[40rem] bg-[#850DB8] opacity-20 rounded-full blur-3xl"></div>
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
