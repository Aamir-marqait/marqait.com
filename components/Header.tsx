"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { trackCTAClick } from "../analytics";

interface DropdownItem {
  name: string;
  path: string;
  description: string;
  icon: string;
}

interface NavigationItem {
  name: string;
  path: string;
  onClick?: () => void;
  dropdown?: DropdownItem[];
}

interface HeaderProps {
  onOpenWaitlist?: () => void;
}

export default function Header({ onOpenWaitlist }: HeaderProps = {}) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const navigationItems: NavigationItem[] = [
    {
      name: "AI Tools",
      path: "/ai-tools",
      dropdown: [
        {
          name: "AI Logo Generator",
          path: "/ai-logo-generator",
          description: "Create logo in seconds",
          icon: "/logo.jpg",
        },
        {
          name: "AI Social Media Post Generator",
          path: "/ai-social-media-post-generator",
          description: "Generates social media post",
          icon: "/post.jpg",
        },
        {
          name: "AI BrandBook Generator",
          path: "/ai-brandbook-generator",
          description: "Generates brand book",
          icon: "/brand.png",
        },
        {
          name: "AI Reels Generator",
          path: "/ai-reel-generator",
          description: "Generates engaging reels",
          icon: "/video.jpg",
        },
        {
          name: "AI Campaign Generator",
          path: "/ai-campaign-generator",
          description: "Generates campaigns",
          icon: "/ads.jpg",
        },

        {
          name: "AI Editor",
          path: "/ai-image-editor",
          description: "Edit your Image with AI",
          icon: "/edit.jpg",
        },
      ],
    },
    {
      name: "AI Solutions",
      path: "/ai-solutions",
      dropdown: [
        {
          name: "Custom AI Solutions",
          path: "/custom-ai-solutions",
          description: "",
          icon: "/ai-solutions/1.png",
        },
        {
          name: "AI For Healthcare",
          path: "/ai-for-healthcare",
          description: "",
          icon: "/ai-solutions/2.png",
        },
        {
          name: "AI For Startups",
          path: "/ai-for-startups",
          description: "",
          icon: "/ai-solutions/3.png",
        },
        {
          name: "AI For Customer Service",
          path: "/ai-for-customer-service",
          description: "",
          icon: "/ai-solutions/4.png",
        },
        {
          name: "AI For Retails",
          path: "/ai-for-retails",
          description: "",
          icon: "/ai-solutions/5.png",
        },
        {
          name: "AI Agent Development",
          path: "/ai-agent-development",
          description: "",
          icon: "/ai-solutions/6.png",
        },
        {
          name: "AI For SEO",
          path: "/ai-for-seo",
          description: "",
          icon: "/ai-solutions/7.png",
        },
        {
          name: "AI For E-Commerce",
          path: "/ai-for-ecommerce",
          description: "",
          icon: "/ai-solutions/8.png",
        },
      ],
    },
    { name: "Insights", path: "/ai-blog" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header
      className="fixed top-0 left-0 right-0 w-full bg-[#020103] z-50 border-b"
      style={{ borderColor: "#FFFFFF26" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 lg:h-24">
          <div className="flex items-center space-x-8">
            <Link
              href="/"
              className="flex items-center justify-center space-x-3 cursor-pointer"
            >
              <Image
                src="/logo/mainlogo.svg"
                alt="Marqait AI Logo"
                width={200}
                height={32}
                className="object-cover"
              />
            </Link>

            {/* Desktop Navigation */}
          </div>
          <nav className="hidden lg:flex items-center justify-center space-x-8 xl:space-x-12">
            {navigationItems.map((item) =>
              item.dropdown ? (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => setOpenDropdown(item.name)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <Link
                    href={item.path}
                    className="flex cursor-pointer items-center space-x-1 text-white hover:text-gray-300 transition-colors duration-200 text-base font-medium group"
                  >
                    <span>{item.name}</span>
                  </Link>

                  {openDropdown === item.name && (
                    <div className="absolute top-full -left-32 mt-2 min-w-96 w-max bg-white rounded-2xl shadow-2xl z-50 border border-gray-100 animate-in fade-in-0 zoom-in-95 duration-200 ease-out">
                      {/* Invisible bridge to prevent dropdown from closing */}
                      <div className="absolute -top-2 left-0 right-0 h-2 bg-transparent"></div>
                      {/* Arrow pointing up */}
                      <div className="absolute -top-2 left-40 w-4 h-4 bg-white border-l border-t border-gray-100 transform rotate-45 animate-in fade-in-0 duration-300 ease-out"></div>
                      <div className="p-4">
                        <div className="grid grid-cols-2 gap-3">
                          {item.dropdown.map((dropdownItem, index) => (
                            <Link
                              key={dropdownItem.name}
                              href={dropdownItem.path}
                              className="flex items-center space-x-3 p-3 rounded-xl hover:bg-gray-50 transition-all duration-200 group animate-in fade-in-0 slide-in-from-top-2"
                              style={{
                                animationDelay: `${index * 50}ms`,
                                animationDuration: "200ms",
                                animationFillMode: "both",
                              }}
                              onClick={() => setOpenDropdown(null)}
                            >
                              <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center group-hover:scale-105 transition-transform duration-200 overflow-hidden">
                                <Image
                                  src={dropdownItem.icon}
                                  alt={dropdownItem.name}
                                  width={48}
                                  height={48}
                                  className="object-cover rounded-full w-full h-full"
                                />
                              </div>
                              <div className="flex-1 min-w-0">
                                <h3 className="font-inter font-medium text-[15px] text-[#101828] leading-none tracking-[-0.01em] align-middle mb-1">
                                  {dropdownItem.name}
                                </h3>
                                <p className="font-inter font-normal text-[12px] text-[#1F2937] leading-none tracking-[-0.01em] align-middle">
                                  {dropdownItem.description}
                                </p>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ) : item.onClick ? (
                <button
                  key={item.name}
                  onClick={item.onClick}
                  className="flex cursor-pointer items-center space-x-1 text-white hover:text-gray-300 transition-colors duration-200 text-base font-medium"
                >
                  <span>{item.name}</span>
                </button>
              ) : (
                <Link
                  key={item.name}
                  href={item.path}
                  className="flex cursor-pointer items-center space-x-1 text-white hover:text-gray-300 transition-colors duration-200 text-base font-medium"
                >
                  <span>{item.name}</span>
                </Link>
              )
            )}
          </nav>

          {/* Desktop Get Started Button */}
          <div className="hidden lg:block cursor-pointer">
            <button
              onClick={() => {
                trackCTAClick("Get Started", "Header");
                onOpenWaitlist?.();
              }}
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
              Get Started
              <Image
                className="cursor-pointer"
                src="/icons/arrow.svg"
                alt="arrow-right"
                width={21}
                height={21}
                style={{
                  borderRadius: "24px",
                  background: "#F2F0F540",
                  opacity: 1,
                  padding: "3px",
                }}
              />
            </button>
            {/* <button
              className="cursor-pointer flex items-center gap-2 px-4 py-1.5 rounded-2xl border border-[rgba(255,255,255,0.40)] bg-[rgba(140,69,255,0.40)] transition-all duration-200 hover:bg-[rgba(140,69,255,0.50)] hover:border-[rgba(255,255,255,0.35)] font-semibold leading-6"
              style={{
                boxShadow: "0px 0px 6px 3px rgba(255, 255, 255, 0.25) inset",
                color: "#F2F0F5",
                fontSize: "15.9px",
              }}
            >
              Sign Up
              <img
                src="/icons/arrow.svg"
                alt="arrow-right"
                className="rounded-3xl bg-[rgba(242,240,245,0.15)] p-2 h-8"
              />
            </button> */}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 cursor-pointer" />
            ) : (
              <Menu className="w-6 h-6 cursor-pointer" />
            )}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-800">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigationItems.map((item) =>
                item.dropdown ? (
                  <div key={item.name} className="space-y-1">
                    <button
                      onClick={() =>
                        setOpenDropdown(
                          openDropdown === item.name ? null : item.name
                        )
                      }
                      className="cursor-pointer flex items-center justify-between w-full px-3 py-3 text-white hover:text-gray-300 hover:bg-gray-900 rounded-md transition-colors duration-200"
                    >
                      <span className="text-base font-medium">{item.name}</span>
                    </button>
                    {openDropdown === item.name && (
                      <div className="ml-4 space-y-2 mt-2 animate-in fade-in-0 slide-in-from-top-2 duration-200">
                        {item.dropdown.map((dropdownItem, index) => (
                          <Link
                            key={dropdownItem.name}
                            href={dropdownItem.path}
                            className="flex items-center space-x-3 px-3 py-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-all duration-200 animate-in fade-in-0 slide-in-from-left-2"
                            style={{
                              animationDelay: `${index * 75}ms`,
                              animationDuration: "250ms",
                              animationFillMode: "both",
                            }}
                            onClick={() => {
                              setIsMobileMenuOpen(false);
                              setOpenDropdown(null);
                            }}
                          >
                            <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center overflow-hidden">
                              <Image
                                src={dropdownItem.icon}
                                alt={dropdownItem.name}
                                width={40}
                                height={40}
                                className="object-cover rounded-full"
                              />
                            </div>
                            <div className="flex-1 min-w-0">
                              <h3 className="text-sm font-semibold text-white leading-tight mb-1">
                                {dropdownItem.name}
                              </h3>
                              <p className="text-xs text-gray-400 leading-tight">
                                {dropdownItem.description}
                              </p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : item.onClick ? (
                  <button
                    key={item.name}
                    onClick={item.onClick}
                    className="cursor-pointer flex items-center justify-between w-full px-3 py-3 text-white hover:text-gray-300 hover:bg-gray-900 rounded-md transition-colors duration-200"
                  >
                    <span className="text-base font-medium">{item.name}</span>
                  </button>
                ) : (
                  <Link
                    key={item.name}
                    href={item.path}
                    className="cursor-pointer flex items-center justify-between w-full px-3 py-3 text-white hover:text-gray-300 hover:bg-gray-900 rounded-md transition-colors duration-200"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <span className="text-base font-medium">{item.name}</span>
                  </Link>
                )
              )}

              {/* Mobile Sign Up Button */}
              <div className="pt-4 pb-2">
                <button
                  onClick={() => {
                    trackCTAClick("Get Started", "Mobile Header");
                    onOpenWaitlist?.();
                  }}
                  className="cursor-pointer flex items-center justify-center gap-2 w-full px-4 py-3 rounded-2xl border border-[rgba(255,255,255,0.25)] bg-[rgba(140,69,255,0.40)] transition-all duration-200 hover:bg-[rgba(140,69,255,0.50)] hover:border-[rgba(255,255,255,0.35)] font-semibold leading-6"
                  style={{
                    boxShadow:
                      "0px 0px 6px 3px rgba(255, 255, 255, 0.25) inset",
                    color: "#F2F0F5",
                    fontSize: "15.9px",
                  }}
                >
                  Get Started
                  <Image
                    src="/icons/arrow.svg"
                    alt="arrow-right"
                    width={32}
                    height={32}
                    className="rounded-3xl bg-[rgba(242,240,245,0.15)] p-2"
                  />
                </button>
                {/* <button
                  className="cursor-pointer flex items-center justify-center gap-2 w-full px-4 py-3 rounded-2xl border border-[rgba(255,255,255,0.25)] bg-[rgba(140,69,255,0.40)] transition-all duration-200 hover:bg-[rgba(140,69,255,0.50)] hover:border-[rgba(255,255,255,0.35)] font-semibold leading-6"
                  style={{
                    boxShadow:
                      "0px 0px 6px 3px rgba(255, 255, 255, 0.25) inset",
                    color: "#F2F0F5",
                    fontSize: "15.9px",
                  }}
                >
                  Sign Up
                  <img
                    src="/icons/arrow.svg"
                    alt="arrow-right"
                    className="rounded-3xl bg-[rgba(242,240,245,0.15)] p-2 h-8"
                  />
                </button> */}
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
