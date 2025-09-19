export default function FaqSection() {
  const faqs = [
    {
      question: "What is AI in Retail?",
      answer:
        "AI in retail uses artificial intelligence to improve shopping experiences, optimize operations, and increase sales through data-driven insights.",
    },
    {
      question: "How does AI improve customer experience?",
      answer:
        "AI provides personalized recommendations, smarter search, and instant customer support, making shopping faster and more enjoyable.",
    },
    {
      question: "Can AI help with inventory management?",
      answer:
        "Yes. AI predicts demand, prevents overstocking or shortages, and automates stock management.",
    },
    {
      question: "Is AI only for online retail?",
      answer:
        "No. Both e-commerce and physical stores can use AI for inventory, customer engagement, and sales optimization.",
    },
    {
      question: "How long does it take to implement AI in retail?",
      answer:
        "Implementation time varies by project. Simple AI chatbots may take weeks, while advanced systems like recommendation engines can take a few months.",
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
