import React from "react";
import AiAgentHero from "./ai-agent-hero-section";
import WhatIsAgent from "./what-is-agent";

function page() {
  return (
    <div className="bg-black">
      <AiAgentHero />
      <WhatIsAgent />
    </div>
  );
}

export default page;
