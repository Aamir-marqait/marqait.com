"use client";
import { useState } from "react";
import Image from "next/image";
import WaitlistModal from "../../components/waitlist-modal";

export default function Introduction() {
  const [isWaitlistModalOpen, setIsWaitlistModalOpen] = useState(false);

  const openWaitlistModal = () => {
    setIsWaitlistModalOpen(true);
  };

  const closeWaitlistModal = () => {
    setIsWaitlistModalOpen(false);
  };

  return (
    <section className="bg-black py-20 px-6 max-w-[70rem]  mx-auto">
      <div className="">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <h2 className="text-white font-bold font-inter max-w-md text-[32px] leading-[150%] tracking-[1%]">
              Introducing{" "}
              <span className="text-[#BD14FF]">AI Image Editor</span>
            </h2>

            <p className="text-[#FFFFFFE5] opacity-90 font-inter text-[20px] leading-[150%] tracking-[0%]">
              Editing photos is now simple with Marqait AI Photo Editor. You can
              enhance images, retouch details, and adjust colors in just a few
              clicks. No design skills are needed – the AI does it for you. Our
              smart AI tool removes backgrounds, fixes portraits, and improves
              photo quality automatically. It gives you professional results
              without the effort of manual editing.
            </p>

            <p className="text-[#FFFFFFE5] opacity-90 font-inter text-[20px] leading-[150%] tracking-[0%]">
              Perfect for businesses, creators, and personal use, Marqait AI
              Photo Editor helps you get polished photos instantly. Fast, easy,
              and professional – all in one tool.
            </p>
            <button
              onClick={openWaitlistModal}
              className="lg:block cursor-pointer flex items-center transition-all duration-200 justify-center gap-2"
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
              Upload Your Image
            </button>
          </div>

          {/* Right Illustration */}
          <div className="flex justify-center lg:justify-end">
            <Image
              src="/edit/second.png"
              alt="AI SEO Illustration"
              width={500}
              height={400}
              className="max-w-full h-auto"
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
