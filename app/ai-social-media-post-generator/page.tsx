import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Free AI Social Media Post Generator - Marqait AI",
  description: "Generate engaging social media posts for free with a simple text prompt using Marqait's free AI social media post generator.",
  keywords: "AI social media post generator, free social media generator, social media content creation, AI marketing tools",
  alternates: {
    canonical: "https://www.marqait.com/ai-social-media-post-generator"
  },
  openGraph: {
    title: "Free AI Social Media Post Generator - Marqait AI",
    description: "Generate engaging social media posts for free with a simple text prompt using Marqait's free AI social media post generator.",
    url: "https://www.marqait.com/ai-social-media-post-generator",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Free AI Social Media Post Generator - Marqait AI",
    description: "Generate engaging social media posts for free with a simple text prompt using Marqait's free AI social media post generator."
  }
};

export default function AISocialMediaPostGenerator() {

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
                Free AI Social Media Post Generator
              </h1>
              
              <p className="text-white/80 font-inter max-w-4xl mx-auto text-lg sm:text-xl lg:text-2xl">
                Generate engaging social media posts for free with a simple text prompt using Marqait&apos;s AI-powered social media post generator.
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
                Get Started Free
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
              Why Choose Our AI Social Media Generator?
            </h2>
            <p className="text-white/70 text-lg sm:text-xl max-w-3xl mx-auto">
              Create professional, engaging social media content in seconds with our advanced AI technology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12">
            {/* Feature 1 */}
            <div className="bg-black/30 border border-white/15 rounded-2xl p-6 sm:p-8 hover:border-purple-400/30 transition-all duration-300">
              <div className="mb-6">
                <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                  Lightning Fast Generation
                </h3>
                <p className="text-white/70">
                  Generate professional social media posts in seconds with just a simple text prompt.
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
                  Multiple Platform Support
                </h3>
                <p className="text-white/70">
                  Create content optimized for Facebook, Instagram, Twitter, LinkedIn, and more.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="bg-black/30 border border-white/15 rounded-2xl p-6 sm:p-8 hover:border-purple-400/30 transition-all duration-300">
              <div className="mb-6">
                <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                  100% Free to Use
                </h3>
                <p className="text-white/70">
                  No hidden fees, no subscriptions. Generate unlimited social media posts for free.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-purple-900/20 to-transparent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Create Amazing Social Media Content?
          </h2>
          <p className="text-white/70 text-lg sm:text-xl mb-8">
            Join thousands of content creators who trust Marqait AI for their social media needs.
          </p>
          <Link
            href="/contact"
            className="cursor-pointer inline-flex items-center bg-[rgba(140,69,255,0.40)] hover:bg-[rgba(140,69,255,0.50)] border border-[rgba(255,255,255,0.25)] text-[#F2F0F5] font-semibold rounded-2xl transition-all duration-200 justify-center gap-3 px-8 py-4 text-lg"
            style={{
              boxShadow:
                "0px 12px 16px 0px rgba(111, 17, 242, 0.25), 0px 0px 6px 3px rgba(255, 255, 255, 0.25) inset",
            }}
          >
            Start Generating Posts Now
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