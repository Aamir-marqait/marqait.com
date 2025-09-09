/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { useState } from "react";
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
          <div className="relative">
            {/* Background blur elements */}
            <div
              className="absolute rounded-full bg-[#850DB8] opacity-100"
              style={{
                width: "300px",
                height: "298.3px",
                top: "123.59px",
                left: "11.54px",
                transform: "rotate(1.45deg)",
                filter: "blur(250px)",
              }}
            />
            <div
              className="absolute rounded-full bg-[#850DB8] opacity-100"
              style={{
                width: "300px",
                height: "298.3px",
                top: "123.59px",
                right: "11.54px",
                transform: "rotate(-1.45deg)",
                filter: "blur(250px)",
              }}
            />

            {/* AI-Powered Marketing Automation text */}
            <div className="relative z-10">
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

          <div className="z-1 inline-flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 lg:gap-10 pt-3 sm:pt-6 lg:pt-[15px] mx-auto relative">
            <button
              onClick={handleScrollToContact}
              className="cursor-pointer flex items-center text-white font-inter font-semibold rounded-2xl transition-all duration-200 justify-center gap-2 border border-[#E6D4FF99]
                w-full sm:w-auto
                px-3 py-2 text-xs min-w-[120px] h-[45px] leading-[20px]
                sm:px-4 sm:py-2.5 sm:text-sm sm:min-w-[140px] sm:h-[50px] sm:leading-[24px]
                md:px-5 md:py-3 md:text-base md:min-w-[160px] md:h-[55px] md:leading-[28px]
                lg:w-[191px] lg:h-[58px] lg:text-[17.6px] lg:leading-[30px] lg:tracking-[0px] lg:font-semibold"
              style={{
                background:
                  "linear-gradient(0deg, rgba(184, 18, 255, 0.765) 0%, rgba(110, 11, 153, 0.85) 90.91%)",
                borderRadius: "16px",
              }}
            >
              Get Started
              <Image
                src="/icons/arrow.svg"
                alt="arrow-right"
                width={30}
                height={24}
                className="rounded-full bg-[rgba(242,240,245,0.15)] p-1.5 h-5 sm:h-6 lg:h-8"
              />
            </button>
          </div>

          {/* Search Box */}
          {/* <div className="w-full flex justify-center pt-6 sm:pt-8 lg:pt-16 relative px-2 sm:px-4 lg:px-8">
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
          </div> */}

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
