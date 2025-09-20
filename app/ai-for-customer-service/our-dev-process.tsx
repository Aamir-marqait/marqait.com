import Image from "next/image";

export default function DevelopmentProcessSection() {
  const processSteps = [
    {
      number: "01",
      title: "AI Chatbots & Virtual Assistants",
      description: "Provide instant, automated responses to customer inquiries",
    },
    {
      number: "02",
      title: "Sentiment Analysis Tools",
      description: "Detect customer emotions to adjust responses appropriately",
    },
    {
      number: "03",
      title: "Automated Ticket Routing",
      description: "Assign queries to the right agents instantly for faster resolution",
    },
    {
      number: "04",
      title: "Voice AI & Call Center Automation",
      description: "Enable smart voice-based customer support solutions",
    },
    {
      number: "05",
      title: "Personalized Customer Interactions",
      description: "Use AI to tailor conversations and recommendations",
    },
    {
      number: "06",
      title: "Knowledge Base Automation",
      description: "Generate self-service FAQs and support articles automatically",
    },
    {
      number: "07",
      title: "Fraud & Spam Detection",
      description: "Prevent fraudulent requests and spam interactions",
    },
  ];

  return (
    <section className="py-20 px-4 bg-black">
      <div className="max-w-[70rem] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-[32px] font-bold text-white mb-6 leading-[48px] text-center">
            AI Solutions for Customer Service We Offer
          </h2>
          <p className="text-[18px] font-normal text-white/90 max-w-4xl mx-auto leading-[28px] text-center">
            Marqait AI develops customized solutions tailored to your business:
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
