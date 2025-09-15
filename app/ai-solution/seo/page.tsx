import React from "react";
import Image from "next/image";
import HeroSection from "./hero-section";
import WhatIsAiSeo from "./what-is-seo";

import WhyBusinessesNeedAiSeo from "./why-businesses-need-ai-seo";
import OurSeoServices from "./our-seo-services";
import BenefitsSection from "./benefits-section";

function page() {
  return (
    <div className="bg-black">
      <HeroSection />
      <div className="relative">
        <Image
          src="/glowing.webp"
          alt="Glowing Effect"
          width={1000}
          height={700}
          className="absolute -top-96 blur-2xl"
        />
      </div>
      <WhatIsAiSeo />
      <WhyBusinessesNeedAiSeo />
      <OurSeoServices />
      <BenefitsSection />
    </div>
  );
}

export default page;
