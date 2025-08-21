import DotPattern from "../DotPattern";
import Image from "next/image";

export default function StatisticsSection() {
  const statistics = [
    {
      number: "Built for Builders",
      // label: "Business\nTransformed",
    },
    {
      number: "AI-Native from Day One",
      // label: "Marketing\nCosts Saved",
    },
    {
      number: "Now Accepting Early Access Partners",
      // label: "Platform\nUptime",
    },
  ];

  return (
    <section
      className="relative bg-gradient-to-br from-[#190D2E] to-[#020103] overflow-hidden
      py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32"
    >
      {/* Decorative Dot Patterns */}
      <div className="absolute top-0 left-0 opacity-60">
        <DotPattern className="w-16 xs:w-20 sm:w-32 md:w-40 lg:w-48 xl:w-64 h-auto" />
      </div>
      <div className="absolute top-0 right-0 opacity-60">
        <DotPattern className="w-16 xs:w-20 sm:w-32 md:w-40 lg:w-48 xl:w-64 h-auto" />
      </div>
      <div className="absolute bottom-0 left-0 opacity-40">
        <DotPattern className="w-12 xs:w-16 sm:w-24 md:w-32 lg:w-40 xl:w-48 h-auto" />
      </div>
      <div className="absolute bottom-0 right-0 opacity-40">
        <DotPattern className="w-12 xs:w-16 sm:w-24 md:w-32 lg:w-40 xl:w-48 h-auto" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Header Section */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20">
          {/* FINDS Divider */}
          <div className="flex items-center justify-center mb-4 sm:mb-5">
            <div className="flex-1 max-w-[60px] xs:max-w-[80px] sm:max-w-[100px] md:max-w-[150px] lg:max-w-[250px] h-px bg-gradient-to-r from-transparent to-gray-600"></div>
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full"></div>
            <span
              className="text-[#F2F0F5] font-inter font-bold uppercase mx-3 sm:mx-4 md:mx-6
              text-[10px] leading-[14px] tracking-[0.6px]
              xs:text-[11px] xs:leading-[15px] xs:tracking-[0.7px]
              sm:text-xs sm:leading-[16.8px] sm:tracking-[0.8px]
              md:text-sm md:leading-[19.6px] md:tracking-[1px]"
            >
              FINDS
            </span>
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full"></div>
            <div className="flex-1 max-w-[60px] xs:max-w-[80px] sm:max-w-[100px] md:max-w-[150px] lg:max-w-[250px] h-px bg-gradient-to-l from-transparent to-gray-600"></div>
          </div>

          {/* Main Heading */}
          <h2
            className="text-center font-inter font-semibold leading-[150%] tracking-[-0.3px] mb-4 sm:mb-6 md:mb-8 lg:mb-4
            text-[24px] xs:text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] xl:text-[43.8px]"
          >
            <span className="bg-gradient-to-r from-white from-[17.3%] to-[#B372CF] to-[78.13%] bg-clip-text text-transparent">
              Ready to Build
            </span>{" "}
            <span className="text-white">Smarter with AI?</span>
          </h2>

          {/* Subtitle */}
          <p
            className="text-white text-center font-inter font-medium leading-normal max-w-4xl mx-auto px-2
            text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px]"
          >
            Be among the first to experience Growth Pods — where custom AI meets
            execution at scale.
          </p>
          <p
            className="text-white text-center font-inter font-medium leading-normal max-w-4xl mx-auto px-2
            text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px]"
          >
            We’re onboarding early partners to co-build the future of AI-powered
            business — from strategy to ops, all under one roof.
          </p>
        </div>

        {/* Statistics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-3 lg:gap-4 xl:gap-6 max-w-6xl mx-auto">
          {statistics.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-start gap-[10px] rounded-[20px] sm:rounded-[24px] border border-white/26 bg-white/4 backdrop-blur-[13.1px] hover:border-purple-700/60 transition-all duration-300 group relative
                w-full max-w-[320px] mx-auto sm:max-w-none
                p-4 sm:p-5 lg:p-6
                min-h-[140px] sm:min-h-[160px] lg:min-h-[180px]"
            >
              <div className="text-left flex-1 w-full pr-12 sm:pr-14">
                {/* Number */}
                <div
                  className="font-inter font-bold leading-normal bg-gradient-to-b from-white from-0% to-[#B372CF] to-100% bg-clip-text text-transparent mb-2 sm:mb-3
                  text-[24px] sm:text-[28px] lg:text-[32px]"
                >
                  {stat.number}
                </div>

                {/* Label */}
                <p
                  className="text-white font-inter font-medium leading-[150%] whitespace-pre-line
                  text-[16px] sm:text-[18px] md:text-[20px] lg:text-[24px]"
                >
                  {/* {stat.label} */}
                </p>
              </div>

              {/* Arrow Icon */}
              <div className="absolute top-4 sm:top-6 right-4 sm:right-4 lg:right-4">
                <div
                  className="rounded-[20px] sm:rounded-[24px] bg-[rgba(242,240,245,0.15)] flex justify-center items-center gap-[10px] group-hover:bg-[rgba(242,240,245,0.25)] transition-all duration-300
                  w-[36px] h-[36px] p-[8px]
                  sm:w-[40px] sm:h-[40px] sm:p-[9px]
                  lg:w-[44px] lg:h-[44px] lg:p-[10px]"
                >
                  <Image
                    src="/icons/arrow-top-right.svg"
                    alt="arrow-up"
                    width={24}
                    height={24}
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
