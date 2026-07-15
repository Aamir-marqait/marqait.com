import Image from "next/image";

export default function WhatIsAgent() {
  return (
    <section className="bg-black py-20 px-6 max-w-[70rem]  mx-auto">
      <div className="">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <h2 className="text-white font-bold font-inter max-w-md text-[32px] leading-[150%] tracking-[1%]">
              What Is{" "}
              <span className="text-[#BD14FF]">AI Agent Development?</span>
            </h2>

            <p className="text-[#FFFFFFE5] opacity-90 font-inter text-[20px] leading-[150%] tracking-[0%]">
              AI agent development involves creating intelligent software
              systems that can perceive their environment, make decisions, and
              take actions to achieve specific goals. These autonomous agents
              use machine learning, natural language processing, and advanced
              algorithms to simulate human-like reasoning and behavior.
            </p>

            <p className="text-[#FFFFFFE5] opacity-90 font-inter text-[20px] leading-[150%] tracking-[0%]">
              AI agent development involves creating intelligent software
              systems that can perceive their environment, make decisions, and
              take actions to achieve specific goals. These autonomous agents
              use machine learning, natural language processing, and advanced
              algorithms to simulate human-like reasoning and behavior. A good
              primer on this shift is{" "}
              <a
                href="https://truintel.ai/how-it-works"
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-300 underline decoration-emerald-400/40 underline-offset-2 hover:text-emerald-200"
              >
                how TruIntel&apos;s AI visibility platform works
              </a>{" "}
              — an AI system built to monitor other AI systems.
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
