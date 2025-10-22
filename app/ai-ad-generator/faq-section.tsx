export default function FaqSection() {
  const faqs = [
    {
      question: "What is AdPilot AI?",
      answer:
        "AdPilot AI is an advanced AI-powered tool from Marqait AI that automatically creates, optimises, and launches high-performing Ad campaigns quickly—without needing marketing expertise.",
    },
    {
      question: "Can I run ads on multiple platforms?",
      answer:
        "Yes! Marqait's AI-powered Ad generator, AdPilot AI supports major ad platforms like Google and Meta, automatically optimizing your campaigns for each platform.",
    },
    {
      question: "Do I need experience in marketing to use it?",
      answer:
        "Not at all. AdPilot AI is built for everyone—businesses, content creators, and agencies. The AI guides you through every step.",
    },
    {
      question: "How quickly can I launch a campaign?",
      answer:
        "You can go from idea to live campaign in minutes. AdPilot AI generates ad copy, visuals, and targeting instantly.",
    },
    {
      question: "Will AI optimize my campaigns automatically?",
      answer:
        "Yes. Our AI Ad generator continuously monitors performance, adjusts targeting, and fine-tunes your ads to maximize ROI.",
    },
    {
      question: "Can I customize the ads?",
      answer:
        "Absolutely. While our AI Ad generator, AdPilot AI automates much of the work, you can edit visuals, scripts, and targeting to suit your brand and audience.",
    },
    {
      question: "Is there a free trial?",
      answer:
        "Yes! You can try Marqait's AI Ad generator, AdPilot AI risk-free and see how easy it is to create high-converting campaigns before committing.",
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
            Everything you need to know about AdPilot AI
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
