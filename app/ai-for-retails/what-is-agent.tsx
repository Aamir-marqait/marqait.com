import Image from "next/image";

export default function WhatIsAgent() {
  return (
    <section className="bg-black py-20 px-6 max-w-[70rem]  mx-auto">
      <div className="">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <h2 className="text-white font-bold font-inter max-w-md text-[32px] leading-[150%] tracking-[1%]">
              Introducing{" "}
              <span className="text-[#BD14FF]">
                Marqait AI Solutions for Retail
              </span>
            </h2>

            <p className="text-[#FFFFFFE5] opacity-90 font-inter text-[20px] leading-[150%] tracking-[0%]">
              At Marqait AI, we create AI-powered retail solutions that help
              businesses understand their customers better and operate more
              efficiently. By using artificial intelligence in retail,
              supermarkets, e-commerce platforms, and retail chains can deliver
              personalized shopping experiences, optimize operations, and
              increase sales. Our AI solutions are built to make retail smarter,
              faster, and more customer-centric.
            </p>

            <p className="text-[#FFFFFFE5] opacity-90 font-inter text-[20px] leading-[150%] tracking-[0%]">
              From personalized product recommendations that boost sales to
              AI-driven inventory management that reduces stock-outs and
              overstocking, we help retailers stay ahead of customer demands.
              Our systems also use predictive analytics for demand forecasting,
              enabling businesses to plan effectively, reduce waste, and improve
              profit margins. With AI automation, every stage of the retail
              supply chain becomes more efficient and reliable.
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
