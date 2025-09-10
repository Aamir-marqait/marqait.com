import CopilotFeatureBoxes from "./copilot-feature-boxes";
import Image from "next/image";
import { trackCTAClick } from "../../analytics";

export default function CopilotSection({
  onScrollToContact,
}: {
  onScrollToContact: any;
}) {
  return (
    <section
      id="copilot"
      className="relative bg-[#05000A] overflow-hidden py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32"
    >
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20">
          {/* COPILOT Label with Decorative Lines */}
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

          {/* Main Heading */}
          <h2
            className="text-center font-inter font-semibold max-w-4xl mx-auto px-2
            text-[24px] leading-[32px]
            xs:text-[28px] xs:leading-[36px]
            sm:text-[32px] sm:leading-[42px]
            md:text-[36px] md:leading-[48px]
            lg:text-[40px] lg:leading-[54px]
            xl:text-[43.8px] xl:leading-[62.4px]"
          >
            <span
              style={{
                background:
                  "linear-gradient(13deg, #B372CF 22.26%, #FFF 90.57%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Manage all your efforts with a smart
            </span>
            <br />
            <span className="text-white">marketing automation platform.</span>
          </h2>
        </div>

        {/* Demo Interface Container */}
        <div className="max-w-7xl mx-auto mb-8 sm:mb-12 lg:mb-16">
          <div
            className="flex justify-center items-center border rounded-2xl overflow-hidden
            min-h-[300px] sm:min-h-[320px] lg:min-h-[337px]
            p-4 sm:p-6 lg:p-[26.5px] xl:px-[46.293px]"
            style={{
              borderRadius: "16px",
              border: "1px solid rgba(255, 255, 255, 0.29)",
            }}
          >
            <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 w-full items-center">
              {/* Left Side - Text to Brandbook */}
              <div className="space-y-4 sm:space-y-6 lg:space-y-8 flex-1 text-center lg:text-left">
                <div>
                  <h3
                    className="text-white font-inter font-semibold mb-3 sm:mb-4 lg:mb-6
                    text-[20px] leading-[26px]
                    sm:text-[24px] sm:leading-[30px]
                    md:text-[28px] md:leading-[34px]
                    lg:text-[30px] lg:leading-[36px]
                    xl:text-[34.9px] xl:leading-[40px]"
                  >
                    Text to Brandbook
                  </h3>
                  <p
                    className="text-white font-inter font-normal max-w-[506px] mx-auto lg:mx-0
                    text-[14px] leading-[20px]
                    sm:text-[16px] sm:leading-[23px]
                    lg:text-[17px] lg:leading-[24px]
                    xl:text-[19px] xl:leading-[27px]"
                  >
                    Instantly generate a complete brand identity and collateral
                    package—powered by AI.
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 lg:gap-6 justify-center lg:justify-start">
                  <button
                    onClick={() => {
                      trackCTAClick("Try It Now", "Copilot Section");
                      onScrollToContact();
                    }}
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
                    onClick={() => {
                      trackCTAClick("Know More", "Copilot Section");
                      onScrollToContact();
                    }}
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

              {/* Right Side - Prompt/Output Boxes */}
              <div className="flex flex-col sm:flex-row lg:flex-row gap-3 sm:gap-4 flex-shrink-0 w-full lg:w-auto justify-center">
                {/* Prompt Box */}
                <div
                  className="rounded-lg overflow-hidden flex-1 sm:flex-none
                  w-full sm:w-[240px] md:w-[250px] lg:w-[263px]
                  h-[220px] sm:h-[240px] md:h-[260px] lg:h-[273px]"
                  style={{
                    borderRadius: "8px",
                    background: "rgba(40, 27, 61, 0.80)",
                  }}
                >
                  <div
                    className="px-3 sm:px-4 lg:px-6 py-2 sm:py-3 lg:py-4 flex justify-center"
                    style={{
                      borderRadius: "8px 8px 0px 0px",
                      background:
                        "linear-gradient(179deg, rgba(242, 240, 245, 0.10) 0.46%, rgba(198, 89, 253, 0.50) 77.63%)",
                    }}
                  >
                    <h4 className="text-white font-semibold text-xs sm:text-sm lg:text-base tracking-wider">
                      PROMPT
                    </h4>
                  </div>
                  <div className="p-3 sm:p-4 lg:px-6">
                    <p
                      className="font-inter text-[rgba(255,255,255,0.80)]
                      text-[11px] leading-[16px]
                      sm:text-[12px] sm:leading-[18px]
                      lg:text-[14px] lg:leading-[150%]"
                    >
                      I run a modern eco-friendly skincare brand called
                      &lsquo;PureGlow&rsquo;. We target women aged 25–40 who
                      care about sustainability. We want a minimalist visual
                      identity with earth-tone colors and elegant typography.
                      Please generate a complete brand book.
                    </p>
                  </div>
                </div>

                {/* Output Box */}
                <div
                  className="rounded-lg overflow-hidden flex flex-col flex-1 sm:flex-none
                  w-full sm:w-[240px] md:w-[250px] lg:w-[263px]
                  h-[220px] sm:h-[240px] md:h-[260px] lg:h-[273px]"
                  style={{
                    borderRadius: "8px",
                    background: "rgba(40, 27, 61, 0.80)",
                  }}
                >
                  <div
                    className="px-3 sm:px-4 py-2 flex items-center justify-center"
                    style={{
                      borderRadius: "8px 8px 0px 0px",
                      background:
                        "linear-gradient(179deg, rgba(242, 240, 245, 0.10) 0.46%, rgba(198, 89, 253, 0.50) 77.63%)",
                    }}
                  >
                    <h4 className="text-white font-semibold text-xs sm:text-sm tracking-wider">
                      OUTPUT
                    </h4>
                  </div>
                  <Image
                    src="/1.png"
                    alt="output"
                    width={263}
                    height={203}
                    className="flex-1 lg:w-[263px]  w-full sm:w-[240px] md:w-[250px] h-[220px] sm:h-[240px] md:h-[260px] lg:h-[203px] object-contain rounded-b-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <CopilotFeatureBoxes onScrollToContact={onScrollToContact} />
      </div>
    </section>
  );
}
