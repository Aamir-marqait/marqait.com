import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About - Marqait AI",
  description: "Marqait AI is an AI development company. Our mission is to ensure that our artificial intelligence Tools and Solutions benefit all of humanity.",
  keywords: "about Marqait AI, AI marketing automation, company mission, team, marketing technology",
  alternates: {
    canonical: "https://www.marqait.com/about",
  },
  openGraph: {
    title: "About - Marqait AI",
    description: "Marqait AI is an AI development company. Our mission is to ensure that our artificial intelligence Tools and Solutions benefit all of humanity.",
    url: "https://www.marqait.com/about",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About - Marqait AI",
    description: "Marqait AI is an AI development company. Our mission is to ensure that our artificial intelligence Tools and Solutions benefit all of humanity.",
  },
};

export default function About() {

  return (
    <div className="min-h-screen bg-[#05000A] w-full overflow-x-hidden">
      <div className="pt-5 lg:pt-5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
          {/* Header Section */}
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <h1
              className="font-bold text-white mb-6
              text-2xl sm:text-3xl md:text-4xl lg:text-[48px]"
              style={{
                fontFamily: "Inter",
                lineHeight: "1.2",
              }}
            >
              About
            </h1>
            <p
              className="text-gray-300 mx-auto max-w-4xl
              text-sm sm:text-base md:text-lg lg:text-[20px]"
              style={{
                fontFamily: "Inter",
                lineHeight: "1.6",
              }}
            >
              Marqait AI is an AI marketing automation platform. Our mission is to ensure that marketing automation benefits everyone.
            </p>
          </div>

          {/* Mission Section */}
          <div className="mb-12 lg:mb-20">
            <div className="bg-[#020103] border border-white/15 rounded-xl p-6 sm:p-8 lg:p-12">
              <div className="text-center mb-8 lg:mb-12">
                <h2 className="text-white font-inter font-bold mb-4 text-xl sm:text-2xl lg:text-[32px]">
                  Our Mission
                </h2>
                <p className="text-gray-300 text-lg sm:text-xl max-w-3xl mx-auto">
                  To democratize AI-powered marketing automation and make it accessible to businesses of all sizes.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-white font-semibold text-lg mb-2">AI-Powered</h3>
                  <p className="text-gray-400">
                    Leveraging cutting-edge AI technology to automate and optimize marketing processes.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="text-white font-semibold text-lg mb-2">For Everyone</h3>
                  <p className="text-gray-400">
                    Making marketing automation accessible to startups, SMBs, and enterprises alike.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h3 className="text-white font-semibold text-lg mb-2">Innovation</h3>
                  <p className="text-gray-400">
                    Continuously pushing the boundaries of what&apos;s possible in marketing automation.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Story Section */}
          <div className="mb-12 lg:mb-20">
            <div className="bg-[#020103] border border-white/15 rounded-xl p-6 sm:p-8 lg:p-12">
              <h2 className="text-white font-inter font-bold mb-6 text-xl sm:text-2xl lg:text-[28px]">
                Our Story
              </h2>
              <div className="space-y-6 text-gray-300">
                <p className="text-lg">
                  Marqait AI was born from a simple observation: marketing automation was too complex, 
                  too expensive, and too exclusive. While large enterprises had access to sophisticated 
                  marketing tools and dedicated teams, smaller businesses were left behind.
                </p>
                <p className="text-lg">
                  We envisioned a world where every business, from the chai-wala on the street corner 
                  to the ambitious startup, could access the same powerful marketing automation capabilities 
                  that Fortune 500 companies use to drive growth.
                </p>
                <p className="text-lg">
                  Our AI-powered platform breaks down these barriers, offering intuitive tools that 
                  require no technical expertise, affordable pricing that scales with your business, 
                  and results that speak for themselves.
                </p>
              </div>
            </div>
          </div>

          {/* Values Section */}
          <div className="mb-12 lg:mb-20">
            <div className="bg-[#020103] border border-white/15 rounded-xl p-6 sm:p-8 lg:p-12">
              <h2 className="text-white font-inter font-bold mb-8 text-xl sm:text-2xl lg:text-[28px] text-center">
                Our Values
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                <div className="space-y-4">
                  <h3 className="text-white font-semibold text-lg">Accessibility</h3>
                  <p className="text-gray-300">
                    We believe powerful marketing tools should be accessible to everyone, 
                    regardless of technical expertise or budget constraints.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-white font-semibold text-lg">Transparency</h3>
                  <p className="text-gray-300">
                    No hidden fees, no complex contracts. We believe in clear, 
                    honest communication about our services and pricing.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-white font-semibold text-lg">Innovation</h3>
                  <p className="text-gray-300">
                    We continuously push the boundaries of AI and automation to 
                    deliver cutting-edge solutions that drive real results.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-white font-semibold text-lg">Empowerment</h3>
                  <p className="text-gray-300">
                    Our goal is to empower businesses to achieve more with less, 
                    focusing on strategy while we handle the execution.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-900/20 to-blue-900/20 border border-white/15 rounded-xl p-6 sm:p-8 lg:p-12">
              <h2 className="text-white font-inter font-bold mb-4 text-xl sm:text-2xl lg:text-[28px]">
                Ready to Transform Your Marketing?
              </h2>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto text-lg">
                Join thousands of businesses that trust Marqait AI to automate their marketing 
                and drive meaningful growth.
              </p>
              <a 
                href="/contact"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl border border-[rgba(255,255,255,0.40)] bg-[rgba(140,69,255,0.40)] transition-all duration-200 hover:bg-[rgba(140,69,255,0.50)] hover:border-[rgba(255,255,255,0.35)] font-semibold text-white text-lg"
                style={{
                  boxShadow: "0px 0px 6px 3px rgba(255, 255, 255, 0.25) inset",
                }}
              >
                Get Started Today
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 12H19M19 12L12 5M19 12L12 19"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}