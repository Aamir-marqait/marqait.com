import React from "react";
import type { Metadata } from "next";
import CustomAiAgentsSection from "./custom-ai-agents-section";
import Why from "./why";
import DevelopmentProcessSection from "./our-dev-process";
import IndustriesSection from "./industries-section";
import AIAgentBenefits from "./benefits";
import FaqSection from "./faq-section";
import ContactSection from "@/components/ai-solution-contact";
import What from "./what";
import Hero from "./hero-section";

export const metadata: Metadata = {
  title: "AI Customer Service - AI Solutions for Customer Support",
  description: "Marqait AI provides AI solutions for customer service to automate responses, deliver instant support and improve customer care efficiency.",
};

import { TruIntelCTASection } from "@/components/truintel";

function page() {
  return (
    <div className="bg-black">
      <Hero />
      <What />
      <CustomAiAgentsSection />
      <Why />
      <DevelopmentProcessSection />
      <IndustriesSection />
      <AIAgentBenefits />
      <FaqSection />
      <TruIntelCTASection
        subheading="Support starts long before the ticket — customers ask ChatGPT, Gemini and Perplexity first. TruIntel shows what AI says about your brand so you can shape the answer."
      />
      <ContactSection />
    </div>
  );
}

export default page;
