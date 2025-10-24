"use client";

import { useState } from "react";
import Image from "next/image";
import { MoveRight } from "lucide-react";

export default function BrandPage() {
  const [selectedBrandItem, setSelectedBrandItem] = useState(0);

  const brandItems = [
    {
      title: "Instant Campaign Creation",
      description:
        "Go from idea to live campaign in seconds. Just enter your details, and AdPilot AI builds the copy, creatives, and targeting for you.",
      image: "/pilot/1.png",
    },
    {
      title: "Multi-Format Ad Design",
      description:
        "Create image and video ads that stand out. AdPilot AI suggests the best formats and visuals to grab attention and drive clicks.",
      image: "/pilot/2.png",
    },
    {
      title: "AI-Driven Scripting",
      description:
        "Skip the brainstorming. Our AI writes persuasive ad copy and video scripts so you can focus on growing your business",
      image: "/pilot/3.png",
    },
    {
      title: "Automated Visual Selection",
      description:
        "Get scroll-stopping visuals automatically. Our AI ad generator picks the perfect images and clips that match your message and convert better.",
      image: "/pilot/4.png",
    },
    {
      title: "Intelligent Text-to-Speech",
      description:
        "Add natural voice-overs in a single click. Make your ads sound professional without hiring a voice artist.",
      image: "/pilot/5.png",
    },
    {
      title: "Natural Language Video Editing",
      description:
        "Edit your videos by simply telling the AI what to change. Fast, easy, and beginner-friendly.",
      image: "/pilot/5.png",
    },
    {
      title: "Real-Time Optimization",
      description:
        "Your campaigns get smarter as they run. Our AI ad generator analyzes performance and adjusts for the best results—automatically.",
      image: "/pilot/1.png",
    },
    {
      title: "Platform-Specific Optimization",
      description:
        "Your ads are always in the right format. Our AI Ad generator, AdPilot AI tailors campaigns for Meta, Google, and more—no manual tweaking",
      image: "/pilot/2.png",
    },
    {
      title: "Editing & Pricing Control",
      description:
        "Edit and manage your ad budget in one place. No extra tools, no wasted time.",
      image: "/pilot/3.png",
    },
    {
      title: "Seamless Platform Integration",
      description:
        "Launch and manage everything from one dashboard. Run campaigns across platforms without switching tabs",
      image: "/pilot/6.png",
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
                All the AI Ad Generator features you need
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
