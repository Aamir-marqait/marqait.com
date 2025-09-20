import Image from "next/image";

export default function AIAgentBenefits() {
  const benefits = [
    {
      title: "Improve Customer Satisfaction",
      description: "Deliver quick, accurate, and personalized support",
      position: "left",
    },
    {
      title: "Boost Team Productivity",
      description: "Free up agents to focus on complex queries",
      position: "left",
    },
    {
      title: "Data-Driven Insights",
      description: "Track customer queries and improve decision-making",
      position: "left",
    },
    {
      title: "Reduce Costs",
      description: "Minimize repetitive manual tasks with automation",
      position: "right",
    },
    {
      title: "Increase Scalability",
      description: "Support growing customer bases without expanding headcount",
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
            Benefits of Our AI Agent Development
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
                      <span>{benefit.title.toUpperCase()}</span>
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