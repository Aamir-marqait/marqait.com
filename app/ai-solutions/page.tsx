import type { Metadata } from "next";
import HeroSection from "@/components/growth-pods/hero-section";
// import CTASection from "@/components/growth-pods/cta-section";
import EveryIndustry from "@/components/ai-solutions/ai-sol-every-industry";
import Why from "@/components/ai-solutions/why";
// import CaseStudies from "@/components/ai-solutions/case-studies";
import How from "@/components/ai-solutions/how";
import ContactSection from "@/components/ai-solution-contact";

export const metadata: Metadata = {
  title: "AI Solutions & Automation Services - Marqait AI",
  description:
    "We provide AI solutions and automation services. Get Industry-specific automation, streamline workflows, boost efficiency, and accelerate business growth.",
  keywords:
    "AI solutions, automation services, industry automation, workflow optimization, business efficiency, AI automation",
  alternates: {
    canonical: "https://www.marqait.com/ai-solutions",
  },
  openGraph: {
    title: "AI Solutions & Automation Services - Marqait AI",
    description:
      "We provide AI solutions and automation services. Get Industry-specific automation, streamline workflows, boost efficiency, and accelerate business growth.",
    url: "https://www.marqait.com/ai-solutions",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Solutions & Automation Services - Marqait AI",
    description:
      "We provide AI solutions and automation services. Get Industry-specific automation, streamline workflows, boost efficiency, and accelerate business growth.",
  },
};

export default function GrowthPods() {
  return (
    <div className="min-h-screen bg-[#05000A] w-screen overflow-x-hidden">
      <HeroSection />
      <EveryIndustry />
      <How />
      <Why />
      <ContactSection />
      {/* <CaseStudies /> */}
      {/* <CTASection /> */}
    </div>
  );
}
