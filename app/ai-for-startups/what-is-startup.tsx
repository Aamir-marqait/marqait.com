import Image from "next/image";

export default function WhatIsStartup() {
  return (
    <section className="bg-black py-20 px-6 max-w-[70rem]  mx-auto">
      <div className="">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <h2 className="text-white font-bold font-inter max-w-md text-[32px] leading-[150%] tracking-[1%]">
              What is
              <span className="text-[#BD14FF]"> AI For Startups? </span>
            </h2>

            <p className="text-[#FFFFFFE5] opacity-90 font-inter text-[20px] leading-[150%] tracking-[0%]">
              AI in startups helps small teams automate tasks, analyze data,
              forecast trends, and personalize customer experiences without
              large teams or heavy costs. It supports functions like marketing,
              sales, customer support, and operations, with solutions such as
              SEO research, pitch deck creation, ad optimization, lead scoring,
              and workflow management.
            </p>

            <p className="text-[#FFFFFFE5] opacity-90 font-inter text-[20px] leading-[150%] tracking-[0%]">
              By integrating AI into their processes, startups can reduce costs,
              save time, and make smarter, data-driven decisions. Ultimately, AI
              for startups aims to increase efficiency, reduce human error, and
              help small businesses scale faster by working alongside
              entrepreneurs and their teams.
            </p>
          </div>

          {/* Right Illustration */}
          <div className="flex justify-center lg:justify-end">
            <Image
              src="/startup/second.png"
              alt="AI SEO Illustration"
              width={500}
              height={400}
              className="max-w-full max-h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
