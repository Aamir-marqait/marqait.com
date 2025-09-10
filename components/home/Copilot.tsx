"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Slider3D } from "./slider-3d";

export default function CopilotSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: -30 
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const slideLeftVariants = {
    hidden: { 
      opacity: 0, 
      x: -50 
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const slideRightVariants = {
    hidden: { 
      opacity: 0, 
      x: 50 
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const slideBothSidesVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.8 
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section
      id="copilot"
      className="relative bg-[#05000A] overflow-hidden py-12 sm:py-16 md:py-20 lg:py-10 xl:py-10"
      ref={ref}
    >
      <motion.div 
        className="relative mx-auto px-4 sm:px-6 lg:px-8 xl:px-12"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <div className="text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20">
          <motion.div 
            className="flex items-center justify-center mb-4 sm:mb-5"
            variants={itemVariants}
          >
            <div className="flex-1 max-w-[60px] xs:max-w-[80px] sm:max-w-[100px] md:max-w-[150px] lg:max-w-[250px] h-px bg-gradient-to-r from-transparent to-gray-600"></div>
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full"></div>
            <span
              className="text-[#F2F0F5] font-inter font-bold uppercase mx-3 sm:mx-4 md:mx-6
              text-[10px] leading-[14px] tracking-[0.6px]
              xs:text-[11px] xs:leading-[15px] xs:tracking-[0.7px]
              sm:text-xs sm:leading-[16.8px] sm:tracking-[0.8px]
              md:text-sm md:leading-[19.6px] md:tracking-[1px]"
            >
              COPILOT
            </span>
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full"></div>
            <div className="flex-1 max-w-[60px] xs:max-w-[80px] sm:max-w-[100px] md:max-w-[150px] lg:max-w-[250px] h-px bg-gradient-to-l from-transparent to-gray-600"></div>
          </motion.div>

          <motion.h2
            className="text-center font-inter font-semibold max-w-4xl mx-auto px-2
            text-[24px] leading-[32px]
            xs:text-[28px] xs:leading-[36px]
            sm:text-[32px] sm:leading-[42px]
            md:text-[36px] md:leading-[48px]
            lg:text-[40px] lg:leading-[54px]
            xl:text-[43.8px] xl:leading-[62.4px]"
            variants={itemVariants}
          >
            <motion.span 
              className="text-white"
              variants={slideLeftVariants}
            >
              Manage all your efforts with a smart
            </motion.span>
            <br />
            <motion.span 
              className="text-white"
              variants={slideRightVariants}
            >
              marketing automation platform.
            </motion.span>
          </motion.h2>
        </div>
        <motion.div 
          className="w-full"
          variants={slideBothSidesVariants}
        >
          <Slider3D />
        </motion.div>
      </motion.div>
    </section>
  );
}
