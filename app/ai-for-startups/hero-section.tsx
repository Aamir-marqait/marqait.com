import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-[70rem] mx-auto">
        <nav className="flex items-center space-x-2">
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
            href="/ai-solutions"
            className="text-white text-xs sm:text-sm"
            style={{
              fontFamily: "Inter",
              fontWeight: 600,
              fontSize: "14px",
              lineHeight: "20px",
              letterSpacing: "0%",
            }}
          >
            AI Solutions
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
            AI For Startups
          </span>
        </nav>
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            {/* Content */}
            <div className="space-y-8 mt-24">
              <h2 className="text-[48px] font-bold text-white leading-[130%] tracking-[-0.05em] align-middle font-inter">
                AI for Startups - Grow the Business with AI
              </h2>

              <p className="text-[18px] font-normal text-white/90 leading-[150%] tracking-[0%] align-middle font-inter">
                AI for startup to grow with AI-powered automation solutions.
                Enhanced decision-making, operational efficiency, personalized
                customer engagement.
              </p>

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
                Book a Free Consultation
              </button>
            </div>
          </div>

          {/* Illustration */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-xl">
              <Image
                src="/startup/hero.png"
                alt="3D illustration of ecommerce elements including storefront, gift boxes, shopping bags, and credit card"
                width={500}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
