import Image from "next/image";

export default function IndustriesSection() {
  const industries = [
    {
      id: 1,
      title: "Fashion Ecommerce",
      description: "AI-powered style recommendations, virtual try-on experiences, and personalized fashion discovery for modern shoppers.",
      image: "/ecommerce/1.png",
    },
    {
      id: 2,
      title: "Electronic Stores",
      description:
        "Smart product comparison tools, intelligent search filters, and automated inventory management for tech retailers.",
      image: "/ecommerce/2.png",
    },
    {
      id: 3,
      title: "Luxury Ecommerce",
      description:
        "Exclusive personalized recommendations, premium customer service automation, and high-end shopping experience optimization.",
      image: "/ecommerce/3.png",
    },
    {
      id: 4,
      title: "Grocery Ecommerce",
      description:
        "Fresh product recommendations, smart delivery optimization, and automated meal planning for grocery shoppers.",
      image: "/ecommerce/4.png",
    },
  ];

  return (
    <section className="py-20 px-4 bg-black">
      <div className="max-w-[70rem] mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-[32px] font-bold text-[#F2F2F2] mb-6 leading-[48px] text-center">
            Role of AI in Ecommerce – Real-World Examples
          </h2>
          <p className="text-[18px] font-normal text-white/90  max-w-2xl mx-auto leading-[28px] text-center">
            From AI-powered product recommendations to predictive analytics,
            here are some real-world examples of how AI is shaping different
            ecommerce sectors:
          </p>
        </div>

        {/* Industries Grid */}
        <div className="space-y-6">
          {/* Top Row - 3 cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {industries.slice(0, 4).map((industry) => (
              <div
                key={industry.id}
                className="relative group overflow-hidden aspect-[4/3] cursor-pointer"
              >
                <Image
                  src={industry.image}
                  alt={industry.title}
                  width={400}
                  height={300}
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
