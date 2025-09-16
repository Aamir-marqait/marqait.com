import React from "react";
import AiAgentHero from "./ai-agent-hero-section";
import WhatIsAgent from "./what-is-agent";
import CustomAiAgentsSection from "./custom-ai-agents-section";
import Why from "./why";
import DevelopmentProcessSection from "./our-dev-process";

function page() {
  return (
    <div className="bg-black">
      <AiAgentHero />
      <WhatIsAgent />
      <CustomAiAgentsSection />
      <Why />
      <DevelopmentProcessSection />
    </div>
  );
}

export default page;
