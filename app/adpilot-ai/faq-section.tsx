export default function FaqSection() {
  const faqs = [
    {
      question: "What is AdPilot AI?",
      answer:
        "AdPilot AI is an advanced advertising automation tool that uses artificial intelligence to launch and optimize ad campaigns across Meta and Google platforms. It drives conversions with AI-driven precision targeting and automated campaign management.",
    },
    {
      question: "Which advertising platforms does AdPilot AI support?",
      answer:
        "AdPilot AI supports major advertising platforms including Meta (Facebook and Instagram) and Google Ads. The platform automatically optimizes campaigns for each platform's unique requirements to ensure maximum performance.",
    },
    {
      question: "How does AdPilot AI optimize ad campaigns?",
      answer:
        "AdPilot AI uses machine learning algorithms to analyze performance data, audience behavior, and market trends. It automatically adjusts targeting, bidding, and creative elements to maximize conversions and minimize costs.",
    },
    {
      question: "Can AdPilot AI create ad scripts and visuals?",
      answer:
        "Yes, AdPilot AI features AI-driven scripting that generates compelling ad copy and automated visual selection that chooses the most effective creative assets based on performance data and audience preferences.",
    },
    {
      question: "Does AdPilot AI offer natural language video editing?",
      answer:
        "Yes, AdPilot AI includes natural language video editing capabilities that allow you to edit and customize video ads using simple text commands, making professional video ad creation accessible without technical expertise.",
    },
  ];

  return (
    <section className="py-20 px-4 bg-black">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2
            className="text-white font-bold text-[32px] leading-[150%] tracking-[0%] text-center mb-4"
            style={{ fontFamily: "Inter" }}
          >
            Frequently Asked <span className="text-purple-500">Questions</span>
          </h2>
          <p
            className="text-[20px] text-white/90 leading-[150%] tracking-[0%] text-center"
            style={{ fontFamily: "Inter", fontWeight: 400 }}
          >
            Everything you need to know about AdPilot AI
          </p>
        </div>

        {/* FAQ Items */}
        <div
          className="space-y-2 p-5 rounded-2xl "
          style={{
            background: "#131316",
            // background: "Red",
            boxShadow: "0px 8px 32px 0px #00000066",
          }}
        >
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-[12px] p-6"
              style={{
                background: "#13131680",
                border: "1px solid #30303680",
              }}
            >
              <h3
                className="text-[#F2F2F2] text-[16px] leading-[24px] tracking-[0%] mb-2"
                style={{ fontWeight: 600 }}
              >
                {faq.question}
              </h3>
              <p
                className="text-[#A1A1AA] text-[16px] leading-[28px] tracking-[0%]"
                style={{ fontWeight: 400 }}
              >
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
