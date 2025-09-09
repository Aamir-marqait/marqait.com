'use client';

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { trackCTAClick } from "../../analytics";
import { urlFor } from "../../lib/sanity";

interface ServiceItem {
  title: string;
  description: string;
  icon: {
    asset: {
      _id?: string;
      url: string;
    };
    alt?: string;
  };
}

interface ServicesData {
  sectionTitle: string;
  sectionSubtitle: string;
  services: ServiceItem[];
  bottomDescription?: string;
  ctaButtonText?: string;
  ctaButtonLink?: string;
}

interface ServicesSectionProps {
  servicesData?: ServicesData;
}

export default function ServicesSection({ servicesData }: ServicesSectionProps) {
  const router = useRouter();
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // Fallback data if Sanity data is not available
  const fallbackData = {
    sectionTitle: "Why Marqait AI Marketing Automation?",
    sectionSubtitle: "AI-enhanced teams building custom marketing automation solutions for your business.",
    services: [
      {
        title: "AI-Powered Strategy & Execution",
        description: "We craft your roadmap — blending deep expertise with AI acceleration to scale faster.",
        icon: {
          asset: { url: "/svg/avatar.svg" },
          alt: "AI Strategy"
        }
      },
      {
        title: "Tech & Data Infrastructure",
        description: "From custom tools to data systems — we engineer the backend that powers growth.",
        icon: {
          asset: { url: "/svg/finance_mode_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24 1.svg" },
          alt: "Tech Infrastructure"
        }
      },
      {
        title: "Creative & Marketing Engine",
        description: "Campaigns, content, design, video — all delivered faster with AI woven into every step.",
        icon: {
          asset: { url: "/svg/network_intelligence_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24 1.svg" },
          alt: "Marketing Engine"
        }
      },
      {
        title: "Full-Funnel Deployment & Ops",
        description: "We manage the entire funnel: launch, optimize, and scale — across platforms and channels.",
        icon: {
          asset: { url: "/svg/manufacturing_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24 1.svg" },
          alt: "Deployment & Ops"
        }
      },
    ],
    bottomDescription: "From code to content — we design, build, and execute across all verticals using AI to move faster, smarter, and leaner.",
    ctaButtonText: "Get Your Growth Pod",
    ctaButtonLink: "/growth-pods"
  };

  const data = servicesData || fallbackData;

  // Split title to handle gradient effect
  const titleParts = data.sectionTitle.split(' ');
  const firstTwoWords = titleParts.slice(0, 2).join(' ');
  const remainingWords = titleParts.slice(2).join(' ');

  return (
    <section
      id="products"
      className="relative bg-black py-16 sm:py-20 lg:py-24 xl:py-32 overflow-hidden"
    >
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <div className="flex items-center justify-center mb-5">
            <div className="flex-1 max-w-[100px] sm:max-w-[150px] lg:max-w-[250px] h-px bg-gradient-to-r from-transparent to-gray-600"></div>
            <div className="w-2 h-2 bg-white rounded-full"></div>
            <span className="text-[#F2F0F5] font-inter text-xs sm:text-sm font-bold leading-[16.8px] sm:leading-[19.6px] tracking-[0.8px] sm:tracking-[1px] uppercase mx-4 sm:mx-6">
              SERVICES
            </span>
            <div className="w-2 h-2 bg-white rounded-full"></div>
            <div className="flex-1 max-w-[100px] sm:max-w-[150px] lg:max-w-[250px] h-px bg-gradient-to-l from-transparent to-gray-600"></div>
          </div>

          {/* Main Heading */}
          <h2 className="font-inter text-2xl sm:text-3xl lg:text-[50px] font-semibold leading-tight sm:leading-[62.4px] mb-5">
            <span className="bg-gradient-to-b from-white via-white to-[#B372CF] bg-clip-text text-transparent">
              {firstTwoWords}
            </span>{" "}
            <span className="text-white">{remainingWords}</span>
          </h2>

          {/* Subheading */}
          <p className="text-white/90 text-center font-inter text-xl font-medium leading-[27px] tracking-[-0.5px] self-stretch">
            {data.sectionSubtitle}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 max-w-3xl mx-auto mb-[80px]">
          {data.services.map((service, index) => {
            // Determine icon source - only use urlFor if we have a proper Sanity image with _id
            let iconSrc;
            
            if (service.icon.asset?._id && servicesData) {
              // This is Sanity data with proper _id - use urlFor
              iconSrc = urlFor(service.icon).width(24).height(24).url();
            } else {
              // This is fallback data or missing _id - use direct URL
              iconSrc = service.icon.asset?.url || '/svg/avatar.svg';
            }

            return (
              <div
                key={index}
                className="rounded-xl border border-white/15 bg-gradient-to-b from-[#05000A] to-[#1B1125] bg-[linear-gradient(180deg,#05000A_0%,#1B1125_100%),linear-gradient(180deg,rgba(242,240,245,0.10)_0%,#B782FF_100%)] p-6 sm:p-8 lg:p-10 hover:border-purple-700/50 transition-all duration-300 group text-center"
              >
                <div className="rounded-[24px] bg-[rgba(242,240,245,0.15)] flex w-[44px] h-[44px] p-[10px] justify-center items-center gap-[10px] mb-6 sm:mb-8 mx-auto">
                  <Image
                    src={iconSrc}
                    alt={service.icon.alt || service.title}
                    width={24}
                    height={24}
                    className="object-contain"
                  />
                </div>
                <h3 className="text-white text-center font-inter text-[20px] font-bold leading-normal self-stretch mb-[10px]">
                  {service.title}
                </h3>
                <p className="text-[rgba(242,240,245,0.90)] text-center font-inter text-[14px] font-normal leading-normal self-stretch">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom Description */}
        {data.bottomDescription && (
          <div className="text-center mb-[24px]">
            <p className="w-[916px] h-[89px] text-white text-center font-inter text-[20px] font-normal leading-[150%] mx-auto">
              {data.bottomDescription}
            </p>
          </div>
        )}

        {/* CTA Button */}
        {data.ctaButtonText && data.ctaButtonLink && (
          <div className="flex justify-center items-center">
            <button
              onClick={() => {
                trackCTAClick(data.ctaButtonText!, "Services Section");
                router.push(data.ctaButtonLink!);
              }}
              className="cursor-pointer flex items-center bg-[rgba(140,69,255,0.40)] hover:bg-[rgba(140,69,255,0.50)] border border-[rgba(255,255,255,0.25)] text-[#F2F0F5] font-semibold rounded-2xl transition-all duration-200 justify-center gap-2 px-4 py-3 text-sm sm:px-5 sm:py-3 sm:text-base md:px-6 md:py-4 lg:px-4 lg:py-4 lg:text-[15.8px] lg:leading-[30px] lg:tracking-[-0.4px] w-full sm:w-auto sm:min-w-[180px]"
              style={{
                boxShadow:
                  isLargeScreen
                    ? "0px 12px 16px 0px rgba(111, 17, 242, 0.25), 0px 0px 6px 3px rgba(255, 255, 255, 0.25) inset"
                    : "",
              }}
            >
              {data.ctaButtonText}
              <Image
                src="/icons/arrow.svg"
                alt="arrow-right"
                width={32}
                height={32}
                className="rounded-3xl bg-[rgba(242,240,245,0.15)] p-2"
              />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}