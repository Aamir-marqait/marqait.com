import React from "react";
import HeroSection from "./hero-section";
import WhatIsStartup from "./what-is-startup";
import SolutionForStartup from "./solution-for-startup";
import Why from "./why";
import Benefits from "./benefit";
import ContactSection from "@/components/ai-solution-contact";
import Role from "./role";
import FaqSection from "./faq";

function page() {
  return (
    <div className="bg-black relative overflow-hidden">
      <div className="absolute -left-1/4 top-0 w-[40rem] h-[40rem] bg-[#850DB8] opacity-20 rounded-full blur-3xl"></div>
      <div className="absolute right-32 top-72 transform -translate-y-1/2 w-[50rem] h-[40rem] bg-[#850DB8] opacity-20 rounded-full blur-3xl"></div>
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
