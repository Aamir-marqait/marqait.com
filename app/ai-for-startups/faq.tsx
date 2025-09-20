export default function FaqSection() {
  const faqs = [
    {
      question: "What is AI for Startups?",
      answer:
        "AI for Startups provides AI-powered automation solutions specifically designed to help startups grow efficiently. It enhances decision-making, improves operational efficiency, and enables personalized customer engagement to scale your business faster.",
    },
    {
      question: "How can AI help startups compete with larger companies?",
      answer:
        "AI levels the playing field by automating processes, providing data-driven insights, and enabling personalized customer experiences that were previously only available to large enterprises with bigger budgets.",
    },
    {
      question: "What AI solutions are most beneficial for early-stage startups?",
      answer:
        "Early-stage startups benefit most from AI chatbots for customer support, automated marketing tools, data analytics for decision-making, and process automation to reduce manual work and operational costs.",
    },
    {
      question: "Is AI affordable for startups with limited budgets?",
      answer:
        "Yes. Modern AI solutions are designed to be cost-effective and scalable. Many AI tools offer startup-friendly pricing, and the ROI from improved efficiency and customer engagement often justifies the investment.",
    },
    {
      question: "How quickly can startups see results from AI implementation?",
      answer:
        "Results vary by solution type. Simple AI tools like chatbots can show immediate impact, while comprehensive automation systems typically show significant results within 2-3 months of implementation.",
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
            Everything you need to know about AI for Startups
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
