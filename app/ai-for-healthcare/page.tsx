import React from "react";
import { Metadata } from "next";
import WhatIsAgent from "./what";
import CustomAiAgentsSection from "./custom-ai-agents-section";
import Why from "./why";
import DevelopmentProcessSection from "./our-dev-process";
import IndustriesSection from "./industries-section";
import AIAgentBenefits from "./benefits";
import FaqSection from "./faq-section";
import ContactSection from "@/components/ai-solution-contact";
import HeroSection from "./hero-section";

export const metadata: Metadata = {
  title: "AI Solutions for Healthcare - Marqait AI",
  description:
    "Marqait AI provides AI solutions for healthcare to improve diagnostics, automate workflows, enhance patient care, and optimize hospital efficiency.",
};

import { TruIntelCTASection } from "@/components/truintel";

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
      <TruIntelCTASection
        heading={
          <>
            Patients ask AI before they ask you.{" "}
            <span className="bg-gradient-to-r from-emerald-300 via-green-400 to-emerald-500 bg-clip-text text-transparent">
              Be the trusted answer.
            </span>
          </>
        }
        subheading="TruIntel monitors how ChatGPT, Gemini, Perplexity and Google AI describe your practice or brand — so you build trust at the very first touchpoint."
      />
      <ContactSection />
    </div>
  );
}

export default page;
