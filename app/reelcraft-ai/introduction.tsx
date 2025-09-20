"use client";
import { useState } from "react";
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
              Introducing Marqait’s Pro
              <br />
              <span className="text-[#BD14FF]">AI ReelCraft</span>
            </h2>

            <p className="text-[#FFFFFFE5] opacity-90 font-inter text-[20px] leading-[150%] tracking-[0%]">
              Marqait AI ReelCraft makes it effortless for businesses to produce
              stunning, scroll-stopping short-form videos designed for today’s
              social media platforms. With AI-driven creativity, it ensures
              every reel is polished, engaging, and aligned with your brand
              identity.
            </p>

            <p className="text-[#FFFFFFE5] opacity-90 font-inter text-[20px] leading-[150%] tracking-[0%]">
              From boosting reach to increasing engagement and driving
              conversions, ReelCraft helps your content perform at its best. By
              taking the complexity out of video creation, it empowers brands to
              focus on growth while delivering consistent, high-quality
              storytelling.
            </p>
            <button
              onClick={openWaitlistModal}
              className=" lg:block cursor-pointer flex items-center transition-all duration-200 justify-center gap-2"
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
              Generate a Video
            </button>
          </div>

          {/* Right Illustration */}
          <div className="flex justify-center lg:justify-end">
            <video
              src="/video.mp4"
              width={500}
              height={400}
              className="max-w-full h-[35rem]"
              autoPlay
              loop
              muted
              playsInline
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
