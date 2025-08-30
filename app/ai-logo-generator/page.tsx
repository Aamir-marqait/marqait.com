import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Free AI Logo Generator - Online Text to Logo Maker",
  description: "Generate unique logo with a text prompt using Marqait's free AI logo generator. Input simple text prompts and our AI makes logo design online for you.",
  keywords: "AI logo generator, free logo maker, text to logo, AI design tools, online logo generator",
  alternates: {
    canonical: "https://www.marqait.com/ai-logo-generator"
  },
  openGraph: {
    title: "Free AI Logo Generator - Online Text to Logo Maker",
    description: "Generate unique logo with a text prompt using Marqait's free AI logo generator. Input simple text prompts and our AI makes logo design online for you.",
    url: "https://www.marqait.com/ai-logo-generator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Free AI Logo Generator - Online Text to Logo Maker",
    description: "Generate unique logo with a text prompt using Marqait's free AI logo generator. Input simple text prompts and our AI makes logo design online for you."
  }
};

export default function AILogoGenerator() {

  return (
    <div className="min-h-screen bg-[#05000A] w-full overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] overflow-hidden">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 w-full h-full opacity-100"
            style={{
              backgroundImage: "url('/blog/stars.svg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-16 sm:py-20 lg:py-24">
          <div className="text-center space-y-8 sm:space-y-12 lg:space-y-16">
            {/* Main Heading */}
            <div className="space-y-4 sm:space-y-6">
              <h1
                className="font-inter font-bold leading-tight tracking-tight text-white
                text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl"
                style={{
                  background: "linear-gradient(180deg, #FFF 0%, #B372CF 100%)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Free AI Logo Generator
              </h1>
              
              <p className="text-white/80 font-inter max-w-4xl mx-auto text-lg sm:text-xl lg:text-2xl">
                Generate unique logos with a text prompt using Marqait&apos;s free AI logo generator. Input simple text prompts and our AI creates professional logo designs online for you.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
              <Link
                href="/contact"
                className="cursor-pointer flex items-center bg-[rgba(140,69,255,0.40)] hover:bg-[rgba(140,69,255,0.50)] border border-[rgba(255,255,255,0.25)] text-[#F2F0F5] font-semibold rounded-2xl transition-all duration-200 justify-center gap-2 w-full sm:w-auto sm:min-w-[200px] px-6 py-4 text-lg"
                style={{
                  boxShadow:
                    "0px 12px 16px 0px rgba(111, 17, 242, 0.25), 0px 0px 6px 3px rgba(255, 255, 255, 0.25) inset",
                }}
              >
                Create Logo Free
                <Image
                  src="/icons/arrow.svg"
                  alt="arrow-right"
                  width={30}
                  height={30}
                  className="rounded-3xl bg-[rgba(242,240,245,0.15)] p-2 h-8"
                />
              </Link>
              
              <Link
                href="/ai-tools"
                className="cursor-pointer flex items-center border border-[rgba(255,255,255,0.25)] hover:border-[rgba(255,255,255,0.35)] text-[#F2F0F5] font-semibold rounded-2xl transition-all duration-200 justify-center gap-2 w-full sm:w-auto sm:min-w-[200px] px-6 py-4 text-lg"
              >
                View All AI Tools
                <Image
                  src="/icons/arrow.svg"
                  alt="arrow-right"
                  width={30}
                  height={30}
                  className="rounded-3xl bg-[rgba(242,240,245,0.15)] p-2 h-8"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Why Choose Our AI Logo Generator?
            </h2>
            <p className="text-white/70 text-lg sm:text-xl max-w-3xl mx-auto">
              Create professional, unique logos in minutes with our advanced AI technology and intuitive design process.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12">
            {/* Feature 1 */}
            <div className="bg-black/30 border border-white/15 rounded-2xl p-6 sm:p-8 hover:border-purple-400/30 transition-all duration-300">
              <div className="mb-6">
                <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                  Simple Text to Logo
                </h3>
                <p className="text-white/70">
                  Just describe your vision in simple text and watch our AI create stunning logos instantly.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="bg-black/30 border border-white/15 rounded-2xl p-6 sm:p-8 hover:border-purple-400/30 transition-all duration-300">
              <div className="mb-6">
                <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                  </svg>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                  High-Quality Designs
                </h3>
                <p className="text-white/70">
                  Get professional-grade logos suitable for business cards, websites, and marketing materials.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="bg-black/30 border border-white/15 rounded-2xl p-6 sm:p-8 hover:border-purple-400/30 transition-all duration-300">
              <div className="mb-6">
                <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                  Completely Free
                </h3>
                <p className="text-white/70">
                  No watermarks, no hidden costs. Create unlimited logos for free with our AI logo generator.
                </p>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="bg-black/30 border border-white/15 rounded-2xl p-6 sm:p-8 hover:border-purple-400/30 transition-all duration-300">
              <div className="mb-6">
                <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                  Instant Results
                </h3>
                <p className="text-white/70">
                  Get your logo designs in seconds, not hours. Perfect for when you need quick branding solutions.
                </p>
              </div>
            </div>

            {/* Feature 5 */}
            <div className="bg-black/30 border border-white/15 rounded-2xl p-6 sm:p-8 hover:border-purple-400/30 transition-all duration-300">
              <div className="mb-6">
                <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                  Multiple Formats
                </h3>
                <p className="text-white/70">
                  Download your logos in various formats including PNG, SVG, and high-resolution files.
                </p>
              </div>
            </div>

            {/* Feature 6 */}
            <div className="bg-black/30 border border-white/15 rounded-2xl p-6 sm:p-8 hover:border-purple-400/30 transition-all duration-300">
              <div className="mb-6">
                <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                  AI-Powered Creativity
                </h3>
                <p className="text-white/70">
                  Our advanced AI understands design principles to create logos that perfectly match your vision.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-transparent to-purple-900/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              How It Works
            </h2>
            <p className="text-white/70 text-lg sm:text-xl max-w-3xl mx-auto">
              Creating your perfect logo is as simple as 1-2-3
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 lg:gap-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-purple-400">1</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
                Describe Your Logo
              </h3>
              <p className="text-white/70">
                Simply type what you want your logo to look like using natural language.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-purple-400">2</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
                AI Creates Designs
              </h3>
              <p className="text-white/70">
                Our AI processes your description and generates multiple unique logo options.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-purple-400">3</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
                Download & Use
              </h3>
              <p className="text-white/70">
                Choose your favorite design and download it in multiple formats ready to use.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-purple-900/20 to-transparent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Create Your Perfect Logo?
          </h2>
          <p className="text-white/70 text-lg sm:text-xl mb-8">
            Join thousands of businesses who trust Marqait AI for their logo design needs.
          </p>
          <Link
            href="/contact"
            className="cursor-pointer inline-flex items-center bg-[rgba(140,69,255,0.40)] hover:bg-[rgba(140,69,255,0.50)] border border-[rgba(255,255,255,0.25)] text-[#F2F0F5] font-semibold rounded-2xl transition-all duration-200 justify-center gap-3 px-8 py-4 text-lg"
            style={{
              boxShadow:
                "0px 12px 16px 0px rgba(111, 17, 242, 0.25), 0px 0px 6px 3px rgba(255, 255, 255, 0.25) inset",
            }}
          >
            Generate Your Logo Now
            <Image
              src="/icons/arrow.svg"
              alt="arrow-right"
              width={30}
              height={30}
              className="rounded-3xl bg-[rgba(242,240,245,0.15)] p-2 h-8"
            />
          </Link>
        </div>
      </section>
    </div>
  );
}