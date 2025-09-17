import Image from "next/image";

export default function WhatIsEcommerce() {
  return (
    <section className="bg-black py-20 px-6 max-w-[70rem]  mx-auto">
      <div className="">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <h2 className="text-white font-bold font-inter max-w-md text-[32px] leading-[150%] tracking-[1%]">
              <span className="text-[#BD14FF]">AI For E-commerce: </span>
              The Future of Online Stores
            </h2>

            <p className="text-[#FFFFFFE5] opacity-90 font-inter text-[20px] leading-[150%] tracking-[0%]">
              The way people shop online has completely changed, and artificial
              intelligence in ecommerce is driving that transformation.
              Customers now expect personalized experiences, fast responses, and
              tailored recommendations — and traditional ecommerce setups can no
              longer keep up with these demands. That’s why AI in ecommerce is
              not just an advantage, but a necessity for businesses that want to
              stay competitive.
            </p>

            <p className="text-[#FFFFFFE5] opacity-90 font-inter text-[20px] leading-[150%] tracking-[0%]">
              AI doesn't just enhance the customer experience; it also helps
              online retailers optimize operations, marketing, pricing, and
              retention strategies. From AI ecommerce personalization to
              automation and predictive analytics, here's why leading ecommerce
              brands are embracing artificial intelligence:
            </p>
          </div>

          {/* Right Illustration */}
          <div className="flex justify-center lg:justify-end">
            <Image
              src="/ecommerce/what.png"
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
