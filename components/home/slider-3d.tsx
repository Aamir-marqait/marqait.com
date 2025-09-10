"use client";

import { useState } from "react";
import { MoveLeft, MoveRight } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

interface SlideData {
  id: number;
  title: string;
  description: string;
  image: string;
}

const slides: SlideData[] = [
  {
    id: 1,
    title: "Logo Generator",
    description:
      "Design unique logos in minutes with our AI Logo Generator. Just enter your brand name or idea, and our AI instantly makes professional logo designs that match your style and identity.",
    image: "/copilot/LogoGenerator.png",
  },
  {
    id: 2,
    title: "Strategy Generator",
    description:
      "Plan smarter with our Strategy Generator. Enter your business goals, and our AI creates clear, tailored strategies that help you organize campaigns, align efforts, and stay consistent with your marketing and growth plans.",
    image: "/copilot/strategy.png",
  },
  {
    id: 3,
    title: "Brand Book Creator",
    description:
      "Build your brand identity with Marqait AI Brand Book Generator. Our AI organizes your logos, colors, fonts, and guidelines into a professional brand book. It helps you create stunning, interactive digital brand books with ease.",
    image: "/copilot/Branding.png",
  },
  {
    id: 4,
    title: "Campaign Generation ",
    description:
      "Create powerful campaigns in minutes with Marqait AI Campaign Generator. Our AI helps you generate marketing campaigns, ad campaigns, and social media campaigns that boost engagement, maximize ROI, and save time.",
    image: "/copilot/Campaign.png",
  },
  {
    id: 5,
    title: "Image Generation",
    description:
      "Create stunning pictures with our AI Image Generator. Type a simple text prompt, and our AI photo generator and text-to-image AI instantly produce high-quality images for your campaigns, ads, or social media.",
    image: "/copilot/ImageGen.png",
  },
  {
    id: 6,
    title: "Social Media Post Generation",
    description:
      "Create social media posts with Marqait AI Social Media Post Generator. Type your idea, and our AI instantly generates the best social media posts that help you save time and stay consistent across all your platforms.",
    image: "/copilot/Social.png",
  },
];

export function Slider3D() {
  const [currentGroup, setCurrentGroup] = useState(0);
  const totalGroups = Math.ceil(slides.length / 3);

  const nextSlide = () => {
    setCurrentGroup((prev) => (prev + 1) % totalGroups);
  };

  const prevSlide = () => {
    setCurrentGroup((prev) => (prev - 1 + totalGroups) % totalGroups);
  };

  return (
    <div className="relative w-full max-w-[85rem] mx-auto">
      {/* Navigation Buttons */}
      <motion.button
        onClick={prevSlide}
        className="cursor-pointer absolute left-[30px] top-[170px] z-10 w-16 h-16 rounded-[44px] bg-[#F2F0F526] backdrop-blur-[200px] shadow-[0px_4px_4px_0px_#00000040] text-white border-0 opacity-100 flex items-center justify-center"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <MoveLeft className="w-6 h-6" />
      </motion.button>

      <motion.button
        onClick={nextSlide}
        className="cursor-pointer absolute -right-[20px] top-[170px] z-10 w-16 h-16 rounded-[44px] bg-[#F2F0F526] backdrop-blur-[200px] shadow-[0px_4px_4px_0px_#00000040] text-white border-0 opacity-100 flex items-center justify-center"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <MoveRight className="w-6 h-6" />
      </motion.button>

      {/* Slider Container */}
      <div className="overflow-hidden px-16">
        <motion.div
          className="flex gap-6"
          animate={{
            transform: `translateX(-${currentGroup * 106}%)`,
          }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          {slides.map((slide) => (
            <div key={slide.id} className="flex-shrink-0 w-1/3">
              {/* Card */}
              <div
                className={` rounded-3xl p-8 h-96 flex items-center justify-center mb-8 relative overflow-hidden`}
              >
                <Image
                  src={slide.image || "/placeholder.svg"}
                  alt={slide.title}
                  fill
                  className="object-cover rounded-2xl"
                />
              </div>

              {/* Content */}
              <div className="px-4">
                <h3 className="text-white text-2xl font-bold  leading-none tracking-normal mb-4 text-balance">
                  {slide.title}
                </h3>
                <p className="text-white/87 text-xl font-normal leading-[150%] tracking-normal text-pretty">
                  {slide.description}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
