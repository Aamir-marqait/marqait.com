"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface SlideData {
  id: number;
  title: string;
  description: string;
  image: string;
  bgColor: string;
}

const slides: SlideData[] = [
  {
    id: 1,
    title: "Logo Generator",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: "/copilot/logo.png",
    bgColor: "bg-red-600",
  },
  {
    id: 2,
    title: "Strategy Generator",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: "/copilot/strategy.png",
    bgColor: "bg-gray-800",
  },
  {
    id: 3,
    title: "Brand Book Creator",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: "/copilot/brand.png",
    bgColor: "bg-blue-600",
  },
  {
    id: 4,
    title: "Campaign Generation ",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: "/copilot/Campaign.png",
    bgColor: "bg-purple-600",
  },
  {
    id: 5,
    title: "Image Generation",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image:"/copilot/ImageGen.png",
    bgColor: "bg-green-600",
  },
  {
    id: 6,
    title: "Social Media Post Generation",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: "/copilot/Social.png",
    bgColor: "bg-orange-600",
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

  const getVisibleSlides = () => {
    const visibleSlides = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % slides.length;
      visibleSlides.push(slides[index]);
    }
    return visibleSlides;
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto">
      {/* Navigation Buttons */}
      <button
        variant="ghost"
        size="icon"
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-black/20 hover:bg-black/40 text-white border-0 rounded-full w-12 h-12"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        variant="ghost"
        size="icon"
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-black/20 hover:bg-black/40 text-white border-0 rounded-full w-12 h-12"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Slider Container */}
      <div className="overflow-hidden px-16">
        <div
          className="flex transition-transform duration-500 ease-in-out gap-6"
          style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
        >
          {slides.map((slide, index) => (
            <div key={slide.id} className="flex-shrink-0 w-1/3">
              {/* Card */}
              <div
                className={`${slide.bgColor} rounded-3xl p-8 h-96 flex items-center justify-center mb-8 relative overflow-hidden`}
              >
                <img
                  src={slide.image || "/placeholder.svg"}
                  alt={slide.title}
                  className="w-full h-full object-cover rounded-2xl"
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

      {/* Dots Indicator */}
      <div className="flex justify-center mt-8 gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-colors duration-200 ${
              index === currentIndex ? "bg-white" : "bg-gray-600"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
