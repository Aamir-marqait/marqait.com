import Image from "next/image";

export default function ProcessPage() {
  const processSteps = [
    {
      number: "01",
      title: "Discovery & Consultation",
      description:
        "We analyze your marketing operations, challenges, and goals to identify where custom AI can create the biggest impact.",
      position: "right",
    },
    {
      number: "02",
      title: "Solution Design & Prototyping",
      description:
        "We craft a tailored AI solution, build prototypes, and refine with your feedback to ensure perfect alignment.",
      position: "left",
    },
    {
      number: "03",
      title: "Development & Implementation",
      description:
        "We build and integrate your custom AI solution with secure infrastructure, seamless workflows, and team training.",
      position: "right",
    },
    {
      number: "04",
      title: "Deployment & Optimization",
      description:
        "We craft a tailored AI solution, build prototypes, and refine with your feedback to ensure perfect alignment.",
      position: "left",
    },
    {
      number: "05",
      title: "Ongoing Support & Evolution",
      description:
        "We build and integrate your custom AI solution with secure infrastructure, seamless workflows, and team training.",
      position: "right",
    },
  ];

  return (
    <div className="min-h-screen  bg-black text-white">
      {/* Header Section */}
      <div className=" mx-auto px-4 py-16 text-center">
        <h1
          className="text-center text-white mb-6"
          style={{
            fontFamily: "Inter",
            fontWeight: 700,
            fontSize: "40px",
            lineHeight: "150%",
            letterSpacing: "0%",
          }}
        >
          How We Provide AI Solutions
        </h1>
        <p
          className="text-center max-w-4xl mx-auto"
          style={{
            fontFamily: "Inter",
            fontWeight: 400,
            fontSize: "20px",
            lineHeight: "150%",
            letterSpacing: "0%",
            color: "#FFFFFFE5",
            opacity: 0.9,
          }}
        >
          Our process is designed for clarity, collaboration, and measurable
          outcomes, ensuring that the custom AI solution we build perfectly
          aligns with your strategic objectives.
        </p>
      </div>

      {/* Process Timeline */}
      <div className=" mx-auto pb-16">
        <div className="relative mx-auto">
          <div className="flex items-start justify-center">
            {/* Central Timeline Image */}
            <div className="flex-shrink-0 w-48 md:w-64">
              <Image
                src="/layer.png"
                alt="Process Timeline Steps"
                className="w-52 h-auto"
                width={206}
                height={400}
              />
            </div>

            {/* Content Boxes positioned around the timeline */}
            <div className="absolute inset-0">
              {processSteps.map((step, index) => {
                const topPositions = ["2%", "24%", "42%", "64%", "82%"];
                return (
                  <div
                    key={index}
                    className={`absolute flex ${step.position === "right" ? "justify-end pr-4" : "justify-start pl-4"} items-center`}
                    style={{ top: topPositions[index], width: "100%" }}
                  >
                    <div
                      className={`${step.position === "right" ? "mr-36" : "ml-24"}`}
                      style={{ width: "485px" }}
                    >
                      <div
                        className="py-4 px-6 hover:border-purple-500/50 transition-all duration-300"
                        style={{
                          borderRadius:
                            step.position === "right"
                              ? "0px 24px 20px 0px"
                              : "24px 0px 0px 24px",
                          borderWidth: "3px",
                          background: `linear-gradient(180deg, rgba(46, 51, 90, 0) 0%, rgba(28, 27, 51, 0.1) 100%), radial-gradient(146.13% 118.42% at 50% -15.5%, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0) 99.59%)`,
                          border: "2px solid #FFFFFF26",
                          boxShadow: `0px 0px 100px 0px #CCD7FF26 inset, 0px 30px 60px 0px #0000001A, 0px 15px 30px 0px #0000000D, 0px 5px 10px 0px #0000000D`,
                          backdropFilter: "blur(20px)",
                          clipPath:
                            step.position === "right"
                              ? "polygon(15% 0%, 100% 0%, 100% 100%, 15% 100%, 0% 50%)"
                              : "polygon(0% 0%, 85% 0%, 100% 50%, 85% 100%, 0% 100%)",
                          position: "relative",
                        }}
                      >
                        <h3
                          className={`mb-3  capitalize ${step.position === "right" ? "ml-12" : ""}`}
                          style={{
                            fontFamily: "Inter",
                            fontWeight: 600,
                            fontSize: "18px",
                            lineHeight: "100%",
                            letterSpacing: "-3%",
                            color: "#D9D9D9",
                          }}
                        >
                          {step.title}
                        </h3>
                        <p
                          className={`${step.position === "right" ? "ml-12" : "mr-12"}`}
                          style={{
                            fontFamily: "Inter",
                            fontWeight: 400,
                            fontSize: "14px",
                            lineHeight: "22px",
                            // textAlign: "justify",
                            color: "#FFFFFF",
                          }}
                        >
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
