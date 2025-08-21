"use client";

export default function AboutUsSection() {
  return (
    <section className="relative bg-[#05000A] py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="text-center mb-12 sm:mb-16 md:mb-20 lg:mb-[68px]">
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
              ABOUT US
            </span>
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full"></div>
            <div className="flex-1 max-w-[60px] xs:max-w-[80px] sm:max-w-[100px] md:max-w-[150px] lg:max-w-[250px] h-px bg-gradient-to-l from-transparent to-gray-600"></div>
          </div>

          <h2
            className="text-center font-inter font-semibold leading-tight max-w-4xl mx-auto mb-4 sm:mb-5 px-2
            text-[24px] leading-[32px]
            xs:text-[28px] xs:leading-[36px]
            sm:text-[32px] sm:leading-[42px]
            md:text-[36px] md:leading-[48px]
            lg:text-[40px] lg:leading-[54px]
            xl:text-[43.8px] xl:leading-[62.4px]"
          >
            <span className="bg-gradient-to-r from-white via-white to-[#B372CF] bg-clip-text text-transparent">
              Discover Who We Are?
            </span>
          </h2>

          {/* Subtitle */}
          <p
            className="text-white text-center font-inter font-normal max-w-4xl mx-auto px-2
            text-[13px] leading-[20px]
            sm:text-[14px] sm:leading-[22px]
            md:text-[15px] md:leading-[23px]
            lg:text-[15.9px] lg:leading-[24px]"
          >
            Rmet facilisi arcu odio urna aenean erat. Pellentesque in vitae
            lobortis orci tincidunt facilisis. Pulvinar lacus ultricies turpis
            ur.
          </p>
        </div>

        <div className="max-w-5xl mx-auto mb-6 sm:mb-8 md:mb-12 lg:mb-16">
          <div className="relative overflow-visible">
            <div
              className="inline-flex flex-col items-center gap-6 sm:gap-[30px] rounded-2xl border text-center w-full
                p-6 sm:p-8 md:p-12 lg:p-16 xl:px-[100px] xl:py-[30px]"
              style={{
                borderRadius: "16px",
                border: "1px solid rgba(255, 255, 255, 0.15)",
                background:
                  "linear-gradient(160deg, #05000A 12.82%, #1B1125 87.18%), linear-gradient(178deg, rgba(242, 240, 245, 0.02) 1.59%, rgba(183, 130, 255, 0.20) 98.41%)",
              }}
            >
              <p
                className="text-white text-center font-inter font-normal max-w-4xl mx-auto
                text-[13px] leading-[18px]
                sm:text-[14px] sm:leading-[19px]
                md:text-[15px] md:leading-[20px]
                lg:text-[16px] lg:leading-[120%]"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est last.
              </p>

              <div className="flex flex-col items-center space-y-2 sm:space-y-3">
                <h3
                  className="text-center font-inter font-semibold leading-normal tracking-[-0.96px] bg-gradient-to-b from-white to-[#B372CF] bg-clip-text text-transparent
                  text-[16px] sm:text-[18px] lg:text-[20px]"
                >
                  Aamir
                </h3>
                <p
                  className="text-white text-center font-inter font-normal leading-normal
                  text-[13px] sm:text-[14px] lg:text-[16px]"
                >
                  CEO Marqait
                </p>

                <div className="flex items-center justify-center gap-3 sm:gap-4 lg:gap-6 mt-2 sm:mt-[10px]">
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors duration-200 p-1 hover:scale-110 transform transition-transform"
                    aria-label="Twitter"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4 sm:w-5 sm:h-5 lg:w-5 lg:h-4"
                      viewBox="0 0 20 16"
                      fill="none"
                    >
                      <path
                        d="M19.8439 1.89354C19.1196 2.21538 18.3424 2.43262 17.5239 2.52923C18.3577 2.02954 18.9984 1.23815 19.3005 0.295385C18.519 0.756923 17.6556 1.09538 16.7356 1.27508C15.9984 0.490462 14.9485 0 13.7867 0C11.5553 0 9.74789 1.808 9.74789 4.03877C9.74789 4.35508 9.78297 4.664 9.8525 4.95938C6.49435 4.78954 3.51835 3.18154 1.52635 0.738461C1.17866 1.33538 0.978658 2.02954 0.978658 2.76923C0.978658 4.17231 1.6925 5.40738 2.77558 6.13231C2.11343 6.11077 1.49066 5.92923 0.946043 5.62769V5.67692C0.946043 7.63508 2.33681 9.26769 4.18543 9.63877C3.84697 9.73108 3.49004 9.78031 3.12081 9.78031C2.8605 9.78031 2.6082 9.75569 2.36204 9.70831C2.87527 11.312 4.3682 12.48 6.13435 12.5132C4.75281 13.5963 3.01127 14.2425 1.11897 14.2425C0.792812 14.2425 0.470966 14.224 0.155273 14.1871C1.94358 15.3317 4.06666 16 6.34789 16C13.7768 16 17.8402 9.84615 17.8402 4.50769C17.8402 4.33292 17.8353 4.15815 17.8279 3.98462C18.6174 3.41538 19.3017 2.70462 19.8439 1.89354Z"
                        fill="currentColor"
                        fillOpacity="0.95"
                      />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors duration-200 p-1 hover:scale-110 transform transition-transform"
                    aria-label="Facebook"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4 sm:w-5 sm:h-5 lg:w-4 lg:h-4"
                      viewBox="0 0 17 16"
                      fill="none"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M15.9587 2.27036e-06H1.72875C1.61246 -0.000261436 1.49726 0.0224498 1.38977 0.0668318C1.28227 0.111214 1.18461 0.176392 1.10237 0.258625C1.02014 0.340857 0.954964 0.438523 0.910582 0.546016C0.8662 0.653508 0.843489 0.768708 0.843752 0.885002V15.115C0.843752 15.605 1.23875 16 1.72875 16H9.38775V9.803H7.29775V7.403H9.38775V5.62C9.38775 3.551 10.6578 2.431 12.4918 2.431C13.3668 2.431 14.1348 2.484 14.3588 2.527V4.682H13.0678C12.0648 4.682 11.8837 5.151 11.8837 5.855V7.402H14.2628L13.9528 9.802H11.8837V16H15.9587C16.4487 16 16.8437 15.605 16.8437 15.115V0.885002C16.844 0.768708 16.8213 0.653508 16.7769 0.546016C16.7325 0.438523 16.6674 0.340857 16.5851 0.258625C16.5029 0.176392 16.4052 0.111214 16.2977 0.0668318C16.1902 0.0224498 16.075 -0.000261436 15.9587 2.27036e-06Z"
                        fill="currentColor"
                        fillOpacity="0.95"
                      />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors duration-200 p-1 hover:scale-110 transform transition-transform"
                    aria-label="LinkedIn"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4 sm:w-5 sm:h-5 lg:w-4 lg:h-4"
                      viewBox="0 0 17 16"
                      fill="none"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M15.6597 0C16.3097 0 16.8438 0.512 16.8438 1.152V14.848C16.8438 15.478 16.3108 16 15.6597 16H2.02775C1.37775 16 0.84375 15.477 0.84375 14.848V1.152C0.84375 0.512 1.37675 0 2.02775 0H15.6597ZM4.40675 4.96C4.76671 4.95031 5.10868 4.80051 5.35985 4.54249C5.61103 4.28446 5.75158 3.93859 5.75158 3.5785C5.75158 3.21841 5.61103 2.87254 5.35985 2.61451C5.10868 2.35648 4.76671 2.20669 4.40675 2.197C3.63875 2.197 3.03075 2.816 3.03075 3.573C3.03075 4.341 3.63875 4.96 4.40675 4.96ZM14.4757 9.45C14.4757 7.392 14.0388 5.813 11.6278 5.813C10.4757 5.813 9.70775 6.443 9.38775 7.04H9.35575V5.995H7.08375V13.632H9.45175V9.856C9.45175 8.864 9.63275 7.893 10.8708 7.893C12.0868 7.893 12.1077 9.035 12.1077 9.92V13.632H14.4757V9.45ZM3.21175 13.633H5.59075V5.995H3.21175V13.633Z"
                        fill="currentColor"
                        fillOpacity="0.95"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Optional: Down Arrow - Uncomment if needed */}
            {/* 
            <div className="absolute -bottom-[60px] sm:-bottom-[70px] lg:-bottom-[85px] left-1/2 transform -translate-x-1/2 z-10">
              <img
                src="/svg/shape.png"
                alt="Down Arrow"
                className="flex-shrink-0 opacity-20 w-[80px] h-[70px] sm:w-[95px] sm:h-[85px] lg:w-[115.612px] lg:h-[100.612px]"
              />
            </div>
            */}
          </div>
        </div>
      </div>
    </section>
  );
}
