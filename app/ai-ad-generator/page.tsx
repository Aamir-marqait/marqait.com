import type { Metadata } from "next";
import HeroSection from "./hero-section";
import Introduction from "./introduction";
import Benefits from "./benefit";
import BrandPage from "./brand";
import MadeEveryBrand from "./made-everybrand";
import FaqSection from "./faq-section";
import FinalCtaSection from "./final-cta";

export const metadata: Metadata = {
  title: "AI Ad Generator - Create Smarter Ad Campaigns with AI",
  description:
    "Searching for AI tool for advertising? Marqait AI offers the best AI Ad Generator to launch high-converting Google and Meta Ad campaigns..",
  alternates: {
    canonical: "https://www.marqait.com/ai-ad-generator",
  },
  openGraph: {
    title: "AI Ad Generator - Create Smarter Ad Campaigns with AI",
    description:
      "Searching for AI tool for advertising? Marqait AI offers the best AI Ad Generator to launch high-converting Google and Meta Ad campaigns..",
    url: "https://www.marqait.com/ai-ad-generator",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Ad Generator - Create Smarter Ad Campaigns with AI",
    description:
      "Searching for AI tool for advertising? Marqait AI offers the best AI Ad Generator to launch high-converting Google and Meta Ad campaigns..",
  },
};

export default function AISocialMediaPostGenerator() {
  return (
    <div className="min-h-screen bg-[#05000A] w-full overflow-x-hidden">
      <div className="hidden md:block pointer-events-none absolute -left-/4 top-0 w-[40rem] h-[40rem] bg-[#850DB8] opacity-20 rounded-full blur-3xl"></div>
      <div className="hidden md:block pointer-events-none absolute right-32 top-96 transform -translate-y-1/2 w-[50rem] h-[40rem] bg-[#850DB8] opacity-20 rounded-full blur-3xl"></div>
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
