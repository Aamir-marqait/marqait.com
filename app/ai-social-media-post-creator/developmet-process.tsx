import Image from "next/image";

export default function DevelopmentProcessSection() {
  const processSteps = [
    {
      number: "01",
      title: "Launch Marqait AI",
      description:
        "Open Marqait AI on your browser, or mobile device. Access “Social Media Post Generator” on the side navigation or tile.",
    },
    {
      number: "02",
      title: "Select your social media platform",
      description:
        "Choose the platform LinkedIn, Twitter (X), Facebook, or Instagram you want to post on.",
    },
    {
      number: "03",
      title: "Choose a category",
      description:
        "Choose the category that best matches your niche, such as Technology, Marketing, Health, Business, Lifestyle, or E-commerce.",
    },
    {
      number: "04",
      title: " Enter your text prompt",
      description:
        "Describe the post design you want in the prompt box. Include brand name, business field, and brand colors and more for better results.",
    },
  ];

  return (
    <section className="py-20 px-4 bg-black">
      <div className="max-w-[70rem] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-[32px] font-bold text-white mb-6 leading-[48px] text-center">
            How to Generate Social Media Post with AI
          </h2>
          <p className="text-[18px] font-normal text-white/90 max-w-4xl mx-auto leading-[28px] text-center">
            Transform your content strategy with our AI-powered social media
            post generator. From analyzing your brand voice to creating engaging
            posts across multiple platforms, our streamlined process ensures
            consistent, high-quality content that resonates with your audience.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="space-y-8">
            {processSteps.map((step, index) => (
              <div key={index} className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
                    <span className="text-[18px]  font-bold text-white leading-[28px] text-center">
                      {step.number}
                    </span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-[20px] font-bold text-white mb-2 leading-[28px]">
                    {step.title}
                  </h3>
                  <p className="text-[15px] font-normal text-gray-400 leading-[22.75px]">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-lg">
              <Image
                src="/agents/process.png"
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
