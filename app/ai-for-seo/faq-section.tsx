export default function FaqSection() {
  const faqs = [
    {
      question: "What is AI Social Media Post Generator?",
      answer:
        "AI Social Media Post Generator is a tool that uses artificial intelligence to create personalized social media posts. Marqait AI offers a free AI social media post generator tool designed to help users create, schedule and share social posts.",
    },
    {
      question: "Is Marqait's AI Social Media Post Generator free to use?",
      answer:
        "Yes. You can use our Free AI Social Media Post Generator to create unlimited posts. We also offer premium features for businesses and marketers who want advanced customization and scheduling.",
    },
    {
      question: "Can I generate Instagram posts with AI?",
      answer:
        "Yes. You can create eye-catching captions, trending hashtags, and content ideas designed for maximum engagement on Instagram.",
    },
    {
      question: "Can I use AI-generated posts for business marketing?",
      answer:
        "Yes, you can use AI-generated social media posts for business promotion, brand awareness, e-commerce marketing, and influencer growth.",
    },
    {
      question: "Will the AI help with hashtags and keywords?",
      answer:
        "Yes, the tool comes with an AI Hashtag Generator that suggests trending and relevant hashtags to increase your reach and engagement.",
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
