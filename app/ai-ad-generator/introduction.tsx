"use client";

import Image from "next/image";
import Link from "next/link";

export default function Introduction() {
  return (
    <section className="bg-black py-20 px-6 max-w-[70rem]  mx-auto">
      <div className="">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <h2 className="text-white font-bold font-inter max-w-md text-[32px] leading-[150%] tracking-[1%]">
              Introducing <span className="text-[#BD14FF]">AdPilot AI</span> -
              The most advanced AI Ad Generator
            </h2>

            <p className="text-[#FFFFFFE5] opacity-90 font-inter text-[20px] leading-[150%] tracking-[0%]">
              <strong>Instant Ad Campaign Generate:</strong> Launch complete ad
              campaigns in just a few clicks. Enter your product or service
              details, and AdPilot AI generates ad copy, creatives, and
              targeting automatically—no expertise required.
            </p>

            <p className="text-[#FFFFFFE5] opacity-90 font-inter text-[20px] leading-[150%] tracking-[0%]">
              <strong>Create Image & Video Ads:</strong> Design eye-catching
              image and video ads instantly. AdPilot AI suggests visuals,
              formats, and copy optimized for engagement, making every ad
              high-performing and shareable.
            </p>
            <p className="text-[#FFFFFFE5] opacity-90 font-inter text-[20px] leading-[150%] tracking-[0%]">
              <strong>Launch Ads on Meta & Google:</strong> Deploy your
              campaigns directly to Google and Meta without leaving the
              platform. Track performance in real-time and let AI optimize for
              maximum ROI automatically.
            </p>
            <Link
              href="https://app.marqait.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer inline-flex items-center transition-all duration-200 justify-center gap-2"
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
              Generate a Campaign
            </Link>
          </div>

          {/* Right Illustration */}
          <div className="flex justify-center lg:justify-end">
            <Image
              src="/pilot/second image.png"
              alt="AI Generated Ad image example"
              width={500}
              height={400}
              className="max-w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
