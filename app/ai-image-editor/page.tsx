import type { Metadata } from "next";
import HeroSection from "./hero-section";
import Introduction from "./introduction";
import KeyFeature from "./key-features";
import FeatureOne from "./feature-one";
import FeatureTwo from "./feature-two";
import FeatureThree from "./feature-three";
import Benefits from "./benefits";
import FaqSection from "./faq-section";
import FinalCtaSection from "./final-cta";

export const metadata: Metadata = {
  title: "AI Image Editor - Free Online Photo Editor | Marqait AI",
  description:
    "Edit images with AI-powered tools. Remove backgrounds, enhance photos, add effects, and more with our free online AI image editor.",
  alternates: {
    canonical: "https://www.marqait.com/ai-image-editor",
  },
  openGraph: {
    title: "AI Image Editor - Free Online Photo Editor | Marqait AI",
    description:
      "Edit images with AI-powered tools. Remove backgrounds, enhance photos, add effects, and more with our free online AI image editor.",
    url: "https://www.marqait.com/ai-image-editor",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Image Editor - Free Online Photo Editor | Marqait AI",
    description:
      "Edit images with AI-powered tools. Remove backgrounds, enhance photos, add effects, and more with our free online AI image editor.",
  },
};

export default function AIEditor() {
  return (
    <div className="min-h-screen bg-[#05000A] w-full overflow-x-hidden">
      <div className="hidden md:block pointer-events-none absolute -left-/4 top-0 w-[40rem] h-[40rem] bg-[#850DB8] opacity-20 rounded-full blur-3xl"></div>
      <div className="hidden md:block pointer-events-none absolute right-32 top-96 transform -translate-y-1/2 w-[50rem] h-[40rem] bg-[#850DB8] opacity-20 rounded-full blur-3xl"></div>
      <HeroSection />
      <Introduction />
      <KeyFeature />
      <FeatureOne />
      <FeatureTwo />
      <FeatureThree />
      <Benefits />
      <FaqSection />
      <FinalCtaSection />
    </div>
  );
}
