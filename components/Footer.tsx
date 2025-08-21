/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useState, FormEvent, MouseEvent } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";

import {
  scrollToWhatGrowthPods,
  scrollToHowGrowthPodsWork,
  scrollToWhoItsFor,
  scrollToWhyBusinessNeeds,
} from "@/utils/scrollUtils";
import { trackCTAClick } from "@/analytics";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [isSubscribing, setIsSubscribing] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const handleSubscribe = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubscribing(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("Subscribed:", email);
    setEmail("");
    setIsSubscribing(false);
  };

  const handleGrowthPodClick =
    (scrollFunction: () => void, buttonName: string) =>
    (e: MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      trackCTAClick(buttonName, "Footer");
      if (pathname === "/growth-pods") {
        scrollFunction();
      } else {
        router.push("/growth-pods");
        setTimeout(() => scrollFunction(), 100);
      }
    };

  const footerLinks: {
    loremIpsum: Array<{
      text: string;
      url: string;
      onClick: (e: MouseEvent<HTMLButtonElement>) => void;
    }>;
    quickLinks: Array<{ text: string; url: string }>;
    company: Array<{ text: string; url: string }>;
  } = {
    loremIpsum: [
      {
        text: "What are Growth Pods?",
        url: "/growth-pods",
        onClick: handleGrowthPodClick(
          scrollToWhatGrowthPods,
          "What are Growth Pods?"
        ),
      },
      {
        text: " How Growth PodsWorks?",
        url: "/growth-pods",
        onClick: handleGrowthPodClick(
          scrollToHowGrowthPodsWork,
          "How Growth Pods Works?"
        ),
      },
      {
        text: "Who It's For?",
        url: "/growth-pods",
        onClick: handleGrowthPodClick(scrollToWhoItsFor, "Who It's For?"),
      },
      {
        text: "Why Your Business Needs One?",
        url: "/growth-pods",
        onClick: handleGrowthPodClick(
          scrollToWhyBusinessNeeds,
          "Why Your Business Needs One?"
        ),
      },
    ],
    quickLinks: [
      // { text: "News", url: "/" },
      // { text: "Articles", url: "/" },
      { text: "Contact Us", url: "/contacts" },
      // { text: "Lorem Ipsum", url: "/" },
    ],
    company: [
      // { text: "Lorem Ipsum", url: "/" },
      // { text: "Lorem Ipsum", url: "/" },
      // { text: "Lorem Ipsum", url: "/" },
      // { text: "Contact Us", url: "/contacts" },
      // { text: "Partners", url: "/" },
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
                  Marqait is an AI-powered marketing automation platform that
                  helps to scale your business. With our AI marketing automation
                  solutions, streamline your email campaigns, automate social
                  media posts, and intelligent campaign generators and more.
                </p>
              </div>
            </div>

            <div className="lg:col-span-8">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
                {/* Lorem Ipsum Column */}
                <div className="space-y-3 sm:space-y-4 lg:space-y-6">
                  <h3
                    className="text-gray-400 font-inter font-semibold leading-5 tracking-[0.7px] uppercase
                    text-xs sm:text-sm"
                  >
                    Growth Pods
                  </h3>
                  <ul className="space-y-2 sm:space-y-3 lg:space-y-4">
                    {footerLinks.loremIpsum.map((link, index) => (
                      <li key={index}>
                        {link.onClick ? (
                          <button
                            onClick={link.onClick}
                            className="text-gray-300 hover:text-white transition-colors duration-200 font-inter font-normal leading-6
                              text-sm sm:text-base text-left"
                          >
                            {link.text}
                          </button>
                        ) : (
                          <Link
                            href={link.url}
                            className="text-gray-300 hover:text-white transition-colors duration-200 font-inter font-normal leading-6
                              text-sm sm:text-base"
                          >
                            {link.text}
                          </Link>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-3 sm:space-y-4 lg:space-y-6">
                  <h3
                    className="text-gray-400 font-inter font-semibold leading-5 tracking-[0.7px] uppercase
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
                          className="text-gray-300 hover:text-white transition-colors duration-200 font-inter font-normal leading-6
                            text-sm sm:text-base"
                        >
                          {link.text}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-3 sm:space-y-4 lg:space-y-6">
                  <h3
                    className="text-gray-400 font-inter font-semibold leading-5 tracking-[0.7px] uppercase
                    text-xs sm:text-sm"
                  >
                    {/* COMPANY */}
                  </h3>
                  <ul className="space-y-2 sm:space-y-3 lg:space-y-4">
                    {footerLinks.company.map((link, index) => (
                      <li key={index}>
                        <Link
                          href={link.url}
                          className="text-gray-300 hover:text-white transition-colors duration-200 font-inter font-normal leading-6
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
                className="cursor-pointer flex items-center justify-center gap-2 rounded-2xl border border-[rgba(255,255,255,0.25)] bg-[rgba(140,69,255,0.40)] transition-all duration-200 hover:bg-[rgba(140,69,255,0.50)] hover:border-[rgba(255,255,255,0.35)] font-semibold leading-6 disabled:opacity-50 disabled:cursor-not-allowed
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
            © 2025. <Link href={"/"}>Marqait</Link> ⎜ AI-Powered Marketing
            Automation Platform.
          </p>
          <div className="flex items-center justify-center sm:justify-end space-x-3 sm:space-x-4 lg:space-x-6">
            <a
              href="https://www.facebook.com/share/1G2Rsu27c8/"
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
              href="https://www.instagram.com/marqait.ai?igsh=MXNpdTExYzlpcGx3ZQ=="
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
              href="https://www.x.com/marqait_ai"
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
      </div>
    </footer>
  );
}
