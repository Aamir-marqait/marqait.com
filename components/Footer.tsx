/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import { trackCTAClick } from "@/analytics";

export default function Footer() {
  const pathname = usePathname();
  const [email, setEmail] = useState("");
  const [isSubscribing, setIsSubscribing] = useState(false);
  const [openAccordion, setOpenAccordion] = useState<string | null>("platform");

  const toggleAccordion = (section: string) => {
    setOpenAccordion(openAccordion === section ? null : section);
  };

  const handleSubscribe = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubscribing(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("Subscribed:", email);
    setEmail("");
    setIsSubscribing(false);
  };

  const footerLinks: {
    aiTools: Array<{ text: string; url: string }>;
    aiSolutions: Array<{ text: string; url: string }>;
    quickLinks: Array<{ text: string; url: string }>;
  } = {
    aiTools: [
      { text: "AI Logo Generator", url: "/ai-logo-generator" },
      {
        text: "AI Social Media Post Generator",
        url: "/ai-social-media-post-generator",
      },
      { text: "AI BrandBook Generator", url: "/ai-brandbook-generator" },
      { text: "AI Reel Generator", url: "/ai-reel-generator" },
      { text: "AI Campaign Generator", url: "/ai-ad-generator" },
      { text: "AI Image Editor", url: "/ai-image-editor" },
      { text: "Gaming Logo Maker", url: "/ai-solutions/gaming-logo-maker" },
      {
        text: "LinkedIn Carousel Generator",
        url: "/ai-solutions/free-linkedin-carousel-generator",
      },
      { text: "Marketing Strategy Generator", url: "/marketing-strategy-generator" },
      { text: "Business Strategy Generator", url: "/business-strategy-generator" },
    ],
    aiSolutions: [
      { text: "Custom AI Solutions", url: "/custom-ai-solutions" },
      { text: "AI For Healthcare", url: "/ai-for-healthcare" },
      { text: "AI For Startups", url: "/ai-for-startups" },
      { text: "AI For Customer Service", url: "/ai-for-customer-service" },
      { text: "AI For Retails", url: "/ai-for-retails" },
      { text: "AI Agent Development", url: "/ai-agent-development" },
      { text: "AI For SEO", url: "/ai-for-seo" },
      { text: "AI For E-Commerce", url: "/ai-for-ecommerce" },
    ],
    quickLinks: [
      { text: "Contact Us", url: "/contact" },
      { text: "Site Map", url: "/sitemap" },
      { text: "Blogs", url: "/ai-blog" },
      { text: "Terms of Service", url: "/terms" },
      { text: "Privacy Policy", url: "/privacy-policy" },
    ],
  };

  return (
    <footer className="bg-[#020103] text-white">
      <div className="border-t border-white/15"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="py-8 sm:py-12 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12">
            <div className="lg:col-span-4 space-y-3 sm:space-y-4 lg:space-y-6">
              <div className="flex items-center space-x-3">
                <Image
                  src="/svg/footerlogo.svg"
                  alt="Marqait AI Logo"
                  width={48}
                  height={48}
                  className="h-8 sm:h-10 w-auto"
                />
              </div>
              <div
                className="font-normal leading-[21px] space-y-1
                text-sm sm:text-base"
              >
                <p>
                  Marqait AI is an AI development company that provides AI
                  solutions, marketing automation, and advanced AI tools. It
                  offers custom AI solutions, including AI for Healthcare, AI
                  for Startups, AI for Customer Service, AI for Retail, AI for
                  SEO, AI for E-Commerce, and AI Agent Development.
                  <br /> <br /> Generate social media posts, design logos,
                  create reels, run ad campaigns, build brandbooks, or edit
                  photos online with Marqait AI Tools.
                </p>
              </div>
            </div>

            <div className="lg:col-span-8">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
                {/* AI Tools Column */}
                <div className="space-y-3 sm:space-y-4 lg:space-y-6">
                  <h3
                    className="text-white font-inter font-semibold leading-5 tracking-[0.7px] uppercase
                    text-xs sm:text-sm"
                  >
                    AI TOOLS
                  </h3>
                  <ul className="space-y-2 sm:space-y-3 lg:space-y-4">
                    {footerLinks.aiTools.map((link, index) => (
                      <li key={index}>
                        <Link
                          href={link.url}
                          onClick={() => trackCTAClick(link.text, "Footer")}
                          className="text-white/90 hover:text-white hover:underline transition-colors duration-200 font-inter font-normal leading-6
                            text-sm sm:text-base"
                        >
                          {link.text}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* AI Solutions Column */}
                <div className="space-y-3 sm:space-y-4 lg:space-y-6">
                  <h3
                    className="text-white font-inter font-semibold leading-5 tracking-[0.7px] uppercase
                    text-xs sm:text-sm"
                  >
                    AI SOLUTIONS
                  </h3>
                  <ul className="space-y-2 sm:space-y-3 lg:space-y-4">
                    {footerLinks.aiSolutions.map((link, index) => (
                      <li key={index}>
                        <Link
                          href={link.url}
                          onClick={() => trackCTAClick(link.text, "Footer")}
                          className="text-white/90 hover:text-white hover:underline transition-colors duration-200 font-inter font-normal leading-6
                            text-sm sm:text-base"
                        >
                          {link.text}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Quick Links Column */}
                <div className="space-y-3 sm:space-y-4 lg:space-y-6">
                  <h3
                    className="text-white font-inter font-semibold leading-5 tracking-[0.7px] uppercase
                    text-xs sm:text-sm"
                  >
                    QUICK LINKS
                  </h3>
                  <ul className="space-y-2 sm:space-y-3 lg:space-y-4">
                    {footerLinks.quickLinks.map((link, index) => (
                      <li key={index}>
                        <Link
                          href={link.url}
                          onClick={() => trackCTAClick(link.text, "Footer")}
                          className="text-white/90 hover:text-white hover:underline transition-colors duration-200 font-inter font-normal leading-6
                            text-sm sm:text-base"
                        >
                          {link.text}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/15"></div>

        {/* <div className="py-6 sm:py-8 lg:py-10">
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 sm:gap-6 lg:gap-8">
            <div className="space-y-2 lg:max-w-md flex-1">
              <h3
                className="text-gray-400 font-inter font-semibold leading-5 tracking-[0.7px] uppercase
                text-xs sm:text-sm"
              >
                SUBSCRIBE TO OUR NEWSLETTER
              </h3>
              <p
                className="text-gray-300 font-inter font-normal leading-6
                text-sm sm:text-base"
              >
                The latest news, articles, and resources, sent to your inbox
                weekly.
              </p>
            </div>
            <form
              onSubmit={handleSubscribe}
              className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto lg:min-w-[400px]"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 sm:flex-none px-3 py-2 sm:px-[13px] sm:py-[9px] items-center rounded-lg border border-white bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-200
                  w-full sm:w-[240px] md:w-[282px]
                  text-sm sm:text-base"
              />
              <button
                className="cursor-pointer flex items-center justify-center gap-2 rounded-xl border border-[rgba(255,255,255,0.25)] bg-[rgba(140,69,255,0.40)] transition-all duration-200 hover:bg-[rgba(140,69,255,0.50)] hover:border-[rgba(255,255,255,0.35)] font-semibold leading-6 disabled:opacity-50 disabled:cursor-not-allowed
                  w-full sm:w-32
                  px-4 py-2 sm:px-3 sm:py-2
                  text-sm sm:text-[15.9px]"
                style={{
                  color: "#F2F0F5",
                }}
                type="submit"
                disabled={isSubscribing}
              >
                {isSubscribing ? "Subscribing..." : "Subscribe"}
              </button>
            </form>
          </div>
        </div> */}

        <div className="border-t border-white/15"></div>

        <div className="py-4 sm:py-6 lg:py-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4">
          <p
            className="text-gray-400 font-inter font-normal leading-6 text-center sm:text-left
            text-sm sm:text-base"
          >
            Copyright © 2025. <Link href={"/"}>Marqait AI.</Link> All rights
            reserved.
          </p>
          <div className="flex items-center justify-center sm:justify-end space-x-3 sm:space-x-4 lg:space-x-6">
            <a
              href="https://www.facebook.com/MarqaitAI"
              onClick={() => trackCTAClick("Facebook", "Footer Social")}
              className="text-gray-400 hover:text-white duration-200 p-1 hover:scale-110 transform transition-transform"
              aria-label="Facebook"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/icons/facebook.png"
                alt="Facebook"
                width={24}
                height={24}
                className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6"
              />
            </a>
            <a
              href="https://www.instagram.com/marqait.ai/"
              onClick={() => trackCTAClick("Instagram", "Footer Social")}
              className="text-gray-400 hover:text-white  duration-200 p-1 hover:scale-110 transform transition-transform"
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/icons/instagram.png"
                alt="Instagram"
                width={24}
                height={24}
                className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6"
              />
            </a>
            <a
              href="https://x.com/marqait_ai"
              onClick={() => trackCTAClick("Twitter/X", "Footer Social")}
              className="text-gray-400 hover:text-white  duration-200 p-1 hover:scale-110 transform transition-transform"
              aria-label="Twitter"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/icons/x.png"
                alt="Twitter"
                width={24}
                height={24}
                className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6"
              />
            </a>
            <a
              href="https://www.youtube.com/@MarqaitAI"
              onClick={() => trackCTAClick("YouTube", "Footer Social")}
              className="text-gray-400  duration-200 p-1 hover:scale-110 transform transition-transform"
              aria-label="YouTube"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/company/marqait-ai/"
              onClick={() => trackCTAClick("LinkedIn", "Footer Social")}
              className="text-gray-400  transition-colors duration-200 p-1 hover:scale-110 transform "
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          </div>
        </div>
        <div className="border-t border-white/15"></div>

        {/* SEO Content Section - Accordions - Only on Homepage */}
        {pathname === "/" && (
        <div className="py-8 sm:py-12 lg:py-16">
          {/* Marqait AI: The Marketing Automation Platform */}
          <div className=" rounded-lg overflow-hidden">
            <button
              onClick={() => toggleAccordion("platform")}
              className="w-full flex items-center  p-4 sm:p-6 bg-transparent cursor-pointer transition-colors duration-200"
              aria-expanded={openAccordion === "platform"}
            >
              <h2 className="text-white font-inter font-semibold text-lg sm:text-xl lg:text-xl leading-tight text-left">
                Marqait AI: The Marketing Automation Platform
              </h2>
              <svg
                className={`w-5 h-5 sm:w-6 sm:h-6 text-white transition-transform duration-300 flex-shrink-0 ml-4 ${
                  openAccordion === "platform" ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <div
              className={`p-4 sm:p-6 pt-0 space-y-3 sm:space-y-4 transition-all duration-300 overflow-hidden ${
                openAccordion === "platform"
                  ? "max-h-[1000px] opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <p className="text-white/90 font-inter font-normal text-sm sm:text-base leading-relaxed">
                Welcome to Marqait AI, The AI-powered marketing automation
                platform, designed to automate marketing workflows. With a
                fast-evolving suite of intelligent tools and a focus on
                simplicity, creativity, and results, Marqait isn&apos;t just an
                AI marketing tool; it&apos;s your marketing automation
                companion. Marqait AI is the ultimate platform for automating
                Ads management, content creation, social media posting,
                preparing & managing content calendar, and more. Our AI
                marketing platform is a powerful ecosystem designed to help
                brands create effortlessly and offers everything you need to
                scale your digital presence in minutes at one place.
              </p>
            </div>
          </div>

          {/* Advanced AI Marketing Automation Tools of Marqait */}
          <div className=" rounded-lg overflow-hidden">
            <button
              onClick={() => toggleAccordion("tools")}
              className="w-full flex items-center gap-2 p-4 sm:p-6 bg-transparent cursor-pointer transition-colors duration-200"
              aria-expanded={openAccordion === "tools"}
            >
              <h2 className="text-white font-inter font-semibold text-lg sm:text-xl lg:text-xl leading-tight text-left">
                Advanced AI Marketing Automation Tools of Marqait
              </h2>
              <svg
                className={`w-5 h-5 sm:w-6 sm:h-6 text-white transition-transform duration-300 flex-shrink-0 ml-4 ${
                  openAccordion === "tools" ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <div
              className={`p-4 sm:p-6 pt-0 space-y-3 sm:space-y-4 transition-all duration-300 overflow-hidden ${
                openAccordion === "tools"
                  ? "max-h-[3000px] opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <p className="text-white/90 font-inter font-normal text-sm sm:text-base leading-relaxed mb-4">
                Marqait offers all easy to use, AI marketing tools that require
                you to automate your repetitive marketing tasks:
              </p>
              <div className="space-y-4 sm:space-y-5">
                <div>
                  <h3 className="text-white font-inter font-semibold text-base sm:text-lg mb-2">
                    AI Ads Generator:
                  </h3>
                  <p className="text-white/90 font-inter font-normal text-sm sm:text-base leading-relaxed">
                    Marqait AI Ads generator is built with advanced features and
                    the latest technology. As the best marketing automation
                    platform, Our Ads generator automatically generates high
                    converting AI Google Ads and AI Meta Ads that match your
                    brand style, business niche, and target audience.
                  </p>
                </div>
                <div>
                  <h3 className="text-white font-inter font-semibold text-base sm:text-lg mb-2">
                    Strategy Generator:
                  </h3>
                  <p className="text-white/90 font-inter font-normal text-sm sm:text-base leading-relaxed">
                    Build a powerful strategy for marketing, business, and
                    social media with Marqait Strategy Generator. Once you fill
                    in the key information our AI analyse the generate the
                    impactful strategy instantly.
                  </p>
                </div>
                <div>
                  <h3 className="text-white font-inter font-semibold text-base sm:text-lg mb-2">
                    Social Media Post Generator:
                  </h3>
                  <p className="text-white/90 font-inter font-normal text-sm sm:text-base leading-relaxed">
                    You can generate Static posts, Story, Reel, and Carousal
                    posts for the leading social media platforms like Instagram,
                    Facebook, LinkedIn, and X (Twitter).
                  </p>
                </div>
                <div>
                  <h3 className="text-white font-inter font-semibold text-base sm:text-lg mb-2">
                    Reel & Video Generator:
                  </h3>
                  <p className="text-white/90 font-inter font-normal text-sm sm:text-base leading-relaxed">
                    You can also generate video up to 30 seconds with Marqait AI
                    Video Generator. Give your topic, choose audio option,
                    select video length, you can add your brand logo and our AI
                    instantly generates videos.
                  </p>
                </div>
                <div>
                  <h3 className="text-white font-inter font-semibold text-base sm:text-lg mb-2">
                    Logo Generator:
                  </h3>
                  <p className="text-white/90 font-inter font-normal text-sm sm:text-base leading-relaxed">
                    Give the visual identity by designing a logo for your brand.
                    You can generate logo design in seconds just selecting a few
                    options with Our free and easy to use AI logo generator.
                  </p>
                </div>
                <div>
                  <h3 className="text-white font-inter font-semibold text-base sm:text-lg mb-2">
                    Brand Book Generator:
                  </h3>
                  <p className="text-white/90 font-inter font-normal text-sm sm:text-base leading-relaxed">
                    Our Brand book generator helps you create your custom brand
                    book instantly with AI. You can also customize guidelines,
                    logos, typography, color palette including a mission, brand
                    proposition, and values.
                  </p>
                </div>
              </div>
              <p className="text-white/90 font-inter font-normal text-sm sm:text-base leading-relaxed mt-4">
                Marqait AI is one of the most affordable marketing automation
                platform for small business owners and SMEs. Use Reel generator,
                strategy generator, logo generator and social media post
                generator for Free. And generate AI Ads campaigns at a lowest
                cost.
              </p>
            </div>
          </div>

          {/* Affordable Marketing Automation with Marqait AI */}
          <div className=" rounded-lg overflow-hidden">
            <button
              onClick={() => toggleAccordion("affordable")}
              className="w-full flex items-center gap-2 p-4 sm:p-6 bg-transparent cursor-pointer transition-colors duration-200"
              aria-expanded={openAccordion === "affordable"}
            >
              <h2 className="text-white font-inter font-semibold text-lg sm:text-xl lg:text-xl leading-tight text-left">
                Affordable Marketing Automation with Marqait AI
              </h2>
              <svg
                className={`w-5 h-5 sm:w-6 sm:h-6 text-white transition-transform duration-300 flex-shrink-0 ml-4 ${
                  openAccordion === "affordable" ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <div
              className={`p-4 sm:p-6 pt-0 space-y-3 sm:space-y-4 transition-all duration-300 overflow-hidden ${
                openAccordion === "affordable"
                  ? "max-h-[3000px] opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <p className="text-white/90 font-inter font-normal text-sm sm:text-base leading-relaxed mb-4">
                Marqait AI is one of the most innovative marketing automation
                platform where automating marketing tasks is made accessible to
                everyone. Explore our AI-powered tools to create stunning logos,
                engaging social posts, brand books, and ads campaigns; all in
                minutes. You can simplify complex marketing tasks, personalize
                content, and launch Ads for Google & Meta effortlessly. Whether
                you&apos;re a small business, startup, or marketing agency,
                Marqait helps you automate your workflow at an effective cost.
              </p>
              <div className="space-y-4 sm:space-y-5">
                <div>
                  <h3 className="text-white font-inter font-semibold text-base sm:text-lg mb-2">
                    AI-Driven Campaign Automation: Maximizing performance
                  </h3>
                  <p className="text-white/90 font-inter font-normal text-sm sm:text-base leading-relaxed">
                    With Marqait AI, Launch the campaigns that work
                    intelligently and autonomously. Marqait&apos;s advanced AI
                    automates the creation, scheduling, and optimization of Ads,
                    and Social media posts based on real audience behavior. It
                    handles the heavy lifting so you can focus on scaling your
                    business, not managing repetitive marketing tasks.
                  </p>
                </div>
                <div>
                  <h3 className="text-white font-inter font-semibold text-base sm:text-lg mb-2">
                    Smart Brand Personalization:
                  </h3>
                  <p className="text-white/90 font-inter font-normal text-sm sm:text-base leading-relaxed">
                    Our AI perfectly preserved your brand identity across every
                    channel. Marqait learns your tone, design style, and
                    personality, then automatically applies them across visuals,
                    ad copy, and campaigns. This ensures every message reflects
                    your unique brand voice that keeps your marketing
                    consistent, professional, and instantly recognizable.
                  </p>
                </div>
                <div>
                  <h3 className="text-white font-inter font-semibold text-base sm:text-lg mb-2">
                    All-in-One Creative Automation Suite:
                  </h3>
                  <p className="text-white/90 font-inter font-normal text-sm sm:text-base leading-relaxed">
                    Marqait AI is one fast, affordable marketing automation
                    platform built for creativity and efficiency where you can
                    create, manage, and launch, all from one platform. From logo
                    design and social posts to carousels, image edits, and ad
                    campaigns, Marqait brings every creative tool into a single
                    AI-powered workspace. You no longer need multiple tools or
                    subscriptions.
                  </p>
                </div>
                <div>
                  <h3 className="text-white font-inter font-semibold text-base sm:text-lg mb-2">
                    Data-Smart Strategy Generator:
                  </h3>
                  <p className="text-white/90 font-inter font-normal text-sm sm:text-base leading-relaxed">
                    Our AI turns insights into action, instantly. Marqait&apos;s
                    AI analyzes your goals, audience behavior, and performance
                    data to generate intelligent marketing strategies from
                    campaign ideas to content timing. You get data-backed
                    recommendations that help you make confident decisions and
                    achieve results even without a dedicated marketing team.
                  </p>
                </div>
                <div>
                  <h3 className="text-white font-inter font-semibold text-base sm:text-lg mb-2">
                    Affordable, Scalable, and Ready to Launch:
                  </h3>
                  <p className="text-white/90 font-inter font-normal text-sm sm:text-base leading-relaxed">
                    We made enterprise-grade automation accessible. We built
                    this for startups, creators, and growing businesses that
                    deliver powerful marketing automation at a fraction of the
                    cost. You can start automating your marketing in minutes and
                    grow faster without overspending.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* FAQs */}
          <div className=" rounded-lg overflow-hidden">
            <button
              onClick={() => toggleAccordion("faqs")}
              className="w-full flex items-center gap-2 p-4 sm:p-6 bg-transparent cursor-pointer transition-colors duration-200"
              aria-expanded={openAccordion === "faqs"}
            >
              <h2 className="text-white font-inter font-semibold text-lg sm:text-xl lg:text-xl leading-tight text-left">
                FAQs
              </h2>
              <svg
                className={`w-5 h-5 sm:w-6 sm:h-6 text-white transition-transform duration-300 flex-shrink-0 ml-4 ${
                  openAccordion === "faqs" ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <div
              className={`p-4 sm:p-6 pt-0 space-y-4 sm:space-y-5 transition-all duration-300 overflow-hidden ${
                openAccordion === "faqs"
                  ? "max-h-[2000px] opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <div>
                <h3 className="text-white font-inter font-semibold text-base sm:text-lg mb-2">
                  How to start marketing automation?
                </h3>
                <p className="text-white/90 font-inter font-normal text-sm sm:text-base leading-relaxed">
                  To start automating your marketing tasks is simpler with
                  Marqait AI. Just sign up, set your marketing goals, and let
                  the platform handle the rest. Marqait automates what a full
                  marketing automation agency does. Our AI automatically builds
                  workflows, schedules content, and optimizes campaigns for
                  performance.
                </p>
              </div>
              <div>
                <h3 className="text-white font-inter font-semibold text-base sm:text-lg mb-2">
                  What marketing tasks can I automate?
                </h3>
                <p className="text-white/90 font-inter font-normal text-sm sm:text-base leading-relaxed">
                  With Marqait AI, you can automate almost every stage of your
                  marketing tasks, from Ads creation, social post generation &
                  scheduling, content creation (reels & videos), and strategy
                  creation with our AI-powered marketing automation platform.
                  Unlike a traditional marketing automation agency, where you
                  spend hours in meetings and explanations. Marqait AI also
                  offers creative automation like logo design and brand book
                  generation that helps you save hours.
                </p>
              </div>
              <div>
                <h3 className="text-white font-inter font-semibold text-base sm:text-lg mb-2">
                  Who can use Marqait AI?
                </h3>
                <p className="text-white/90 font-inter font-normal text-sm sm:text-base leading-relaxed">
                  Marqait AI is built for everyone, from small business,
                  startups, solopreneurs to agencies and SMEs.
                </p>
              </div>
              <div>
                <h3 className="text-white font-inter font-semibold text-base sm:text-lg mb-2">
                  Is the marketing automation platform free to use?
                </h3>
                <p className="text-white/90 font-inter font-normal text-sm sm:text-base leading-relaxed">
                  Marqait AI offers a free plan of its creative tools so you can
                  explore it. But You can use features like Ads campaign
                  generation at an affordable cost.
                </p>
              </div>
              <div>
                <h3 className="text-white font-inter font-semibold text-base sm:text-lg mb-2">
                  How long does it take to launch campaigns?
                </h3>
                <p className="text-white/90 font-inter font-normal text-sm sm:text-base leading-relaxed">
                  You can launch your first campaign within minutes with our
                  AI-powered platform. Marqait&apos;s AI instantly generates the
                  content, visuals, and targeting setup you need to go live
                  fast. Marqait helps you automate marketing right from day one.
                </p>
              </div>
            </div>
          </div>
        </div>
        )}
      </div>
    </footer>
  );
}
