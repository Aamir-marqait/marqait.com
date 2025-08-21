export default function WhatGrowthPods() {
  return (
    <div
      id="what-growth-pods"
      className="relative overflow-hidden"
      style={{
        backgroundImage: "url('/pods/pattern.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-black/[85%] z-5"></div>
      <div className="relative z-10 container mx-auto px-4 py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 max-w-7xl">
        <div className="text-center space-y-4 sm:space-y-6 md:space-y-8 lg:space-y-[40px]">
          {/* Heading Section */}
          <div className="space-y-3 sm:space-y-4 lg:space-y-6">
            <h2
              className="text-center font-inter font-bold leading-[150%]
              text-2xl
              sm:text-3xl
              md:text-4xl
              lg:text-[36px]"
              style={{
                background:
                  "linear-gradient(90deg, rgba(255, 255, 255, 0.90) 0%, rgba(153, 153, 153, 0.90) 100%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontSize:
                  typeof window !== "undefined" && window.innerWidth >= 1024
                    ? "36px"
                    : undefined,
              }}
            >
              What are Growth Pods?
            </h2>
          </div>

          {/* Description Section */}
          <div className="max-w-6xl mx-auto px-2 sm:px-4 lg:px-0">
            <p
              className="text-center font-inter font-normal leading-[150%]
              text-sm
              sm:text-base
              md:text-lg
              lg:text-xl
              xl:text-[24px]"
              style={{
                color: "rgba(255, 255, 255, 0.90)",
                fontSize:
                  typeof window !== "undefined" && window.innerWidth >= 1024
                    ? "24px"
                    : undefined,
              }}
            >
              Growth Pods are dedicated teams from Marqait who build and execute
              AI-powered solutions tailored to your business — across marketing,
              operations, and tech. We call them “Pods” because each client gets
              a focused, agile team, supercharged by internal AI systems that
              help us move 5x faster — without bloated overheads.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
