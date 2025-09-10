import { Slider3D } from "./slider-3d";

export default function CopilotSection() {
  return (
    <section
      id="copilot"
      className="relative bg-[#05000A] overflow-hidden py-12 sm:py-16 md:py-20 lg:py-10 xl:py-10"
    >
      <div className="relative  mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20">
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
              COPILOT
            </span>
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full"></div>
            <div className="flex-1 max-w-[60px] xs:max-w-[80px] sm:max-w-[100px] md:max-w-[150px] lg:max-w-[250px] h-px bg-gradient-to-l from-transparent to-gray-600"></div>
          </div>

          <h2
            className="text-center font-inter font-semibold max-w-4xl mx-auto px-2
            text-[24px] leading-[32px]
            xs:text-[28px] xs:leading-[36px]
            sm:text-[32px] sm:leading-[42px]
            md:text-[36px] md:leading-[48px]
            lg:text-[40px] lg:leading-[54px]
            xl:text-[43.8px] xl:leading-[62.4px]"
          >
            <span className="text-white">
              Manage all your efforts with a smart
            </span>
            <br />
            <span className="text-white">marketing automation platform.</span>
          </h2>
        </div>
        <div className="w-full ">
          <Slider3D />
        </div>
      </div>
    </section>
  );
}
