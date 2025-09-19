"use client";
import { useState } from "react";
import Image from "next/image";
import WaitlistModal from "../waitlist-modal";

export default function AiPowerhouseHero() {
  const [isWaitlistModalOpen, setIsWaitlistModalOpen] = useState(false);

  const openWaitlistModal = () => {
    setIsWaitlistModalOpen(true);
  };

  const closeWaitlistModal = () => {
    setIsWaitlistModalOpen(false);
  };

  return (
    <section className="relative min-h-screen flex py-20 justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/tools/hero.png"
          alt="Purple light beams background"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="relative z-10 max-w-[70rem] mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="glassmorphism-testimonial inline-flex items-center gap-3 px-7 py-3 mb-8">
          <style jsx>{`
            .glassmorphism-testimonial {
              background:
                linear-gradient(
                  180deg,
                  rgba(46, 51, 90, 0) 0%,
                  rgba(28, 27, 51, 0.16) 100%
                ),
                radial-gradient(
                  146.13% 118.42% at 50% -15.5%,
                  rgba(255, 255, 255, 0.08) 0%,
                  rgba(255, 255, 255, 0) 99.59%
                );
              border: 1px solid #ffffff26;
              backdrop-filter: blur(20px);
              box-shadow:
                0px 30px 60px 0px #0000001a,
                0px 15px 30px 0px #0000000d,
                0px 5px 10px 0px #0000000d,
                0px 0px 100px 0px #ccd7ff26 inset;
              border-radius: 40px;
            }
            .client-text {
              font-family: Roboto;
              font-weight: 600;
              font-style: normal;
              font-size: 16px;
              line-height: 21.76px;
              letter-spacing: -0.36px;
              color: #ffffffcc;
              opacity: "80%";
            }
          `}</style>
          <div className="flex -space-x-2">
            <div className="w-8 h-8 rounded-full overflow-hidden">
              <Image
                src="/tools/hero1.png"
                alt="Client testimonial"
                width={32}
                height={32}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-8 h-8 rounded-full  overflow-hidden">
              <Image
                src="/tools/hero2.png"
                alt="Client testimonial"
                width={32}
                height={32}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-8 h-8 rounded-full overflow-hidden">
              <Image
                src="/tools/hero3.png"
                alt="Client testimonial"
                width={32}
                height={32}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-8 h-8 rounded-full overflow-hidden">
              <Image
                src="/tools/hero4.png"
                alt="Client testimonial"
                width={32}
                height={32}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-8 h-8 rounded-full overflow-hidden">
              <Image
                src="/tools/hero5.png"
                alt="Client testimonial"
                width={32}
                height={32}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="flex flex-col items-start">
            <div className="flex items-start">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="w-4 h-4 text-[#B812FF] fill-current"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="client-text">115+ happy clients</span>
          </div>
        </div>

        {/* Main Heading */}
        <h1 className="font-inter text-5xl font-semibold text-white mb-6 leading-[68px] text-center max-w-3xl mx-auto">
          Your all-in-one AI powerhouse for marketing, content & business growth
        </h1>

        {/* Description */}
        <p className="font-inter text-2xl font-normal text-white/90 mb-8 max-w-3xl mx-auto leading-[150%] text-center">
          Access 15+ AI tools designed to help you create stunning content,
          <br />
          build marketing campaigns, launch websites, and grow your business.
        </p>

        {/* CTA Button */}
        <button
          onClick={openWaitlistModal}
          className="cursor-pointer mx-auto flex items-center transition-all duration-200 justify-center gap-2"
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
          Get Started Now
          <Image
            src="/icons/arrow.svg"
            alt="arrow-right"
            width={21}
            height={21}
            style={{
              borderRadius: "24px",
              background: "#F2F0F540",
              opacity: 1,
              padding: "3px",
            }}
          />
        </button>
      </div>

      <WaitlistModal
        isOpen={isWaitlistModalOpen}
        onClose={closeWaitlistModal}
      />
    </section>
  );
}
