import type { Metadata } from "next";
import Script from "next/script";
import HeroSection from "./hero-section";
import Introduction from "./introduction";
import WhyToChoose from "./why-to-choose";
import DevelopmentProcessSection from "./how-logo-is-generated-";
import LogoCategoriesSection from "./categories";
import ProTipsSection from "./pro-tip-section";
import ComparisonTableSection from "./comparison-table-section";
import FaqSection from "./faq-section";
import FinalCtaSection from "./final-cta-section";

export const metadata: Metadata = {
  title: "Free AI Logo Generator - Online Text to Logo Maker",
  description:
    "Generate unique logo with a text prompt using Marqait's free AI logo generator. Input simple text prompts and our AI makes logo design online for you.",
  alternates: {
    canonical: "https://www.marqait.com/ai-logo-generator",
  },
  openGraph: {
    title: "Free AI Logo Generator - Online Text to Logo Maker",
    description:
      "Generate unique logo with a text prompt using Marqait's free AI logo generator. Input simple text prompts and our AI makes logo design online for you.",
    url: "https://www.marqait.com/ai-logo-generator",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free AI Logo Generator - Online Text to Logo Maker",
    description:
      "Generate unique logo with a text prompt using Marqait's free AI logo generator. Input simple text prompts and our AI makes logo design online for you.",
  },
};

export default function AILogoGenerator() {
  return (
    <>
      <Script id="ai-logo-generator-schema" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          "name": "AI logo generator",
          "url": "https://www.marqait.com/ai-logo-generator",
          "description": "Make a logo with simple text prompt using AI logo generator.",
          "applicationCategory": "GraphicsApplication",
          "operatingSystem": "Windows, Mac OS, Linux",
          "featureList": [
            "Generate Gaming Logo with AI",
            "Generate 3D Logo with AI",
            "YouTube Channel Logo with AI",
            "Generate Name Logo with AI",
            "Make Company Logo with AI"
          ],
          "keywords": [
            "logo maker",
            "ai logo generator",
            "ai logo generator from text"
          ]
        })}
      </Script>
      <div className="min-h-screen bg-[#05000A] w-full overflow-x-hidden">
        <div className="hidden md:block absolute -left-1/4 top-32 w-[40rem] h-[40rem] bg-[#850DB8] opacity-20 rounded-full blur-3xl"></div>
        <div className="hidden md:block absolute right-0 top-[45rem] transform -translate-y-1/2 w-[50rem] h-[40rem] bg-[#850DB8] opacity-20 rounded-full blur-3xl"></div>
        <HeroSection />
        <Introduction />
        <WhyToChoose />
        <DevelopmentProcessSection />
        <LogoCategoriesSection />
        <ProTipsSection />
        <ComparisonTableSection />
        <FaqSection />
        <FinalCtaSection />
      </div>
    </>
  );
}
