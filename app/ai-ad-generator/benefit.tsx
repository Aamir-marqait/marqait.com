export default function Benefits() {
  const benefits = [
    {
      title: "Social Media Marketing Made Simple",
      description:
        "Reach your audience where they scroll. Create and launch high-performing ads for every platform in minutes.",
    },
    {
      title: "Product Showcases That Sell",
      description:
        "Highlight your product’s best features with stunning image and video ads—no designer or editor required",
    },
    {
      title: "Effortless Influencer Marketing",
      description:
        "Collaborate with Influencer seamlessly. AdPilot AI helps you create branded content that blends naturally with influencer campaigns.",
    },
    {
      title: "Powerful Brand Storytelling",
      description:
        "Tell your story with visuals, scripts, and voice-overs that connect emotionally and convert faster.",
    },
    {
      title: "Time and Cost Savings",
      description:
        "Cut agency costs and endless edits. AdPilot AI automates the heavy lifting so you can focus on growth.",
    },
  ];

  return (
    <div className="relative overflow-hidden">
      <div
        className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900"
        style={{
          backgroundImage: `url('/brand/Benefits.png')`,
        }}
      >
        {/* <div className="absolute inset-0 bg-black/60" /> */}
      </div>

      {/* Content */}
      <div className="relative z-10 py-20 px-4">
        <div className="max-w-[70rem] mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-white font-bold font-inter text-center text-[36px] leading-[150%] tracking-[1%]">
              Why Businesses Love Our AI Ads Generator
            </h2>
            <p className="text-[18px] font-normal text-white/90 max-w-4xl mx-auto leading-[28px] text-center">
              Our Ad Ad generator, AdPilot AI empowers marketers, creators, and
              businesses to launch smarter campaigns and grow faster. Here’s how
              it makes an impact.
            </p>
          </div>

          {/* Benefits Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 items-center">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className={`bg-gradient-to-b from-[rgba(9,9,9,0.3)] to-[rgba(184,18,255,0.15)] backdrop-blur-[10px] border-0 border-r border-b border-l border-t rounded-lg p-6 hover:border-purple-400/80 transition-colors duration-300 flex flex-col justify-around ${
                  index === 2
                    ? "border-[#B812FF] h-[252px]"
                    : index === 1 || index === 3
                      ? "border-[#B812FF] h-[233px]"
                      : "border-[#B812FF] h-[214px]"
                }`}
              >
                <h3 className="text-[22px] font-semibold text-white mb-4 text-center leading-[120%] tracking-[0%] font-inter">
                  {benefit.title}
                </h3>
                <p className="text-[14px] font-normal text-white leading-[100%] tracking-[0%] text-center font-inter">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
