import React from "react";
import Image from "next/image";
import HeroSection from "./hero-section";
import WhatIsAiSeo from "./what-is-seo";

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
    </div>
  );
}

export default page;
