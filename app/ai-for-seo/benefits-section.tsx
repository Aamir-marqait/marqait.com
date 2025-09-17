import Image from "next/image";

export default function BenefitsSection() {
  const benefits = [
    {
      title: "FASTER RESULTS",
      description: "Automated optimization reduces time-to-rank.",
      position: "left",
    },
    {
      title: "BETTER RANKINGS",
      description: "Smarter keyword targeting ensures visibility.",
      position: "left",
    },
    {
      title: "DATA-DRIVEN DECISIONS",
      description: "No guesswork—only actionable insights.",
      position: "left",
    },
    {
      title: "IMPROVED ROI",
      description: "More traffic, more conversions, better revenue.",
      position: "right",
    },
    {
      title: "SCALABLE SOLUTIONS",
      description:
        "From small businesses to enterprises, our AI SEO automation grow with you.",
      position: "right",
    },
    {
      title: "24/7 AVAILABILITY",
      description: "Always-on virtual support for customers and operations",
      position: "right",
    },
  ];

  const leftBenefits = benefits.filter(
    (benefit) => benefit.position === "left"
  );
  const rightBenefits = benefits.filter(
    (benefit) => benefit.position === "right"
  );

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-black to-purple-900/20">
      <div className="max-w-[70rem] mx-auto">
        {/* Header */}
        <div className="text-center ">
          <h2
            className="text-[#F2F2F2] font-bold text-[32px] leading-[150%] tracking-[0%] text-center "
            style={{ fontFamily: "Inter" }}
          >
            Benefits of AI & SEO with Marqait AI
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          <div className="space-y-12">
            {leftBenefits.map((benefit, index) => (
              <div key={index} className="text-left lg:text-left">
                <div className="flex items-start justify-start gap-4">
                  <div className="w-1 h-4 bg-purple-500 mt-1"></div>
                  <div>
                    <h3 className="text-white mb-1 flex items-start justify-start gap-5 text-[22px] leading-[22px] tracking-[0%] uppercase font-inter font-medium">
                      <span>{benefit.title}</span>
                    </h3>
                    <p
                      className="text-[16px] leading-[24px] tracking-[0%] max-w-xs text-white/70"
                      style={{ fontFamily: "Inter", fontWeight: 400 }}
                    >
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Center Image */}
          <div className="flex justify-center">
            <div className="relative">
              <Image
                src="/seo/benefit.png"
                alt="Excited woman in purple shirt with crossed fingers"
                width={400}
                height={500}
                className="object-cover w-[50rem] h-[30rem]"
              />
            </div>
          </div>

          {/* Right Benefits */}
          <div className="space-y-12">
            {rightBenefits.map((benefit, index) => (
              <div key={index} className="text-left">
                <div className="flex items-start justify-end gap-4">
                  <div className="w-1 h-4 bg-purple-500 flex-shrink-0 mt-1"></div>
                  <div>
                    <h3 className="text-white mb-1 text-[22px] leading-[22px] tracking-[0%] uppercase font-inter font-medium">
                      {benefit.title}
                    </h3>
                    <p
                      className="text-[16px] leading-[24px] tracking-[0%] max-w-xs text-white/70"
                      style={{ fontFamily: "Inter", fontWeight: 400 }}
                    >
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
