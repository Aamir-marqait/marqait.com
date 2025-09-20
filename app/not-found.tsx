"use client";

import { Home, ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function NotFoundSection() {
  const router = useRouter();

  const handleGoBack = () => {
    router.back();
  };

  const handleGoHome = () => {
    router.push("/");
  };

  return (
    <section className="relative min-h-screen bg-[#05000A] overflow-hidden flex items-center">
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Purple gradient glow */}
        <div
          className="absolute top-1/3 left-1/2 transform -translate-x-1/2 w-96 h-96 rounded-full opacity-20"
          style={{
            background: "radial-gradient(circle, #B372CF 0%, transparent 70%)",
            filter: "blur(120px)",
          }}
        />

        {/* Scattered particles */}
        <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-white rounded-full opacity-60"></div>
        <div className="absolute top-1/3 right-1/3 w-0.5 h-0.5 bg-purple-300 rounded-full opacity-50"></div>
        <div className="absolute top-1/2 left-1/5 w-1.5 h-1.5 bg-white rounded-full opacity-70"></div>
        <div className="absolute top-2/3 right-1/4 w-0.5 h-0.5 bg-purple-400 rounded-full opacity-40"></div>
        <div className="absolute top-3/4 left-1/3 w-1 h-1 bg-white rounded-full opacity-50"></div>
        <div className="absolute top-1/5 right-1/5 w-0.5 h-0.5 bg-purple-200 rounded-full opacity-60"></div>
        <div className="absolute top-2/5 left-2/5 w-1 h-1 bg-white rounded-full opacity-40"></div>
        <div className="absolute top-3/5 right-1/6 w-0.5 h-0.5 bg-purple-300 rounded-full opacity-70"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-16 sm:py-20 lg:py-24">
        <div className="text-center space-y-8 sm:space-y-12 lg:space-y-16">
          {/* ERROR Label with Decorative Lines */}
          <div className="flex items-center justify-center mb-8 sm:mb-12">
            <div className="flex-1 max-w-[100px] sm:max-w-[150px] lg:max-w-[250px] h-px bg-gradient-to-r from-transparent to-purple-400/60"></div>
            <div className="w-2 h-2 bg-white rounded-full"></div>
            <span className="text-[#F2F0F5] font-inter text-xs sm:text-sm font-bold leading-[16.8px] sm:leading-[19.6px] tracking-[0.8px] sm:tracking-[1px] uppercase mx-4 sm:mx-6">
              ERROR
            </span>
            <div className="w-2 h-2 bg-white rounded-full"></div>
            <div className="flex-1 max-w-[100px] sm:max-w-[150px] lg:max-w-[250px] h-px bg-gradient-to-l from-transparent to-purple-400/60"></div>
          </div>

          {/* 404 Large Text */}
          <div className="space-y-4 sm:space-y-6">
            <h1 className="text-8xl sm:text-9xl md:text-[12rem] lg:text-[14rem] xl:text-[16rem] font-bold leading-none">
              <span
                style={{
                  background:
                    "linear-gradient(135deg, #B372CF 0%, #8B5FBF 50%, #6B46C1 100%)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                404
              </span>
            </h1>
          </div>

          {/* Main Message */}
          <div className="space-y-4 sm:space-y-6 max-w-3xl mx-auto">
            <h2 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              Page Not Found
            </h2>
            <p className="text-gray-300 text-base sm:text-lg lg:text-xl xl:text-2xl leading-relaxed">
              The page you&apos;re looking for seems to have vanished into the
              digital void. Our AI is working to locate it, but in the meantime,
              let&apos;s get you back on track.
            </p>
          </div>

          {/* AI Quote */}
          <div className="max-w-2xl mx-auto">
            <blockquote className="border-l-4 border-purple-500 pl-4 sm:pl-6 text-left">
              <p className="text-white text-base sm:text-lg lg:text-xl font-medium leading-relaxed italic">
                &ldquo;Even the most advanced AI occasionally takes a wrong
                turn. Let&apos;s navigate back together.&rdquo;
              </p>
            </blockquote>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 lg:gap-8 pt-8 sm:pt-12">
            <button
              onClick={handleGoHome}
              className=" cursor-pointer flex items-center transition-all duration-200 justify-center gap-2"
              style={{
                cursor: "pointer",
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
              <Home className="w-5 h-5 sm:w-6 sm:h-6" />
              Back to Home
            </button>

            <button
              onClick={handleGoBack}
              className=" cursor-pointer flex items-center transition-all duration-200 justify-center gap-2"
              style={{
                cursor: "pointer",
                borderRadius: "15px",
                borderWidth: "1px",
                paddingTop: "6px",
                paddingRight: "11px",
                paddingBottom: "6px",
                paddingLeft: "11px",

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
              <ArrowLeft className="w-5 h-5 sm:w-6 sm:h-6" />
              Go Back
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
