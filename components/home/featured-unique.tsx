"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function UniqueFeatured() {
  return (
    <section className="py-8 px-4 bg-black">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-[43.8px] leading-[62.4px] font-semibold text-center mb-16 text-white font-inter">
          Featured{" "}
          <span
            className="text-purple-500 px-4 py-2 mx-2 border-l-[4px] border-[#8654fb]"
            style={{
              background: "linear-gradient(90deg, #6241ad -40%, #000000 100%)",
            }}
          >
            Unique Selling Proposition
          </span>
          <br />
          Tier Agents
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
              Unleash Your Creativity: AI-Powered Editing, Just by Talking
            </h3>
            <p className="text-gray-300 mb-8 text-lg leading-relaxed max-w-md">
              The best part about us is that anything generated—whether it's an
              image or video—can be edited in our intuitive editor using natural
              language. Simply converse with the AI to refine your creations
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
              src="/free/image.png"
              alt="BrandBlueprint AI 3D Illustration"
              className="w-full h-full object-contain rounded-lg"
              width={546}
              height={300}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
