import Image from "next/image";

export default function What() {
  return (
    <section className="bg-black py-20 px-6 max-w-[70rem]  mx-auto">
      <div className="">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <h2 className="text-white font-bold font-inter max-w-md text-[32px] leading-[150%] tracking-[1%]">
              Introducing Marqait{" "}
              <span className="text-[#BD14FF]">AI for Customer Service</span>
            </h2>

            <p className="text-[#FFFFFFE5] opacity-90 font-inter text-[20px] leading-[150%] tracking-[0%]">
              At Marqait AI, we design AI-driven customer support tools that
              empower businesses to handle customer queries more efficiently.
              Whether you’re running an e-commerce business, SaaS company, or
              enterprise service desk, our AI solutions help deliver
              round-the-clock assistance and personalized customer experiences.
            </p>

            <p className="text-[#FFFFFFE5] opacity-90 font-inter text-[20px] leading-[150%] tracking-[0%]">
              From AI chatbots that resolve FAQs instantly to virtual assistants
              that provide guided support, we make customer service smarter and
              more reliable. Our natural language processing (NLP) systems
              understand customer intent, while sentiment analysis helps detect
              customer emotions for better responses. By combining automation,
              personalization, and predictive insights, we enable brands to
              deliver consistent and scalable customer support.
            </p>
          </div>

          {/* Right Illustration */}
          <div className="flex justify-center lg:justify-end">
            <Image
              src="/agents/why.png"
              alt="AI SEO Illustration"
              width={500}
              height={400}
              className="max-w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
