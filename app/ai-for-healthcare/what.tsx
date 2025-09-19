import Image from "next/image";

export default function WhatIsAgent() {
  return (
    <section className="bg-black py-20 px-6 max-w-[70rem]  mx-auto">
      <div className="">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <h2 className="text-white font-bold font-inter max-w-md text-[32px] leading-[150%] tracking-[1%]">
              We Transform {" "}
              <span className="text-[#BD14FF]">
                Healthcare with Artificial Intelligence
              </span>
            </h2>

            <p className="text-[#FFFFFFE5] opacity-90 font-inter text-[20px] leading-[150%] tracking-[0%]">
              As a trusted AI solutions provider, we build AI-powered healthcare
              systems that help hospitals, clinics, pharmaceutical companies,
              and startups improve accuracy and efficiency. Our solutions are
              designed to reduce errors, save time, and make medical processes
              more reliable.
            </p>

            <p className="text-[#FFFFFFE5] opacity-90 font-inter text-[20px] leading-[150%] tracking-[0%]">
              From automating electronic health records and billing to assisting
              with disease detection, our AI tools simplify complex workflows
              and give healthcare providers more time to focus on patients.
              <br />
              With AI, doctors can detect diseases earlier, predict patient
              risks, and make smarter, data-driven decisions in real time. This
              leads to more personalized treatment plans, better outcomes, and
              improved patient satisfaction.
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
