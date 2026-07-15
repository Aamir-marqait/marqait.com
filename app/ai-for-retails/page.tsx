import React from "react";
import WhatIsAgent from "./what-is-agent";
import CustomAiAgentsSection from "./custom-ai-agents-section";
import Why from "./why";
import DevelopmentProcessSection from "./our-dev-process";
import IndustriesSection from "./industries-section";
import AIAgentBenefits from "./ai-agent-benefits";
import FaqSection from "./ai-agent-faq-section";
import ContactSection from "@/components/ai-solution-contact";
import HeroSection from "./ai-agent-hero-section";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI in Retail - AI Solutions for Retail Industry - Marqait AI",
  description:
    "Marqait AI provides AI solutions for Retail to boost sales, personalize shopping, optimize inventory, and improve customer experience.",
};

import { TruIntelSpotlight } from "@/components/truintel";

function page() {
  return (
    <div className="bg-black">
      <HeroSection />
      <WhatIsAgent />
      <CustomAiAgentsSection />
      <Why />
      <DevelopmentProcessSection />
      <IndustriesSection />
      <AIAgentBenefits />
      <FaqSection />
      <TruIntelSpotlight
        reverse
        heading="Own the AI answer for every product category you sell"
        points={[
          "Track brand mentions across ChatGPT, Gemini & Perplexity",
          "Benchmark against competing retailers in AI results",
          "Turn AI visibility gaps into an action plan",
        ]}
      />
      <ContactSection />
    </div>
  );
}

export default page;
