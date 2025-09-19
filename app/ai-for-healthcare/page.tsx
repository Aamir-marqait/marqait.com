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
      <ContactSection />
    </div>
  );
}

export default page;
