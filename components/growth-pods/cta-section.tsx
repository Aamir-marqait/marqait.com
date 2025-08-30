"use client";
import Link from "next/link";
import Image from "next/image";
import { trackCTAClick } from "../../analytics";

export default function CTASection() {
  return (
    <div
      className="relative overflow-hidden flex items-center justify-center py-12 sm:py-16 md:py-20 lg:py-12 xl:py-12"
      style={{
        backgroundImage: "url('/pods/pattern.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-black/90 z-5"></div>

      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/4 z-5">
        <Image
          src="/svg/ellipse.svg"
          alt=""
          width={1400}
          height={800}
          className="opacity-80
            w-[600px] h-[400px]
            sm:w-[800px] sm:h-[500px]
            md:w-[1000px] md:h-[600px]
            lg:w-[1200px] lg:h-[700px]
            xl:w-[1400px] xl:h-[800px]
            2xl:w-[6000px] 2xl:h-[1000px]"
        />
      </div>

      <div className="absolute z-10 hidden sm:block left-4 sm:left-8 top-1/2 transform -translate-y-1/2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-60 lg:h-60 xl:w-[253px] xl:h-[253px]"
          viewBox="0 0 253 253"
          fill="none"
        >
          <path
            d="M8.26462 117.599L88.4355 88.4164L117.599 8.26462C118.268 6.42849 119.485 4.84249 121.086 3.72181C122.686 2.60112 124.593 2 126.547 2C128.501 2 130.408 2.60112 132.009 3.72181C133.61 4.84249 134.827 6.42849 135.496 8.26462L164.678 88.4355L244.849 117.599C246.685 118.268 248.271 119.485 249.392 121.086C250.513 122.686 251.114 124.593 251.114 126.547C251.114 128.501 250.513 130.408 249.392 132.009C248.271 133.61 246.685 134.827 244.849 135.496L164.659 164.678L135.496 244.849C134.827 246.685 133.61 248.271 132.009 249.392C130.408 250.513 128.501 251.114 126.547 251.114C124.593 251.114 122.686 250.513 121.086 249.392C119.485 248.271 118.268 246.685 117.599 244.849L88.4164 164.659L8.26462 135.496C6.42849 134.827 4.84249 133.61 3.72181 132.009C2.60112 130.408 2 128.501 2 126.547C2 124.593 2.60112 122.686 3.72181 121.086C4.84249 119.485 6.42849 118.268 8.26462 117.599Z"
            stroke="white"
            strokeOpacity="0.2"
            strokeWidth="2.47243"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      <div className="absolute z-10 hidden md:block left-32 sm:left-48 md:left-56 lg:left-72 top-1/4 sm:top-1/3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-[47px] lg:h-[47px]"
          viewBox="0 0 47 47"
          fill="none"
        >
          <path
            d="M2.41751 22.2976L16.5588 17.1501L21.7029 3.01224C21.8208 2.68836 22.0356 2.40861 22.3179 2.21093C22.6003 2.01326 22.9366 1.90723 23.2813 1.90723C23.626 1.90723 23.9623 2.01326 24.2447 2.21093C24.527 2.40861 24.7417 2.68836 24.8597 3.01224L30.0072 17.1535L44.1484 22.2976C44.4723 22.4156 44.7521 22.6303 44.9497 22.9126C45.1474 23.195 45.2534 23.5313 45.2534 23.876C45.2534 24.2207 45.1474 24.557 44.9497 24.8394C44.7521 25.1217 44.4723 25.3365 44.1484 25.4544L30.0038 30.6019L24.8597 44.7432C24.7417 45.067 24.527 45.3468 24.2447 45.5445C23.9623 45.7421 23.626 45.8482 23.2813 45.8482C22.9366 45.8482 22.6003 45.7421 22.3179 45.5445C22.0356 45.3468 21.8208 45.067 21.7029 44.7432L16.5554 30.5985L2.41751 25.4544C2.09364 25.3365 1.81388 25.1217 1.61621 24.8394C1.41853 24.557 1.3125 24.2207 1.3125 23.876C1.3125 23.5313 1.41853 23.195 1.61621 22.9126C1.81388 22.6303 2.09364 22.4156 2.41751 22.2976Z"
            stroke="white"
            strokeOpacity="0.21"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* Large Star - Right */}
      <div className="absolute z-10 hidden sm:block right-16 sm:right-24 md:right-32 top-1/6 sm:top-1/5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-[64px] lg:h-[64px]"
          viewBox="0 0 64 64"
          fill="none"
        >
          <path
            d="M2.69535 29.6714L22.4419 22.4835L29.625 2.74174C29.7897 2.28949 30.0895 1.89885 30.4838 1.62282C30.878 1.34679 31.3477 1.19873 31.829 1.19873C32.3103 1.19873 32.7799 1.34679 33.1742 1.62282C33.5685 1.89885 33.8683 2.28949 34.033 2.74174L41.2209 22.4882L60.9674 29.6714C61.4196 29.8361 61.8102 30.1359 62.0863 30.5302C62.3623 30.9244 62.5104 31.3941 62.5104 31.8754C62.5104 32.3567 62.3623 32.8263 62.0863 33.2206C61.8102 33.6149 61.4196 33.9147 60.9674 34.0794L41.2161 41.2672L34.033 61.0137C33.8683 61.466 33.5685 61.8566 33.1742 62.1327C32.7799 62.4087 32.3103 62.5568 31.829 62.5568C31.3477 62.5568 30.878 62.4087 30.4838 62.1327C30.0895 61.8566 29.7897 61.466 29.625 61.0137L22.4371 41.2625L2.69535 34.0794C2.2431 33.9147 1.85246 33.6149 1.57643 33.2206C1.3004 32.8263 1.15234 32.3567 1.15234 31.8754C1.15234 31.3941 1.3004 30.9244 1.57643 30.5302C1.85246 30.1359 2.2431 29.8361 2.69535 29.6714Z"
            stroke="white"
            strokeOpacity="0.21"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-6xl">
        <div className="text-center space-y-6 sm:space-y-8 lg:space-y-8">
          <div>
            <h2
              className="text-center font-inter font-bold bg-gradient-to-r from-white to-[#B372CF] bg-clip-text text-transparent
              text-2xl leading-[32px] tracking-[-0.3px]
              xs:text-3xl xs:leading-[40px] xs:tracking-[-0.35px]
              sm:text-4xl sm:leading-[48px] sm:tracking-[-0.4px]
              md:text-5xl md:leading-[56px] md:tracking-[-0.45px]
              lg:text-[36px] lg:leading-[65px] lg:tracking-[-0.54px]"
            >
              Ready to Build Smarter, Faster?
            </h2>
          </div>

          {/* Description */}
          <div>
            <p
              className="text-[rgba(255,255,255,0.80)] text-center font-inter font-normal leading-[150%] mx-auto px-2 sm:px-4 lg:px-0
              text-sm 
              sm:text-base sm:leading-[24px]
              md:text-lg md:leading-[27px]
              lg:text-xl lg:leading-[30px]
              xl:text-[20px] xl:leading-[150%]
              max-w-full sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-[672px]"
            >
              Whether you&apos;re launching or scaling, we&apos;ll help you
              build with AI from day one — faster execution, leaner ops, better
              results. Let&apos;s design a Growth Pod around your vision.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 lg:gap-8 justify-center items-center pt-4 sm:pt-6 md:pt-8 lg:pt-12 xl:pt-16">
            <Link
              href="/contacts"
              onClick={() =>
                trackCTAClick("Join Existing Pod", "Growth Pods CTA")
              }
              className="cursor-pointer flex items-center bg-[rgba(140,69,255,0.40)] hover:bg-[rgba(140,69,255,0.50)] border border-[rgba(255,255,255,0.25)] text-[#F2F0F5] font-semibold rounded-2xl transition-all duration-200 justify-center gap-2 w-full sm:w-auto sm:min-w-[180px] lg:min-w-[200px]
                px-4 py-3 text-sm
                sm:px-5 sm:py-3 sm:text-base
                md:px-6 md:py-4
                lg:px-6 lg:py-4 lg:text-[18.8px] lg:leading-[30px] lg:tracking-[-0.4px]"
              style={{
                boxShadow: "0px 12px 16px 0px rgba(111, 17, 242, 0.25), 0px 0px 6px 3px rgba(255, 255, 255, 0.25) inset"
              }}
            >
              Join an Existing Pod
              <Image
                src="/icons/arrow.svg"
                alt="arrow-right"
                width={32}
                height={32}
                className="rounded-3xl bg-[rgba(242,240,245,0.15)] p-2 h-6 sm:h-7 lg:h-8"
              />
            </Link>
            <Link
              href="/contacts"
              onClick={() =>
                trackCTAClick("Build Custom Pod", "Growth Pods CTA")
              }
              className="cursor-pointer flex items-center border border-[rgba(255,255,255,0.25)] hover:border-[rgba(255,255,255,0.35)] text-[#F2F0F5] font-semibold rounded-2xl transition-all duration-200 justify-center gap-2 w-full sm:w-auto sm:min-w-[180px] lg:min-w-[200px]
                px-4 py-3 text-sm
                sm:px-5 sm:py-3 sm:text-base
                md:px-6 md:py-4
                lg:px-4 lg:py-4 lg:text-[18.8px] lg:leading-[30px] lg:tracking-[-0.4px]"
            >
              Build a Custom Pod
              <Image
                src="/icons/arrow.svg"
                alt="arrow-right"
                width={32}
                height={32}
                className="rounded-3xl bg-[rgba(242,240,245,0.15)] p-2 h-6 sm:h-7 lg:h-8"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
