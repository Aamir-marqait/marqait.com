import Image from "next/image";

export default function DevelopmentProcessSection() {
  const processSteps = [
    {
      number: "01",
      title: "Enter Your Prompt or Brand Name",
      description:
        "Type your business name, tagline, or a short description  of your idea. For best results include: industry, style, color preferences, and any icon ideas. Example prompt: “Organic coffee shop -  modern, earthy brown & gold, circular emblem with  a coffee cup.”",
    },
    {
      number: "02",
      title: "Our AI Understands Your Idea",
      description:
        "Our AI logo generator analyzes your prompt using advanced  machine learning, design principles, and color theory to understand your brand tone and  visual needs.",
    },
    {
      number: "03",
      title: "Generate Unique Logo Designs",
      description:
        "The AI logo generator Instantly creates a variety of unique  logo options — different layouts (icon + wordmark, badge, stacked), typography choices, and  iconography tailored to your niche.",
    },
    {
      number: "04",
      title: "Customize Your Favorite",
      description:
        "Change fonts, colors, icons, and layouts to make the design truly  yours.",
    },
    {
      number: "05",
      title: "Download and Use Anywhere",
      description:
        "The AI logo generator Instantly creates a variety of unique  logo options — different layouts (icon + wordmark, badge, stacked), typography choices, and  iconography tailored to your niche.",
    },
  ];

  return (
    <section className="py-20 px-4 bg-black">
      <div className="max-w-screen mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-[32px] font-bold text-white mb-6 leading-[48px] text-center">
            How to Generate Logo with AI
          </h2>
          <p className="text-[18px] font-normal text-white/90 max-w-4xl mx-auto leading-[28px] text-center">
            Our system combines machine learning, design principles, and brand
            psychology to generate logos that match your industry and audience.
            Marqait’s Free AI Logo Generator, creating a professional logo is as
            easy as typing a few words.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center md:pl-32 ">
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
                src="/logoai/how.png"
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
