export default function FaqSection() {
  const faqs = [
    {
      question: "What is an AI Photo Editor?",
      answer:
        "An AI photo editor is an online tool that uses artificial intelligence to edit photos automatically. It can remove backgrounds, retouch faces, enhance quality, and apply filters without manual effort.",
    },
    {
      question: "Do I need editing skills to use an AI Photo Editor?",
      answer:
        "No. AI-powered editors are designed for everyone – from beginners to professionals. Just upload your photo, choose an option, and the AI handles the editing.",
    },
    {
      question: "Can AI remove unwanted objects from photos?",
      answer:
        "Yes. With AI Photo Editor, you can easily erase unwanted objects, people, or distractions from your pictures while keeping the photo natural.",
    },
    {
      question: "Can I use an AI Photo Editor for business purposes?",
      answer:
        "Yes. Businesses, marketers, and e-commerce brands use Our AI Photo Editor to create professional product photos, social media visuals, and ad-ready images.",
    },
    {
      question: "Does AI photo editing work on mobile devices?",
      answer:
        "Yes. Marqait AI Photo Editor works on any device – desktop, tablet, or mobile – with no app installation required. You can use our AI photo editor online.",
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
            Everything you need to know about AI Image Editor
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
