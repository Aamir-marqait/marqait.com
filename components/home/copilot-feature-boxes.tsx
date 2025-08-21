import Image from "next/image";

interface CopilotFeatureBoxesProps {
  onScrollToContact: () => void;
}

export default function CopilotFeatureBoxes({
  onScrollToContact,
}: CopilotFeatureBoxesProps) {
  return (
    <div className="mt-6 sm:mt-8 lg:mt-12 xl:mt-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-[4.875rem] xl:gap-[5.875rem] justify-items-center lg:justify-items-stretch">
        {/* AI Business Strategist Card */}
        <div className="w-full max-w-[530px] lg:max-w-none flex-shrink-0 rounded-2xl border border-white/29 bg-gradient-to-br from-gray-900/50 to-black/80 transition-all duration-200 p-4 sm:p-6 lg:p-8 xl:p-10 min-h-[450px] sm:min-h-[500px] lg:min-h-[590px]">
          {/* Image Container */}
          <div className="mb-6 sm:mb-8 lg:mb-10 xl:mb-12">
            <div className="rounded-xl overflow-hidden h-[120px] sm:h-[140px] md:h-[180px] lg:h-[200px] xl:h-[256px]">
              <Image
                src="/3.png"
                alt="AI Business Strategist"
                width={500}
                height={500}
                className="object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div className="space-y-4 sm:space-y-6 lg:space-y-8">
            <div>
              <h3
                className="text-white font-inter font-semibold leading-tight mb-3 sm:mb-4
                text-[18px] 
                sm:text-[20px] sm:leading-[26px]
                md:text-[24px] md:leading-[30px]
                lg:text-[28px] lg:leading-[34px]
                xl:text-[34.9px] xl:leading-[40px]"
              >
                AI Business Strategist
              </h3>
              <p
                className="text-white font-inter font-normal leading-relaxed max-w-[422px]
                text-[14px] 
                sm:text-[15px] sm:leading-[22px]
                md:text-[16px] md:leading-[24px]
                lg:text-[17px] lg:leading-[25px]
                xl:text-[19px] xl:leading-[27px]"
              >
                Turn Your Business Idea Into a Full Marketing Strategy.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <button
                onClick={onScrollToContact}
                className="cursor-pointer flex items-center bg-[rgba(140,69,255,0.40)] hover:bg-[rgba(140,69,255,0.50)] border border-[rgba(255,255,255,0.25)] text-[#F2F0F5] font-semibold rounded-2xl transition-all duration-200 justify-center gap-2 w-full sm:w-auto sm:min-w-[160px] lg:min-w-[180px]
                  px-4 py-3 text-sm
                  sm:px-5 sm:py-3 sm:text-base
                  lg:px-4 lg:py-4 lg:text-[16px] lg:leading-[30px] lg:tracking-[-0.4px]"
                style={{
                  boxShadow:
                    "0px 12px 16px 0px rgba(111, 17, 242, 0.25), 0px 0px 6px 3px rgba(255, 255, 255, 0.25) inset",
                }}
              >
                Try It Now
                <Image
                  src="/icons/arrow.svg"
                  alt="arrow-right"
                  width={30}
                  height={30}
                  className="rounded-3xl bg-[rgba(242,240,245,0.15)] p-2 h-6 sm:h-7 lg:h-8"
                />
              </button>
              <button
                onClick={onScrollToContact}
                className="cursor-pointer flex items-center border border-[rgba(255,255,255,0.25)] hover:border-[rgba(255,255,255,0.35)] text-[#F2F0F5] font-semibold rounded-2xl transition-all duration-200 justify-center gap-2 w-full sm:w-auto sm:min-w-[160px] lg:min-w-[180px]
                  px-4 py-3 text-sm
                  sm:px-5 sm:py-3 sm:text-base
                  lg:px-4 lg:py-4 lg:text-[16px] lg:leading-[30px] lg:tracking-[-0.4px]"
              >
                Know More
                <Image
                  src="/icons/arrow.svg"
                  alt="arrow-right"
                  width={30}
                  height={30}
                  className="rounded-3xl bg-[rgba(242,240,245,0.15)] p-2 h-6 sm:h-7 lg:h-8"
                />
              </button>
            </div>
          </div>
        </div>

        {/* Social Media Post Creator Card */}
        <div className="w-full max-w-[530px] lg:max-w-none flex-shrink-0 rounded-2xl border border-white/29 bg-gradient-to-br from-gray-900/50 to-black/80 transition-all duration-200 p-4 sm:p-6 lg:p-8 xl:p-10 min-h-[450px] sm:min-h-[500px] lg:min-h-[590px]">
          {/* Image Container */}
          <div className="mb-6 sm:mb-8 lg:mb-10 xl:mb-12">
            <div className="rounded-xl overflow-hidden h-[120px] sm:h-[140px] md:h-[180px] lg:h-[200px] xl:h-[256px]">
              <Image
                src="/2.png"
                alt="Social Media Post Creator"
                width={500}
                height={500}
                className="object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div className="space-y-4 sm:space-y-6 lg:space-y-8">
            <div>
              <h3
                className="text-white font-inter font-semibold leading-tight mb-3 sm:mb-4
                text-[18px] 
                sm:text-[20px] sm:leading-[26px]
                md:text-[24px] md:leading-[30px]
                lg:text-[28px] lg:leading-[34px]
                xl:text-[34.9px] xl:leading-[40px]"
              >
                Social Media Post Creator
              </h3>
              <p
                className="text-white font-inter font-normal leading-relaxed max-w-[422px]
                text-[14px] 
                sm:text-[15px] sm:leading-[22px]
                md:text-[16px] md:leading-[24px]
                lg:text-[17px] lg:leading-[25px]
                xl:text-[19px] xl:leading-[27px]"
              >
                Smart social media creation that speaks your brand
                voice—consistently, and at scale.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <button
                onClick={onScrollToContact}
                className="cursor-pointer flex items-center bg-[rgba(140,69,255,0.40)] hover:bg-[rgba(140,69,255,0.50)] border border-[rgba(255,255,255,0.25)] text-[#F2F0F5] font-semibold rounded-2xl transition-all duration-200 justify-center gap-2 w-full sm:w-auto sm:min-w-[160px] lg:min-w-[180px]
                  px-4 py-3 text-sm
                  sm:px-5 sm:py-3 sm:text-base
                  lg:px-4 lg:py-4 lg:text-[16px] lg:leading-[30px] lg:tracking-[-0.4px]"
                style={{
                  boxShadow:
                    "0px 12px 16px 0px rgba(111, 17, 242, 0.25), 0px 0px 6px 3px rgba(255, 255, 255, 0.25) inset",
                }}
              >
                Try It Now
                <Image
                  src="/icons/arrow.svg"
                  alt="arrow-right"
                  width={30}
                  height={30}
                  className="rounded-3xl bg-[rgba(242,240,245,0.15)] p-2 h-6 sm:h-7 lg:h-8"
                />
              </button>
              <button
                onClick={onScrollToContact}
                className="cursor-pointer flex items-center border border-[rgba(255,255,255,0.25)] hover:border-[rgba(255,255,255,0.35)] text-[#F2F0F5] font-semibold rounded-2xl transition-all duration-200 justify-center gap-2 w-full sm:w-auto sm:min-w-[160px] lg:min-w-[180px]
                  px-4 py-3 text-sm
                  sm:px-5 sm:py-3 sm:text-base
                  lg:px-4 lg:py-4 lg:text-[16px] lg:leading-[30px] lg:tracking-[-0.4px]"
              >
                Know More
                <Image
                  src="/icons/arrow.svg"
                  alt="arrow-right"
                  width={30}
                  height={30}
                  className="rounded-3xl bg-[rgba(242,240,245,0.15)] p-2 h-6 sm:h-7 lg:h-8"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
