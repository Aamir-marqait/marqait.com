import Image from "next/image";

export default function DevelopmentProcessSection() {
  const processSteps = [
    {
      number: "01",
      title: "Chatbots",
      description:
        "AI assistants providing instant customer support and 24/7 service.",
    },
    {
      number: "02",
      title: "Code Generation",
      description:
        "Automated code generation to accelerate software development and reduce time.",
    },
    {
      number: "03",
      title: "Image & Video Recognition",
      description:
        "AI vision technology for image detection, security and quality analysis.",
    },
    {
      number: "04",
      title: "Predictive Analytics",
      description:
        "Data analysis to predict trends and enable smarter business decisions.",
    },
    {
      number: "05",
      title: "Content Creation:",
      description:
        "Automated content generation for marketing, social media and creative projects.",
    },
    {
      number: "06",
      title: "Smart Recommendations",
      description:
        "Personalized recommendations to boost engagement, sales and customer satisfaction.",
    },
    {
      number: "07",
      title: "Hybrid AI",
      description:
        "Combined AI techniques delivering smarter and more flexible solutions.",
    },
    {
      number: "08",
      title: "Scalable AI",
      description:
        "Scalable AI solutions that grow with your business needs.",
    },
    {
      number: "09",
      title: "AI Security",
      description:
        "Security protection for AI systems ensuring safe and reliable operations."
    },
  ];

  return (
    <section className="py-20 px-4 bg-black">
      <div className="max-w-[70rem] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-[32px] font-bold text-white mb-6 leading-[48px] text-center">
            Custom AI Solutions We Offer
          </h2>
          <p className="text-[18px] font-normal text-white/90 max-w-4xl mx-auto leading-[28px] text-center">
            As a trusted custom AI Software development company, Marqait AI
            combines deep technical expertise with industry knowledge to deliver
            custom AI solutions that truly make a difference. Our approach
            focuses on understanding your specific challenges and creating AI
            systems that integrate seamlessly into your existing workflows. We
            offer a wide range of AI solutions tailored to meet the unique
            needs:
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 items-start">
          {/* Left column - items 1-5 */}
          <div className="space-y-6">
            {processSteps.slice(0, 5).map((step, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
                    <span className="text-[16px] font-bold text-white">
                      {step.number}
                    </span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-[18px] font-bold text-white mb-1">
                    {step.title}
                  </h3>
                  <p className="text-[14px] font-normal text-gray-400">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Center column - image */}
          <div className="flex justify-center">
            <div className="w-full max-w-sm">
              <Image
                src="/agents/process.png"
                alt="AI Agent Development Process Illustration"
                width={400}
                height={320}
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Right column - items 6-9 in diagonal layout */}
          <div className="space-y-6 ">
            {processSteps.slice(5).map((step, index) => (
              <div key={index + 5} className={`flex gap-4 `}>
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
                    <span className="text-[16px] font-bold text-white">
                      {step.number}
                    </span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-[18px] font-bold text-white mb-1">
                    {step.title}
                  </h3>
                  <p className="text-[14px] font-normal text-gray-400">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
