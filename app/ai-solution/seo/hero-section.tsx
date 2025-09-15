import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

export default function HeroSection() {
  return (
    <div className="relative flex min-h-screen flex-col lg:flex-row">
      {/* Left Content */}
      <div className="relative z-10 px-4  sm:px-8 md:px-16 lg:px-44 mt-8 sm:mt-12 lg:mt-16 flex-1">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 mb-8 sm:mb-16 md:mb-24 lg:mb-36">
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
            AI for SEO
          </span>
        </nav>

        <h1
          className="text-white max-w-full sm:max-w-[500px] md:max-w-[550px] lg:max-w-[615px] font-bold mb-4 sm:mb-6 text-2xl sm:text-3xl md:text-4xl"
          style={{
            fontSize: "42px", // This will be overridden by responsive classes on smaller screens
            fontFamily: "Inter",
            fontWeight: 700,
            lineHeight: "1.2",
            letterSpacing: "-1%",
          }}
        >
          AI for SEO - AI SEO Automation Services
        </h1>

        <p
          className="text-white/90 mb-6 sm:mb-8 max-w-full sm:max-w-[500px] md:max-w-[550px] lg:max-w-1/2  text-base sm:text-lg md:text-xl"
          style={{
            fontSize: "20px", // This will be overridden by responsive classes on smaller screens
            fontFamily: "Inter",
            fontWeight: 400,
            lineHeight: "1.6",
            letterSpacing: "0%",
          }}
        >
          Marqait AI offers AI SEO automation services for search engine
          optimization. Use AI for SEO to improve a website visibility and
          ranking in search engines.
        </p>
        <Link href={"/contact"}>
          <button
            className="text-white transition-colors w-full sm:w-auto text-sm sm:text-base"
            style={{
              paddingTop: "8px",
              paddingLeft: "12px",
              paddingRight: "12px",
              paddingBottom: "8px",
              fontFamily: "Inter",
              fontWeight: 600,
              fontSize: "16px",
              lineHeight: "28px",
              letterSpacing: "0%",
              textAlign: "center",
              background:
                "linear-gradient(180.68deg, rgba(184, 18, 255, 0.85) -29.88%, rgba(110, 11, 153, 0.85) 99.98%)",
              borderRadius: "12px",
              border: "none",
              cursor: "pointer",
            }}
          >
            Book a Free Consultation
          </button>
        </Link>
      </div>

      <div className="hidden sm:block absolute sm:relative sm:w-full md:w-1/2 lg:absolute lg:right-0 lg:top-[18px] lg:w-1/2 h-64 sm:h-80 md:h-96 lg:h-full mt-8 sm:mt-0">
        <Image
          src="/seo/hero-image.png"
          alt="AI SEO Hero Image"
          fill
          className="object-cover sm:object-contain lg:object-fill lg:object-left rounded-lg sm:rounded-none"
        />
      </div>
    </div>
  );
}
