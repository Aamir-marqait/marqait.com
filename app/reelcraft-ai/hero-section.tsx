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
    <section className="py-20 px-4">
      <div className="max-w-[80rem] mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-end">
          <div className="pl-5">
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
                ReelCraft AI
              </span>
            </nav>
            {/* Content */}
            <div className="space-y-8">
              <h2 className="text-[48px] font-bold bg-gradient-to-br from-white to-[#B372CF] bg-clip-text text-transparent leading-[130%] tracking-[-0.05em] align-middle font-inter">
                ReelCraft AI: Produce dynamic short-form videos
              </h2>
              <p className="text-[18px] font-normal text-white/90 leading-[150%] tracking-[0%] align-middle font-inter">
                Create captivating reels and videos optimized for social media
                engagement.
              </p>

              <p className=" flex gap-2 items-center text-[12px] font-normal text-white/90 leading-[150%] tracking-[0%] align-middle font-inter">
                <span className="w-[10px] h-[10px] bg-[#22C55E] rounded-full"></span>
                Lorem ipsum provides
              </p>
              <p className="flex gap-2 items-center text-[12px] font-normal text-white/90 leading-[150%] tracking-[0%] align-middle font-inter">
                <span className="w-[10px] h-[10px] bg-[#22C55E] rounded-full"></span>
                Lorem ipsum provides
              </p>
              <p className="flex gap-2 items-center text-[12px] font-normal text-white/90 leading-[150%] tracking-[0%] align-middle font-inter">
                <span className="w-[10px] h-[10px] bg-[#22C55E] rounded-full"></span>
                Lorem ipsum provides
              </p>

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
                Learn More
              </button>
            </div>
          </div>

          {/* Illustration */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-xl">
              <Image
                src="/reel/hero.png"
                alt="3D illustration of ecommerce elements including storefront, gift boxes, shopping bags, and credit card"
                width={500}
                height={400}
                className="w-full h-[30rem] object-contain"
              />
            </div>
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
