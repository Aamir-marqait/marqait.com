import Link from "next/link";
import type { Metadata } from "next";
import { generateSitemapSections } from "../../utils/sitemapUtils";

export const metadata: Metadata = {
  title: "Site Map - Marqait AI",
  description: "Navigate through all Marqait AI pages including AI Tools like BrandMark AI, ContentSpark AI, and AI Solutions for healthcare, startups, e-commerce and more.",
  keywords: "sitemap, navigation, AI tools, AI solutions, BrandMark AI, ContentSpark AI, marketing automation, website structure",
};

export default function Sitemap() {
  // Generate sitemap sections dynamically
  const sitemapSections = generateSitemapSections();

  return (
    <div className="min-h-screen bg-[#05000A] w-full overflow-x-hidden">
      <div className="pt-5 lg:pt-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
          {/* Header Section */}
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h1
              className="font-bold text-white mb-4 sm:mb-6
              text-2xl sm:text-3xl md:text-4xl lg:text-[48px]"
              style={{
                fontFamily: "Inter",
                lineHeight: "1.2",
              }}
            >
              Marqait AI Site Map
            </h1>
            <p
              className="text-gray-300 mx-auto max-w-3xl
              text-sm sm:text-base md:text-lg lg:text-[18px]"
              style={{
                fontFamily: "Inter",
                lineHeight: "1.6",
              }}
            >
              Navigate through all pages and resources available on Marqait AI.
              Find everything from our AI-powered marketing automation solutions
              to insights and support.
            </p>
          </div>

          {/* Sitemap Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
            {sitemapSections.map((section, sectionIndex) => (
              <div
                key={sectionIndex}
                className="bg-[#020103] border border-white/15 rounded-xl p-4 sm:p-6 lg:p-8"
              >
                <h2
                  className="text-white font-inter font-bold mb-4 sm:mb-6
                  text-lg sm:text-xl lg:text-[24px]"
                  style={{
                    lineHeight: "1.3",
                  }}
                >
                  {section.title}
                </h2>

                <div className="space-y-3 sm:space-y-4 lg:space-y-5">
                  {section.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="group">
                      {item.url.startsWith("http") ? (
                        <a
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block"
                        >
                          <h3
                            className="text-[#8C45FF] group-hover:text-purple-300 transition-colors duration-200 font-inter font-semibold mb-1 sm:mb-2
                            text-sm sm:text-base lg:text-[16px]"
                            style={{
                              lineHeight: "1.4",
                            }}
                          >
                            {item.title} ↗
                          </h3>
                          <p
                            className="text-gray-400 group-hover:text-gray-300 transition-colors duration-200 font-inter font-normal
                            text-xs sm:text-sm lg:text-[14px]"
                            style={{
                              lineHeight: "1.5",
                            }}
                          >
                            {item.description}
                          </p>
                        </a>
                      ) : (
                        <Link href={item.url} className="block">
                          <h3
                            className="text-[#8C45FF] group-hover:text-purple-300 transition-colors duration-200 font-inter font-semibold mb-1 sm:mb-2
                            text-sm sm:text-base lg:text-[16px]"
                            style={{
                              lineHeight: "1.4",
                            }}
                          >
                            {item.title}
                          </h3>
                          <p
                            className="text-gray-400 group-hover:text-gray-300 transition-colors duration-200 font-inter font-normal
                            text-xs sm:text-sm lg:text-[14px]"
                            style={{
                              lineHeight: "1.5",
                            }}
                          >
                            {item.description}
                          </p>
                        </Link>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA Section */}
          <div className="text-center mt-12 sm:mt-16 lg:mt-20">
            <div className="bg-[#020103] border border-white/15 rounded-xl p-6 sm:p-8 lg:p-10">
              <h2
                className="text-white font-inter font-bold mb-3 sm:mb-4
                text-xl sm:text-2xl lg:text-[28px]"
                style={{
                  lineHeight: "1.3",
                }}
              >
                Ready to Get Started?
              </h2>
              <p
                className="text-gray-300 mb-4 sm:mb-6 max-w-2xl mx-auto
                text-sm sm:text-base lg:text-[16px]"
                style={{
                  fontFamily: "Inter",
                  lineHeight: "1.6",
                }}
              >
                Transform your marketing with AI-powered automation. Contact our
                team to learn how Marqait can help scale your business.
              </p>
              <Link href="/contacts">
                <button
                  className="cursor-pointer flex items-center gap-2 px-6 py-3 sm:px-8 sm:py-3 lg:px-10 lg:py-4 rounded-2xl border border-[rgba(255,255,255,0.40)] bg-[rgba(140,69,255,0.40)] transition-all duration-200 hover:bg-[rgba(140,69,255,0.50)] hover:border-[rgba(255,255,255,0.35)] font-semibold mx-auto
                  text-sm sm:text-base lg:text-[16px]"
                  style={{
                    boxShadow:
                      "0px 0px 6px 3px rgba(255, 255, 255, 0.25) inset",
                    color: "#F2F0F5",
                    lineHeight: "1.4",
                  }}
                >
                  Contact Us Today
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="group-hover:translate-x-1 transition-transform duration-200"
                  >
                    <path
                      d="M5 12H19M19 12L12 5M19 12L12 19"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
