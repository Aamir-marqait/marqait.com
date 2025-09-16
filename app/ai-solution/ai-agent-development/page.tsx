import React from "react";
import AiAgentHero from "./ai-agent-hero-section";
import WhatIsAgent from "./what-is-agent";
import CustomAiAgentsSection from "./custom-ai-agents-section";
import Why from "./why";
import DevelopmentProcessSection from "./our-dev-process";
import IndustriesSection from "./industries-section";
import AIAgentBenefits from "./ai-agent-benefits";

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
    </div>
  );
}

export default page;
