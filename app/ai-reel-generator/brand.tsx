"use client";

import { useState } from "react";
import Image from "next/image";
import { MoveRight } from "lucide-react";

export default function BrandPage() {
  const [selectedBrandItem, setSelectedBrandItem] = useState(0);

  const brandItems = [
    {
      title: "AI-Powered Audience Targeting",
      description:
        "Generates comprehensive guidelines covering logo usage, colour palettes (CMYK, RGB, Hex), typography, imagery style, tone of voice, and brand messaging.",
      image: "/reel/1.png",
    },
    {
      title: "Automated Ad Creative Generation",
      description:
        "Automatically creates brand assets including logos, business cards, letterheads, and marketing materials based on your brand guidelines.",
      image: "/reel/2.png",
    },
    {
      title: "Dynamic Budget Optimization",
      description:
        "Creates a dynamic, searchable brand book that can be easily shared with team members and external partners for consistent brand application.",
      image: "/reel/3.png",
    },
    {
      title: "Real-time Performance Monitoring",
      description:
        "Monitors and ensures brand consistency across all touchpoints, providing real-time feedback and suggestions for brand compliance.",
      image: "/reel/4.png",
    },
    {
      title: "A/B Testing Automation",
      description:
        "Uses artificial intelligence to continuously refine and optimize your brand elements based on performance data and market trends.",
      image: "/reel/5.png",
    },
    {
      title: "Cross-Platform Campaign Management",
      description:
        "Uses artificial intelligence to continuously refine and optimize your brand elements based on performance data and market trends.",
      image: "/reel/6.png",
    },
    {
      title: "Natural Language Campaign Optimization",
      description:
        "Uses artificial intelligence to continuously refine and optimize your brand elements based on performance data and market trends.",
      image: "/reel/7.png",
    },
  ];

  return (
    <div className="min-h-screen relative overflow-hidden py-10">
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
