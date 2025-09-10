"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function FreeTierAgents() {
  return (
    <section className="py-16 px-4 bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <h2 className="text-[43.8px] leading-[62.4px] font-semibold text-center mb-16 text-white font-inter">
          Featured <span className="text-purple-500">Free</span> Tier Agents
        </h2>

        {/* Agent Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mx-auto">
          {/* BrandMark AI Card */}
          <div className="w-full h-auto rounded-[16px] p-[32px] flex flex-col gap-[32px]" style={{background: 'linear-gradient(180deg, #05000a 0%, #1b1125 100%)'}}>
            <div className="w-[546px] h-[405px] flex items-center justify-center rounded-[20px] overflow-hidden gap-[10px] opacity-100" style={{background: '#0000000A'}}>
              <Image
                src="/free/BrandBook.png"
                alt="BrandMark AI Character"
                className="w-full h-full object-cover rounded-lg"
                width={546}
                height={300}
                priority
              />
            </div>

            <div className="flex-shrink-0 mt-auto">
              <h3 className="text-[36px] leading-[100%] font-semibold text-white mb-4 font-roboto">
                BrandMark AI: Instantly create unique logos
              </h3>
              <p className="text-[24px] leading-[150%] font-normal mb-8 font-inter line-clamp-3" style={{color: '#FFFFFFDE'}}>
                Design your brand identity with AI-powered logo generation.
                Simple, fast, and professional.
              </p>
              <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-full font-medium transition-colors duration-200 flex items-center gap-2">
                Try BrandMark AI
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* ContentSpark AI Card */}
          <div className="w-full h-auto rounded-[16px] p-[32px] flex flex-col gap-[32px]" style={{background: 'linear-gradient(180deg, #05000a 0%, #1b1125 100%)'}}>
            <div className="w-[546px] h-[405px] flex items-center justify-center rounded-[20px] overflow-hidden gap-[10px] opacity-100" style={{background: '#0000000A'}}>
              <Image
                src="/free/LogoGenerator.png"
                alt="ContentSpark AI Character"
                className="w-full h-full object-cover rounded-lg"
                width={546}
                height={300}
              />
            </div>

            <div className="flex-shrink-0 mt-auto">
              <h3 className="text-[36px] leading-[100%] font-semibold text-white mb-4 font-roboto">
                ContentSpark AI: Generate engaging social media posts
              </h3>
              <p className="text-[24px] leading-[150%] font-normal mb-8 font-inter line-clamp-3" style={{color: '#FFFFFFDE'}}>
                Boost your social presence with AI-driven content creation.
                Tailored posts for every platform
              </p>
              <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-full font-medium transition-colors duration-200 flex items-center gap-2">
                Try ContentSpark AI
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
