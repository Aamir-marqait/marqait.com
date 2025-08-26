"use client";

import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { trackCTAClick } from "../analytics";

interface NavigationItem {
  name: string;
  path: string;
  onClick?: () => void;
}

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // const handleServicesClick = (e) => {
  //   e.preventDefault();
  //   if (location.pathname === "/") {
  //     scrollToServices();
  //   } else {
  //     navigate("/", { replace: true });
  //     setTimeout(() => scrollToServices(), 100);
  //   }
  //   setIsMobileMenuOpen(false);
  // };

  // const handleInsightsClick = (e) => {
  //   e.preventDefault();
  //   if (location.pathname === "/") {
  //     scrollToCopilot();
  //   } else {
  //     navigate("/", { replace: true });
  //     setTimeout(() => scrollToCopilot(), 100);
  //   }
  //   setIsMobileMenuOpen(false);
  // };

  const navigationItems: NavigationItem[] = [
    { name: "Product", path: "/products" },
    { name: "Growth Pods", path: "/growth-pods" },
    { name: "Insights", path: "/blog" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 w-full bg-[#020103] z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <div className="flex items-center space-x-3">
            <Link
              href="/"
              className="flex items-center space-x-3 cursor-pointer"
            >
              <Image
                src="/logo/logo.svg"
                alt="Marqait AI Logo"
                width={32}
                height={32}
                className="object-contain"
              />
              <Image
                src="/logo/mainlogo.svg"
                alt="Marqait AI Logo"
                width={180}
                height={32}
                className="object-contain"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8 xl:space-x-12">
            {navigationItems.map((item) =>
              item.onClick ? (
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

          {/* Desktop Sign Up Button */}
          <Link className="hidden lg:block" href={"/contacts"}>
            <button
              onClick={() => trackCTAClick("Contact Us", "Header")}
              className="cursor-pointer flex items-center gap-2 px-4 py-1.5 rounded-2xl border border-[rgba(255,255,255,0.40)] bg-[rgba(140,69,255,0.40)] transition-all duration-200 hover:bg-[rgba(140,69,255,0.50)] hover:border-[rgba(255,255,255,0.35)] font-semibold leading-6"
              style={{
                boxShadow: "0px 0px 6px 3px rgba(255, 255, 255, 0.25) inset",
                color: "#F2F0F5",
                fontSize: "15.9px",
              }}
            >
              Contact Us
              <Image
                src="/icons/arrow.svg"
                alt="arrow-right"
                width={32}
                height={32}
                className="rounded-3xl bg-[rgba(242,240,245,0.15)] p-2"
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
          </Link>

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
                item.onClick ? (
                  <button
                    key={item.name}
                    onClick={item.onClick}
                    className="cursor-pointer flex items-center justify-between w-full px-3 py-3 text-white hover:text-gray-300 hover:bg-gray-900 rounded-md transition-colors duration-200"
                  >
                    <span className="text-base font-medium">{item.name}</span>
                    <ChevronDown className="w-4 h-4" />
                  </button>
                ) : (
                  <Link
                    key={item.name}
                    href={item.path}
                    className="cursor-pointer flex items-center justify-between w-full px-3 py-3 text-white hover:text-gray-300 hover:bg-gray-900 rounded-md transition-colors duration-200"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <span className="text-base font-medium">{item.name}</span>
                    <ChevronDown className="w-4 h-4" />
                  </Link>
                )
              )}

              {/* Mobile Sign Up Button */}
              <Link className="pt-4 pb-2" href={"/contacts"}>
                <button
                  onClick={() => trackCTAClick("Contact Us", "Mobile Header")}
                  className="cursor-pointer flex items-center justify-center gap-2 w-full px-4 py-3 rounded-2xl border border-[rgba(255,255,255,0.25)] bg-[rgba(140,69,255,0.40)] transition-all duration-200 hover:bg-[rgba(140,69,255,0.50)] hover:border-[rgba(255,255,255,0.35)] font-semibold leading-6"
                  style={{
                    boxShadow:
                      "0px 0px 6px 3px rgba(255, 255, 255, 0.25) inset",
                    color: "#F2F0F5",
                    fontSize: "15.9px",
                  }}
                >
                  Contact Us
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
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
