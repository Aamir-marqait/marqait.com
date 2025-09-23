export default function Benefits() {
  const benefits = [
    {
      title: "New Brand Development",
      description:
        "Establish a strong, cohesive brand identity from the ground up.",
    },
    {
      title: "Brand Refresh",
      description:
        "Update and formalize existing brand guidelines for a modern market presence.",
    },
    {
      title: "Team Alignment",
      description:
        "Ensure all internal and external stakeholders adhere to brand standards, fostering a unified brand image.",
    },
    {
      title: "Streamlined Collaboration",
      description:
        "Easily share brand assets and guidelines with designers, marketers, and agencies",
    },
    {
      title: "Professional Presentation",
      description:
        "Present a polished and professional brand image to clients, investors, and partners.",
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
              Our Benefits
            </h2>
            <p className="text-[18px] font-normal text-white/90 max-w-4xl mx-auto leading-[28px] text-center">
              a dummy or placeholder text commonly used in graphic design,
              publishing, and web development. Its purpose is to permit a page
              layout to be designed.
            </p>
          </div>

          {/* Benefits Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 items-center">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className={`bg-gradient-to-b from-[rgba(9,9,9,0.3)] to-[rgba(184,18,255,0.15)] backdrop-blur-[10px] border-0 border-r border-b border-l border-t rounded-lg p-6 hover:border-purple-400/80 transition-colors duration-300 flex flex-col justify-between ${
                  index === 2
                    ? "border-[#B812FF] h-[252px]"
                    : index === 1 || index === 3
                      ? "border-[#B812FF] h-[233px]"
                      : "border-[#B812FF] h-[214px]"
                }`}
              >
                <h3 className="text-[22px] font-semibold text-white mb-4 text-center leading-[100%] tracking-[0%] font-inter">
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
