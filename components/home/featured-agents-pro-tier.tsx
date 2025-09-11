"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function ProTierAgents() {
  return (
    <section className="py-16 px-4 bg-black">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-[43.8px] leading-[62.4px] font-semibold text-center mb-16 text-white font-inter">
          Featured <span 
            className="text-purple-500 px-4 py-2 mx-2 border-l-[4px] border-[#8654fb]"
            style={{background: 'linear-gradient(90deg, #6d32f6 -40%, #000000 100%)'}}
          >Pro</span> Tier Agents
        </h2>

        <motion.div
          className="hero-card mb-12 flex flex-col lg:flex-row items-center gap-8 p-8 rounded-[16px]"
          style={{
            background: "linear-gradient(180deg, #05000a 0%, #1b1125 100%)",
          }}
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="hero-content flex-1">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              BrandBlueprint AI: Define your brand's essence
            </h3>
            <p className="text-gray-300 mb-8 text-lg leading-relaxed max-w-md">
              Develop a complete, consistent brand identity with AI-generated
              guidelines and assets.
            </p>
            <button
              className="cursor-pointer flex items-center text-white font-inter font-semibold rounded-2xl transition-all duration-200 justify-center gap-2 border border-[#E6D4FF99]
                w-full sm:w-auto
                px-3 py-2 text-xs  h-[45px] leading-[20px]
                sm:px-4 sm:py-2.5 sm:text-sm  sm:h-[50px] sm:leading-[24px]
                md:px-5 md:py-3 md:text-base  md:h-[55px] md:leading-[28px]
                 lg:h-[58px] lg:text-[17.6px] lg:leading-[30px] lg:tracking-[0px] lg:font-semibold"
              style={{
                background:
                  "linear-gradient(0deg, rgba(184, 18, 255, 0.765) 0%, rgba(110, 11, 153, 0.85) 90.91%)",
                borderRadius: "16px",
              }}
            >
              Learn More
              <Image
                src="/icons/arrow.svg"
                alt="arrow-right"
                width={30}
                height={24}
                className="rounded-full bg-[rgba(242,240,245,0.15)] p-1.5 h-5 sm:h-6 lg:h-8"
              />
            </button>
          </div>

          <div className="hero-image-container flex-1 h-[400px]">
            <Image
              src="/free/BrandBook.png"
              alt="BrandBlueprint AI 3D Illustration"
              className="w-full h-full object-contain rounded-lg"
              width={546}
              height={300}
            />
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mx-auto">
          <motion.div
            className="w-full h-auto rounded-[16px] p-[32px] flex flex-col gap-[32px]"
            style={{
              background: "linear-gradient(180deg, #05000a 0%, #1b1125 100%)",
            }}
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div
              className=" flex items-center justify-center rounded-[20px] overflow-hidden gap-[10px] opacity-100"
              style={{ background: "#0000000A" }}
            >
              <Image
                src="/free/reel.png"
                alt="Pro Agent 1"
                className="w-full h-full object-contain rounded-lg"
                width={546}
                height={300}
                priority
              />
            </div>

            <div className="flex-shrink-0 mt-auto">
              <h3 className="text-[36px] leading-[100%] font-semibold text-white mb-4 font-roboto">
                ReelCraft AI: Produce dynamic short-form videos
              </h3>
              <p
                className="text-[24px] leading-[150%] font-normal mb-8 font-inter line-clamp-3"
                style={{ color: "#FFFFFFDE" }}
              >
                Create captivating reels and videos optimized for social media
                engagement
              </p>
              <button
                className="cursor-pointer flex items-center text-white font-inter font-semibold rounded-2xl transition-all duration-200 justify-center gap-2 border border-[#E6D4FF99]
                w-full sm:w-auto
                px-3 py-2 text-xs  h-[45px] leading-[20px]
                sm:px-4 sm:py-2.5 sm:text-sm  sm:h-[50px] sm:leading-[24px]
                md:px-5 md:py-3 md:text-base  md:h-[55px] md:leading-[28px]
                 lg:h-[58px] lg:text-[17.6px] lg:leading-[30px] lg:tracking-[0px] lg:font-semibold"
                style={{
                  background:
                    "linear-gradient(0deg, rgba(184, 18, 255, 0.765) 0%, rgba(110, 11, 153, 0.85) 90.91%)",
                  borderRadius: "16px",
                }}
              >
                Learn More
                <Image
                  src="/icons/arrow.svg"
                  alt="arrow-right"
                  width={30}
                  height={24}
                  className="rounded-full bg-[rgba(242,240,245,0.15)] p-1.5 h-5 sm:h-6 lg:h-8"
                />
              </button>
            </div>
          </motion.div>

          {/* Second Pro Agent Card */}
          <motion.div
            className="w-full h-auto rounded-[16px] p-[32px] flex flex-col gap-[32px]"
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
                src="/free/cam.png"
                alt="Pro Agent 2"
                className="w-full h-full object-cover rounded-lg"
                width={546}
                height={300}
              />
            </div>

            <div className="flex-shrink-0 mt-auto">
              <h3 className="text-[36px] leading-[100%] font-semibold text-white mb-4 font-roboto">
                AdPilot AI: Launch and optimize ad campaigns
              </h3>
              <p
                className="text-[24px] leading-[150%] font-normal mb-8 font-inter line-clamp-3"
                style={{ color: "#FFFFFFDE" }}
              >
                Drive conversions with AI-driven precision across Meta and
                Google
              </p>
              <button
                className="cursor-pointer flex items-center text-white font-inter font-semibold rounded-2xl transition-all duration-200 justify-center gap-2 border border-[#E6D4FF99]
                w-full sm:w-auto
                px-3 py-2 text-xs  h-[45px] leading-[20px]
                sm:px-4 sm:py-2.5 sm:text-sm  sm:h-[50px] sm:leading-[24px]
                md:px-5 md:py-3 md:text-base  md:h-[55px] md:leading-[28px]
                 lg:h-[58px] lg:text-[17.6px] lg:leading-[30px] lg:tracking-[0px] lg:font-semibold"
                style={{
                  background:
                    "linear-gradient(0deg, rgba(184, 18, 255, 0.765) 0%, rgba(110, 11, 153, 0.85) 90.91%)",
                  borderRadius: "16px",
                }}
              >
                Learn More
                <Image
                  src="/icons/arrow.svg"
                  alt="arrow-right"
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
