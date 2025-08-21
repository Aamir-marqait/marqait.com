import { useState } from "react";
import Link from "next/link";

export default function FAQSection() {
  const [openAccordion, setOpenAccordion] = useState(0);

  const faqs = [
    {
      question: "What is Marketing automation?",
      answer:
        "Marketing automation uses artificial intelligence to automate and optimize marketing tasks like email campaigns, lead generation, and customer segmentation. Marketing automation helps businesses to save time and boost performance and ROI.",
    },
    {
      question: "What are the benefits of automation for marketing?",
      answer:
        "Key benefits of automation for marketing include automated manual tasks, saving time, improving lead quality, increasing conversions, personalizing customer journeys, and boosting overall marketing performance.",
    },
    {
      question: "Is marketing automation suitable for small businesses?",
      answer:
        "Yes, marketing automation is highly beneficial for small businesses. It allows teams to do more with less by automating repetitive tasks and focusing on strategy and growth.",
    },
    {
      question: "Can marketing automation help with lead generation?",
      answer:
        "Absolutely. With marketing automation, you can capture leads through forms, segment them automatically, and run targeted campaigns to convert them into paying customers.",
    },
    {
      question: "What makes Marqait a unique marketing automation platform?",
      answer:
        "Marqait offers AI-enhanced automation for marketing that adapts to your business goals, creating smart campaigns, personalized messaging, and real-time performance insights. That makes Marqait all in one marketing automation platform.",
    },
  ];

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? -1 : index);
  };

  return (
    <div className="min-h-screen bg-[#05000A] relative overflow-hidden">
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-8 sm:py-12 md:py-16 lg:py-20 xl:py-12 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 xl:gap-16 items-start">
          {/* Left Content Section - Order 1 on mobile/tablet, Order 1 on desktop */}
          <div className="space-y-6 sm:space-y-8 lg:space-y-10 xl:space-y-12 order-1">
            {/* Header */}
            <div className="space-y-3 sm:space-y-4 lg:space-y-2">
              <h2
                className="font-inter font-bold leading-[150%] bg-gradient-to-r from-[rgba(255,255,255,0.90)] to-[rgba(153,153,153,0.90)] bg-clip-text text-transparent
                text-2xl
                sm:text-3xl
                md:text-4xl
                lg:text-[36px]"
                style={{
                  fontSize: "36px"
                }}
              >
                Frequently Asked Questions
              </h2>
              <p
                className="text-[rgba(255,255,255,0.90)] font-inter font-normal leading-[150%]
                text-sm
                sm:text-base
                md:text-lg
                lg:text-xl
                xl:text-[24px]"
                style={{
                  fontSize: "24px"
                }}
              >
                Find quick answers to common questions about our services,
                features, and support. Need more help? Contact us anytime.
              </p>
            </div>

            {/* Contact CTA */}
            <div>
              <p
                className="text-white font-inter font-medium leading-[140%]
                text-sm
                sm:text-base
                lg:text-[18px]"
                style={{
                  fontSize: "18px"
                }}
              >
                Still have questions?{" "}
                <Link
                  href="/contacts"
                  className="text-[#B372CF] font-inter font-bold leading-[140%] hover:text-purple-300 transition-colors duration-300
                  text-sm
                  sm:text-base
                  lg:text-[18px]"
                  style={{
                    fontSize: "18px"
                  }}
                >
                  Contact Us
                </Link>
              </p>
            </div>

            {/* AI Figure Image - Hidden on mobile/tablet, visible on desktop */}
            <div className="hidden lg:flex justify-center lg:justify-end">
              <div className="relative w-full max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl">
                <img
                  src="/pods/modelglow.png"
                  alt=""
                  className="absolute inset-0 object-cover z-0
                  w-80 h-80 -left-6 -top-8
                  lg:w-96 lg:h-96 lg:-left-8 lg:-top-10
                  xl:w-[500px] xl:h-[500px]"
                />
                <img
                  src="/pods/background.svg"
                  alt=""
                  className="absolute object-cover opacity-40 z-5
                  w-80 h-80 -left-6 -top-8
                  lg:w-96 lg:h-96 lg:-left-8 lg:-top-10
                  xl:w-[500px] xl:h-[500px]"
                />
                <img
                  src="/pods/ai.png"
                  alt="AI-Powered Growth Pods"
                  className="relative z-10
                  w-80 h-80
                  lg:w-96 lg:h-96
                  xl:w-[500px] xl:h-[500px]"
                />
              </div>
            </div>
          </div>

          {/* Right Accordion Section - Order 2 on mobile/tablet, Order 2 on desktop */}
          <div className="space-y-3 sm:space-y-4 lg:space-y-6 order-2">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="rounded-[8px] sm:rounded-[10px] lg:rounded-[12px] border border-[rgba(255,255,255,0.15)] backdrop-blur-[10px] overflow-hidden transition-all duration-300"
                style={{
                  background: `radial-gradient(146.13% 118.42% at 50% -15.5%, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.00) 99.59%), linear-gradient(180deg, rgba(46, 51, 90, 0.00) 0%, rgba(28, 27, 51, 0.10) 100%)`,
                  boxShadow: `0px 0px 100px 0px rgba(204,215,255,0.15) inset, 0px 5px 10px 0px rgba(0,0,0,0.05), 0px 15px 30px 0px rgba(0,0,0,0.05), 0px 30px 60px 0px rgba(0,0,0,0.10)`,
                }}
              >
                {/* Question Header */}
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full cursor-pointer text-left flex items-center justify-between transition-all duration-300 group
                  px-4 py-3
                  sm:px-5 sm:py-4
                  lg:px-6 lg:py-4
                  xl:px-8 xl:py-6"
                >
                  <h3
                    className="text-white font-inter font-bold leading-[140%] group-hover:text-purple-100 transition-colors duration-300 pr-3 sm:pr-4
                    text-sm
                    sm:text-base
                    lg:text-[18px]"
                    style={{
                      fontSize: "18px"
                    }}
                  >
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    {openAccordion === index ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 sm:w-6 sm:h-6"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path d="M6 13V11H18V13H6Z" fill="white" />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 sm:w-6 sm:h-6"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M6.54632 12.5625H11.1417V17.1579C11.1417 17.625 11.5259 18.0167 12.0006 18.0167C12.4752 18.0167 12.8594 17.625 12.8594 17.1579V12.5625H17.4548C17.9219 12.5625 18.3136 12.1783 18.3136 11.7037C18.3136 11.2291 17.9219 10.8449 17.4548 10.8449H12.8594V6.24944C12.8594 5.78237 12.4752 5.39062 12.0006 5.39062C11.5259 5.39062 11.1417 5.78237 11.1417 6.24944V10.8449H6.54632C6.07924 10.8449 5.6875 11.2291 5.6875 11.7037C5.6875 12.1783 6.07924 12.5625 6.54632 12.5625Z"
                          fill="white"
                        />
                      </svg>
                    )}
                  </div>
                </button>

                {/* Answer Content */}
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openAccordion === index
                      ? "max-h-96 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div
                    className="px-4 pb-3
                    sm:px-5 sm:pb-4
                    lg:px-6 lg:pb-4
                    xl:px-8 xl:pb-6"
                  >
                    <div
                      className="rounded-[6px] sm:rounded-[8px] border border-[rgba(255,255,255,0.15)] backdrop-blur-[10px] p-3 sm:p-4 lg:p-6"
                      style={{
                        background: `radial-gradient(146.13% 118.42% at 50% -15.5%, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.00) 99.59%), linear-gradient(180deg, rgba(46, 51, 90, 0.00) 0%, rgba(28, 27, 51, 0.10) 100%)`,
                        boxShadow: `0px 0px 100px 0px rgba(204,215,255,0.15) inset, 0px 5px 10px 0px rgba(0,0,0,0.05), 0px 15px 30px 0px rgba(0,0,0,0.05), 0px 30px 60px 0px rgba(0,0,0,0.10)`,
                      }}
                    >
                      <p
                        className="text-[rgba(255,255,255,0.80)] font-inter font-normal leading-[150%]
                        text-sm
                        sm:text-base
                        lg:text-[16px]"
                        style={{
                          fontSize: "16px"
                        }}
                      >
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* AI Figure Image - Visible only on mobile/tablet, centered */}
        <div className="lg:hidden flex justify-center mt-8 sm:mt-12">
          <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md">
            <img
              src="/pods/modelglow.png"
              alt=""
              className="absolute inset-0 object-cover z-0
              w-64 h-64 -left-4 -top-6
              sm:w-80 sm:h-80 sm:-left-6 sm:-top-8"
            />
            <img
              src="/pods/background.svg"
              alt=""
              className="absolute object-cover opacity-40 z-5
              w-64 h-64 -left-4 -top-6
              sm:w-80 sm:h-80 sm:-left-6 sm:-top-8"
            />
            <img
              src="/pods/ai.png"
              alt="AI-Powered Growth Pods"
              className="relative z-10
              w-64 h-64
              sm:w-80 sm:h-80"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
