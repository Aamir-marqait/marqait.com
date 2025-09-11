"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function FreeTierAgents() {
  return (
    <section className="py-8 sm:py-12 lg:py-16 max-w-[80rem] mx-auto px-4 bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <h2 className="text-2xl sm:text-3xl lg:text-[37.8px] leading-tight sm:leading-[1.4] lg:leading-[62.4px] font-semibold text-center mb-8 sm:mb-12 lg:mb-16 text-white font-inter">
          Featured{" "}
          <span
            className="text-purple-500 px-2 sm:px-3 lg:px-4 py-1 sm:py-1.5 lg:py-2 mx-1 sm:mx-2 border-l-2 sm:border-l-[3px] lg:border-l-[4px] border-[#8654fb]"
            style={{
              background: "linear-gradient(90deg, #6d32f6 -40%, #000000 100%)",
            }}
          >
            Free
          </span>{" "}
          Tier Agents
        </h2>

        <div className="max-w-[75rem] grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mx-auto">
          <motion.div
            className="w-full h-auto rounded-[16px] p-4 sm:p-6 lg:p-[32px] flex flex-col gap-4 sm:gap-6 lg:gap-[32px]"
            style={{
              background: "linear-gradient(180deg, #05000a 0%, #1b1125 100%)",
            }}
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div
              className="flex items-center justify-center rounded-[20px] overflow-hidden gap-[10px] opacity-100"
              style={{ background: "#0000000A" }}
            >
              <Image
                src="/free/LogoGenerator.png"
                alt="BrandMark AI Character"
                className="w-full h-full object-contain rounded-lg"
                width={546}
                height={300}
                priority
              />
            </div>

            <div className="flex-shrink-0 mt-auto">
              <h3 className="text-xl sm:text-2xl lg:text-[30px] leading-tight sm:leading-[1.2] lg:leading-[100%] font-semibold text-white mb-3 sm:mb-4 font-roboto">
                BrandMark AI: Instantly create unique logos
              </h3>
              <p
                className="text-base sm:text-lg lg:text-[20px] leading-relaxed sm:leading-[1.4] lg:leading-[150%] font-normal mb-6 sm:mb-8 font-inter line-clamp-3"
                style={{ color: "#FFFFFFDE" }}
              >
                Design your brand identity with AI-powered logo generation.
                Simple, fast, and professional.
              </p>
              <button
                className="cursor-pointer flex items-center text-white font-inter font-semibold rounded-2xl transition-all duration-200 justify-center gap-2 border border-[#E6D4FF99] touch-manipulation
                w-full sm:w-auto
                px-4 py-3 text-sm h-[48px] leading-[20px]
                sm:px-3 sm:py-2 sm:text-base sm:h-auto sm:leading-[24px]
                lg:px-4 lg:py-2 lg:text-[15.6px] lg:h-auto lg:leading-[30px] lg:tracking-[0px] lg:font-semibold"
                style={{
                  background:
                    "linear-gradient(0deg, rgba(184, 18, 255, 0.765) 0%, rgba(110, 11, 153, 0.85) 90.91%)",
                  borderRadius: "16px",
                }}
                aria-label="Try BrandMark AI logo generator"
              >
                Try BrandMark AI
                <Image
                  src="/icons/arrow.svg"
                  alt=""
                  width={30}
                  height={24}
                  className="rounded-full bg-[rgba(242,240,245,0.15)] p-1.5 h-5 sm:h-6 lg:h-8"
                />
              </button>
            </div>
          </motion.div>

          {/* ContentSpark AI Card */}
          <motion.div
            className="w-full h-auto rounded-[16px] p-4 sm:p-6 lg:p-[32px] flex flex-col gap-4 sm:gap-6 lg:gap-[32px]"
            style={{
              background: "linear-gradient(180deg, #05000a 0%, #1b1125 100%)",
            }}
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div
              className="flex items-center justify-center rounded-[20px] overflow-hidden gap-[10px] opacity-100"
              style={{ background: "#0000000A" }}
            >
              <Image
                src="/free/Social.png"
                alt="ContentSpark AI Character"
                className="w-full h-full object-cover rounded-lg"
                width={546}
                height={300}
              />
            </div>

            <div className="flex-shrink-0 mt-auto">
              <h3 className="text-xl sm:text-2xl lg:text-[30px] leading-tight sm:leading-[1.2] lg:leading-[100%] font-semibold text-white mb-3 sm:mb-4 font-roboto">
                ContentSpark AI: Generate engaging social media posts
              </h3>
              <p
                className="text-base sm:text-lg lg:text-[20px] leading-relaxed sm:leading-[1.4] lg:leading-[150%] font-normal mb-6 sm:mb-8 font-inter line-clamp-3"
                style={{ color: "#FFFFFFDE" }}
              >
                Boost your social presence with AI-driven content creation.
                Tailored posts for every platform
              </p>
              <button
                className="cursor-pointer flex items-center text-white font-inter font-semibold rounded-2xl transition-all duration-200 justify-center gap-2 border border-[#E6D4FF99] touch-manipulation
                w-full sm:w-auto
                px-4 py-3 text-sm h-[48px] leading-[20px]
                sm:px-3 sm:py-2 sm:text-base sm:h-[52px] sm:leading-[24px]
                lg:px-4 lg:py-2 lg:text-[15.6px] lg:h-auto lg:leading-[30px] lg:tracking-[0px] lg:font-semibold"
                style={{
                  background:
                    "linear-gradient(0deg, rgba(184, 18, 255, 0.765) 0%, rgba(110, 11, 153, 0.85) 90.91%)",
                  borderRadius: "16px",
                }}
                aria-label="Try ContentSpark AI social media generator"
              >
                Try ContentSpark AI
                <Image
                  src="/icons/arrow.svg"
                  alt=""
                  width={30}
                  height={24}
                  className="rounded-full bg-[rgba(242,240,245,0.15)] p-1.5 h-5 sm:h-6 lg:h-8"
                />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
