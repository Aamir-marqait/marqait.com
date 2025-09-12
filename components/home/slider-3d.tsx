"use client";

import { useState, useEffect } from "react";
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
      "Create social media posts with Marqait AI Social Media Post Generator. Type your idea, and our AI instantly generates the best social media posts that help you save time and stay consistent across all platforms.",
    image: "/copilot/Social.png",
  },
];

export function Slider3D() {
  const [currentGroup, setCurrentGroup] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);

  const totalGroups = Math.ceil(slides.length / cardsPerView);

  useEffect(() => {
    const updateCardsPerView = () => {
      if (window.innerWidth < 640) {
        setCardsPerView(1); // Mobile: 1 card
      } else if (window.innerWidth < 1024) {
        setCardsPerView(2); // Tablet: 2 cards
      } else {
        setCardsPerView(3); // Desktop: 3 cards
      }
    };

    updateCardsPerView();
    window.addEventListener("resize", updateCardsPerView);
    return () => window.removeEventListener("resize", updateCardsPerView);
  }, []);

  useEffect(() => {
    setCurrentGroup(0);
  }, [cardsPerView]);

  const nextSlide = () => {
    setCurrentGroup((prev) => (prev + 1) % totalGroups);
  };

  const prevSlide = () => {
    setCurrentGroup((prev) => (prev - 1 + totalGroups) % totalGroups);
  };

  return (
    <div className="relative w-full max-w-[70rem] mx-auto">
      {/* Navigation Buttons */}
      <motion.button
        onClick={prevSlide}
        className="cursor-pointer absolute left-2 sm:left-4 lg:left-[30px] top-32 sm:top-40 lg:top-[170px] z-10 w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full bg-[#F2F0F526] backdrop-blur-[200px] shadow-[0px_4px_4px_0px_#00000040] text-white border-0 opacity-100 flex items-center justify-center touch-manipulation"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Previous slide"
      >
        <MoveLeft className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
      </motion.button>

      <motion.button
        onClick={nextSlide}
        className="cursor-pointer absolute right-2 sm:right-4 lg:-right-[20px] top-32 sm:top-40 lg:top-[170px] z-10 w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full bg-[#F2F0F526] backdrop-blur-[200px] shadow-[0px_4px_4px_0px_#00000040] text-white border-0 opacity-100 flex items-center justify-center touch-manipulation"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Next slide"
      >
        <MoveRight className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
      </motion.button>

      {/* Slider Container */}
      <div className="overflow-hidden px-4 sm:px-8 lg:px-16">
        <motion.div
          className="flex gap-3 sm:gap-4 lg:gap-6"
          animate={{
            transform: `translateX(-${
              currentGroup * (100 + 18 / cardsPerView)
            }%)`,
          }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          {slides.map((slide) => (
            <div
              key={slide.id}
              className="flex-shrink-0"
              style={{ width: `${100 / cardsPerView}%` }}
            >
              {/* Card */}
              <div className="rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 h-64 sm:h-80 lg:h-[26rem] flex items-center justify-center mb-4 sm:mb-6 lg:mb-8 relative overflow-hidden">
                <Image
                  src={
                    slide.image ||
                    "/placeholder.svg?height=400&width=400&query=marketing tool interface"
                  }
                  alt={slide.title}
                  fill
                  className="object-cover rounded-xl sm:rounded-2xl"
                />
              </div>

              {/* Content */}
              <div className="px-2 sm:px-3 lg:px-4">
                <h3 className="text-white text-lg sm:text-xl lg:text-xl font-bold leading-tight tracking-normal mb-2 sm:mb-3 lg:mb-4 text-balance">
                  {slide.title}
                </h3>
                <p className="text-white/87 text-sm sm:text-base lg:text-lg font-normal leading-relaxed tracking-normal text-pretty">
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
