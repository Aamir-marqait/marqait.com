import React from "react";
import HeroSection from "./hero-section";
import WhatIsEcommerce from "./what";
import EcommerceSolutionsSection from "./our-solution";
import Why from "./why";
import IndustriesSection from "./industries-section";
import Benefits from "./benefits";
import FaqSection from "./faq";
import ContactSection from "@/components/ai-solution-contact";

export const metadata = {
  title: "AI for Ecommerce - AI Ecommerce Solutions | Marqait AI",
  description: "Boost sales with AI for Ecommerce. From personalized shopping to AI SEO automation, optimize product pages, reduce cart abandonment & grow revenue."
};

import { TruIntelCTASection } from "@/components/truintel";

function page() {
  return (
    <div className="bg-black relative overflow-hidden">
      <div className="pointer-events-none z-1 absolute -left-/4 top-0 w-[40rem] h-[40rem] bg-[#850DB8] opacity-20 rounded-full blur-3xl"></div>
      <div className="pointer-events-none z-1 absolute right-32 top-96 transform -translate-y-1/2 w-[50rem] h-[40rem] bg-[#850DB8] opacity-20 rounded-full blur-3xl"></div>
      <HeroSection />
      <WhatIsEcommerce />
      <EcommerceSolutionsSection />
      <Why />
      <IndustriesSection />
      <Benefits />
      <FaqSection />
      <TruIntelCTASection
        heading={
          <>
            Shoppers ask AI what to buy.{" "}
            <span className="bg-gradient-to-r from-emerald-300 via-green-400 to-emerald-500 bg-clip-text text-transparent">
              Does it name you?
            </span>
          </>
        }
        subheading="TruIntel tracks how your store shows up in ChatGPT, Gemini, Perplexity and Google AI — so you win the buyers before they ever reach a search box."
      />
      <ContactSection />
    </div>
  );
}

export default page;
