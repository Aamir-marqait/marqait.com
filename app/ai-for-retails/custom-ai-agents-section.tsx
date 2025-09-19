import Image from "next/image";

export default function CustomAiAgentsSection() {
  const agentTypes = [
    {
      title: "Discovery & Planning",
      description:
        "We begin by analyzing your retail operations, customer behavior, and business challenges.",
      image: "/agents/custom1.jpg",
    },
    {
      title: "Data Preparation & Model Development",
      description:
        "Our team processes and trains your retail data to create AI models that drive insights and automation.",
      image: "/agents/custom3.jpg",
    },
    {
      title: "Testing & Integration",
      description:
        "Every solution is tested for accuracy and reliability before being integrated into your retail systems.",
      image: "/agents/custom2.jpg",
    },
    {
      title: "Continuous Support & Optimization",
      description:
        "We monitor and enhance your AI systems to ensure long-term success and scalability.",
      image: "/agents/custom4.jpg",
    },
  ];

  return (
    <section className="py-20 px-4 bg-black">
      <div className="max-w-[70rem] mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-[32px] font-bold text-[#F2F2F2] mb-6 leading-[150%] text-center">
            Our AI Development Process for Retail Industry
          </h2>
          <p className="text-[18px] font-normal text-gray-300 max-w-4xl mx-auto leading-[150%] text-center">
            We follow a clear process to deliver effective retail AI solutions:
          </p>
        </div>

        {/* Grid of AI Agent Types */}
        <div className="grid md:grid-cols-2 max-w-[65rem] mx-auto gap-8">
          {agentTypes.map((agent, index) => (
            <div
              key={index}
              className="rounded-3xl p-6 "
              style={{
                background: "linear-gradient(180deg, #05000A 0%, #1B1125 100%)",
              }}
            >
              <div className="mb-6">
                <Image
                  src={agent.image || "/placeholder.svg"}
                  alt={agent.title}
                  width={400}
                  height={256}
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>
              <h3 className="text-[24px] font-semibold text-center text-white mb-4 leading-[30px] tracking-[-0.3px]">
                {agent.title}
              </h3>
              <p className="text-[16px] font-normal text-gray-300 text-center leading-[24px] tracking-[-0.3px]">
                {agent.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
