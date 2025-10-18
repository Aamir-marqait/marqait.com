export default function FaqSection() {
  const faqs = [
    {
      question: "How can Marqait's AI tools help generate marketing campaigns?",
      answer:
        "Marqait's AI tools can instantly generate campaigns, ads, and social media posts tailored to your business needs. Our AI understands your challenges and goals to create targeted marketing content that resonates with your audience.",
    },
    {
      question: "Can AI tools create visual content and brand assets?",
      answer:
        "Yes, Marqait's AI tools can create high-quality visuals and brand assets using artificial intelligence. This includes designing graphics, logos, and other visual elements while maintaining consistent branding across all platforms.",
    },
    {
      question: "How do AI tools build data-driven marketing strategies?",
      answer:
        "Our AI tools analyze real-world data to build data-driven strategies tailored specifically to your audience. By training AI models with actual market data, we create workflows and decision-making models that optimize your marketing performance.",
    },
    {
      question: "Will AI tools maintain brand consistency across platforms?",
      answer:
        "Absolutely. Marqait's AI tools are designed to maintain consistent branding across all platforms by connecting seamlessly with your apps, CRMs, and other platforms while ensuring your brand voice and visual identity remain uniform.",
    },
    {
      question: "How quickly can AI marketing tools generate content?",
      answer:
        "AI marketing tools can generate high-performing marketing content in minutes rather than hours. This dramatically speeds up your content creation process, allowing you to focus on strategy and optimization rather than manual content production.",
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
            Everything you need to know about our AI Marketing Tools
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
                className="text-[#A1A1AA] text-[14px] leading-[28px] tracking-[0%]"
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
