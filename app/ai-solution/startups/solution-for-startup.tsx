import Image from "next/image";

export default function SolutionForStartup() {
  const agentTypes = [
    {
      title: " AI for Marketing & Growth",
      description:
        "Boost your marketing with AI-driven SEO, automated content creation, social media scheduling, and smart campaign optimization for better reach and growth. With AI insights, track performance, refine strategies, and engage audiences more effectively",
      image: "/startup/1.png",
    },
    {
      title: "AI for Sales & Customer Acquisition",
      description:
        "AI for Sales & Customer Acquisition helps businesses streamline their sales process with smart lead scoring, pipeline tracking, and seamless CRM integration. With automated, personalized email outreach and predictive models, it boosts customer conversion and retention, ensuring faster growth and stronger client relationships.",
      image: "/startup/2.png",
    },
    {
      title: "AI for Operations & Productivity",
      description:
        "AI for Operations & Productivity simplifies workflows with automation for documents, tasks, and approvals. It delivers AI-generated reports, analytics dashboards, and automated financial tracking while enhancing team collaboration through intelligent productivity tools.",
      image: "/startup/3.png",
    },
    {
      title: "AI for Startup Fundraising & Investor Relations",
      description:
        "AI for Startup Fundraising & Investor Relations helps startups refine business plans, generate pitch decks, and create investor-ready presentations. It automates market research for insights and builds brand books to strengthen positioning.",
      image: "/startup/4.png",
    },
  ];

  return (
    <section className="py-20 px-4 bg-black">
      <div className="max-w-[70rem] mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-[32px] font-bold text-[#F2F2F2] mb-6 leading-[150%] text-center">
            Marqait AI Solutions for Startups
          </h2>
          <p className="text-[18px] font-normal text-gray-300 max-w-4xl mx-auto leading-[150%] text-center">
            At Marqait AI, we provide a startup-focused AI automation suite that
            helps founders and small teams across all business functions.
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
