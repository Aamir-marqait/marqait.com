"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function UniqueFeatured() {
  return (
    <section className="py-8 sm:py-12 lg:py-16 max-w-[80rem] mx-auto px-4 bg-black">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-[36px] leading-[62.4px] font-semibold text-center mb-10 text-white font-inter">
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
          className="max-w-[65rem] mx-auto hero-card mb-12 flex flex-col lg:flex-row items-center gap-8 px-8 py-5 rounded-[16px]"
          style={{
            background: "linear-gradient(180deg, #05000a 0%, #1b1125 100%)",
          }}
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="hero-content flex-1">
            <h3 className="text-xl sm:text-2xl lg:text-[24px] leading-tight sm:leading-[1.2] lg:leading-[150%] font-semibold text-white mb-3 sm:mb-4 font-roboto">
              Unleash Your Creativity: AI-Powered Editing, Just by Talking
            </h3>
            <p
              className="text-base sm:text-lg lg:text-[16px] leading-relaxed sm:leading-[1.4] lg:leading-[150%] font-normal mb-6 sm:mb-8 font-inter line-clamp-3 "
              style={{ color: "#FFFFFFDE" }}
            >
              The best part about us is that anything generated—whether it's an
              image or video—can be edited in our intuitive editor using natural
              language. Simply converse with the AI to refine your creations
            </p>
            <button
              className="cursor-pointer flex items-center text-white font-inter font-semibold rounded-2xl transition-all duration-200 justify-center gap-2 border border-[#E6D4FF99]
                w-full sm:w-auto
                px-3 py-2 text-xs  h-[45px] leading-[20px]
                sm:px-4 sm:py-2.5 sm:text-sm  sm:h-[50px] sm:leading-[24px]
                md:px-4 md:py-2 md:text-base  md:h-[55px] md:leading-[28px]
                 lg:h-auto lg:text-[15.6px] lg:leading-[30px] lg:tracking-[0px] lg:font-semibold"
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
              className="w-full h-96 object-contain rounded-lg"
              width={546}
              height={300}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
