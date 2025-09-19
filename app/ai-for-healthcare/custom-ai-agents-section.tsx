import Image from "next/image";

export default function CustomAiAgentsSection() {
  const agentTypes = [
    {
      title: "Discovery & Planning",
      description:
        "We start by understanding your workflows, patient needs, and organizational challenges to design AI tailored for your healthcare setting.",
      image: "/agents/custom1.jpg",
    },
    {
      title: "Data Preparation & Model Development",
      description:
        "Our experts clean, organize, and train your healthcare data to build AI models that can predict, analyze, and support medical decisions.",
      image: "/agents/custom3.jpg",
    },
    {
      title: "Testing & Integration",
      description:
        "Every system undergoes strict testing for accuracy, compliance, and safety before being integrated into your hospital or clinic systems.",
      image: "/agents/custom2.jpg",
    },
    {
      title: "Continuous Support & Optimization",
      description:
        "We provide ongoing monitoring, support, and improvements to ensure your AI solutions remain secure, reliable, and scalable.",
      image: "/agents/custom4.jpg",
    },
  ];

  return (
    <section className="py-20 px-4 bg-black">
      <div className="max-w-[70rem] mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-[32px] font-bold text-[#F2F2F2] mb-6 leading-[150%] text-center">
            Our AI Development Process for Healthcare
          </h2>
          <p className="text-[18px] font-normal text-gray-300 max-w-4xl mx-auto leading-[150%] text-center">
            We follow a proven process to deliver safe and effective AI
            healthcare solutions:
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
