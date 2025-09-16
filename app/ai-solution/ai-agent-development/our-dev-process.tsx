import Image from "next/image";

export default function DevelopmentProcessSection() {
  const processSteps = [
    {
      number: "01",
      title: "Discovery & Requirement Analysis",
      description: "Understanding your challenges and goals",
    },
    {
      number: "02",
      title: "AI Agent Design",
      description:
        "Crafting workflows, decision-making models, and interaction logic",
    },
    {
      number: "03",
      title: "Development & Training",
      description: "Building and training AI models with real-world data",
    },
    {
      number: "04",
      title: "Integration",
      description:
        "Connecting AI agents seamlessly with your apps, CRMs, and platforms",
    },
    {
      number: "05",
      title: "Testing & Optimization",
      description: "Ensuring performance, scalability, and compliance",
    },
    {
      number: "06",
      title: "Deployment & Support",
      description: "Continuous monitoring, updates, and improvements",
    },
  ];

  return (
    <section className="py-20 px-4 bg-black">
      <div className="max-w-[70rem] mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-[32px] font-bold text-white mb-6 leading-[48px] text-center">
            Our AI Agent Development Process
          </h2>
          <p className="text-[18px] font-normal text-white/90 max-w-4xl mx-auto leading-[28px] text-center">
            We follow a strategic and transparent development process to ensure
            our AI agents deliver measurable business value:
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Process Steps */}
          <div className="space-y-8">
            {processSteps.map((step, index) => (
              <div key={index} className="flex gap-6">
                {/* Number Badge */}
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
                    <span className="text-[18px]  font-bold text-white leading-[28px] text-center">
                      {step.number}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-[20px] font-bold text-white mb-2 leading-[28px]">
                    {step.title}
                  </h3>
                  <p className="text-[15px] font-normal text-gray-400 leading-[22.75px]">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Illustration */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-lg">
              <Image
                src="/agents/process.png"
                alt="AI Agent Development Process Illustration"
                width={500}
                height={400}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
