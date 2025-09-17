import React from "react";
import CustomAiAgentsSection from "./custom-ai-agents-section";
import Why from "./why";
import DevelopmentProcessSection from "./our-dev-process";
import IndustriesSection from "./industries-section";
import AIAgentBenefits from "./benefits";
import FaqSection from "./faq-section";
import ContactSection from "@/components/ai-solution-contact";
import HeroSection from "./hero-section";
import What from "./what";

function page() {
  return (
    <div className="bg-black">
      <HeroSection />
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
