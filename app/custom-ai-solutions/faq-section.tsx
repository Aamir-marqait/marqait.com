export default function FaqSection() {
  const faqs = [
    {
      question: "What is a Custom AI solution?",
      answer:
        "Custom AI solution is an artificial intelligence system built to meet a specific organization needs. AI solutions automate tasks, analyze data, or enhance decision-making.",
    },
    {
      question: "How can AI help my business?",
      answer:
        "AI can save time, reduce errors, improve efficiency, and provide insights from data. It can automate repetitive tasks, predict trends, and enhance customer experiences.",
    },
    {
      question: "Which industries can benefit from custom AI?",
      answer:
        "Almost any industry can benefit whether it is healthcare, finance, e-commerce, manufacturing, education, marketing, and more. AI solutions are built to match your unique business challenges.",
    },
    {
      question: "How long does it take to implement a custom AI solution?",
      answer:
        "Implementation time depends on the complexity of the project. Simple AI tools can take weeks, while advanced solutions may take months.",
    },
    {
      question: "Is my business data safe with AI solutions?",
      answer:
        "Yes. Custom AI solutions follow strict security standards to protect your data and ensure confidentiality.",
    },
    {
      question: "Can AI solutions be scaled as my business grows?",
      answer:
        "Absolutely. Custom AI is designed to scale with your business, handling more data, users, and processes without losing performance.",
    },
    {
      question: "Do I need technical expertise to use AI solutions?",
      answer:
        "No. Custom AI solutions are designed to be user-friendly, with simple interfaces so your team can use them without technical knowledge.",
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
            Everything you need to know about our Custom AI Solutions
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
