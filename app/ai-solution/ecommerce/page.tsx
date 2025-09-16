import React from "react";
import HeroSection from "./hero-section";
import WhatIsEcommerce from "./what";
import EcommerceSolutionsSection from "./our-solution";
import Why from "./why";
import IndustriesSection from "./industries-section";
import Benefits from "./benefits";
import FaqSection from "./faq";
import ContactSection from "@/components/ai-solution-contact";

function page() {
  return (
    <div className="bg-black relative overflow-hidden">
      <div className="absolute -left-1/4 top-0 w-[40rem] h-[40rem] bg-[#850DB8] opacity-20 rounded-full blur-3xl"></div>
      <div className="absolute right-32 top-1/2 transform -translate-y-1/2 w-[50rem] h-[40rem] bg-[#850DB8] opacity-20 rounded-full blur-3xl"></div>
      <HeroSection />
      <WhatIsEcommerce />
      <EcommerceSolutionsSection />
      <Why />
      <IndustriesSection />
      <Benefits />
      <FaqSection />
      <ContactSection />
    </div>
  );
}

export default page;
