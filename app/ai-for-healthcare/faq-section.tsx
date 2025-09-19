export default function FaqSection() {
  const faqs = [
    {
      question: "What is AI in Healthcare?",
      answer:
        "AI in healthcare uses artificial intelligence to make medical care faster and more accurate. It helps doctors detect diseases, monitor patients, discover new drugs, automate tasks, and make better decisions with data.",
    },
    {
      question: "How does AI improve healthcare?",
      answer:
        "AI improves healthcare by making diagnostics faster, automating workflows, predicting health risks, and enhancing patient care.",
    },
    {
      question: "Can AI replace doctors?",
      answer:
        "No. AI supports doctors with data-driven insights and reduces their workload, but final decisions always remain with medical professionals.",
    },
    {
      question: "Is patient data safe with AI systems?",
      answer:
        "Yes. Our AI solutions follow strict compliance and security standards, including HIPAA, to keep patient data safe and confidential.",
    },
    {
      question: "Which areas of healthcare benefit most from AI?",
      answer:
        "AI is most effective in diagnostics, patient monitoring, hospital management, drug discovery, and preventive care.",
    },
    {
      question: "How long does it take to implement AI in healthcare?",
      answer:
        "Implementation time depends on the solution. Simple automation may take weeks, while advanced diagnostic systems can take several months.",
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
            Everything you need to know about AI in Healthcare
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
