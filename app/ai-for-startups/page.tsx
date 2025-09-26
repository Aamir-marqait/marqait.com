import React from "react";
import HeroSection from "./hero-section";
import WhatIsStartup from "./what-is-startup";
import SolutionForStartup from "./solution-for-startup";
import Why from "./why";
import Benefits from "./benefit";
import ContactSection from "@/components/ai-solution-contact";
import Role from "./role";
import FaqSection from "./faq";

export const metadata = {
  title: "AI for Startups - Grow the Business with AI Solutions - Marqait AI",
  description: "AI for startups to grow with AI-powered automation solutions. Enhanced decision-making, operational efficiency, and personalized customer engagement."
};

function page() {
  return (
    <div className="bg-black relative overflow-hidden">
      <div className="pointer-events-none absolute -left-1/4 top-0 w-[40rem] h-[40rem] bg-[#850DB8] opacity-20 rounded-full blur-3xl"></div>
      <div className="pointer-events-none absolute right-32 top-72 transform -translate-y-1/2 w-[50rem] h-[40rem] bg-[#850DB8] opacity-20 rounded-full blur-3xl"></div>
      <HeroSection />
      <WhatIsStartup />
      <SolutionForStartup />
      <Why />
      <Role />
      <Benefits />
      <FaqSection />
      <ContactSection />
    </div>
  );
}

export default page;
