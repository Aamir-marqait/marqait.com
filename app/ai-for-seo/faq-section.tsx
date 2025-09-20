export default function FaqSection() {
  const faqs = [
    {
      question: "What is AI for SEO?",
      answer:
        "AI for SEO uses artificial intelligence to automate and optimize search engine optimization tasks. Marqait AI offers AI SEO automation services that improve website visibility and ranking in search engines through intelligent content optimization, keyword research, and technical SEO improvements.",
    },
    {
      question: "How does AI improve SEO performance?",
      answer:
        "AI enhances SEO by analyzing search patterns, optimizing content for search engines, automating keyword research, improving site structure, and providing data-driven insights for better search rankings and increased organic traffic.",
    },
    {
      question: "Can AI help with keyword research and content optimization?",
      answer:
        "Yes, AI can automatically identify high-value keywords, analyze competitor strategies, optimize content for search intent, and suggest improvements to boost your content's search engine visibility and ranking potential.",
    },
    {
      question: "What SEO tasks can be automated with AI?",
      answer:
        "AI can automate keyword research, content optimization, meta tag generation, technical SEO audits, competitor analysis, performance monitoring, and reporting, allowing you to focus on strategy while AI handles routine optimization tasks.",
    },
    {
      question: "How long does it take to see SEO results with AI?",
      answer:
        "SEO results with AI typically start showing within 3-6 months, with significant improvements in search rankings and organic traffic visible after 6-12 months. AI accelerates the optimization process but search engine results still require time to develop.",
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
            Everything you need to know about our AI SEO Agent
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
