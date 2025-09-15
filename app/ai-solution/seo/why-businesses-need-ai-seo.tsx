export default function WhyBusinessesNeedAiSeo() {
  const features = [
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
        </svg>
      ),
      title: "Real-Time Search Insights",
      description:
        "AI analyzes massive volumes of search data to uncover keyword trends, user queries, and content gaps. Unlike manual keyword research, AI SEO tools provide instant insights into what your audience is searching for.",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z" />
        </svg>
      ),
      title: "SEO Writing with AI",
      description:
        "Content is the backbone of SEO. With SEO writing AI, you can create articles, blogs, and landing pages that are not only keyword-rich but also engaging and aligned with user intent.",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
        </svg>
      ),
      title: "Predictive Analysis for SEO",
      description:
        "Instead of reacting to algorithm updates, AI and SEO work together to predict changes and prepare your website for long-term success.",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
        </svg>
      ),
      title: "Technical SEO Made Easy",
      description:
        "AI-powered site crawlers detect broken links, missing tags, duplicate content, and page speed issues faster than manual checks—making artificial intelligence SEO essential for technical optimization.",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z" />
        </svg>
      ),
      title: "Content Personalization & User Experience",
      description:
        "Google rewards websites that prioritize user intent. With SEO optimization AI, you can personalize content and deliver relevant experiences to your audience.",
    },
  ];

  return (
    <section className="py-20 px-4 bg-black">
      <div className="max-w-[70rem] mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-[#F2F2F2] font-bold text-[32px] leading-[150%] tracking-[0%] text-center mb-6 font-inter">
            Why Businesses Need{" "}
            <span className="text-[#BD14FF]">AI for SEO</span>
          </h2>
          <p className="text-[18px] leading-[150%] tracking-[0%] text-center max-w-4xl mx-auto font-inter text-white/90">
            Today, online competition is tougher than ever. Every brand wants to
            appear on the first page of Google, but only a few succeed.
            Traditional SEO methods alone are no longer enough. That's why
            businesses are turning to AI for SEO to gain an edge. Using
            Artificial intelligence makes SEO effort easier, smarter, faster,
            and more data-driven.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="rounded-lg p-8 transition-colors duration-300"
              style={{
                background: "linear-gradient(180deg, #0C0C0E 0%, #1B1125 100%)",
                boxShadow: "0px 8px 32px 0px #00000066",
              }}
            >
              <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center text-white mb-6">
                {feature.icon}
              </div>
              <h3 className="text-white mb-4 text-[20px] leading-[28px] tracking-[0%]" style={{ fontFamily: "Inter", fontWeight: 700 }}>
                {feature.title}
              </h3>
              <p className="text-[16px] leading-[26px] tracking-[0%] font-inter text-[#FFFFFF]">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
