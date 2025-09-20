export default function FaqSection() {
  const faqs = [
    {
      question: "What is BrandBlueprint AI?",
      answer:
        "BrandBlueprint AI is an advanced tool that uses artificial intelligence to help businesses develop a complete, consistent brand identity. It generates comprehensive brand guidelines, visual assets, and maintains consistency across all platforms.",
    },
    {
      question: "How does BrandBlueprint AI create brand guidelines?",
      answer:
        "BrandBlueprint AI analyzes your business goals, target audience, and industry to generate instant brand guidelines including color palettes, typography, logo variations, and brand voice recommendations tailored to your unique identity.",
    },
    {
      question: "Can BrandBlueprint AI maintain consistency across platforms?",
      answer:
        "Yes. BrandBlueprint AI ensures consistent visual identity across all platforms by creating standardized brand assets and guidelines that can be applied to websites, social media, marketing materials, and other brand touchpoints.",
    },
    {
      question: "What types of brand assets can the AI generate?",
      answer:
        "BrandBlueprint AI can generate logos, color schemes, typography selections, brand style guides, marketing templates, and visual elements that align with your brand's essence and target audience.",
    },
    {
      question: "Is BrandBlueprint AI suitable for new businesses?",
      answer:
        "Absolutely. BrandBlueprint AI is perfect for startups and new businesses that need to establish a strong brand identity quickly and professionally without the high costs of traditional brand development agencies.",
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
            Everything you need to know about BrandBlueprint AI
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
