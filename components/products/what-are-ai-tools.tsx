import Image from "next/image";

export default function WhatAreTools() {
  const processSteps = [
    {
      number: "01",
      title: "Generate campaigns, ads, and social media posts instantly.",
      description: "Understanding your challenges and goals",
    },
    {
      number: "02",
      title: "Create high-quality visuals and brand assets with AI.",
      description:
        "Crafting workflows, decision-making models, and interaction logic",
    },
    {
      number: "03",
      title: "Build data-driven strategies tailored to your audience.",
      description: "Building and training AI models with real-world data",
    },
    {
      number: "04",
      title: "Maintain consistent branding across all platforms.",
      description:
        "Connecting AI agents seamlessly with your apps, CRMs, and platforms",
    },
  ];

  return (
    <section className="py-20 px-4 bg-black">
      <div className="max-w-[70rem] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-[32px] font-bold text-white mb-6 leading-[48px] text-center">
            What are AI Marketing Tools?
          </h2>
          <p className="text-[18px] font-normal text-white/90 max-w-4xl mx-auto leading-[28px] text-center">
            AI marketing tools are software applications that use artificial
            intelligence (AI) and machine learning to help businesses create,
            manage, and optimize marketing campaigns faster and more
            effectively. Instead of spending hours brainstorming, designing, or
            analyzing, marketers can use AI tools to automate repetitive tasks
            and generate high-performing content in minutes.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="space-y-8">
            <div className="flex flex-col gap-3">
              <p className="font-bold text-[#D8D8D8] text-[15px] leading-[100%] tracking-[8%]  uppercase">
                Why Choose Us
              </p>
              <h1 className="font-bold text-white text-[28px] leading-[100%] tracking-[0%]">
                With Marqait You Can:
              </h1>
            </div>
            {processSteps.map((step, index) => (
              <div key={index} className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8  flex items-center justify-center">
                    <Image
                      src="/tools/icon.svg"
                      alt="Step icon"
                      width={28}
                      height={18}
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-[18px] font-normal text-white mb-2 leading-[150%] tracking-[0%]">
                    {step.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-lg">
              <Image
                src="/tools/box.png"
                alt="AI Agent Development Process Illustration"
                width={500}
                height={400}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
