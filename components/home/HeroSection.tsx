/* eslint-disable @typescript-eslint/no-explicit-any */

import { ArrowUp } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { trackCTAClick } from "../../analytics";

export default function HeroSection({
  onScrollToContact,
}: {
  onScrollToContact: any;
}) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleTextareaKeyPress = (e: any) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleScrollToContact();
    }
  };

  const handleScrollToContact = () => {
    trackCTAClick("Join Waitlist", "Hero Section");
    if (onScrollToContact) {
      onScrollToContact();
    }
  };

  // const trustedCompanies = [
  //   { name: "Acme Corp", logo: "/logo/acme.svg" },
  //   { name: "Echo Valley", logo: "/logo/ec.svg" },
  //   { name: "Quantum", logo: "/logo/quantum.png" },
  //   { name: "PULSE", logo: "/logo/pulse.png" },
  //   { name: "Outside", logo: "/logo/outside.png" },
  //   { name: "APEX", logo: "/logo/apex.png" },
  //   { name: "Celestial", logo: "/logo/celestial.png" },
  //   { name: "2TWICE", logo: "/logo/twicce.png" },
  // ];

  return (
    <section className="relative min-h-[calc(100vh-4rem)] lg:min-h-[calc(100vh-5rem)] xl:min-h-[calc(100vh-6rem)] overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 pt-1 sm:pt-1 md:pt-1 lg:pt-1">
        <div className="text-center space-y-6 sm:space-y-8 lg:space-y-6">
          {/* Main Heading */}
          <div className="">
            <h1
              className="font-inter text-white font-medium text-center leading-tight tracking-tight
              text-[32px] 
              xs:text-[20px] xs:leading-[48px] xs:tracking-[-2px]
              sm:text-[30px] sm:leading-[60px] sm:tracking-[-2.5px]
              md:text-[40px] md:leading-[72px] md:tracking-[-3px]
              lg:text-[52px] lg:leading-[84px] lg:tracking-[-3.5px]
              xl:text-[64px] xl:leading-[100px] xl:tracking-[-4.149px]"
            >
              AI-Powered
            </h1>
            <h1
              className="font-inter font-medium text-center leading-tight tracking-tight
                text-[32px] 
                xs:text-[20px] xs:leading-[48px] xs:tracking-[-2px]
                sm:text-[30px] sm:leading-[60px] sm:tracking-[-2.5px]
                md:text-[40px] md:leading-[72px] md:tracking-[-3px]
                lg:text-[50px] lg:leading-[84px] lg:tracking-[-3.5px]
                xl:text-[64px] xl:leading-[100px] xl:tracking-[-4.149px]"
              style={{
                background: "linear-gradient(180deg, #FFF 0%, #B372CF 80%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Marketing Automation
            </h1>
          </div>

          {/* Subtitle */}
          <div className="max-w-3xl lg:max-w-[528px] mx-auto space-y-1 sm:space-y-2 text-white px-2 sm:px-0">
            <p
              className="font-medium lg:font-normal text-center
              text-[14px] leading-[21px] tracking-[-0.3px]
              sm:text-[16px] sm:leading-[24px] sm:tracking-[-0.4px]
              lg:text-[18px] lg:leading-[27px] lg:tracking-[-0.5px]
              text-white lg:text-[rgba(255,255,255,0.90)]"
            >
              From chai-wala to creator, run campaigns with Fortune precision.
            </p>
            <p
              className="font-medium lg:font-normal text-center
              text-[14px] leading-[21px] tracking-[-0.3px]
              sm:text-[16px] sm:leading-[24px] sm:tracking-[-0.4px]
              lg:text-[18px] lg:leading-[27px] lg:tracking-[-0.5px]
              text-white lg:text-[rgba(255,255,255,0.90)]"
            >
              No agencies, no complexity, just results.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="z-1 inline-flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 lg:gap-6 pt-8 sm:pt-10 lg:pt-[50px] mx-auto relative">
            <div className="hidden md:flex items-center absolute right-full mr-4 lg:mr-6 2xl:mr-10 transform">
              <div
                className="flex-shrink-0"
                style={{
                  width: "120px",
                  height: "1px",
                  background:
                    "linear-gradient(270deg, #F2F0F5 0%, rgba(242, 240, 245, 0.00) 100%)",
                }}
              ></div>
              <div className="relative flex-shrink-0">
                <div
                  className="absolute rounded-full"
                  style={{
                    width: "19px",
                    height: "18px",
                    borderRadius: "100px",
                    opacity: "0.2",
                    background: "#BB8BFF",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                  }}
                ></div>
                <div
                  className="relative flex-shrink-0 rounded-full"
                  style={{
                    width: "7px",
                    height: "7px",
                    borderRadius: "100px",
                    background: "#F2F0F5",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -10%)",
                  }}
                ></div>
              </div>
            </div>

            <button
              onClick={handleScrollToContact}
              className="cursor-pointer flex items-center bg-[rgba(140,69,255,0.40)] hover:bg-[rgba(140,69,255,0.50)] border border-[rgba(255,255,255,0.25)] text-[#F2F0F5] font-semibold rounded-2xl transition-all duration-200 justify-center gap-2 w-full sm:w-auto sm:min-w-[180px]
                px-4 py-3 text-sm
                sm:px-5 sm:py-3 sm:text-base
                md:px-6 md:py-4
                lg:px-4 lg:py-4 lg:text-[19.8px] lg:leading-[30px] lg:tracking-[-0.4px]"
              style={{
                boxShadow:
                  "0px 12px 16px 0px rgba(111, 17, 242, 0.25), 0px 0px 6px 3px rgba(255, 255, 255, 0.25) inset",
              }}
            >
              Join The Waitlist
              <Image
                src="/icons/arrow.svg"
                alt="arrow-right"
                width={30}
                height={30}
                className="rounded-3xl bg-[rgba(242,240,245,0.15)] p-2 h-6 sm:h-7 lg:h-8"
              />
            </button>

            <Link
              href="/growth-pods"
              onClick={() => trackCTAClick("Join Growth Pods", "Hero Section")}
              className="cursor-pointer flex items-center border border-[rgba(255,255,255,0.25)] hover:border-[rgba(255,255,255,0.35)] text-[#F2F0F5] font-semibold rounded-2xl transition-all duration-200 justify-center gap-2 w-full sm:w-auto sm:min-w-[180px]
                px-4 py-3 text-sm
                sm:px-5 sm:py-3 sm:text-base
                md:px-6 md:py-4
                lg:px-4 lg:py-4 lg:text-[19.8px] lg:leading-[30px] lg:tracking-[-0.4px]"
            >
              Join Our Growth Pods
              <Image
                src="/icons/arrow.svg"
                alt="arrow-right"
                width={30}
                height={30}
                className="rounded-3xl bg-[rgba(242,240,245,0.15)] p-2 h-6 sm:h-7 lg:h-8"
              />
            </Link>

            {/* Decorative line and dot for Watch Demo - hidden on mobile, visible on tablet and desktop */}
            <div className="hidden md:flex items-center absolute left-full ml-4 lg:ml-6 2xl:ml-10 transform">
              <div className="relative flex-shrink-0">
                <div
                  className="absolute rounded-full"
                  style={{
                    width: "19px",
                    height: "18px",
                    borderRadius: "100px",
                    opacity: "0.2",
                    background: "#BB8BFF",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                  }}
                ></div>
                <div
                  className="relative flex-shrink-0 rounded-full"
                  style={{
                    width: "7px",
                    height: "7px",
                    borderRadius: "100px",
                    background: "#F2F0F5",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -10%)",
                  }}
                ></div>
              </div>
              <div
                className="flex-shrink-0"
                style={{
                  width: "120px",
                  height: "1px",
                  background:
                    "linear-gradient(90deg, #F2F0F5 0%, rgba(242, 240, 245, 0.00) 100%)",
                }}
              ></div>
            </div>
          </div>

          {/* Search Box */}
          <div className="w-full flex justify-center pt-6 sm:pt-8 lg:pt-16 relative px-2 sm:px-4 lg:px-8">
            {/* Purple glow effect */}
            <div
              className="absolute inset-0 bg-[#622A9A] rounded-full"
              style={{
                width: "min(800px, 85vw)",
                height: "min(300px, 35vh)",
                borderRadius: "569px",
                filter: "blur(min(80px, 6vw))",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                zIndex: 0,
              }}
            ></div>

            <Image
              src="/svg/circle.svg"
              alt="Hero background"
              width={800}
              height={800}
              className="absolute"
              style={{
                width: "min(800px, 70vw)",
                top: "30%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                zIndex: 0,
                opacity: 1,
              }}
              priority
            />

            <div className="relative z-10 w-full max-w-[900px]">
              <div
                className="border border-[rgba(255,255,255,0.50)] rounded-[20px] sm:rounded-[24px] lg:rounded-[32px] bg-[#1A0B29] mx-auto w-full
                  p-3 sm:p-4 lg:p-6
                  min-h-[160px] sm:min-h-[180px] lg:min-h-[200px]
                  h-[200px] sm:h-[220px] lg:h-[272px]"
                style={{
                  boxShadow: "0px 4px 4px 4px rgba(0, 0, 0, 0.25)",
                }}
              >
                <div className="relative h-full flex flex-col">
                  <textarea
                    placeholder="What do you want to know?"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onKeyDown={handleTextareaKeyPress}
                    className="flex-1 bg-transparent text-white placeholder-gray-400 outline-none resize-none w-full font-inter
                      text-sm sm:text-base lg:text-lg
                      min-h-[100px] sm:min-h-[120px] lg:min-h-[140px]"
                    style={{
                      color: "#FFF",
                      fontFamily: "Inter",
                      fontStyle: "normal",
                      fontWeight: "500",
                      lineHeight: "normal",
                    }}
                  />
                  <div className="flex justify-end pt-2">
                    <button
                      onClick={handleScrollToContact}
                      className="p-2 sm:p-2.5 lg:p-3 bg-gray-700 hover:bg-gray-600 rounded-full transition-colors duration-200"
                    >
                      <ArrowUp className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-white" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Trusted Companies Section */}
          {/* <div className="pt-8 sm:pt-10 lg:pt-12 xl:pt-14 pb-12 sm:pb-14 lg:pb-16">
            <p
              className="text-white/70 font-semibold leading-relaxed lg:leading-[26px] tracking-tight text-center font-inter mb-6 sm:mb-8 lg:mb-12
              text-xs sm:text-sm lg:text-base"
            >
              Trusted by the world&apos;s most innovative teams
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 max-w-5xl mx-auto">
              {trustedCompanies.map((company, index) => (
                <div
                  key={index}
                  className="flex flex-col items-start gap-2.5 bg-black/30 border border-white/15 rounded-[10px] hover:border-gray-700 transition-colors duration-200
                    p-4 sm:p-6 lg:p-8 xl:p-10
                    min-h-[60px] sm:min-h-[70px] lg:min-h-[80px] xl:min-h-[100px]"
                >
                  <img
                    src={company.logo || "/placeholder.svg"}
                    alt={company.name}
                    className="max-w-full object-contain
                      max-h-8 sm:max-h-10 lg:max-h-12"
                  />
                </div>
              ))}
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}
