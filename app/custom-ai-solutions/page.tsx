import React from "react";
import { Metadata } from "next";
import CustomAiAgentsSection from "./custom-ai-agents-section";
import Why from "./why";
import DevelopmentProcessSection from "./our-dev-process";
import IndustriesSection from "./industries-section";
import AIAgentBenefits from "./benefits";
import FaqSection from "./faq-section";
import ContactSection from "@/components/ai-solution-contact";
import HeroSection from "./hero-section";
import What from "./what";

export const metadata: Metadata = {
  title: "Custom AI Solutions - AI Software Development Company in India",
  description: "Marqait AI is a leading AI software development company in India. We offer custom AI solutions that automate repetitive tasks and increase productivity.",
};

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
