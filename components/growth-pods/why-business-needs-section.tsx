import Link from "next/link";

export default function WhyBusinessNeedsSection() {
  // const features = [
  //   "Custom AI Solutions",
  //   "Scalable Architecture",
  //   "Predictive Intelligence",
  //   "Ethical AI Practices",
  // ];
  const features = [
    "Faster Execution",
    "Custom-Fit Solutions",
    "Less Overhead",
    "Scalable by Design",
  ];

  return (
    <div
      id="why-business-needs"
      className="min-h-screen relative overflow-hidden bg-[#05000A]"
    >
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 max-w-7xl">
        <div className="space-y-6 sm:space-y-8 md:space-y-10 lg:space-y-12">
          {/* Header Section with First Image */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 xl:gap-16 items-center">
            <div className="space-y-3 sm:space-y-4 lg:space-y-6 order-2 lg:order-1">
              <h2
                className="text-left font-inter font-bold leading-[150%] bg-gradient-to-r from-[rgba(255,255,255,0.90)] to-[rgba(153,153,153,0.90)] bg-clip-text text-transparent
                text-2xl
                sm:text-3xl
                md:text-4xl
                lg:text-[36px]"
                style={{
                  fontSize:
                    typeof window !== "undefined" && window.innerWidth >= 1024
                      ? "36px"
                      : undefined,
                }}
              >
                Why Your Business Needs One?
              </h2>
              <p
                className="text-[rgba(255,255,255,0.90)] font-inter font-normal leading-[150%]
                text-sm
                sm:text-base
                md:text-lg
                lg:text-xl
                xl:text-[24px]"
                style={{
                  fontSize:
                    typeof window !== "undefined" && window.innerWidth >= 1024
                      ? "24px"
                      : undefined,
                }}
              >
                Growth Pods deliver tangible benefits that traditional marketing
                can't match
              </p>
            </div>
            <div className="relative order-1 lg:order-2">
              <div className="absolute -inset-4 sm:-inset-6 lg:-inset-8 bg-gradient-to-r from-purple-600/40 via-purple-500/60 to-purple-600/40 rounded-2xl sm:rounded-3xl blur-xl sm:blur-2xl z-0"></div>
              <div className="absolute -inset-6 sm:-inset-8 lg:-inset-12 bg-purple-400/20 rounded-full blur-[100px] sm:blur-[150px] lg:blur-[200px] z-0"></div>
              <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-purple-500 rounded-full blur-[40px] sm:blur-[60px] lg:blur-[80px] z-5 w-48 h-36 sm:w-64 sm:h-48 lg:w-96 lg:h-72"></div>
              <img
                src="/pods/typeprompt.svg"
                alt="AI Chat Interface"
                className="relative w-full h-auto rounded-xl sm:rounded-2xl shadow-xl sm:shadow-2xl z-10"
              />
            </div>
          </div>

          {/* Benefit Cards and Second Image Row */}
          <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 lg:gap-[40px] items-start">
            {/* Cards Container */}
            <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-4 sm:gap-6 lg:gap-4 xl:gap-6 w-full lg:w-auto">
              {/* AI-Matched Card */}
              <div
                className="flex flex-col items-start gap-4 sm:gap-6 rounded-[20px] sm:rounded-[30px] lg:rounded-[40px] border border-white/15 bg-gradient-to-b from-transparent to-[rgba(28,27,51,0.10)] backdrop-blur-[10px] group transition-all duration-300 hover:scale-105
                p-4 sm:p-6 lg:p-[30px] xl:p-[40px_30px]
                w-full sm:w-1/2 lg:w-full xl:w-[485px]
                h-auto sm:h-[200px] md:h-[220px] lg:h-auto xl:h-[230px]"
                style={{
                  boxShadow: `0px 0px 100px 0px rgba(204,215,255,0.15) inset, 0px 5px 10px 0px rgba(0,0,0,0.05), 0px 15px 30px 0px rgba(0,0,0,0.05), 0px 30px 60px 0px rgba(0,0,0,0.10)`,
                }}
              >
                <div className="space-y-3 sm:space-y-4 lg:space-y-6">
                  <h3
                    className="text-white font-inter font-semibold leading-[150%] group-hover:text-purple-100 transition-colors duration-300
                    text-lg
                    sm:text-xl
                    md:text-2xl
                    lg:text-[24px]"
                    style={{
                      fontSize:
                        typeof window !== "undefined" &&
                        window.innerWidth >= 1024
                          ? "24px"
                          : undefined,
                    }}
                  >
                    AI-Matched for Maximum Impact
                  </h3>
                  <p
                    className="text-white/80 font-inter font-normal leading-[150%] group-hover:text-gray-200 transition-colors duration-300
                    text-sm
                    sm:text-base
                    md:text-lg
                    lg:text-[20px]"
                    style={{
                      fontSize:
                        typeof window !== "undefined" &&
                        window.innerWidth >= 1024
                          ? "20px"
                          : undefined,
                    }}
                  >
                    Our intelligent matching ensures you're paired with the most
                    compatible partners for your growth goals.
                  </p>
                </div>
              </div>

              {/* Real Results Card */}
              <div
                className="flex flex-col items-start gap-4 sm:gap-6 rounded-[20px] sm:rounded-[30px] lg:rounded-[40px] border border-white/15 bg-gradient-to-b from-transparent to-[rgba(28,27,51,0.10)] backdrop-blur-[10px] group transition-all duration-300 hover:scale-105
                p-4 sm:p-6 lg:p-[30px] xl:p-[40px_30px]
                w-full sm:w-1/2 lg:w-full xl:w-[485px]
                h-auto sm:h-[200px] md:h-[220px] lg:h-auto xl:h-[230px]"
                style={{
                  boxShadow: `0px 0px 100px 0px rgba(204,215,255,0.15) inset, 0px 5px 10px 0px rgba(0,0,0,0.05), 0px 15px 30px 0px rgba(0,0,0,0.05), 0px 30px 60px 0px rgba(0,0,0,0.10)`,
                }}
              >
                <div className="space-y-3 sm:space-y-4 lg:space-y-6">
                  <h3
                    className="text-white font-inter font-semibold leading-[150%] group-hover:text-purple-100 transition-colors duration-300
                    text-lg
                    sm:text-xl
                    md:text-2xl
                    lg:text-[24px]"
                    style={{
                      fontSize:
                        typeof window !== "undefined" &&
                        window.innerWidth >= 1024
                          ? "24px"
                          : undefined,
                    }}
                  >
                    Real Results with Less Effort
                  </h3>
                  <p
                    className="text-white/80 font-inter font-normal leading-[150%] group-hover:text-gray-200 transition-colors duration-300
                    text-sm
                    sm:text-base
                    md:text-lg
                    lg:text-[20px]"
                    style={{
                      fontSize:
                        typeof window !== "undefined" &&
                        window.innerWidth >= 1024
                          ? "20px"
                          : undefined,
                    }}
                  >
                    Achieve better outcomes by leveraging collective knowledge
                    and shared marketing resources.
                  </p>
                </div>
              </div>
            </div>

            {/* Second Image - Learn More with AI Character */}
            <Link
              href="/contacts"
              className="relative block w-full lg:w-auto lg:flex-shrink-0 group transition-transform duration-300 hover:scale-105"
            >
              <img
                src="/pods/learnmore.png"
                alt="Learn More AI Character"
                className="w-full h-auto object-cover rounded-xl sm:rounded-2xl shadow-xl sm:shadow-2xl"
              />
              <div className="absolute top-2 right-2 sm:top-4 sm:right-4 transition-transform duration-300 group-hover:scale-110">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8 sm:w-10 sm:h-10 lg:w-[42px] lg:h-[42px]"
                  viewBox="0 0 42 42"
                  fill="none"
                >
                  <path
                    d="M17 18L24 18M24 18L24 25M24 18L17 25"
                    stroke="white"
                    strokeOpacity="0.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle
                    cx="21"
                    cy="21"
                    r="21"
                    fill="white"
                    fillOpacity="0.1"
                  />
                  <circle
                    cx="21"
                    cy="21"
                    r="20.5"
                    stroke="white"
                    strokeOpacity="0.7"
                  />
                </svg>
              </div>
              <div
                className="absolute bottom-2 left-4 sm:bottom-4 sm:left-6 lg:bottom-4 lg:left-10 text-white font-inter font-medium leading-[120%]
                text-sm
                sm:text-base
                md:text-lg
                lg:text-xl
                xl:text-[24px]"
                style={{
                  fontSize:
                    typeof window !== "undefined" && window.innerWidth >= 1024
                      ? "24px"
                      : undefined,
                }}
              >
                Learn
                <br />
                more
              </div>
            </Link>
          </div>

          {/* Feature Tags */}
          <div className="flex flex-wrap gap-2 sm:gap-3 lg:gap-4 justify-center lg:justify-start">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex justify-center items-center gap-[10px] rounded-[36px] sm:rounded-[54px] lg:rounded-[72px] bg-[rgba(255,255,255,0.10)] text-[#BB8BFF] font-poppins font-normal leading-normal transition-all duration-300 hover:bg-[rgba(255,255,255,0.15)] hover:scale-105
                px-3 py-2 text-xs
                sm:px-4 sm:py-2.5 sm:text-sm
                md:px-5 md:py-3 md:text-base
                lg:px-[20px] lg:py-[15px] lg:text-[20px]"
                style={{
                  fontSize:
                    typeof window !== "undefined" && window.innerWidth >= 1024
                      ? "20px"
                      : undefined,
                }}
              >
                {feature}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
