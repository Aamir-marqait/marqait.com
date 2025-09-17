import Image from "next/image";

export default function CustomAiAgentsSection() {
  const agentTypes = [
    {
      title: "Conversational AI agents",
      description:
        "Our conversational AI agents, including chatbots, voicebots, and virtual assistants, that help businesses deliver seamless and personalised communication. These agents can handle customer queries, provide real-time support, and even manage routine tasks such as booking, order tracking, and FAQs.",
      image: "/agents/custom1.jpg",
    },
    {
      title: "Intelligent process automation agents",
      description:
        "Our intelligent process automation (IPA) agents streamline complex workflows across industries. From automating back-office tasks to managing data entry, approvals, and compliance checks, they deliver efficiency and accuracy. Whether in HR, finance, or supply chain, our agents help organizations work smarter and faster.",
      image: "/agents/custom3.jpg",
    },
    {
      title: "Decision-making AI agents",
      description:
        "Our decision-making agents analyze data to uncover patterns and deliver actionable insights. They support predictive analytics, risk assessment, and strategic planning, helping businesses make smarter decisions, stay competitive, and respond quickly to market changes.",
      image: "/agents/custom2.jpg",
    },
    {
      title: "Industry-specific AI agents",
      description:
        "We design industry-specific AI agents for diverse needs. In healthcare, they improve patient care and workflows; in retail, they enhance customer experience and inventory; in finance, they handle fraud detection and compliance. For startups, our agents streamline operations and drive growth. Whatever the industry, we deliver AI solutions that create impact.",
      image: "/agents/custom4.jpg",
    },
  ];

  return (
    <section className="py-20 px-4 bg-black">
      <div className="max-w-[70rem] mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-[32px] font-bold text-[#F2F2F2] mb-6 leading-[150%] text-center">
            At Marqait AI, We build custom AI Agents
          </h2>
          <p className="text-[18px] font-normal text-gray-300 max-w-4xl mx-auto leading-[150%] text-center">
            At Marqait AI, we specialize in building powerful, custom AI Agents
            designed to transform the way businesses operate and interact with
            customers. Our AI Agents solutions go beyond simple automation. They
            are built to learn, adapt, and deliver measurable results.
          </p>
        </div>

        {/* Grid of AI Agent Types */}
        <div className="grid md:grid-cols-2 max-w-[65rem] mx-auto gap-8">
          {agentTypes.map((agent, index) => (
            <div
              key={index}
              className="rounded-3xl p-6 "
              style={{
                background: "linear-gradient(180deg, #05000A 0%, #1B1125 100%)"
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
