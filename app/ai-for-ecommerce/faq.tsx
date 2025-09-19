export default function FaqSection() {
  const faqs = [
    {
      question: "What is AI for E-commerce?",
      answer:
        "AI for E-commerce uses artificial intelligence to enhance online stores with personalized shopping experiences, automated customer service, inventory management, and conversion optimization. Marqait AI provides comprehensive e-commerce solutions including Shopify AI integrations and dynamic pricing systems.",
    },
    {
      question: "How can AI improve e-commerce conversion rates?",
      answer:
        "AI improves conversions through personalized product recommendations, dynamic pricing optimization, AI-powered chatbots for customer support, abandoned cart recovery, and intelligent search functionality that helps customers find exactly what they're looking for.",
    },
    {
      question: "What AI solutions work best for Shopify stores?",
      answer:
        "Shopify stores benefit most from AI-powered product recommendations, automated inventory management, personalized marketing campaigns, intelligent customer segmentation, and AI chatbots for 24/7 customer support and sales assistance.",
    },
    {
      question: "Can AI help with inventory management and pricing?",
      answer:
        "Yes, AI can automate inventory management by predicting demand, optimizing stock levels, and preventing overselling. Dynamic AI pricing adjusts product prices in real-time based on market conditions, competition, and demand patterns to maximize profitability.",
    },
    {
      question: "How does AI enhance customer experience in e-commerce?",
      answer:
        "AI enhances customer experience through personalized product suggestions, intelligent search results, 24/7 AI-powered customer support, predictive customer service, and customized shopping journeys that adapt to individual preferences and behavior patterns.",
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
            Everything you need to know about AI for E-commerce
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
