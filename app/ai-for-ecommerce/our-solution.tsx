export default function EcommerceSolutionsSection() {
  const solutions = [
    {
      title: "AI-Powered Product Recommendations",
      description:
        "AI analyzes customer behavior, browsing history, and purchase data to generate personalized product suggestions. This increases cross-sells, upsells, and repeat sales.",
    },
    {
      title: "Intelligent Search & AI in Commerce Navigation",
      description:
        'Traditional search often fails. AI ecommerce platforms use NLP so customers can type queries like "black waterproof shoes under $100" and instantly find the right product.',
    },
    {
      title: "AI Ecommerce Chatbots & Conversational AI",
      description:
        "AI chatbots provide 24/7 support for FAQs, order tracking, and personalized product guidance.",
    },
    {
      title: "Dynamic Pricing with AI Commerce",
      description:
        "AI monitors demand, competition, and buying patterns to recommend optimal prices in real-time.",
    },
    {
      title: "AI Ecommerce Marketing Automation",
      description:
        "From cart abandonment emails to personalized retargeting campaigns, AI automates your ecommerce marketing.",
    },
    {
      title: "AI for Shopify & Other Platforms",
      description:
        "Seamless integrations with Shopify, Magento, and WooCommerce.",
    },
  ];

  return (
    <section className="py-20 px-4 bg-black">
      <div className="max-w-[70rem] mx-auto">
        <h2 className="text-[32px] font-bold text-[#F2F2F2] text-center mb-16 leading-[150%] tracking-[0%] align-middle font-inter">
          Our AI Solutions for Ecommerce
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl transition-all duration-300"
              style={{
                background: "linear-gradient(180deg, #0C0C0E 0%, #1B1125 100%)",
                boxShadow: "0px 8px 32px 0px #00000066",
                borderRadius: "16px"
              }}
            >
              <h3 className="text-[22px] font-bold text-white mb-4 leading-[32px] tracking-[0%] align-middle font-inter">
                {solution.title}
              </h3>
              <p className="text-[14px] font-normal text-white leading-[26px] tracking-[0%] align-middle font-inter">
                {solution.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
