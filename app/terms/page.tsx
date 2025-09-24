"use client";

import { useSEO } from "@/utils/seo";
import Link from "next/link";

export default function TermsOfService() {
  useSEO({
    title: "Terms of Service - Marqait AI",
    description:
      "Read Marqait AI's Terms of Service. Understand the rules and guidelines for using our AI-powered marketing platform.",
    canonical: "https://www.marqait.com/terms",
    keywords:
      "terms of service, user agreement, terms and conditions, service rules, Marqait AI legal",
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
              Marqait AI Terms of Service
            </h1>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              These terms govern your use of Marqait AI's platform and services. Please read them carefully.
            </p>
          </div>

          {/* Acceptance of Terms */}
          <div className="mb-8 lg:mb-12">
            <div className="bg-[#020103] border border-white/15 rounded-xl p-6 sm:p-8 lg:p-10">
              <h2 className="text-white font-inter font-bold mb-6 text-lg sm:text-xl lg:text-[20px]">
                Acceptance of Terms
              </h2>
              <div className="space-y-4 text-gray-300">
                <p className="text-sm leading-relaxed">
                  These Terms of Service ("Terms") govern your access to and use of Marqait's website and services. 
                  By registering for or using our services, you agree to be bound by these Terms and by our Privacy 
                  Policy. Marqait is based in India, and these Terms are governed by Indian law.
                </p>
                <p className="text-sm leading-relaxed">
                  You must be at least 18 years old to use the Service; if you are younger than 18, you may use the 
                  Service only with parental consent and in compliance with local law. Minors under 18 should not 
                  create an account. If you do not agree with any part of these Terms or our policies, do not use the Service.
                </p>
              </div>
            </div>
          </div>

          {/* Account Registration */}
          <div className="mb-8 lg:mb-12">
            <div className="bg-[#020103] border border-white/15 rounded-xl p-6 sm:p-8 lg:p-10">
              <h2 className="text-white font-inter font-bold mb-6 text-lg sm:text-xl lg:text-[20px]">
                Account Registration and Security
              </h2>
              <div className="space-y-4 text-gray-300">
                <p className="text-sm leading-relaxed">
                  To access certain features, you may need to create an account. You agree to provide accurate, current 
                  and complete information (such as name, email and password) when registering. You are responsible for 
                  maintaining the confidentiality of your login credentials and for any activity under your account.
                </p>
                <div className="bg-[#111111] border border-white/10 rounded-lg p-4">
                  <h4 className="text-white font-medium text-sm mb-3">Your account responsibilities:</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-purple-400 mt-1">•</span>
                      <span>Keep your login credentials secure and confidential</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-400 mt-1">•</span>
                      <span>Notify us immediately of any unauthorized account access</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-400 mt-1">•</span>
                      <span>Do not share your password or account with others</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-400 mt-1">•</span>
                      <span>Take responsibility for all actions taken through your account</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Permitted Uses */}
          <div className="mb-8 lg:mb-12">
            <div className="bg-[#020103] border border-white/15 rounded-xl p-6 sm:p-8 lg:p-10">
              <h2 className="text-white font-inter font-bold mb-6 text-lg sm:text-xl lg:text-[20px]">
                Permitted Uses
              </h2>
              <div className="space-y-4 text-gray-300">
                <p className="text-sm leading-relaxed">
                  Subject to these Terms, Marqait grants you a limited, non-exclusive, non-transferable license to use 
                  the platform and its features for your business or personal marketing needs. You agree to use the 
                  Service only in compliance with applicable laws (including India's Information Technology Act and 
                  any content regulations) and these Terms.
                </p>
                <p className="text-sm leading-relaxed">
                  For example, you may not use Marqait for any unlawful purpose, to send spam or unsolicited 
                  communications, or to infringe on others' rights. Marqait's AI tools are provided for marketing 
                  optimization and content generation; you agree not to use our Service to create competing AI or 
                  machine-learning models.
                </p>
              </div>
            </div>
          </div>

          {/* Prohibited Conduct */}
          <div className="mb-8 lg:mb-12">
            <div className="bg-[#020103] border border-white/15 rounded-xl p-6 sm:p-8 lg:p-10">
              <h2 className="text-white font-inter font-bold mb-6 text-lg sm:text-xl lg:text-[20px]">
                Prohibited Conduct
              </h2>
              <div className="space-y-4 text-gray-300">
                <p className="text-sm leading-relaxed mb-4">
                  When using our Services you must not:
                </p>
                <div className="space-y-4">
                  <div className="bg-[#111111] border border-white/10 rounded-lg p-4">
                    <h4 className="text-white font-medium text-sm mb-2">Infringe Rights:</h4>
                    <p className="text-sm leading-relaxed">
                      Violate any intellectual property, privacy, publicity or other legal rights. Do not upload or 
                      distribute content that you do not have the right to use.
                    </p>
                  </div>
                  <div className="bg-[#111111] border border-white/10 rounded-lg p-4">
                    <h4 className="text-white font-medium text-sm mb-2">Illegal or Harmful Activity:</h4>
                    <p className="text-sm leading-relaxed">
                      Use the Service for illegal purposes or in a way that could harm others. This includes sending 
                      spam, viruses, malware, or other harmful code.
                    </p>
                  </div>
                  <div className="bg-[#111111] border border-white/10 rounded-lg p-4">
                    <h4 className="text-white font-medium text-sm mb-2">Security Violations:</h4>
                    <p className="text-sm leading-relaxed">
                      Attempt to bypass, disable or reverse-engineer any security features or technical protections 
                      of the Service. Do not interfere with or disrupt the Service.
                    </p>
                  </div>
                  <div className="bg-[#111111] border border-white/10 rounded-lg p-4">
                    <h4 className="text-white font-medium text-sm mb-2">Automated Access:</h4>
                    <p className="text-sm leading-relaxed">
                      Use bots, scrapers or other automated means beyond our provided interfaces to access or 
                      collect data from the Service.
                    </p>
                  </div>
                  <div className="bg-[#111111] border border-white/10 rounded-lg p-4">
                    <h4 className="text-white font-medium text-sm mb-2">Misrepresentation:</h4>
                    <p className="text-sm leading-relaxed">
                      Do not misrepresent that content from Marqait is human-generated if it was produced by AI. 
                      Do not remove any legal or proprietary notices.
                    </p>
                  </div>
                </div>
                <p className="text-sm leading-relaxed">
                  We reserve the right to suspend or terminate accounts that violate any of these rules.
                </p>
              </div>
            </div>
          </div>

          {/* User Content and License */}
          <div className="mb-8 lg:mb-12">
            <div className="bg-[#020103] border border-white/15 rounded-xl p-6 sm:p-8 lg:p-10">
              <h2 className="text-white font-inter font-bold mb-6 text-lg sm:text-xl lg:text-[20px]">
                User Content and License
              </h2>
              <div className="space-y-4 text-gray-300">
                <p className="text-sm leading-relaxed">
                  If you submit or upload any content to Marqait (such as campaign data, images, text, or files), 
                  you retain ownership of that content. By providing content to our Service, you grant Marqait and 
                  its affiliates a worldwide, royalty-free, non-exclusive license to use, copy, reproduce, process, 
                  adapt, publish, transmit and display your content as needed to operate and improve the Service.
                </p>
                <p className="text-sm leading-relaxed">
                  This license allows us to store and share your content (for example, across your devices or with 
                  team members in your organization) and to include it in aggregated analytics. You represent and 
                  warrant that you have all necessary rights to your content and that uploading it does not violate 
                  any laws or third-party rights.
                </p>
              </div>
            </div>
          </div>

          {/* Intellectual Property */}
          <div className="mb-8 lg:mb-12">
            <div className="bg-[#020103] border border-white/15 rounded-xl p-6 sm:p-8 lg:p-10">
              <h2 className="text-white font-inter font-bold mb-6 text-lg sm:text-xl lg:text-[20px]">
                Intellectual Property
              </h2>
              <div className="space-y-4 text-gray-300">
                <p className="text-sm leading-relaxed">
                  Marqait (and its licensors) exclusively own all rights to the Service, including its software, 
                  design, text, graphics, logos, and trademarks. These materials are protected by copyright, 
                  trademark and other laws (including Indian copyright and trademark law).
                </p>
                <p className="text-sm leading-relaxed">
                  Except as expressly provided in these Terms, you may not copy, modify, distribute, sell or lease 
                  any part of the Service or its content. All trademarks and brands displayed on the Service are 
                  the property of their respective owners.
                </p>
              </div>
            </div>
          </div>

          {/* Third-Party Services */}
          <div className="mb-8 lg:mb-12">
            <div className="bg-[#020103] border border-white/15 rounded-xl p-6 sm:p-8 lg:p-10">
              <h2 className="text-white font-inter font-bold mb-6 text-lg sm:text-xl lg:text-[20px]">
                Third-Party Services and Links
              </h2>
              <div className="space-y-4 text-gray-300">
                <p className="text-sm leading-relaxed">
                  Our Service may contain links to third-party websites or integrate third-party services (for 
                  example, social media platforms, payment gateways or analytics tools). We do not control those 
                  third parties and are not responsible for their content or practices.
                </p>
                <p className="text-sm leading-relaxed">
                  When you access a third-party service, you do so at your own risk and should review that service's 
                  terms and privacy policy. Marqait is not liable for any transactions, damages or disputes arising 
                  from use of third-party sites or services.
                </p>
              </div>
            </div>
          </div>

          {/* Service Termination */}
          <div className="mb-8 lg:mb-12">
            <div className="bg-[#020103] border border-white/15 rounded-xl p-6 sm:p-8 lg:p-10">
              <h2 className="text-white font-inter font-bold mb-6 text-lg sm:text-xl lg:text-[20px]">
                Service Termination
              </h2>
              <div className="space-y-4 text-gray-300">
                <p className="text-sm leading-relaxed">
                  We may suspend or terminate your access and/or account at any time, without notice or liability, 
                  for any reason (such as if you breach these Terms). Upon termination, your right to use the 
                  Service ceases immediately.
                </p>
                <p className="text-sm leading-relaxed">
                  You may also terminate your account at any time by discontinuing use of the Service. Upon 
                  termination, any licenses granted to you will end and you must cease all use of the Service.
                </p>
              </div>
            </div>
          </div>

          {/* Warranty Disclaimer */}
          <div className="mb-8 lg:mb-12">
            <div className="bg-[#020103] border border-white/15 rounded-xl p-6 sm:p-8 lg:p-10">
              <h2 className="text-white font-inter font-bold mb-6 text-lg sm:text-xl lg:text-[20px]">
                Warranty Disclaimer
              </h2>
              <div className="space-y-4 text-gray-300">
                <div className="bg-[#2D1B69] border border-purple-500/30 rounded-lg p-4">
                  <p className="text-sm leading-relaxed text-purple-100">
                    <strong>Important:</strong> The Service is provided "AS IS" and "AS AVAILABLE" without any warranty of any kind.
                  </p>
                </div>
                <p className="text-sm leading-relaxed">
                  To the fullest extent permitted by law, Marqait and its affiliates disclaim all warranties, whether 
                  express or implied, including warranties of merchantability, fitness for a particular purpose, title, 
                  and non-infringement. We do not guarantee that the Service will meet your requirements or be 
                  uninterrupted, secure, or error-free.
                </p>
                <p className="text-sm leading-relaxed">
                  You agree that your use of the Service is at your sole risk and that Marqait is not responsible 
                  for any third-party content or services you access through the Service.
                </p>
              </div>
            </div>
          </div>

          {/* Limitation of Liability */}
          <div className="mb-8 lg:mb-12">
            <div className="bg-[#020103] border border-white/15 rounded-xl p-6 sm:p-8 lg:p-10">
              <h2 className="text-white font-inter font-bold mb-6 text-lg sm:text-xl lg:text-[20px]">
                Limitation of Liability
              </h2>
              <div className="space-y-4 text-gray-300">
                <p className="text-sm leading-relaxed">
                  Except where prohibited by law, in no event will Marqait or its suppliers be liable for any 
                  indirect, incidental, special, consequential or punitive damages arising out of your use of the 
                  Service. This includes damages for loss of profits, business interruption, loss of data, or other 
                  intangible losses, even if we have been advised of the possibility of such damages.
                </p>
                <p className="text-sm leading-relaxed">
                  Our total aggregate liability for any claim arising from the Service will not exceed the amount 
                  you have paid us (if any) in the twelve months preceding the claim, or $100 if you have not paid 
                  us. Some jurisdictions do not allow exclusion of certain warranties or limitation of liability, 
                  so these limitations may not apply to you.
                </p>
              </div>
            </div>
          </div>

          {/* Governing Law */}
          <div className="mb-8 lg:mb-12">
            <div className="bg-[#020103] border border-white/15 rounded-xl p-6 sm:p-8 lg:p-10">
              <h2 className="text-white font-inter font-bold mb-6 text-lg sm:text-xl lg:text-[20px]">
                Governing Law and Disputes
              </h2>
              <div className="space-y-4 text-gray-300">
                <p className="text-sm leading-relaxed">
                  These Terms are governed by the laws of India (without regard to conflict of laws). You agree 
                  that any dispute arising out of or related to these Terms or your use of the Service will first 
                  be addressed by contacting us to seek a resolution.
                </p>
                <p className="text-sm leading-relaxed">
                  If we cannot resolve the dispute informally, then both you and Marqait agree to binding arbitration 
                  in India (or another forum as required by applicable law). This section does not limit your right 
                  to seek injunctive relief in a court of competent jurisdiction.
                </p>
              </div>
            </div>
          </div>

          {/* Terms Modifications */}
          <div className="mb-8 lg:mb-12">
            <div className="bg-[#020103] border border-white/15 rounded-xl p-6 sm:p-8 lg:p-10">
              <h2 className="text-white font-inter font-bold mb-6 text-lg sm:text-xl lg:text-[20px]">
                Modifications to Terms
              </h2>
              <div className="space-y-4 text-gray-300">
                <p className="text-sm leading-relaxed">
                  We may update these Terms from time to time at our discretion. If we make material changes, we 
                  will provide reasonable notice (for example, by email or posting a notice at least 30 days before 
                  the new terms take effect). What constitutes a "material change" is up to us, but may include 
                  changes to pricing, fees or key features.
                </p>
                <p className="text-sm leading-relaxed">
                  Your continued use of the Service after such notice will mean you accept the revised Terms. If 
                  you do not agree to any changes, you must stop using the Service.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="mb-8 lg:mb-12">
            <div className="bg-[#020103] border border-white/15 rounded-xl p-6 sm:p-8 lg:p-10 text-center">
              <h2 className="text-white font-inter font-bold mb-4 text-lg sm:text-xl lg:text-[20px]">
                Questions About These Terms?
              </h2>
              <p className="text-gray-300 mb-6 text-sm leading-relaxed">
                If you have questions about these Terms of Service or need clarification on any provisions, 
                please don't hesitate to contact us.
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
                  href="/privacy-policy"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl border border-[rgba(255,255,255,0.20)] bg-transparent transition-all duration-200 hover:bg-[rgba(255,255,255,0.05)] hover:border-[rgba(255,255,255,0.35)] font-semibold text-white text-sm"
                >
                  Privacy Policy
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
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
                These Terms of Service are subject to change without notice.
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