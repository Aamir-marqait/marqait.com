export default function FaqSection() {
  const faqs = [
    {
      question: "What is AI Agent Development?",
      answer:
        "AI Agent Development involves creating intelligent AI systems that can automate processes, enhance customer experiences, and drive business growth. We specialize in developing custom AI solutions that integrate seamlessly with your existing systems.",
    },
    {
      question: "How do AI agents integrate with existing business systems?",
      answer:
        "Our AI agents are designed to integrate seamlessly with your current infrastructure through APIs, webhooks, and custom connectors. They can work with CRMs, databases, communication platforms, and other business tools without disrupting your workflow.",
    },
    {
      question: "What types of AI agents can you develop?",
      answer:
        "We develop various types of AI agents including customer service chatbots, sales automation agents, data analysis agents, workflow automation agents, and intelligent assistants tailored to your specific business needs and industry requirements.",
    },
    {
      question: "How long does it take to develop a custom AI agent?",
      answer:
        "Development time varies based on complexity and requirements. Simple AI agents can be developed in 2-4 weeks, while more complex, multi-functional agents typically take 6-12 weeks from concept to deployment.",
    },
    {
      question: "Do you provide ongoing support and maintenance for AI agents?",
      answer:
        "Yes, we provide comprehensive ongoing support including performance monitoring, updates, bug fixes, and feature enhancements. Our team ensures your AI agents continue to perform optimally and evolve with your business needs.",
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
            Everything you need to know about our AI Agent Development
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
