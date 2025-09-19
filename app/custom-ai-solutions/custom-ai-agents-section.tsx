import Image from "next/image";

export default function CustomAiAgentsSection() {
  const agentTypes = [
    {
      title: "Discovery & Strategy",
      description:
        " We begin by working closely with your team to understand your business objectives, challenges, and technical requirements. This stage helps us define clear success metrics and build a roadmap tailored to your goals.",
      image: "/agents/custom1.jpg",
    },
    {
      title: "Data Preparation & Model Development",
      description:
        "Next, we assess your data sources, clean and structure the information, and prepare it for AI applications. Using this foundation, our experts design and develop custom AI models optimized for your specific use cases.",
      image: "/agents/custom3.jpg",
    },
    {
      title: "Testing & Integration",
      description:
        "Every solution undergoes rigorous testing to ensure accuracy, reliability, and performance. Once validated, we integrate the AI seamlessly into your existing workflows and systems, ensuring minimal disruption and maximum efficiency.",
      image: "/agents/custom2.jpg",
    },
    {
      title: "Ongoing Support & Optimization",
      description:
        "Our partnership doesn’t end at deployment. We continuously monitor your AI solutions, provide technical support, and implement enhancements to keep them performing at their best as your business evolves",
      image: "/agents/custom4.jpg",
    },
  ];

  return (
    <section className="py-20 px-4 bg-black">
      <div className="max-w-[70rem] mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-[32px] font-bold text-[#F2F2F2] mb-6 leading-[150%] text-center">
            Our Custom AI Development Process
          </h2>
          <p className="text-[18px] font-normal text-gray-300 max-w-4xl mx-auto leading-[150%] text-center">
            As a custom AI development company, we follow a streamlined
            methodology to ensure successful project outcomes:
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
