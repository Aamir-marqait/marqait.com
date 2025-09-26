"use client";

import { useSEO } from "@/utils/seo";
import Link from "next/link";

export default function PrivacyPolicy() {
  useSEO({
    title: "Privacy Policy - Marqait AI",
    description:
      "Your privacy is important to us. This policy explains how we collect, use, and protect your personal information.",
    canonical: "https://www.marqait.com/privacy",
    keywords:
      "privacy policy, data protection, user privacy, GDPR, CCPA, data rights, Marqait AI privacy",
    ogType: "website",
    twitterCard: "summary_large_image",
  });

  return (
    <div className="min-h-screen bg-[#05000A] w-full overflow-x-hidden">
      <div className="pt-5 lg:pt-5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
          {/* Header Section */}
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h1
              className="font-bold text-white mb-4 sm:mb-6
              text-2xl sm:text-3xl md:text-4xl lg:text-[36px]"
              style={{
                fontFamily: "Inter",
                lineHeight: "1.2",
              }}
            >
              Marqait AI Privacy Policy
            </h1>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Your privacy is important to us. This policy explains how we collect, use, and protect your personal information.
            </p>
          </div>

          {/* Introduction */}
          <div className="mb-8 lg:mb-12">
            <div className="bg-[#020103] border border-white/15 rounded-xl p-6 sm:p-8 lg:p-10">
              <h2 className="text-white font-inter font-bold mb-4 text-lg sm:text-xl lg:text-[20px]">
                Introduction
              </h2>
              <p className="text-gray-300 text-sm leading-relaxed">
                This Privacy Policy applies to the Marqait AI website located at www.marqait.com, and all
                associated sites linked to www.marqait.com by Marqait AI, its subsidiaries, and affiliates 
                (collectively, the "Site"). Marqait AI ("Marqait", "we", "our" or "us") is an Indian company
                providing an AI-powered marketing automation platform. We value your privacy and comply with 
                applicable laws, including India's Digital Personal Data Protection Act, 2023 (DPDPA), the EU
                General Data Protection Regulation (GDPR), and the California Consumer Privacy Act (CCPA) as 
                amended by the California Privacy Rights Act (CPRA). Marqait is headquartered in India and all
                data is stored and processed in India in accordance with local regulations.
              </p>
            </div>
          </div>

          {/* Information We Collect */}
          <div className="mb-8 lg:mb-12">
            <div className="bg-[#020103] border border-white/15 rounded-xl p-6 sm:p-8 lg:p-10">
              <h2 className="text-white font-inter font-bold mb-6 text-lg sm:text-xl lg:text-[20px]">
                Information We Collect
              </h2>
              <div className="space-y-4 text-gray-300">
                <p className="text-sm leading-relaxed">
                  We collect information you provide directly and information automatically when you use our services. 
                  Personally Identifiable Information may include your name, email address, business address, phone 
                  number and other contact details. We also collect account data and profile information (e.g. login 
                  credentials, company name, communication preferences) and billing information via secure payment processors.
                </p>
                <p className="text-sm leading-relaxed">
                  In addition, we collect technical and usage data such as IP address, browser type, device identifiers, 
                  login history, pages visited, session duration, and location or geolocation data. We may also collect 
                  any content you upload or share (such as marketing materials, images, text, files or AI-generated content) 
                  and records of your communications with us (for example, customer support messages or feedback).
                </p>
                <p className="text-sm leading-relaxed">
                  We classify any data that identifies you, either directly (like name or email) or indirectly (like IP 
                  address or browsing history) as personal information. Under Indian law, certain categories of data (such 
                  as financial, health or biometric data) may be considered sensitive; we handle all personal and sensitive 
                  data with strict security and confidentiality measures.
                </p>
              </div>
            </div>
          </div>

          {/* How We Collect Information */}
          <div className="mb-8 lg:mb-12">
            <div className="bg-[#020103] border border-white/15 rounded-xl p-6 sm:p-8 lg:p-10">
              <h2 className="text-white font-inter font-bold mb-6 text-lg sm:text-xl lg:text-[20px]">
                How We Collect Information
              </h2>
              <div className="space-y-4 text-gray-300">
                <p className="text-sm leading-relaxed">
                  We receive information directly from you – for example, when you register for an account, fill out 
                  forms, contact support, or participate in surveys. We also collect data automatically when you use 
                  Marqait's websites and applications: for instance, through cookies, web beacons, and analytics tools.
                </p>
                <p className="text-sm leading-relaxed">
                  Cookies are small data files stored on your device to facilitate features (e.g. keeping you logged 
                  in) and analytics. We use essential cookies for core functionality (like authentication and security) 
                  and non-essential cookies for analytics, personalization, and advertising. We obtain explicit consent 
                  before using non-essential cookies for marketing or tracking purposes.
                </p>
                <p className="text-sm leading-relaxed">
                  You can control or disable cookies via your browser settings (see our Cookie Notice or your browser's 
                  help). Finally, we may receive information about you from third-party sources (for example, public 
                  business directories or partners) and combine it with the data we collect directly.
                </p>
              </div>
            </div>
          </div>

          {/* How We Use Your Information */}
          <div className="mb-8 lg:mb-12">
            <div className="bg-[#020103] border border-white/15 rounded-xl p-6 sm:p-8 lg:p-10">
              <h2 className="text-white font-inter font-bold mb-6 text-lg sm:text-xl lg:text-[20px]">
                How We Use Your Information
              </h2>
              <div className="space-y-4 text-gray-300">
                <p className="text-sm leading-relaxed">
                  We use your personal data to provide, operate and improve our platform. Specifically, we use your 
                  information to set up and maintain your account, facilitate logins, and ensure you can access the 
                  services. We use your contact details to communicate with you – for example, to respond to support 
                  requests or send service-related notices.
                </p>
                <p className="text-sm leading-relaxed">
                  We use usage data for internal record-keeping and analytics to enhance features, security and performance. 
                  We may analyze aggregated data and usage patterns to optimize our platform. With your consent, we may also 
                  send you marketing messages about Marqait or related products; you can unsubscribe at any time by clicking 
                  the opt-out link in those messages or contacting us.
                </p>
                <p className="text-sm leading-relaxed">
                  Under applicable law, we rely on lawful bases to process your data. For example, under the GDPR we process 
                  data to perform our contract with you, to comply with legal obligations, and for our legitimate interests 
                  (such as improving our services), and sometimes based on your consent. We will use your information as 
                  required by law – for instance, to detect or prevent fraud, comply with subpoenas or court orders, or to 
                  enforce our legal rights.
                </p>
              </div>
            </div>
          </div>

          {/* Data Sharing and Disclosure */}
          <div className="mb-8 lg:mb-12">
            <div className="bg-[#020103] border border-white/15 rounded-xl p-6 sm:p-8 lg:p-10">
              <h2 className="text-white font-inter font-bold mb-6 text-lg sm:text-xl lg:text-[20px]">
                Data Sharing and Disclosure
              </h2>
              <div className="space-y-4 text-gray-300">
                <p className="text-sm leading-relaxed">
                  We will never sell or rent your personal data. We disclose information only as necessary to operate 
                  our business and provide the Service. This includes sharing data with:
                </p>
                <div className="ml-4 space-y-3">
                  <div>
                    <h4 className="text-white font-medium text-sm mb-2">Affiliates and Subsidiaries:</h4>
                    <p className="text-sm leading-relaxed">
                      We may share information with other Marqait entities, as needed, to provide the Service.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-white font-medium text-sm mb-2">Service Providers:</h4>
                    <p className="text-sm leading-relaxed">
                      We engage third-party vendors (e.g. cloud hosting, IT, email providers, analytics, payment 
                      processors) to support our platform. These providers process data on our behalf and are 
                      contractually bound to use it only for the purposes we specify.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-white font-medium text-sm mb-2">Professional Advisors:</h4>
                    <p className="text-sm leading-relaxed">
                      We may share information with auditors, lawyers, or accountants when needed for legal or 
                      financial advice.
                    </p>
                  </div>
                </div>
                <p className="text-sm leading-relaxed">
                  We also may disclose data if required by law or to protect our rights – for example, in response 
                  to a lawful order under India's Information Technology Act or other regulations, or to prevent fraud.
                </p>
              </div>
            </div>
          </div>

          {/* Your Privacy Rights */}
          <div className="mb-8 lg:mb-12">
            <div className="bg-[#020103] border border-white/15 rounded-xl p-6 sm:p-8 lg:p-10">
              <h2 className="text-white font-inter font-bold mb-6 text-lg sm:text-xl lg:text-[20px]">
                Your Privacy Rights
              </h2>
              <div className="space-y-4 text-gray-300">
                <p className="text-sm leading-relaxed">
                  You have choices regarding our use of your information. You may unsubscribe from marketing emails 
                  at any time (links are provided in each message). Under privacy laws like the GDPR (EU/UK) and 
                  the CCPA/CPRA (California), you have rights with respect to your personal data.
                </p>
                <div className="bg-[#111111] border border-white/10 rounded-lg p-4">
                  <h4 className="text-white font-medium text-sm mb-3">Your rights include:</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-purple-400 mt-1">•</span>
                      <span>Access the categories of data we hold about you</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-400 mt-1">•</span>
                      <span>Correct or update your personal information</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-400 mt-1">•</span>
                      <span>Request deletion of your personal data</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-400 mt-1">•</span>
                      <span>Data portability and restriction of processing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-400 mt-1">•</span>
                      <span>Withdraw consent at any time</span>
                    </li>
                  </ul>
                </div>
                <p className="text-sm leading-relaxed">
                  To exercise any rights (access, correction, deletion, objection, etc.), or to withdraw consent, 
                  please contact us using the information below. We will verify your identity and respond in 
                  accordance with applicable law. We will not discriminate against you for exercising any privacy rights.
                </p>
              </div>
            </div>
          </div>

          {/* Data Security */}
          <div className="mb-8 lg:mb-12">
            <div className="bg-[#020103] border border-white/15 rounded-xl p-6 sm:p-8 lg:p-10">
              <h2 className="text-white font-inter font-bold mb-6 text-lg sm:text-xl lg:text-[20px]">
                Data Security
              </h2>
              <div className="space-y-4 text-gray-300">
                <p className="text-sm leading-relaxed">
                  We implement commercially reasonable technical, physical, and administrative safeguards to protect 
                  your information. These include encryption of data in transit and at rest, access controls, firewalls, 
                  and regular security reviews. We follow industry standards (such as using secure cloud hosting and 
                  encrypting sensitive fields) to prevent unauthorized access or disclosure.
                </p>
                <p className="text-sm leading-relaxed">
                  In India, the Information Technology Act and related rules require companies to implement "reasonable 
                  security practices" for personal data; as a fiduciary we are obligated to maintain security safeguards 
                  and promptly notify authorities of any data breaches. However, no system can be 100% secure. You 
                  acknowledge the inherent risk of data transmission over the Internet, and you accept that we cannot 
                  guarantee absolute security of your data.
                </p>
              </div>
            </div>
          </div>

          {/* Data Retention */}
          <div className="mb-8 lg:mb-12">
            <div className="bg-[#020103] border border-white/15 rounded-xl p-6 sm:p-8 lg:p-10">
              <h2 className="text-white font-inter font-bold mb-6 text-lg sm:text-xl lg:text-[20px]">
                Data Retention
              </h2>
              <div className="space-y-4 text-gray-300">
                <p className="text-sm leading-relaxed">
                  We retain personal information only as long as needed to fulfill the purposes outlined above and 
                  to comply with legal obligations. For example, we may keep account and transaction records for as 
                  long as required by financial or tax regulations (such as India's Income Tax Act) or corporate laws. 
                  Once data is no longer necessary, we will securely delete it or anonymize it so it cannot be linked to you.
                </p>
              </div>
            </div>
          </div>

          {/* Policy Updates */}
          <div className="mb-8 lg:mb-12">
            <div className="bg-[#020103] border border-white/15 rounded-xl p-6 sm:p-8 lg:p-10">
              <h2 className="text-white font-inter font-bold mb-6 text-lg sm:text-xl lg:text-[20px]">
                Policy Updates
              </h2>
              <div className="space-y-4 text-gray-300">
                <p className="text-sm leading-relaxed">
                  We may revise this Privacy Policy from time to time (for instance, to reflect changes in law or 
                  our practices). If we make material changes, we will notify you – for example, by updating the 
                  "Last Updated" date and/or posting a notice on our website. Your continued use of Marqait after 
                  such changes means you accept the revised policy. We encourage you to review this policy periodically.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="mb-8 lg:mb-12">
            <div className="bg-[#020103] border border-white/15 rounded-xl p-6 sm:p-8 lg:p-10 text-center">
              <h2 className="text-white font-inter font-bold mb-4 text-lg sm:text-xl lg:text-[20px]">
                Questions About Privacy?
              </h2>
              <p className="text-gray-300 mb-6 text-sm leading-relaxed">
                If you have questions about this Privacy Policy or wish to exercise your privacy rights, 
                please contact us via the information below or through our contact page.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  href="/contacts"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl border border-[rgba(255,255,255,0.40)] bg-[rgba(140,69,255,0.40)] transition-all duration-200 hover:bg-[rgba(140,69,255,0.50)] hover:border-[rgba(255,255,255,0.35)] font-semibold text-white text-sm"
                  style={{
                    boxShadow: "0px 0px 6px 3px rgba(255, 255, 255, 0.25) inset",
                  }}
                >
                  Contact Us
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5 12H19M19 12L12 5M19 12L12 19"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
                <Link
                  href="/user-data-deletion"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl border border-[rgba(255,255,255,0.40)] bg-[rgba(220,38,38,0.40)] transition-all duration-200 hover:bg-[rgba(220,38,38,0.50)] hover:border-[rgba(255,255,255,0.35)] font-semibold text-white text-sm"
                  style={{
                    boxShadow: "0px 0px 6px 3px rgba(255, 255, 255, 0.25) inset",
                  }}
                >
                  Delete My Data
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3 6H21M8 6V4C8 3.44772 8.44772 3 9 3H15C15.5523 3 16 3.44772 16 4V6M19 6V20C19 20.5523 18.4477 21 18 21H6C5.44772 21 5 20.5523 5 20V6H19Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </div>
              <div className="mt-6 pt-6 border-t border-white/10">
                <p className="text-gray-400 text-sm">
                  Email us directly at: <a href="mailto:hello@marqait.com" className="text-purple-400 hover:text-purple-300">hello@marqait.com</a>
                </p>
              </div>
            </div>
          </div>

          {/* Footer Notice */}
          <div className="mb-8">
            <div className="bg-[#020103] border border-white/15 rounded-xl p-6 sm:p-8 lg:p-10 text-center">
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                This Privacy Policy is subject to change without notice.
              </p>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                Copyright © 2025 Marqait AI. All rights reserved.
              </p>
              <p className="text-gray-400 text-xs">
                Last Updated: January 15, 2025
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}