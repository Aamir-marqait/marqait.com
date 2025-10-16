"use client";

import { useRef, useState } from "react";
import Script from "next/script";
import { useSEO } from "../utils/seo";
import ContactFormSection from "../components/home/contact-form-section";
import CopilotSection from "../components/home/Copilot";
import HeroSection from "../components/home/HeroSection";
import Toast from "../components/ui/Toast";
import WaitlistModal from "../components/waitlist-modal";
// import FAQSection from "../components/home/FAQSection";

import DesignPattern from "@/components/home/design-pattern";
import UI from "@/components/home/UI";
// import ClientTestimonialsSection from "@/components/home/client-testimonials-section";
import FreeTierAgents from "@/components/home/featured-agents-free-tier";
import ProTierAgents from "@/components/home/featured-agents-pro-tier";
import UniqueFeatured from "@/components/home/featured-unique";
import MarketingTransforms from "@/components/home/marketing-transforms";

export default function Home() {
  const contactFormRef = useRef<HTMLDivElement>(null);
  const [showToast, setShowToast] = useState(false);
  const [isWaitlistModalOpen, setIsWaitlistModalOpen] = useState(false);

  useSEO({
    canonical: "https://www.marqait.com",
    title: "Marqait AI - Best AI Tools, AI Solutions & Marketing Automation",
    description:
      "Marqait AI is a leading AI development company offering AI tools, marketing automation, and custom AI solutions to improve efficiency and productivity.",
    keywords:
      "AI, growth platform, business automation, marqait, artificial intelligence",
    ogType: "website",
    twitterCard: "summary_large_image",
  });


  const closeWaitlistModal = () => {
    setIsWaitlistModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#05000A] w-full overflow-x-hidden">
      <Script id="faqs-structured-data" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "What is Marketing automation?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Marketing automation uses artificial intelligence to automate and optimize marketing tasks like email campaigns, lead generation, and customer segmentation. Marketing automation helps businesses to save time and boost performance and ROI.",
              },
            },
            {
              "@type": "Question",
              name: "What are the benefits of automation for marketing?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Key benefits of automation for marketing include automated manual tasks, saving time, improving lead quality, increasing conversions, personalizing customer journeys, and boosting overall marketing performance.",
              },
            },
            {
              "@type": "Question",
              name: "Is marketing automation suitable for small businesses?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, marketing automation is highly beneficial for small businesses. It allows teams to do more with less by automating repetitive tasks and focusing on strategy and growth.",
              },
            },
            {
              "@type": "Question",
              name: "Can marketing automation help with lead generation?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Absolutely. With marketing automation, you can capture leads through forms, segment them automatically, and run targeted campaigns to convert them into paying customers.",
              },
            },
            {
              "@type": "Question",
              name: "What makes Marqait a unique marketing automation platform?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Marqait offers AI-enhanced automation for marketing that adapts to your business goals, creating smart campaigns, personalized messaging, and real-time performance insights. That makes Marqait all in one marketing automation platform.",
              },
            },
          ],
        })}
      </Script>
      <div className="w-full max-w-none">
        <HeroSection />
        <DesignPattern />
        <CopilotSection />
        <UI />
        <FreeTierAgents />
        <ProTierAgents />
        <UniqueFeatured />
        <MarketingTransforms />
        {/* <ClientTestimonialsSection /> */}
        <ContactFormSection ref={contactFormRef} />
        {/* <FAQSection /> */}
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
