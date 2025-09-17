import Image from "next/image";

export default function Role() {
  const industries = [
    {
      id: 1,
      title: "Ecommerce Startup",
      description:
        "AI-powered product recommendations, inventory management, customer service chatbots, and personalized shopping experiences to boost sales and reduce costs.",
      image: "/startup/5.png",
    },
    {
      id: 2,
      title: "SAAS Startup",
      description:
        "AI-driven analytics, automated customer onboarding, predictive churn analysis, and intelligent feature recommendations to scale your software business.",
      image: "/startup/8.png",
    },
    {
      id: 3,
      title: "Fintech Startup",
      description:
        "AI-powered fraud detection, automated compliance monitoring, personalized financial recommendations, and intelligent risk assessment for financial services.",
      image: "/startup/6.png",
    },
    {
      id: 4,
      title: "Local Service",
      description:
        "AI-powered appointment scheduling, customer service automation, local market analysis, and personalized service recommendations to grow your local business.",
      image: "/startup/7.png",
    },
  ];

  return (
    <section className="py-20 px-4 bg-black">
      <div className="max-w-[70rem] mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-[32px] font-bold text-[#F2F2F2] mb-6 leading-[48px] text-center">
            Real-World Use Cases of AI in Startups
          </h2>
          <p className="text-[18px] font-normal text-white/90  max-w-2xl mx-auto leading-[28px] text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="space-y-6">
          {/* Top Row - 3 cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.slice(0, 4).map((industry) => (
              <div
                key={industry.id}
                className="relative group overflow-hidden aspect-[1.5/2] cursor-pointer"
              >
                <Image
                  src={industry.image}
                  alt={industry.title}
                  width={400}
                  height={600}
                  className="w-full h-full object-cover transition-all duration-500 ease-out group-hover:scale-105"
                />

                {/* Hover overlay - darkens image */}
                <div className="absolute inset-0 bg-black/0 transition-all duration-500 ease-out group-hover:bg-black/60"></div>

                {/* Default state - title at bottom center */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6 transition-opacity duration-500 ease-out group-hover:opacity-0">
                  <h3 className="text-[22px] w-full font-bold text-white leading-[100%] text-center">
                    {industry.title}
                  </h3>
                </div>

                {/* Hover state - title and description at bottom left */}
                <div className="absolute inset-0 p-6 opacity-0 transition-all duration-500 ease-out group-hover:opacity-100 group-hover:translate-y-0 translate-y-4">
                  <div className="h-full flex flex-col justify-end">
                    <h3 className="text-[22px] font-bold text-white leading-tight mb-3 text-left transform transition-all duration-500 ease-out">
                      {industry.title}
                    </h3>
                    <p className="text-[16px] text-white/90 leading-relaxed text-left transform transition-all duration-500 ease-out delay-100">
                      {industry.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
