import React from "react";
import Image from "next/image";
import HeroSection from "./hero-section";
import WhatIsAiSeo from "./what-is-seo";

import WhyBusinessesNeedAiSeo from "./why-businesses-need-ai-seo";
import OurSeoServices from "./our-seo-services";
import BenefitsSection from "./benefits-section";
import FaqSection from "./faq-section";
import ContactSection from "../../components/ai-solution-contact";
import { TruIntelSpotlight } from "@/components/truintel";

export const metadata = {
  title: "AI for SEO - AI SEO Automation Services | Marqait AI",
  description: "Marqait AI offers AI SEO automation services for search engine optimization. Use AI for SEO to improve a website visibility and ranking in search engines."
};

function page() {
  return (
    <div className="bg-black">
      <HeroSection />
      <div className="relative">
        <Image
          src="/glowing.webp"
          alt="Glowing Effect"
          width={1000}
          height={700}
          className="absolute -top-96 blur-2xl"
        />
      </div>
      <WhatIsAiSeo />
      <WhyBusinessesNeedAiSeo />
      <OurSeoServices />
      <BenefitsSection />
      <FaqSection />
      <TruIntelSpotlight
        heading="AI search is the new SEO. Are you visible?"
        points={[
          "See how ChatGPT, Gemini & Perplexity cite your brand",
          "Find the AI queries your competitors win — and you don't",
          "Get a clear action plan to rank in AI answers",
        ]}
      />
      <ContactSection />
    </div>
  );
}

export default page;
