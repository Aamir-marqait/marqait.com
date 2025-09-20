"use client"
import { useState } from "react";
import { ChevronRight } from "lucide-react";
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
    <section className="relative py-20  overflow-hidden">
      {/* Background Image */}
      <div
        className="pointer-events-none absolute inset-0 bg-cover bg-center bg-no-repeat opacity-80"
        style={{
          backgroundImage: "url('/agents/background.png')",
        }}
      />

      <div className="flex flex-col gap-20 max-w-[70rem] mx-auto">
        <nav className="flex items-center space-x-2 mb-8 sm:mb-16 md:mb-24 lg:mb-0">
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
            href="/ai-solutions"
            className="text-white text-xs sm:text-sm"
            style={{
              fontFamily: "Inter",
              fontWeight: 600,
              fontSize: "14px",
              lineHeight: "20px",
              letterSpacing: "0%",
            }}
          >
            AI Solutions
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
            Custom AI Solutions
          </span>
        </nav>

        {/* Content */}
        <div className="relative z-10 max-w-[50rem] mx-auto px-6 text-center">
          <h1 className="text-[48px] font-bold text-white mb-8 leading-[130%] text-center">
            Custom AI Solutions: AI Software Development Company in India
          </h1>

          <p className="text-[20px] font-normal text-white/90 mb-12 max-w-4xl mx-auto leading-[150%] text-center">
            Leading Custom AI Development Company Delivering Tailored Artificial
            Intelligence Solutions for automate repetitive tasks and increase
            productivity
          </p>

          <button
            onClick={openWaitlistModal}
            className="text-white transition-colors w-full sm:w-auto text-sm sm:text-base"
            style={{
              paddingTop: "8px",
              paddingLeft: "12px",
              paddingRight: "12px",
              paddingBottom: "8px",
              fontFamily: "Inter",
              fontWeight: 600,
              fontSize: "16px",
              lineHeight: "28px",
              letterSpacing: "0%",
              textAlign: "center",
              background:
                "linear-gradient(180.68deg, rgba(184, 18, 255, 0.85) -29.88%, rgba(110, 11, 153, 0.85) 99.98%)",
              borderRadius: "12px",
              border: "none",
              cursor: "pointer",
            }}
          >
            Book a Free Consultation
          </button>
        </div>
      </div>

      <WaitlistModal
        isOpen={isWaitlistModalOpen}
        onClose={closeWaitlistModal}
      />
    </section>
  );
}
