import Image from "next/image";
import { motion } from "framer-motion";
import { trackCTAClick } from "../../analytics";

export default function HeroSection({
  onScrollToContact,
}: {
  onScrollToContact: any;
}) {
  const handleScrollToContact = () => {
    trackCTAClick("Join Waitlist", "Hero Section");
    if (onScrollToContact) {
      onScrollToContact();
    }
  };

  return (
    <section className="relative  overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 pt-1 sm:pt-1 md:pt-1 lg:pt-1">
        <div className="text-center space-y-6 sm:space-y-8 lg:space-y-6">
          {/* Main Heading */}
          <div className="relative">
            {/* Background blur elements */}
            <div
              className="absolute rounded-full opacity-100"
              style={{
                width: "300px",
                height: "298.3px",
                top: "123.59px",
                left: "11.54px",
                transform: "rotate(1.45deg)",
                filter: "blur(150px)",
                background: "linear-gradient(180deg, #850DB8 10%, #05000a 50%)",
              }}
            />
            <div
              className="absolute rounded-full opacity-100"
              style={{
                width: "300px",
                height: "298.3px",
                top: "123.59px",
                right: "11.54px",
                transform: "rotate(-1.45deg)",
                filter: "blur(150px)",
                background: "linear-gradient(180deg, #850DB8 10%, #05000a 50%)",
              }}
            />

            {/* AI-Powered Marketing Automation text */}
            <div className="relative z-10 mt-10">
              <motion.h1
                className="font-inter text-white font-medium text-center tracking-tight
                text-[32px] leading-[38px]
                xs:text-[20px] xs:leading-[24px] xs:tracking-[-2px]
                sm:text-[30px] sm:leading-[36px] sm:tracking-[-2.5px]
                md:text-[40px] md:leading-[48px] md:tracking-[-3px]
                lg:text-[52px] lg:leading-[62px] lg:tracking-[-3.5px]
                xl:text-[48px] xl:leading-[100px] xl:tracking-[-4.149px]"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                AI-Powered
              </motion.h1>
              <motion.h1
                className="font-inter font-medium text-center tracking-tight -mt-3
                  text-[32px] leading-[38px]
                  xs:text-[20px] xs:leading-[24px] xs:tracking-[-2px] xs:-mt-2
                  sm:text-[30px] sm:leading-[36px] sm:tracking-[-2.5px] sm:-mt-2
                  md:text-[40px] md:leading-[48px] md:tracking-[-3px] md:-mt-3
                  lg:text-[50px] lg:leading-[62px] lg:tracking-[-3.5px] lg:-mt-4
                  xl:text-[48px] xl:leading-[65px] xl:tracking-[-4.149px] xl:-mt-4"
                style={{
                  background: "linear-gradient(180deg, #FFF 0%, #B372CF 80%)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              >
                Marketing Automation
              </motion.h1>
            </div>
          </div>

          {/* Subtitle */}
          <div className="max-w-3xl lg:max-w-[600px] mx-auto space-y-1 sm:space-y-2 text-white px-2 sm:px-0">
            <p
              className="font-medium lg:font-normal text-center
              text-[14px] leading-[21px] tracking-[-0.3px]
              sm:text-[16px] sm:leading-[24px] sm:tracking-[-0.4px]
              lg:text-[24px] lg:leading-[150%] lg:tracking-[-0.5px]
              text-white lg:text-[rgba(255,255,255,0.90)]"
            >
              From chai-wala to creator, run campaigns with Fortune precision.
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
               md:text-base md:min-w-[160px] md:h-[55px] md:leading-[28px]
                lg:w-full lg:h-full lg:text-[15.6px] lg:leading-[20px] lg:tracking-[0px] lg:font-[500]"
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
        </div>
      </div>
    </section>
  );
}
