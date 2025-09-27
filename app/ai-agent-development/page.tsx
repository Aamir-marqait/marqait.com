import React from "react";
import AiAgentHero from "./ai-agent-hero-section";
import WhatIsAgent from "./what-is-agent";
import CustomAiAgentsSection from "./custom-ai-agents-section";
import Why from "./why";
import DevelopmentProcessSection from "./our-dev-process";
import IndustriesSection from "./industries-section";
import AIAgentBenefits from "./ai-agent-benefits";
import FaqSection from "./ai-agent-faq-section";
import ContactSection from "@/components/ai-solution-contact";

export const metadata = {
  title: "AI Agent Development Services Company In India",
  description: "Marqait AI is an AI agent development company creating intelligent AI agents that automate tasks. Discover our custom AI Agents development services."
};

function page() {
  return (
    <div className="bg-black">
      <AiAgentHero />
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
