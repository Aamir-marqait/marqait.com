import Image from "next/image";

export default function What() {
  return (
    <section className="bg-black py-20 px-6 max-w-[70rem]  mx-auto">
      <div className="">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <h2 className="text-white font-bold font-inter max-w-md text-[32px] leading-[150%] tracking-[1%]">
              Transform Your Business with {""}
              <span className="text-[#BD14FF]">Custom AI Solutions</span>
            </h2>

            <p className="text-[#FFFFFFE5] opacity-90 font-inter text-[20px] leading-[150%] tracking-[0%]">
              At Marqait AI, we are a premier custom AI development company
              specializing in creating innovative custom AI solutions that drive
              business transformation. Our team of expert AI developers and data
              scientists partners with organizations across industries to build
              intelligent systems that solve complex challenges and unlock new
              opportunities for growth.
            </p>

            <p className="text-[#FFFFFFE5] opacity-90 font-inter text-[20px] leading-[150%] tracking-[0%]">
              Whether you're looking to automate processes, enhance
              decision-making, or create entirely new AI-powered products, our
              custom AI solutions are designed to meet your unique business
              requirements and deliver measurable results.
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
