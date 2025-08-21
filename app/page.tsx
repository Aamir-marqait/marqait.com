'use client';

import { useRef, useState } from "react";
import { useSEO } from "../utils/seo";
import ContactFormSection from "../components/home/contact-form-section";
import CopilotSection from "../components/home/Copilot";
import HeroSection from "../components/home/HeroSection";
import ServicesSection from "../components/home/ServiceSection";
import StatisticsSection from "../components/home/StatisticsSection";
import VideoOverlay from "../components/home/VideoOverlay";
import Toast from "../components/ui/Toast";
import WaitlistModal from "../components/waitlist-modal";
import FAQSection from "../components/home/FAQSection";

export default function Home() {
  const contactFormRef = useRef<HTMLDivElement>(null);
  const [showToast, setShowToast] = useState(false);
  const [isWaitlistModalOpen, setIsWaitlistModalOpen] = useState(false);

  useSEO({
    canonical: "https://www.marqait.com",
    title: "Marqait - AI-Powered Growth Platform",
    description: "Transform your business with AI-powered growth solutions. Join thousands of companies using Marqait to scale their operations.",
    keywords: "AI, growth platform, business automation, marqait, artificial intelligence",
    ogType: "website",
    twitterCard: "summary_large_image"
  });

  const openWaitlistModal = () => {
    setIsWaitlistModalOpen(true);
  };

  const closeWaitlistModal = () => {
    setIsWaitlistModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#05000A] w-full overflow-x-hidden">
      <div className="w-full max-w-none">
        <HeroSection onScrollToContact={openWaitlistModal} />
        <CopilotSection onScrollToContact={openWaitlistModal} />
        <ServicesSection />
        <StatisticsSection />
        <VideoOverlay />
        {/* <AboutUsSection /> */}
        {/* <TeamCarouselSection /> */}
        {/* <ClientTestimonialsSection /> */}
        <ContactFormSection ref={contactFormRef} />
        <FAQSection />
        <Toast
          show={showToast}
          onClose={() => setShowToast(false)}
          message="Join the waitlist by filling out this form."
        />
        <WaitlistModal
          isOpen={isWaitlistModalOpen}
          onClose={closeWaitlistModal}
        />
      </div>
    </div>
  );
}
