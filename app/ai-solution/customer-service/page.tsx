import React from "react";
import CustomAiAgentsSection from "./custom-ai-agents-section";
import Why from "./why";
import DevelopmentProcessSection from "./our-dev-process";
import IndustriesSection from "./industries-section";
import AIAgentBenefits from "./benefits";
import FaqSection from "./faq-section";
import ContactSection from "@/components/ai-solution-contact";
import What from "./what";
import Hero from "./hero-section";

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
      <ContactSection />
    </div>
  );
}

export default page;
