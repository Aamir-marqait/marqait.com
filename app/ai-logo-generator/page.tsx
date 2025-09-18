import type { Metadata } from "next";
import HeroSection from "./hero-section";

export const metadata: Metadata = {
  title: "Free AI Logo Generator - Online Text to Logo Maker",
  description:
    "Generate unique logo with a text prompt using Marqait's free AI logo generator. Input simple text prompts and our AI makes logo design online for you.",
  keywords:
    "AI logo generator, free logo maker, text to logo, AI design tools, online logo generator",
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
    <div className="min-h-screen bg-[#05000A] w-full overflow-x-hidden">
      <HeroSection />
    </div>
  );
}
