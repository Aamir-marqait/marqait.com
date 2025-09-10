"use client";

import { useState } from "react";
import { MoveLeft, MoveRight } from "lucide-react";
import Image from "next/image";

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
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: "/copilot/logo.png",
  },
  {
    id: 2,
    title: "Strategy Generator",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: "/copilot/strategy.png",
  },
  {
    id: 3,
    title: "Brand Book Creator",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: "/copilot/brand.png",
  },
  {
    id: 4,
    title: "Campaign Generation ",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: "/copilot/Campaign.png",
  },
  {
    id: 5,
    title: "Image Generation",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: "/copilot/ImageGen.png",
  },
  {
    id: 6,
    title: "Social Media Post Generation",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: "/copilot/Social.png",
  },
];

export function Slider3D() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full max-w-[85rem] mx-auto">
      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="cursor-pointer absolute left-[30px] top-[170px] z-10 w-16 h-16 rounded-[44px] bg-[#F2F0F526] backdrop-blur-[200px]   shadow-[0px_4px_4px_0px_#00000040] text-white border-0 opacity-100 flex items-center justify-center"
      >
        <MoveLeft className="w-6 h-6" />
      </button>

      <button
        onClick={nextSlide}
        className="cursor-pointer absolute -right-[20px] top-[170px] z-10 w-16 h-16 rounded-[44px] bg-[#F2F0F526] backdrop-blur-[200px]   shadow-[0px_4px_4px_0px_#00000040] text-white border-0 opacity-100 flex items-center justify-center"
      >
        <MoveRight className="w-6 h-6" />
      </button>

      {/* Slider Container */}
      <div className="overflow-hidden px-16">
        <div
          className="flex transition-transform duration-500 ease-in-out gap-6"
          style={{
            transform: `translateX(-${
              Math.min(currentIndex, slides.length - 3) * (100 / 2.5)
            }%)`,
          }}
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
              <div className="text-center px-4">
                <h3 className="text-white text-2xl font-bold mb-4 text-balance">
                  {slide.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed text-pretty">
                  {slide.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
