"use client"
import { useState } from "react";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import WaitlistModal from "../../components/waitlist-modal";

export default function HeroSection() {
  const [isWaitlistModalOpen, setIsWaitlistModalOpen] = useState(false);

  const openWaitlistModal = () => {
    setIsWaitlistModalOpen(true);
  };


  const closeWaitlistModal = () => {
    setIsWaitlistModalOpen(false);
  };

  return (
    <section className="pt-20 px-4">
      <div className="max-w-[70rem] mx-auto">
        <nav className="flex items-center space-x-2 mb-8 sm:mb-16 md:mb-24 lg:mb-20">
          <Link
            href="/"
            className="text-white text-xs sm:text-sm"
            style={{
              fontFamily: "Inter",
              fontWeight: 600,
              fontSize: "14px",
              lineHeight: "20px",
              letterSpacing: "0%",
            }}
          >
            Home
          </Link>
          <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
          <Link
            href="/ai-tools"
            className="text-white text-xs sm:text-sm"
            style={{
              fontFamily: "Inter",
              fontWeight: 600,
              fontSize: "14px",
              lineHeight: "20px",
              letterSpacing: "0%",
            }}
          >
            AI Tools
          </Link>
          <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
          <span
            className="text-white/70 text-xs sm:text-sm"
            style={{
              fontFamily: "Inter",
              fontWeight: 600,
              fontSize: "14px",
              lineHeight: "20px",
              letterSpacing: "0%",
            }}
          >
            AI Logo Generator
          </span>
        </nav>
        
        <div className="text-center">
        {/* Header Content */}
        <div className="mb-16">
          <h2 className="text-[64px] font-bold mb-4 leading-[72px] tracking-[0%] align-middle bg-gradient-to-br from-white from-10% to-[#B372CF] to-90% bg-clip-text text-transparent">
            Free AI Logo Generator
          </h2>
          <p className="text-[20px] font-normal text-white mb-8 max-w-4xl mx-auto leading-[150%] tracking-[0%] text-center align-middle">
            Generate unique logo with a text prompt using Marqait free AI logo
            generator.
            <br />
            Input simple text prompts and our AI makes logo design online for
            you.
          </p>

          <div className="flex justify-center mb-6">
            <button
              onClick={openWaitlistModal}
              className="cursor-pointer flex items-center transition-all duration-200 justify-center gap-2"
              style={{
                borderRadius: "15px",
                borderWidth: "1px",
                paddingTop: "6px",
                paddingRight: "11px",
                paddingBottom: "6px",
                paddingLeft: "11px",
                background:
                  "linear-gradient(180deg, rgba(184, 18, 255, 0.85) 0%, rgba(110, 11, 153, 0.85) 100%)",
                border: "1px solid #E6D4FF99",
                fontFamily: "Inter",
                fontWeight: 600,
                fontSize: "14px",
                lineHeight: "30px",
                letterSpacing: "0px",
                verticalAlign: "middle",
                color: "#F2F0F5",
              }}
            >
              Generate a logo with AI
            </button>
          </div>

          {/* Feature Points */}
          <div className="flex flex-wrap justify-center gap-8 text-white/80 font-normal">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#22C55E] rounded-full"></div>
              <span className="text-[14px] leading-[20px] tracking-[0%] align-middle">
                100% Free
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#22C55E] rounded-full"></div>
              <span className="text-[14px] leading-[20px] tracking-[0%] align-middle">
                Instant Results
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#22C55E] rounded-full"></div>
              <span className="text-[14px] leading-[20px] tracking-[0%] align-middle">
                HD Quality
              </span>
            </div>
          </div>
        </div>

        {/* Logo Showcase */}
        <div className="">
          <Image
            src="/logoai/hero.png"
            alt="Collection of AI-generated logos showcasing various business types and design styles"
            width={1000}
            height={600}
            className="w-full h-auto"
          />
        </div>
        </div>
      </div>

      <WaitlistModal
        isOpen={isWaitlistModalOpen}
        onClose={closeWaitlistModal}
      />
    </section>
  );
}
