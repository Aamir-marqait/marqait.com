"use client";

import { useState } from "react";
import Image from "next/image";
import { MoveRight } from "lucide-react";

export default function BrandPage() {
  const [selectedBrandItem, setSelectedBrandItem] = useState(0);

  const brandItems = [
    {
      title: "AI-Driven Scripting",
      description:
        "Automatically generates compelling ad scripts and copy using AI that resonates with your target audience and drives conversions across Meta and Google platforms.",
      image: "/pilot/1.png",
    },
    {
      title: "Automated Visual Selection",
      description:
        "Intelligently selects the most effective visual elements, images, and creative assets for your ad campaigns based on performance data and audience preferences.",
      image: "/pilot/2.png",
    },
    {
      title: "Intelligent Text to Speech Narration",
      description:
        "Converts ad scripts into natural-sounding voiceovers using advanced text-to-speech technology, perfect for video ads and audio campaigns.",
      image: "/pilot/3.png",
    },
    {
      title: "Editing & Pricing",
      description:
        "Streamlines the ad creation process with built-in editing tools and transparent pricing models, making campaign management efficient and cost-effective.",
      image: "/pilot/4.png",
    },
    {
      title: "Platform Specific Optimization",
      description:
        "Automatically optimizes ad campaigns for each platform's unique requirements, ensuring maximum performance on Meta, Google, and other advertising channels.",
      image: "/pilot/5.png",
    },
    {
      title: "Natural Language Video Editing",
      description:
        "Edit and customize video ads using simple natural language commands, making professional video ad creation accessible to everyone without technical expertise.",
      image: "/pilot/5.png",
    },
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      <div
        className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900"
        style={{
          backgroundImage: `url('/abstract-tech-digital-pattern-dark-background-with.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 pb-20 px-4">
        <div className="max-w-[70rem] mx-auto">
          {/* Interactive Brand Section */}
          <div className="mb-20">
            <div className="text-center mb-16">
              <h2 className="text-white font-bold font-inter text-center text-[36px] leading-[150%] tracking-[1%]">
                Everything You Need for a<br />
                Cohesive Brand
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left side - Menu items */}
              <div className="space-y-1">
                {brandItems.map((item, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedBrandItem(index)}
                    className={`w-full cursor-pointer text-left p-6 rounded-lg transition-all duration-300 group ${
                      selectedBrandItem === index
                        ? "bg-purple-600/20 "
                        : "hover:bg-purple-600/10"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <h3
                        className={`text-[20px] font-medium leading-[100%] tracking-[0%] font-inter transition-colors duration-300 ${
                          selectedBrandItem === index
                            ? "text-[#B812FF]"
                            : "text-white group-hover:text-purple-300"
                        }`}
                      >
                        {item.title}
                      </h3>

                      <MoveRight
                        className={`w-6 h-6 transition-colors duration-300 ${
                          selectedBrandItem === index
                            ? "text-[#B812FF]"
                            : "text-gray-400 group-hover:text-purple-300"
                        }`}
                      />
                    </div>
                    {selectedBrandItem === index && (
                      <div className="mt-2 h-px bg-gradient-to-r from-purple-500 to-transparent" />
                    )}
                  </button>
                ))}
              </div>

              {/* Right side - Image and description */}
              <div className="space-y-6">
                <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-purple-600/20 to-blue-600/20 p-1">
                  <Image
                    src={
                      brandItems[selectedBrandItem].image || "/placeholder.svg"
                    }
                    alt={brandItems[selectedBrandItem].title}
                    width={500}
                    height={320}
                    className="w-full h-80 object-cover rounded-xl"
                  />
                </div>
                <p className="text-gray-300 text-lg leading-relaxed">
                  {brandItems[selectedBrandItem].description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
