export default function FaqSection() {
  const faqs = [
    {
      question: "What is AI in Customer Service?",
      answer:
        "AI in customer service uses artificial intelligence tools like chatbots, NLP, and automation to improve support efficiency and customer satisfaction.",
    },
    {
      question: "How does AI improve customer support?",
      answer:
        "AI reduces wait times, provides instant responses, detects customer emotions, and personalizes support interactions.",
    },
    {
      question: "Can AI replace human agents?",
      answer:
        "AI handles repetitive queries, but human agents are still essential for complex or sensitive issues. Together, they deliver a hybrid, efficient service model.",
    },
    {
      question: "Is AI customer service only for big companies?",
      answer:
        "No. AI solutions can be scaled for small businesses, startups, and enterprises.",
    },
    {
      question: "How long does it take to implement AI in customer support?",
      answer:
        "Implementation varies—simple chatbots can be deployed in weeks, while advanced systems like sentiment analysis may take a few months.",
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
