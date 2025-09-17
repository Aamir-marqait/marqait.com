import Image from "next/image";

export default function OurSeoServices() {
  const services = [
    {
      title: "AI SEO Automation",
      description:
        "Our proprietary AI SEO Automation streamline keyword research, content gap analysis, backlink monitoring, and SERP tracking—all in one place.",
      image: "/seo/2.png",
    },
    {
      title: "SEO Writing AI",
      description:
        "Leverage AI writing assistants that produce high-quality, optimized content tailored for your target keywords and audience. Every piece of content is designed for SEO and user engagement.",
      image: "/seo/4.png",
    },
    {
      title: "Technical SEO with AI",
      description:
        "Fix issues that hold back your rankings. Our AI SEO crawlers and diagnostic tools identify technical flaws and recommend fixes for improved site health.",
      image: "/seo/5.png",
    },
    {
      title: "AI-Driven Content Strategy",
      description:
        "We use artificial intelligence SEO models to map customer journeys, understand search intent, and develop data-backed content strategies.",
      image: "/seo/1.png",
    },
    {
      title: "Competitor Intelligence",
      description:
        "Stay ahead of the competition with AI-powered insights into competitor backlinks, content performance, and keyword strategies.",
      image: "/seo/3.png",
    },
  ];

  return (
    <section className="py-20 bg-black">
      <div className="max-w-[70rem] mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2
            className="text-[#F2F2F2] font-bold text-[32px] leading-[150%] tracking-[0%] text-center mb-6"
            style={{ fontFamily: "Inter" }}
          >
            Our SEO Services
          </h2>
          <p
            className="text-[17px] text-white/90 leading-[150%] tracking-[0%] text-center max-w-4xl mx-auto"
            style={{ fontFamily: "Inter", fontWeight: 400 }}
          >
            At Marqait AI, we offer a comprehensive range of AI SEO automation
            to help businesses grow:
          </p>
        </div>

        {/* Services List */}
        <div className="space-y-6">
          {services.map((service, index) => (
            <div key={index} className="group">
              <div className="flex flex-col md:flex-row items-center gap-8">
                {/* Service Image */}
                <div className="flex-shrink-0">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    width={256}
                    height={128}
                    className="w-full md:w-64 h-32 object-contain rounded-lg"
                  />
                </div>

                {/* Service Content */}

                <h3 className="text-white text-[22px] w-full leading-[32px] tracking-[0%] font-inter font-semibold">
                  {service.title}
                </h3>
                <p className="text-[14px] w-full leading-[26px] tracking-[0%] font-inter text-white/80">
                  {service.description}
                </p>
              </div>

              {/* Divider - hide on last item */}
              {index < services.length - 0 && (
                <div className="mt-2" style={{
                  borderWidth: "1px 0px 1px 0px",
                  borderStyle: "solid",
                  borderColor: "#E7EDF64D"
                }}></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
