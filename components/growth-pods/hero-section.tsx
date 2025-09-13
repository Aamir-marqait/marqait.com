"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";

function HeroSection() {
  const router = useRouter();

  return (
    <div
      className="max-h-screen  relative overflow-hidden "
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('/pods/Stars.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-black/60 z-5"></div>
      <div className=" relative z-10 container mx-auto px-4 py-8 sm:py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-1 items-center min-h-[80vh]">
          <div className="space-y-4 sm:space-y-6 md:space-y-8 lg:space-y-10 order-2 lg:order-1 relative">
            <div className="space-y-3 sm:space-y-4 lg:space-y-6 relative z-10">
              <h1
                className="self-stretch max-w-lg text-white font-inter font-bold leading-[150%]
                text-2xl
                sm:text-3xl
                md:text-4xl
                lg:text-[48px]"
                style={{
                  letterSpacing: "-1.44px",
                  fontSize: "48px",
                }}
              >
                AI-Solutions & Automation Services
              </h1>
            </div>

            <div className="space-y-3 sm:space-y-4 lg:space-y-5 relative z-10">
              <p
                className="flex-shrink-0 font-inter font-normal leading-[140%]
                text-sm
                sm:text-base
                md:text-lg
                lg:text-xl
                xl:text-[25px]
                max-w-full lg:max-w-[681px]"
                style={{
                  color: "rgba(255, 255, 255, 0.85)",
                  letterSpacing: "-0.75px",
                  fontSize: "25px",
                  lineHeight: "35px",
                  width: "681px",
                }}
              >
                We provide AI solutions and automation services. Get
                Industry-specific automation, streamline workflows, boost
                efficiency, and accelerate business growth.
              </p>
            </div>

            <div className="pt-3 sm:pt-4 md:pt-6 lg:pt-6 relative z-10">
              <button
                onClick={() => router.push("/contacts")}
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
                Get Started Now
                <div
                  className="flex justify-center items-center rounded-[24px]
                  w-6 h-6 p-1
                  sm:w-7 sm:h-7 sm:p-1.5
                  lg:w-[32px] lg:h-[32px] lg:p-[8px]"
                  style={{ background: "rgba(242, 240, 245, 0.15)" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-3 h-3 sm:w-4 sm:h-4 lg:w-4 lg:h-4"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="M13.8538 8.35403L9.35375 12.854C9.25993 12.9478 9.13268 13.0006 9 13.0006C8.86732 13.0006 8.74007 12.9478 8.64625 12.854C8.55243 12.7602 8.49972 12.633 8.49972 12.5003C8.49972 12.3676 8.55243 12.2403 8.64625 12.1465L12.2931 8.50028H2.5C2.36739 8.50028 2.24021 8.4476 2.14645 8.35383C2.05268 8.26006 2 8.13289 2 8.00028C2 7.86767 2.05268 7.74049 2.14645 7.64672C2.24021 7.55296 2.36739 7.50028 2.5 7.50028H12.2931L8.64625 3.85403C8.55243 3.76021 8.49972 3.63296 8.49972 3.50028C8.49972 3.3676 8.55243 3.24035 8.64625 3.14653C8.74007 3.05271 8.86732 3 9 3C9.13268 3 9.25993 3.05271 9.35375 3.14653L13.8538 7.64653C13.9002 7.69296 13.9371 7.74811 13.9623 7.80881C13.9874 7.86951 14.0004 7.93457 14.0004 8.00028C14.0004 8.06599 13.9874 8.13105 13.9623 8.19175C13.9371 8.25245 13.9002 8.30759 13.8538 8.35403Z"
                      fill="#F2F0F5"
                    />
                  </svg>
                </div>
              </button>
            </div>
          </div>

          {/* Right Content - AI Image */}
          <div className="order-1 lg:order-2  justify-center lg:justify-end">
            <div
              className="relative w-full
              max-w-xs
              sm:max-w-sm
              md:max-w-md
              lg:max-w-lg
              xl:max-w-2xl
              2xl:max-w-2xl"
            >
              <Image
                src="/pods/modelglow.png"
                alt=""
                fill
                className="absolute inset-0 w-full h-full object-fill z-0"
              />
              <Image
                src="/modelglow.png"
                alt="AI-Powered Growth Pods"
                width={800}
                height={600}
                className="relative w-full h-full z-10 "
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;

// -mt-8
//                 sm:-mt-12
//                 md:-mt-16
//                 lg:-mt-20
