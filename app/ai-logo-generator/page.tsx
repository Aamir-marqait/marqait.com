import type { Metadata } from "next";
import HeroSection from "./hero-section";
import Introduction from "./introduction";
import WhyToChoose from "./why-to-choose";

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
      <div className="absolute -left-1/4 top-32 w-[40rem] h-[40rem] bg-[#850DB8] opacity-20 rounded-full blur-3xl"></div>
      <div className="absolute right-0 top-[45rem] transform -translate-y-1/2 w-[50rem] h-[40rem] bg-[#850DB8] opacity-20 rounded-full blur-3xl"></div>
      <HeroSection />
      <Introduction />
      <WhyToChoose />
    </div>
  );
}
