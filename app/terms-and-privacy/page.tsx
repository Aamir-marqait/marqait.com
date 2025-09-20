"use client";

import { useSEO } from "@/utils/seo";
import Link from "next/link";

export default function TermsAndPrivacy() {
  useSEO({
    title: "Terms and Privacy - Marqait AI",
    description:
      "Read Marqait AI's Terms of Service and Privacy Policy. Learn about our data protection practices and user rights.",
    canonical: "https://www.marqait.com/terms-and-privacy",
    keywords:
      "terms of service, privacy policy, data protection, user rights, Marqait AI legal",
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
              Marqait AI Privacy Policy & Terms of Service
            </h1>
          </div>

          {/* Introduction */}
          <div className="mb-8 lg:mb-12">
            <div className="bg-[#020103] border border-white/15 rounded-xl p-6 sm:p-8 lg:p-10">
              <p className="text-gray-300 text-sm leading-relaxed">
                These Terms of Service and Privacy Policy (the "Terms") apply to
                the Marqait AI website located at www.marqait.com, and all
                associated sites linked to www.marqait.com by Marqait AI, its
                subsidiaries, and affiliates (collectively, the "Site"). Marqait
                AI ("Marqait", "we", "our" or "us") is an Indian company
                providing an AI-powered marketing automation platform. We value
                your privacy and comply with applicable laws, including India's
                Digital Personal Data Protection Act, 2023 (DPDPA), the EU
                General Data Protection Regulation (GDPR), and the California
                Consumer Privacy Act (CCPA) as amended by the California Privacy
                Rights Act (CPRA). Marqait is headquartered in India and all
                data is stored and processed in India in accordance with local
                regulations. This Privacy Policy explains what information we
                collect about you, why we collect it, how we use it, and how you
                can access, correct, or delete your data. Our Terms of Service
                ("Terms") govern your use of Marqait's website and services. By
                using the Site, you agree to these Terms and our Privacy Policy;
                if you do not agree, please do not use the Site.
              </p>
            </div>
          </div>

          {/* Privacy Policy Section */}
          <div className="mb-8 lg:mb-12">
            <div className="bg-[#020103] border border-white/15 rounded-xl p-6 sm:p-8 lg:p-10">
              <h2 className="text-white font-inter font-bold mb-6 text-lg sm:text-xl lg:text-[24px]">
                Privacy Policy
              </h2>

              <div className="space-y-6 text-gray-300">
                <div>
                  <h3 className="text-white font-semibold text-base mb-3">
                    Information We Collect
                  </h3>
                  <p className="text-sm leading-relaxed mb-4">
                    We collect information you provide directly and information
                    automatically when you use our services. Personally
                    Identifiable Information may include your name, email
                    address, business address, phone number and other contact
                    details. We also collect account data and profile
                    information (e.g. login credentials, company name,
                    communication preferences) and billing information via
                    secure payment processors. In addition, we collect technical
                    and usage data such as IP address, browser type, device
                    identifiers, login history, pages visited, session duration,
                    and location or geolocation data. We may also collect any
                    content you upload or share (such as marketing materials,
                    images, text, files or AI-generated content) and records of
                    your communications with us (for example, customer support
                    messages or feedback). We classify any data that identifies
                    you, either directly (like name or email) or indirectly
                    (like IP address or browsing history) as personal
                    information. Under Indian law, certain categories of data
                    (such as financial, health or biometric data) may be
                    considered sensitive; we handle all personal and sensitive
                    data with strict security and confidentiality measures.
                  </p>
                </div>

                <div>
                  <h3 className="text-white font-semibold text-base mb-3">
                    How We Collect Information
                  </h3>
                  <p className="text-sm leading-relaxed mb-4">
                    We receive information directly from you – for example, when
                    you register for an account, fill out forms, contact
                    support, or participate in surveys. We also collect data
                    automatically when you use Marqait's websites and
                    applications: for instance, through cookies, web beacons,
                    and analytics tools. Cookies are small data files stored on
                    your device to facilitate features (e.g. keeping you logged
                    in) and analytics. We use essential cookies for core
                    functionality (like authentication and security) and
                    non-essential cookies for analytics, personalization, and
                    advertising. We obtain explicit consent before using
                    non-essential cookies for marketing or tracking purposes.
                    You can control or disable cookies via your browser settings
                    (see our Cookie Notice or your browser's help). Finally, we
                    may receive information about you from third-party sources
                    (for example, public business directories or partners) and
                    combine it with the data we collect directly.
                  </p>
                </div>

                <div>
                  <h3 className="text-white font-semibold text-base mb-3">
                    How We Use Your Information
                  </h3>
                  <p className="text-sm leading-relaxed mb-4">
                    We use your personal data to provide, operate and improve
                    our platform. Specifically, we use your information to set
                    up and maintain your account, facilitate logins, and ensure
                    you can access the services. We use your contact details to
                    communicate with you – for example, to respond to support
                    requests or send service-related notices. We use usage data
                    for internal record-keeping and analytics to enhance
                    features, security and performance. We may analyze
                    aggregated data and usage patterns to optimize our platform.
                    With your consent, we may also send you marketing messages
                    about Marqait or related products; you can unsubscribe at
                    any time by clicking the opt-out link in those messages or
                    contacting us.
                  </p>
                  <p className="text-sm leading-relaxed">
                    Under applicable law, we rely on lawful bases to process
                    your data. For example, under the GDPR we process data to
                    perform our contract with you, to comply with legal
                    obligations, and for our legitimate interests (such as
                    improving our services), and sometimes based on your
                    consent. The Digital Personal Data Protection Act similarly
                    requires that we process personal data only with your
                    consent or for specified legitimate uses. For instance, the
                    DPDP Act allows processing your data for the purpose you
                    provided it (if you do not object), to comply with law or
                    court orders, for emergencies, or other lawful purposes. For
                    California residents, we comply with CCPA/CPRA by providing
                    required disclosures and respecting opt-out requests. We
                    will use your information as required by law – for instance,
                    to detect or prevent fraud, comply with subpoenas or court
                    orders, or to enforce our legal rights.
                  </p>
                </div>

                <div>
                  <h3 className="text-white font-semibold text-base mb-3">
                    Disclosure to Third Parties
                  </h3>
                  <p className="text-sm leading-relaxed mb-4">
                    We will never sell or rent your personal data. We disclose
                    information only as necessary to operate our business and
                    provide the Service. This includes sharing data with:
                  </p>
                  <div className="ml-4 space-y-3">
                    <div>
                      <h4 className="text-white font-medium text-sm">
                        Affiliates and Subsidiaries:
                      </h4>
                      <p className="text-sm leading-relaxed">
                        We may share information with other Marqait entities, as
                        needed, to provide the Service.
                      </p>
                    </div>
                    <div>
                      <h4 className="text-white font-medium text-sm">
                        Service Providers:
                      </h4>
                      <p className="text-sm leading-relaxed">
                        We engage third-party vendors (e.g. cloud hosting, IT,
                        email providers, analytics, payment processors) to
                        support our platform. These providers process data on
                        our behalf and are contractually bound to use it only
                        for the purposes we specify. These service providers may
                        be located inside or outside India; any international
                        transfers will comply with applicable legal
                        requirements.
                      </p>
                    </div>
                    <div>
                      <h4 className="text-white font-medium text-sm">
                        Professional Advisors:
                      </h4>
                      <p className="text-sm leading-relaxed">
                        We may share information with auditors, lawyers, or
                        accountants when needed for legal or financial advice.
                      </p>
                    </div>
                  </div>
                  <p className="text-sm leading-relaxed mt-4">
                    We also may disclose data if required by law or to protect
                    our rights – for example, in response to a lawful order
                    under India's Information Technology Act or other
                    regulations, or to prevent fraud. In the event that Marqait
                    merges with or is acquired by another company, personal data
                    may be transferred to the successor entity as part of the
                    transaction. When we share data with third parties (for
                    example, using Google Analytics for web analytics), we do so
                    only to improve or analyze the Service. We encourage you to
                    review the privacy policies of third parties; Marqait is not
                    responsible for their practices.
                  </p>
                </div>

                <div>
                  <h3 className="text-white font-semibold text-base mb-3">
                    Cookies and Tracking
                  </h3>
                  <p className="text-sm leading-relaxed">
                    We use cookies and similar tracking technologies to improve
                    your experience. Essential cookies (such as session cookies)
                    help authenticate and secure your session. Non-essential
                    cookies (for analytics, personalization or advertising)
                    require your consent. For example, analytics cookies help us
                    understand how our services are used so we can make
                    improvements. You can manage cookies through your browser or
                    device settings – disabling certain cookies may impact
                    functionality (for instance, you might not stay logged in or
                    see personalized features). For more details, see our Cookie
                    Notice or your browser's privacy documentation.
                  </p>
                </div>

                <div>
                  <h3 className="text-white font-semibold text-base mb-3">
                    Your Choices and Rights
                  </h3>
                  <p className="text-sm leading-relaxed mb-4">
                    You have choices regarding our use of your information. You
                    may unsubscribe from marketing emails at any time (links are
                    provided in each message). Under privacy laws like the GDPR
                    (EU/UK) and the CCPA/CPRA (California), you have rights with
                    respect to your personal data. These may include the right
                    to access the categories of data we hold about you, correct
                    or update it, or request its deletion. (For example, the
                    GDPR grants individuals the "right to be forgotten,"
                    allowing them to request erasure of personal data.) In
                    California, you also have the right to know what personal
                    data we collect, to delete it, and to direct us not to sell
                    or share it.
                  </p>
                  <p className="text-sm leading-relaxed mb-4">
                    For individuals in India, the Digital Personal Data
                    Protection Act similarly grants you rights over your data.
                    For instance, you have the right to access, correct, update,
                    and erase your personal data. You also have the right to
                    withdraw consent at any time and to obtain redress for any
                    grievances under the DPDP Act. (The law even allows you to
                    nominate another person to act on your behalf if you become
                    unable to do so.) You may also have rights to data
                    portability or to restrict or object to certain processing
                    (such as for direct marketing). If you are a California or
                    Indian resident, you have additional specific rights as
                    noted above.
                  </p>
                  <p className="text-sm leading-relaxed">
                    To exercise any rights (access, correction, deletion,
                    objection, etc.), or to withdraw consent, please contact us
                    using the information below. We will verify your identity
                    and respond in accordance with applicable law (for example,
                    within the GDPR's one-month timeframe or the period required
                    by the DPDP Act). We will not discriminate against you for
                    exercising any privacy rights. Please note that certain
                    information may need to be retained for legitimate business
                    or legal reasons even after you close your account (e.g. to
                    comply with accounting rules or to protect against fraud).
                  </p>
                </div>

                <div>
                  <h3 className="text-white font-semibold text-base mb-3">
                    Data Security
                  </h3>
                  <p className="text-sm leading-relaxed">
                    We implement commercially reasonable technical, physical,
                    and administrative safeguards to protect your information.
                    These include encryption of data in transit and at rest,
                    access controls, firewalls, and regular security reviews. We
                    follow industry standards (such as using secure cloud
                    hosting and encrypting sensitive fields) to prevent
                    unauthorized access or disclosure. In India, the Information
                    Technology Act and related rules require companies to
                    implement "reasonable security practices" for personal data;
                    as a fiduciary we are obligated to maintain security
                    safeguards and promptly notify authorities of any data
                    breaches. However, no system can be 100% secure. You
                    acknowledge the inherent risk of data transmission over the
                    Internet, and you accept that we cannot guarantee absolute
                    security of your data.
                  </p>
                </div>

                <div>
                  <h3 className="text-white font-semibold text-base mb-3">
                    Retention
                  </h3>
                  <p className="text-sm leading-relaxed">
                    We retain personal information only as long as needed to
                    fulfill the purposes outlined above and to comply with legal
                    obligations. For example, we may keep account and
                    transaction records for as long as required by financial or
                    tax regulations (such as India's Income Tax Act) or
                    corporate laws. Once data is no longer necessary, we will
                    securely delete it or anonymize it so it cannot be linked to
                    you.
                  </p>
                </div>

                <div>
                  <h3 className="text-white font-semibold text-base mb-3">
                    Policy Updates
                  </h3>
                  <p className="text-sm leading-relaxed">
                    We may revise this Privacy Policy from time to time (for
                    instance, to reflect changes in law or our practices). If we
                    make material changes, we will notify you – for example, by
                    updating the "Last Updated" date and/or posting a notice on
                    our website. Your continued use of Marqait after such
                    changes means you accept the revised policy. We encourage
                    you to review this policy periodically. If you have
                    questions or wish to exercise your rights, please contact us
                    as described below.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Terms of Service Section */}
          <div className="mb-8 lg:mb-12">
            <div className="bg-[#020103] border border-white/15 rounded-xl p-6 sm:p-8 lg:p-10">
              <h2 className="text-white font-inter font-bold mb-6 text-lg sm:text-xl lg:text-[24px]">
                Terms of Service
              </h2>

              <div className="space-y-6 text-gray-300">
                <div>
                  <h3 className="text-white font-semibold text-base mb-3">
                    Acceptance of Terms
                  </h3>
                  <p className="text-sm leading-relaxed">
                    These Terms of Service ("Terms") govern your access to and
                    use of Marqait's website and services. By registering for or
                    using our services, you agree to be bound by these Terms and
                    by our Privacy Policy. Marqait is based in India, and these
                    Terms are governed by Indian law. You must be at least 18
                    years old to use the Service; if you are younger than 18,
                    you may use the Service only with parental consent and in
                    compliance with local law. Minors under 18 should not create
                    an account. If you do not agree with any part of these Terms
                    or our policies, do not use the Service.
                  </p>
                </div>

                <div>
                  <h3 className="text-white font-semibold text-base mb-3">
                    Accounts and Security
                  </h3>
                  <p className="text-sm leading-relaxed">
                    To access certain features, you may need to create an
                    account. You agree to provide accurate, current and complete
                    information (such as name, email and password) when
                    registering. You are responsible for maintaining the
                    confidentiality of your login credentials and for any
                    activity under your account. You must notify us immediately
                    if you suspect unauthorized use of your account. Do not
                    share your password or account with others. You are solely
                    responsible for all actions taken through your account.
                  </p>
                </div>

                <div>
                  <h3 className="text-white font-semibold text-base mb-3">
                    Permitted Uses
                  </h3>
                  <p className="text-sm leading-relaxed">
                    Subject to these Terms, Marqait grants you a limited,
                    non-exclusive, non-transferable license to use the platform
                    and its features for your business or personal marketing
                    needs. You agree to use the Service only in compliance with
                    applicable laws (including India's Information Technology
                    Act and any content regulations) and these Terms. For
                    example, you may not use Marqait for any unlawful purpose,
                    to send spam or unsolicited communications, or to infringe
                    on others' rights. Marqait's AI tools are provided for
                    marketing optimization and content generation; you agree not
                    to use our Service to create competing AI or
                    machine-learning models.
                  </p>
                </div>

                <div>
                  <h3 className="text-white font-semibold text-base mb-3">
                    Prohibited Conduct
                  </h3>
                  <p className="text-sm leading-relaxed mb-4">
                    When using our Services you must not:
                  </p>
                  <div className="ml-4 space-y-3">
                    <div>
                      <h4 className="text-white font-medium text-sm">
                        Infringe Rights:
                      </h4>
                      <p className="text-sm leading-relaxed">
                        Violate any intellectual property, privacy, publicity or
                        other legal rights. Do not upload or distribute content
                        that you do not have the right to use.
                      </p>
                    </div>
                    <div>
                      <h4 className="text-white font-medium text-sm">
                        Illegal or Harmful Activity:
                      </h4>
                      <p className="text-sm leading-relaxed">
                        Use the Service for illegal purposes or in a way that
                        could harm others. This includes sending spam, viruses,
                        malware, or other harmful code.
                      </p>
                    </div>
                    <div>
                      <h4 className="text-white font-medium text-sm">
                        Security Violations:
                      </h4>
                      <p className="text-sm leading-relaxed">
                        Attempt to bypass, disable or reverse-engineer any
                        security features or technical protections of the
                        Service. Do not interfere with or disrupt the Service
                        (for example, by hacking, probing, or flooding).
                      </p>
                    </div>
                    <div>
                      <h4 className="text-white font-medium text-sm">
                        Automated Access:
                      </h4>
                      <p className="text-sm leading-relaxed">
                        Use bots, scrapers or other automated means beyond our
                        provided interfaces to access or collect data from the
                        Service.
                      </p>
                    </div>
                    <div>
                      <h4 className="text-white font-medium text-sm">
                        Misrepresentation:
                      </h4>
                      <p className="text-sm leading-relaxed">
                        Do not misrepresent that content from Marqait is
                        human-generated if it was produced by AI. Do not remove
                        any legal or proprietary notices.
                      </p>
                    </div>
                  </div>
                  <p className="text-sm leading-relaxed mt-4">
                    We reserve the right to suspend or terminate accounts that
                    violate any of these rules.
                  </p>
                </div>

                <div>
                  <h3 className="text-white font-semibold text-base mb-3">
                    User Content and License
                  </h3>
                  <p className="text-sm leading-relaxed">
                    If you submit or upload any content to Marqait (such as
                    campaign data, images, text, or files), you retain ownership
                    of that content. By providing content to our Service, you
                    grant Marqait and its affiliates a worldwide, royalty-free,
                    non-exclusive license to use, copy, reproduce, process,
                    adapt, publish, transmit and display your content as needed
                    to operate and improve the Service. This license allows us
                    to store and share your content (for example, across your
                    devices or with team members in your organization) and to
                    include it in aggregated analytics. You represent and
                    warrant that you have all necessary rights to your content
                    and that uploading it does not violate any laws or
                    third-party rights.
                  </p>
                </div>

                <div>
                  <h3 className="text-white font-semibold text-base mb-3">
                    Intellectual Property
                  </h3>
                  <p className="text-sm leading-relaxed">
                    Marqait (and its licensors) exclusively own all rights to
                    the Service, including its software, design, text, graphics,
                    logos, and trademarks. These materials are protected by
                    copyright, trademark and other laws (including Indian
                    copyright and trademark law). Except as expressly provided
                    in these Terms, you may not copy, modify, distribute, sell
                    or lease any part of the Service or its content. All
                    trademarks and brands displayed on the Service are the
                    property of their respective owners.
                  </p>
                </div>

                <div>
                  <h3 className="text-white font-semibold text-base mb-3">
                    Third-Party Services and Links
                  </h3>
                  <p className="text-sm leading-relaxed">
                    Our Service may contain links to third-party websites or
                    integrate third-party services (for example, social media
                    platforms, payment gateways or analytics tools). We do not
                    control those third parties and are not responsible for
                    their content or practices. When you access a third-party
                    service, you do so at your own risk and should review that
                    service's terms and privacy policy. Marqait is not liable
                    for any transactions, damages or disputes arising from use
                    of third-party sites or services.
                  </p>
                </div>

                <div>
                  <h3 className="text-white font-semibold text-base mb-3">
                    Termination
                  </h3>
                  <p className="text-sm leading-relaxed">
                    We may suspend or terminate your access and/or account at
                    any time, without notice or liability, for any reason (such
                    as if you breach these Terms). Upon termination, your right
                    to use the Service ceases immediately. You may also
                    terminate your account at any time by discontinuing use of
                    the Service. Upon termination, any licenses granted to you
                    will end and you must cease all use of the Service.
                  </p>
                </div>

                <div>
                  <h3 className="text-white font-semibold text-base mb-3">
                    Warranty Disclaimer
                  </h3>
                  <p className="text-sm leading-relaxed">
                    The Service is provided "AS IS" and "AS AVAILABLE" without
                    any warranty of any kind. To the fullest extent permitted by
                    law, Marqait and its affiliates disclaim all warranties,
                    whether express or implied, including warranties of
                    merchantability, fitness for a particular purpose, title,
                    and non-infringement. We do not guarantee that the Service
                    will meet your requirements or be uninterrupted, secure, or
                    error-free. We cannot guarantee that defects will be
                    corrected. You agree that your use of the Service is at your
                    sole risk and that Marqait is not responsible for any
                    third-party content or services you access through the
                    Service.
                  </p>
                </div>

                <div>
                  <h3 className="text-white font-semibold text-base mb-3">
                    Limitation of Liability
                  </h3>
                  <p className="text-sm leading-relaxed">
                    Except where prohibited by law, in no event will Marqait or
                    its suppliers be liable for any indirect, incidental,
                    special, consequential or punitive damages arising out of
                    your use of the Service. This includes damages for loss of
                    profits, business interruption, loss of data, or other
                    intangible losses, even if we have been advised of the
                    possibility of such damages. Our total aggregate liability
                    for any claim arising from the Service will not exceed the
                    amount you have paid us (if any) in the twelve months
                    preceding the claim, or $100 if you have not paid us. Some
                    jurisdictions do not allow exclusion of certain warranties
                    or limitation of liability, so these limitations may not
                    apply to you.
                  </p>
                </div>

                <div>
                  <h3 className="text-white font-semibold text-base mb-3">
                    Governing Law and Disputes
                  </h3>
                  <p className="text-sm leading-relaxed">
                    These Terms are governed by the laws of India (without
                    regard to conflict of laws). You agree that any dispute
                    arising out of or related to these Terms or your use of the
                    Service will first be addressed by contacting us to seek a
                    resolution. If we cannot resolve the dispute informally,
                    then both you and Marqait agree to binding arbitration in
                    India (or another forum as required by applicable law). This
                    section does not limit your right to seek injunctive relief
                    in a court of competent jurisdiction.
                  </p>
                </div>

                <div>
                  <h3 className="text-white font-semibold text-base mb-3">
                    Modifications to Terms
                  </h3>
                  <p className="text-sm leading-relaxed">
                    We may update these Terms from time to time at our
                    discretion. If we make material changes, we will provide
                    reasonable notice (for example, by email or posting a notice
                    at least 30 days before the new terms take effect). What
                    constitutes a "material change" is up to us, but may include
                    changes to pricing, fees or key features. Your continued use
                    of the Service after such notice will mean you accept the
                    revised Terms. If you do not agree to any changes, you must
                    stop using the Service.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="mb-8 lg:mb-12">
            <div className="bg-[#020103] border border-white/15 rounded-xl p-6 sm:p-8 lg:p-10 text-center">
              <h2 className="text-white font-inter font-bold mb-4 text-lg sm:text-xl lg:text-[24px]">
                Contact Us
              </h2>
              <p className="text-gray-300 mb-6 text-sm leading-relaxed">
                If you have questions about this Privacy Policy or Terms, or
                wish to exercise your privacy rights, please contact us via the
                contact information on our website (www.marqait.com) or at the
                email address (hello@marqait.com) provided on our contact page.
              </p>
              <Link
                href="/contact"
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
            </div>
          </div>

          {/* Footer Notice */}
          <div className="mb-8">
            <div className="bg-[#020103] border border-white/15 rounded-xl p-6 sm:p-8 lg:p-10 text-center">
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                The information contained in this web site is subject to change
                without notice.
              </p>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                Copyright © 2025 Marqait AI. All rights reserved.
              </p>
              <p className="text-gray-400 text-xs">
                Updated by The Marqait AI Legal Team on Aug. 15, 2025
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
