import Image from "next/image";

export default function IndustriesSection() {
  return (
    <section className="py-20 px-4 bg-black">
      <div className="max-w-[70rem] mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-[32px] font-bold text-[#F2F2F2] mb-6 leading-[48px] text-center">
            Industries We Serve With AI Agents
          </h2>
          <p className="text-[18px] font-normal text-white/90  max-w-2xl mx-auto leading-[28px] text-center">
            Marqait AI develops industry-focused AI agents that adapt to
            different business environments:
          </p>
        </div>

        {/* Industries Grid */}
        <div className="space-y-6">
          {/* Top Row - 3 cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="relative group overflow-hidden aspect-[4/3]">
              <Image
                src="/agents/1.jpg"
                alt="AI For Healthcare"
                width={400}
                height={300}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                <h3 className="text-[22px] w-full font-bold text-white leading-[100%] text-center">
                  AI For Healthcare
                </h3>
              </div>
            </div>

            <div className="relative group overflow-hidden aspect-[4/3]">
              <Image
                src="/agents/2.png"
                alt="AI For Startups"
                width={400}
                height={300}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                <h3 className="text-[22px] w-full font-bold text-white leading-[100%] text-center">
                  AI For Startups
                </h3>
              </div>
            </div>

            <div className="relative group overflow-hidden aspect-[4/3]">
              <Image
                src="/agents/3.jpg"
                alt="AI For Customer Service"
                width={400}
                height={300}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                <h3 className="text-[22px] w-full font-bold text-white leading-[100%] text-center">
                  AI For Customer Service
                </h3>
              </div>
            </div>
          </div>

          {/* Bottom Row - 2 cards centered */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <div className="relative group overflow-hidden aspect-[4/3]">
              <Image
                src="/agents/4.jpg"
                alt="AI For Retail"
                width={400}
                height={300}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                <h3 className="text-[22px] w-full font-bold text-white leading-[100%] text-center">
                  AI For Retail
                </h3>
              </div>
            </div>

            <div className="relative group overflow-hidden aspect-[4/3]">
              <Image
                src="/agents/5.png"
                alt="AI For Finance & Banking"
                width={400}
                height={300}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                <h3 className="text-[22px] w-full font-bold text-white leading-[100%] text-center">
                  AI For Finance & Banking
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
