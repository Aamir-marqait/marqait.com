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
