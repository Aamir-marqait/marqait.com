import { ChevronRight } from "lucide-react";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section
      className="pt-20 px-4 min-h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/social/hero.png')",
      }}
    >
      <div className="max-w-[70rem] mx-auto text-center">
        <nav className="flex items-center space-x-2 mb-8 sm:mb-16 md:mb-24 lg:mb-24">
          <Link
            href="/"
            className="text-white text-xs sm:text-sm"
            style={{
              fontFamily: "Inter",
              fontWeight: 600,
              fontSize: "14px",
              lineHeight: "20px",
              letterSpacing: "0%",
            }}
          >
            Home
          </Link>
          <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
          <Link
            href="/ai-tools"
            className="text-white text-xs sm:text-sm"
            style={{
              fontFamily: "Inter",
              fontWeight: 600,
              fontSize: "14px",
              lineHeight: "20px",
              letterSpacing: "0%",
            }}
          >
            AI Tools
          </Link>
          <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
          <span
            className="text-white/70 text-xs sm:text-sm"
            style={{
              fontFamily: "Inter",
              fontWeight: 600,
              fontSize: "14px",
              lineHeight: "20px",
              letterSpacing: "0%",
            }}
          >
            AI Social Media Post Creator
          </span>
        </nav>
        <div className="mb-1">
          <h2 className="text-[64px] max-w-2xl mx-auto font-bold mb-4 leading-[72px] tracking-[0%] align-middle bg-gradient-to-br from-white from-10% to-[#B372CF] to-90% bg-clip-text text-transparent">
            Free AI Social Media Post Creator
          </h2>
          <p className="text-[20px] font-normal text-white mb-8 max-w-4xl mx-auto leading-[150%] tracking-[0%] text-center align-middle">
            Generate engaging social media posts for free with a simple text
            prompt using Marqait’s free AI social media post generator.
          </p>

          <div className="flex justify-center mb-6">
            <button
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
              Generate a logo with AI
            </button>
          </div>

          {/* Feature Points */}
          <div className="flex flex-wrap justify-center gap-8 text-white/80 font-normal">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#22C55E] rounded-full"></div>
              <span className="text-[14px] leading-[20px] tracking-[0%] align-middle">
                100% Free
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#22C55E] rounded-full"></div>
              <span className="text-[14px] leading-[20px] tracking-[0%] align-middle">
                Instant Results
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#22C55E] rounded-full"></div>
              <span className="text-[14px] leading-[20px] tracking-[0%] align-middle">
                HD Quality
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
