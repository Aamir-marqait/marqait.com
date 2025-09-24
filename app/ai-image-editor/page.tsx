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
  title: "Free AI Brandbook Generator - Marqait AI",
  description:
    "Create professional brand guidelines and brandbooks instantly with AI. Generate comprehensive brand identity documents including logos, colors, fonts, and visual guidelines.",
  alternates: {
    canonical: "https://www.marqait.com/ai-brandbook-generator",
  },
  openGraph: {
    title: "Free AI Brandbook Generator - Marqait AI",
    description:
      "Create professional brand guidelines and brandbooks instantly with AI. Generate comprehensive brand identity documents including logos, colors, fonts, and visual guidelines.",
    url: "https://www.marqait.com/ai-brandbook-generator",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free AI Brandbook Generator - Marqait AI",
    description:
      "Create professional brand guidelines and brandbooks instantly with AI. Generate comprehensive brand identity documents including logos, colors, fonts, and visual guidelines.",
  },
};

export default function AIEditor() {
  return (
    <div className="min-h-screen bg-[#05000A] w-full overflow-x-hidden">
      <div className="pointer-events-none absolute -left-/4 top-0 w-[40rem] h-[40rem] bg-[#850DB8] opacity-20 rounded-full blur-3xl"></div>
      <div className="pointer-events-none absolute right-32 top-96 transform -translate-y-1/2 w-[50rem] h-[40rem] bg-[#850DB8] opacity-20 rounded-full blur-3xl"></div>
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
