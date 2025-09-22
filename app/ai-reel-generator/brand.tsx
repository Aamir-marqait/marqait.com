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
        "Analyzes your target audience demographics and engagement patterns to create highly targeted video content that resonates with viewers and drives maximum engagement.",
      image: "/reel/1.png",
    },
    {
      title: "Automated Ad Creative Generation",
      description:
        "Automatically generates eye-catching video creatives, transitions, effects, and visual elements optimized for different social media platforms and audience preferences.",
      image: "/reel/2.png",
    },
    {
      title: "Dynamic Budget Optimization",
      description:
        "Intelligently allocates your video production budget across different content types and platforms to maximize reach and engagement while minimizing costs.",
      image: "/reel/3.png",
    },
    {
      title: "Real-time Performance Monitoring",
      description:
        "Tracks video performance metrics in real-time, providing insights on engagement rates, watch time, and audience behavior to optimize future content.",
      image: "/reel/4.png",
    },
    {
      title: "A/B Testing Automation",
      description:
        "Automatically tests different video variations, thumbnails, and captions to identify the highest-performing combinations for your target audience.",
      image: "/reel/5.png",
    },
    {
      title: "Cross-Platform Campaign Management",
      description:
        "Seamlessly manages and distributes your video content across multiple social media platforms with optimized formats and scheduling for each channel.",
      image: "/reel/6.png",
    },
    {
      title: "Natural Language Campaign Optimization",
      description:
        "Optimizes video content using natural language processing to enhance captions, descriptions, and hashtags for improved discoverability and engagement.",
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
