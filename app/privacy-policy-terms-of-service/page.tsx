"use client";

import { useSEO } from "@/utils/seo";

export default function PrivacyPolicyTermsOfService() {
  useSEO({
    title: "Privacy Policy and Terms of Service - Marqait AI",
    description: "Marqait AI Privacy Policy explains what information we collects, why we collects it, how we use it, and how to remove your data.",
    canonical: "https://www.marqait.com/privacy-policy-terms-of-service",
    keywords: "privacy policy, terms of service, data protection, user rights, Marqait AI legal",
    ogType: "website",
    twitterCard: "summary_large_image"
  });

  return (
    <div className="min-h-screen bg-[#05000A] w-full overflow-x-hidden">
      <div className="pt-5 lg:pt-5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
          {/* Header Section */}
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h1
              className="font-bold text-white mb-4 sm:mb-6
              text-2xl sm:text-3xl md:text-4xl lg:text-[48px]"
              style={{
                fontFamily: "Inter",
                lineHeight: "1.2",
              }}
            >
              Explore our Privacy Policy and Terms of Service
            </h1>
            <p
              className="text-gray-300 mx-auto max-w-3xl
              text-sm sm:text-base md:text-lg lg:text-[18px]"
              style={{
                fontFamily: "Inter",
                lineHeight: "1.6",
              }}
            >
              Learn about how we protect your privacy and the terms governing your use of Marqait AI services.
            </p>
          </div>

          {/* Privacy Policy Section */}
          <div className="mb-12 lg:mb-16">
            <div className="bg-[#020103] border border-white/15 rounded-xl p-6 sm:p-8 lg:p-10">
              <h2 className="text-white font-inter font-bold mb-6 text-xl sm:text-2xl lg:text-[28px]">
                Privacy Policy
              </h2>
              
              <div className="space-y-6 text-gray-300">
                <div>
                  <h3 className="text-white font-semibold text-lg mb-3">Information We Collect</h3>
                  <p className="mb-4">
                    At Marqait AI, we collect information you provide directly to us, such as when you create an account, 
                    use our services, or contact us for support. This may include your name, email address, company information, 
                    and any content you create or share through our platform.
                  </p>
                  <p>
                    We also automatically collect certain information about your device and how you interact with our services, 
                    including your IP address, browser type, operating system, and usage patterns.
                  </p>
                </div>

                <div>
                  <h3 className="text-white font-semibold text-lg mb-3">How We Use Your Information</h3>
                  <p className="mb-4">We use the information we collect to:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Provide, maintain, and improve our AI marketing automation services</li>
                    <li>Process transactions and send related information</li>
                    <li>Send technical notices, updates, security alerts, and support messages</li>
                    <li>Respond to your comments, questions, and requests</li>
                    <li>Develop new products and services</li>
                    <li>Monitor and analyze trends, usage, and activities</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-white font-semibold text-lg mb-3">Information Sharing</h3>
                  <p className="mb-4">
                    We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, 
                    except as described in this privacy policy. We may share your information with:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Service providers who assist us in operating our platform</li>
                    <li>Professional advisors such as lawyers and accountants</li>
                    <li>Law enforcement or government agencies when required by law</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-white font-semibold text-lg mb-3">Data Security</h3>
                  <p>
                    We implement appropriate technical and organizational measures to protect your personal information 
                    against unauthorized access, alteration, disclosure, or destruction. However, no internet or 
                    email transmission is ever fully secure, so please use caution when sharing sensitive information.
                  </p>
                </div>

                <div>
                  <h3 className="text-white font-semibold text-lg mb-3">Your Rights</h3>
                  <p className="mb-4">You have the right to:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Access and receive a copy of your personal information</li>
                    <li>Correct inaccurate or incomplete personal information</li>
                    <li>Delete your personal information</li>
                    <li>Object to or restrict the processing of your personal information</li>
                    <li>Withdraw consent where we rely on consent to process your information</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Terms of Service Section */}
          <div className="mb-12 lg:mb-16">
            <div className="bg-[#020103] border border-white/15 rounded-xl p-6 sm:p-8 lg:p-10">
              <h2 className="text-white font-inter font-bold mb-6 text-xl sm:text-2xl lg:text-[28px]">
                Terms of Service
              </h2>
              
              <div className="space-y-6 text-gray-300">
                <div>
                  <h3 className="text-white font-semibold text-lg mb-3">Acceptance of Terms</h3>
                  <p>
                    By accessing or using Marqait AI services, you agree to be bound by these Terms of Service and 
                    all applicable laws and regulations. If you do not agree with any of these terms, 
                    you are prohibited from using our services.
                  </p>
                </div>

                <div>
                  <h3 className="text-white font-semibold text-lg mb-3">Use License</h3>
                  <p className="mb-4">
                    Permission is granted to temporarily use Marqait AI services for personal or commercial purposes. 
                    This license does not include:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Modifying or copying the platform materials</li>
                    <li>Using the materials for commercial purposes without proper licensing</li>
                    <li>Attempting to reverse engineer our AI algorithms</li>
                    <li>Removing copyright or proprietary notations</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-white font-semibold text-lg mb-3">User Responsibilities</h3>
                  <p className="mb-4">Users are responsible for:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Maintaining the confidentiality of their account information</li>
                    <li>All activities that occur under their account</li>
                    <li>Ensuring their use complies with applicable laws and regulations</li>
                    <li>Not using the service for illegal or harmful purposes</li>
                    <li>Respecting intellectual property rights</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-white font-semibold text-lg mb-3">Service Availability</h3>
                  <p>
                    While we strive to maintain high availability, Marqait AI services are provided &#34;as is&#34; without 
                    warranty of any kind. We do not guarantee uninterrupted or error-free operation of our services.
                  </p>
                </div>

                <div>
                  <h3 className="text-white font-semibold text-lg mb-3">Limitation of Liability</h3>
                  <p>
                    In no event shall Marqait AI or its suppliers be liable for any damages (including, without limitation, 
                    damages for loss of data or profit, or due to business interruption) arising out of the use or 
                    inability to use our services, even if we have been notified of the possibility of such damage.
                  </p>
                </div>

                <div>
                  <h3 className="text-white font-semibold text-lg mb-3">Modifications</h3>
                  <p>
                    We may revise these terms of service at any time without notice. By using our services, 
                    you are agreeing to be bound by the current version of these terms.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="text-center">
            <div className="bg-[#020103] border border-white/15 rounded-xl p-6 sm:p-8 lg:p-10">
              <h2 className="text-white font-inter font-bold mb-4 text-xl sm:text-2xl lg:text-[24px]">
                Questions About Our Policies?
              </h2>
              <p className="text-gray-300 mb-6">
                If you have any questions about our Privacy Policy or Terms of Service, 
                please don&apos;t hesitate to contact us.
              </p>
              <a 
                href="mailto:hello@marqait.com"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl border border-[rgba(255,255,255,0.40)] bg-[rgba(140,69,255,0.40)] transition-all duration-200 hover:bg-[rgba(140,69,255,0.50)] hover:border-[rgba(255,255,255,0.35)] font-semibold text-white"
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
              </a>
            </div>
          </div>

          {/* Last Updated */}
          <div className="text-center mt-8">
            <p className="text-gray-500 text-sm">
              Last updated: {new Date().toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}