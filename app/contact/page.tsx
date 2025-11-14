import type { Metadata } from "next";
import ContactForm from "@/components/contact/contact-form";
import { Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us - Marqait AI",
  description:
    "Looking to collaborate or learn how our AI marketing solutions can support your business objectives? Fill out the form and our team will be in touch shortly.",
  keywords:
    "contact us, AI marketing solutions, business collaboration, marketing automation support",
  alternates: {
    canonical: "https://www.marqait.com/contact",
  },
  openGraph: {
    title: "Contact Us - Marqait AI",
    description:
      "Looking to collaborate or learn how our AI marketing solutions can support your business objectives? Fill out the form and our team will be in touch shortly.",
    url: "https://www.marqait.com/contact",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us - Marqait AI",
    description:
      "Looking to collaborate or learn how our AI marketing solutions can support your business objectives? Fill out the form and our team will be in touch shortly.",
  },
};

export default function ContactPage() {
  return (
    <div
      className="min-h-screen relative overflow-hidden"
      style={{
        backgroundImage: "url('/contact.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="relative z-10 container mx-auto px-4 py-8 sm:py-12 lg:py-16 max-w-7xl">
        {/* Header Section */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h1
            className="font-bold text-white mb-4 sm:mb-4
            text-2xl sm:text-3xl md:text-4xl lg:text-[36px]"
            style={{
              color: "#FFF",
              fontFamily: "Inter",
              fontSize: "36px",
              fontStyle: "normal",
              fontWeight: 700,
              lineHeight: "60px",
            }}
          >
            Contact Us
          </h1>
          <p
            className="mx-auto px-4 sm:px-6 md:px-8 lg:px-0
            text-sm sm:text-base md:text-lg lg:text-[20px]
            max-w-full sm:max-w-2xl md:max-w-4xl lg:max-w-[1128px]"
            style={{
              width: "1128px",
              color: "#FFF",
              textAlign: "center",
              fontFamily: "Inter",
              fontSize: "20px",
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight: "32px",
            }}
          >
            Looking to collaborate or learn how our AI marketing solutions can
            support your business objectives? Fill out the form and our team
            will be in touch shortly.
          </p>
        </div>

        {/* Purple glow effect positioned above form */}
        <div className="max-w-6xl relative">
          <div
            className="absolute inset-0 rounded-2xl
            w-[300px] h-[200px] -top-4 -left-8
            sm:w-[500px] sm:h-[300px] sm:-top-8 sm:-left-12
            md:w-[800px] md:h-[400px] md:-top-12 md:-left-16
            lg:w-[1400px] lg:h-[500px] lg:-top-0 lg:-left-[70px]"
            style={{
              background:
                "radial-gradient(ellipse at top, rgba(147, 51, 234, 7) 50%, rgba(147, 51, 234, 01.8) 50%, transparent 55%)",
              filter: "blur(60px)",
            }}
          ></div>
        </div>

        <div className="max-w-6xl mx-auto relative">
          <div
            className="rounded-2xl border border-white/15 p-4 sm:p-6 md:p-8 lg:p-12 shadow-2xl relative"
            style={{
              backgroundImage: "url('/form.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="absolute inset-0 bg-black/80 rounded-2xl"></div>
            <div className="relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
                {/* Contact Information */}
                <div className="space-y-4 sm:space-y-6 lg:space-y-8">
                  <h2
                    className="text-white font-inter font-bold mb-4 sm:mb-6 lg:mb-8
                    text-xl sm:text-2xl md:text-3xl lg:text-[30px]"
                    style={{
                      fontSize: "30px",
                      lineHeight: "60px",
                    }}
                  >
                    Contact Information :
                  </h2>
                  <div className="space-y-4 sm:space-y-5 lg:space-y-6">
                    <div className="flex items-center gap-3 sm:gap-4">
                      <div className="w-5 h-5 flex-shrink-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M3 8L10.8906 13.2604C11.5624 13.7083 12.4376 13.7083 13.1094 13.2604L21 8M5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19Z"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <a
                        href="mailto: hello@marqait.com"
                        className="text-[#8C45FF] hover:text-purple-300 transition-colors font-inter font-normal
                        text-sm sm:text-base lg:text-[16px]"
                        style={{
                          fontSize: "16px",
                          lineHeight: "24px",
                        }}
                      >
                        hello@marqait.com
                      </a>
                    </div>
                    {/* <div className="flex items-center gap-3 sm:gap-4">
                      <Phone className="text-white h-4 w-4" />
                      <span className="text-[#8C45FF]">9880542033</span>
                    </div> */}
                  </div>
                </div>

                {/* Contact Form */}
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
