import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "BrandMark AI",
    description:
      "Design unique logos in minutes with our AI Logo Generator. Just enter your brand name or idea, and our AI instantly makes professional logo designs that match your style and identity.",
    link: "/ai-logo-generator",
  },
  {
    title: "BrandBlueprint AI",
    description:
      "Build your brand identity with Marqait AI Brand Book Generator. Our AI organizes your logos, colors, fonts, and guidelines into a professional brand book. It helps you create stunning, interactive digital brand books with ease.",
    link: "/ai-brandbook-generator",
  },
  {
    title: "ReelCraft AI",
    description:
      "Design unique logos in minutes with our AI Logo Generator. Just enter your brand name or idea, and our AI instantly makes professional logo designs that match your style and identity.",
    link: "/ai-reel-generator",
  },
  {
    title: "AdPilot AI",
    description:
      "Create powerful campaigns in minutes with Marqait AI Campaign Generator. Our AI helps you generate marketing, ad, and social media campaigns that boost engagement, maximize ROI, and save time..",
    link: "/ai-campaign-generator",
  },
  {
    title: "ContentSpark AI",
    description:
      "Create social media posts with Marqait AI Social Media Post Generator. Type your idea, and our AI instantly generates the best social media posts that help you save time and stay consistent across all your platforms",
    link: "/ai-social-media-post-generator",
  },
  {
    title: "Image Editor AI",
    description:
      "Design unique logos in minutes with our AI Logo Generator. Just enter your brand name or idea, and our AI instantly makes professional logo designs that match your style and identity.",
    link: "/ai-image-editor",
  },
];

export default function OurPowerfulTools() {
  return (
    <div className="min-h-screen bg-[#05000A] text-white relative overflow-hidden">
      <div className="relative z-10 container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl leading-[60px] lg:text-[36px] font-bold mb-4 text-balance">
            Our Powerful {""}
            <span className="text-purple-400 lg:text-[36px] ">
              <span className="relative">
                Marketing AI Tools
                <Image
                  src="/line.svg"
                  alt="decorative line"
                  width={181}
                  height={11}
                  className="absolute left-0 right-0 w-full h-auto max-w-full"
                />
              </span>
            </span>
          </h1>
        </div>

        {/* Services Grid */}
        <div
          className="p-10  backdrop-blur-[20px] max-w-[75rem] mx-auto relative"
          style={{
            background: "rgba(255, 255, 255, 0.02)",
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Link
                key={index}
                href={service.link}
                className="backdrop-blur-[20px] transition-all duration-300 group hover:scale-105"
                style={{
                  background:
                    "linear-gradient(180deg, #05000A 0%, #1B1125 100%)",
                }}
              >
                <div className="p-6 flex flex-col h-full">
                  <div className="mb-4">
                    <Image
                      src={`/tools/hero${index + 1}.jpg`}
                      alt={service.title}
                      width={120}
                      height={120}
                      className="w-full h-[25rem] object-cover"
                    />
                  </div>
                  <h3
                    className="mb-4 text-white group-hover:text-purple-300 transition-colors"
                    style={{
                      fontFamily: "Inter",
                      fontWeight: 700,
                      fontSize: "24px",
                      lineHeight: "32px",
                      letterSpacing: "-2%",
                    }}
                  >
                    {service.title}
                  </h3>
                  <p
                    className="text-white mb-6 flex-grow"
                    style={{
                      fontFamily: "Inter",
                      fontWeight: 400,
                      fontSize: "16px",
                      lineHeight: "150%",
                      letterSpacing: "0%",
                    }}
                  >
                    {service.description}
                  </p>
                  <button
                    className="cursor-pointer flex items-center transition-all duration-200 justify-center gap-2 w-fit self-start mt-auto"
                    style={{
                      borderRadius: "15px",
                      borderWidth: "1px",
                      paddingTop: "4px",
                      paddingRight: "11px",
                      paddingBottom: "4px",
                      paddingLeft: "11px",
                      background:
                        "linear-gradient(180deg, rgba(184, 18, 255, 0.85) 0%, rgba(110, 11, 153, 0.85) 100%)",
                      border: "1px solid #E6D4FF99",
                      fontFamily: "Inter",
                      fontWeight: 600,
                      fontSize: "14px",
                      lineHeight: "30px",
                      letterSpacing: "0px",
                      verticalAlign: "middle",
                      color: "#F2F0F5",
                    }}
                  >
                    Try Now
                    <Image
                      src="/icons/arrow.svg"
                      alt="arrow-right"
                      width={21}
                      height={21}
                      style={{
                        borderRadius: "24px",
                        background: "#F2F0F540",
                        opacity: 1,
                        padding: "3px",
                      }}
                    />
                  </button>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
