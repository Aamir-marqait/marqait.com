import Image from "next/image";

export default function MadeEveryBrand() {
  const industries = [
    {
      id: 1,
      title: "For Small and Medium Businesses",
      description:
        "Launch high-performing campaigns without hiring an agency. Save time, cut costs, and reach the right audience effortlessly.",
      image: "/brand/1.png",
    },
    {
      id: 2,
      title: "For Content Creators",
      description:
        "Turn ideas into engaging ads in minutes. Create scroll-stopping visuals, videos, and scripts to grow your audience faster.",
      image: "/brand/2.png",
    },
    {
      id: 3,
      title: "For Marketing Agencies",
      description:
        "Scale client campaigns with ease. Automate creative work, optimize performance, and deliver results efficiently—all from one platform.",
      image: "/brand/3.png",
    },
  ];

  return (
    <section className="py-20 px-4 bg-black">
      <div className="max-w-[70rem] mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-[32px] font-bold text-[#F2F2F2] mb-6 leading-[48px] text-center">
            AI Ad Generator for Everyone
          </h2>
          <p className="text-[18px] font-normal text-white/90  max-w-2xl mx-auto leading-[28px] text-center">
            Our AI Ad Generator is built to make ad campaigns simple, effective,
            and accessible—no matter who you are or what you do.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="space-y-6">
          {/* Top Row - 3 cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.slice(0, 3).map((industry) => (
              <div
                key={industry.id}
                className="relative group overflow-hidden aspect-[2.8/3] cursor-pointer"
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
