import Image from "next/image";

const services = [
  {
    icon: "🎯",
    title: "Custom AI Solutions",
    description:
      "Solve your unique business challenges with custom AI solutions — from machine learning models and algorithm optimization to seamless system integration tailored to your industry",
  },
  {
    icon: "❤️",
    title: "AI for Healthcare",
    description:
      "Revolutionize healthcare with advanced AI solutions that enhance patient care, support diagnostics, and deliver predictive insights—improving outcomes, reducing costs, and boosting clinical efficiency",
  },
  {
    icon: "🚀",
    title: "AI for Startups",
    description:
      "Accelerate your startup's growth with scalable, affordable AI solutions that deliver enterprise-level intelligence—helping emerging businesses gain a competitive edge and disrupt their markets.",
  },
  {
    icon: "🎧",
    title: "AI for Customer Service",
    description:
      "Elevate customer experience with AI-powered automation that reduces response times, boosts satisfaction, and delivers 24/7 support—while preserving the human touch customers expect.",
  },
  {
    icon: "🏪",
    title: "AI in Retail Industry",
    description:
      "Transform retail with AI solutions that optimize inventory, enhance personalization, and boost sales—delivering deep insights into consumer behavior, shopping trends, and market dynamics",
  },
  {
    icon: "🤖",
    title: "AI Agent Development",
    description:
      "Create AI agents that handle complex tasks, make autonomous decisions, and interact naturally—covering conversational AI, task automation, and intelligent processes.",
  },
  {
    icon: "🔍",
    title: "AI for SEO",
    description:
      "Dominate search results with AI-driven SEO strategies that analyze patterns, optimize content, and predict algorithm changes—ensuring steady organic traffic growth and online visibility.",
  },
  {
    icon: "🛒",
    title: "AI for Ecommerce",
    description:
      "Maximize your store's potential with AI-driven ecommerce solutions that enhance user experience, boost conversions, and raise order values—delivering personalization that drives loyalty and growth",
  },
];

export default function EveryIndustry() {
  return (
    <div className="min-h-screen bg-[#05000A] text-white relative overflow-hidden">
      <div className="relative z-10 container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl leading-[60px] lg:text-[36px] font-bold mb-4 text-balance">
            Comprehensive AI Solutions for <br />
            <span className="text-purple-400 lg:text-[36px] ">
              Every{" "}
              <span className="relative">
                Industry
                <Image
                  src="/line.svg"
                  alt="decorative line"
                  width={181}
                  height={11}
                  className="absolute left-0 right-0 w-full h-auto max-w-full"
                />
              </span>
            </span>
          </h1>
        </div>

        <Image
          src="/left.png"
          alt=""
          width={200}
          height={300}
          className="absolute hidden md:block left-0 top-[38%] transform -translate-y-1/2 -translate-x-1/2 z-0"
        />
        <Image
          src="/right.png"
          alt=""
          width={200}
          height={200}
          className="absolute hidden md:block right-0 top-[38%] transform -translate-y-1/2 translate-x-1/2 z-0"
        />

        {/* Services Grid */}
        <div
          className="p-10 rounded-[48px] backdrop-blur-[20px] max-w-[75rem] mx-auto relative"
          style={{
            background: "rgba(255, 255, 255, 0.02)",
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="rounded-[24px] backdrop-blur-[20px] transition-colors group"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(46, 51, 90, 0) 0%, rgba(28, 27, 51, 0.1) 100%), radial-gradient(146.13% 118.42% at 50% -15.5%, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0) 99.59%)",
                  boxShadow:
                    "0px 30px 60px 0px #0000001A, 0px 15px 30px 0px #0000000D, 0px 5px 10px 0px #0000000D, 0px 0px 100px 0px #CCD7FF26 inset",
                }}
              >
                <div className="p-6 h-full flex flex-col">
                  <div className="mb-4">
                    <Image
                      src={`/ai-solutions/${index + 1}.png`}
                      alt={service.title}
                      width={64}
                      height={64}
                      className="w-16 h-16 object-contain"
                    />
                  </div>
                  <h3
                    className="mb-4 text-white group-hover:text-purple-300 transition-colors"
                    style={{
                      fontFamily: "Inter",
                      fontWeight: 700,
                      fontSize: "24px",
                      lineHeight: "32px",
                      letterSpacing: "-2%",
                    }}
                  >
                    {service.title}
                  </h3>
                  <p
                    className="text-white mb-6 flex-grow"
                    style={{
                      fontFamily: "Inter",
                      fontWeight: 400,
                      fontSize: "16px",
                      lineHeight: "150%",
                      letterSpacing: "0%",
                    }}
                  >
                    {service.description}
                  </p>
                  <button
                    className="cursor-pointer p-0 h-auto text-left transition-colors"
                    style={{
                      fontWeight: 700,
                      fontSize: "14px",
                      lineHeight: "100%",
                      letterSpacing: "0%",
                      textTransform: "uppercase",
                      color: "#D26DFE",
                    }}
                  >
                    LEARN MORE
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
