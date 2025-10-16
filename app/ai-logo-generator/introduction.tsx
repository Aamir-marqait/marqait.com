"use client";

import Image from "next/image";

export default function Introduction() {
  return (
    <section className="bg-black py-20 px-6 max-w-[70rem]  mx-auto">
      <div className="">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <h2 className="text-white font-bold font-inter max-w-md text-[32px] leading-[150%] tracking-[1%]">
              Introducing <span className="text-[#BD14FF]">BrandMark AI</span> –
              Your AI Logo Generator
            </h2>

            <p className="text-[#FFFFFFE5] opacity-90 font-inter text-[20px] leading-[150%] tracking-[0%]">
              Say goodbye to expensive design tools. With Marqait’s Free AI Logo
              Generator, you can create a professional looking logo design in
              just seconds. Simply enter your brand name or text prompt, and our
              AI instantly makes high-quality logos for you.
            </p>

            <p className="text-[#FFFFFFE5] opacity-90 font-inter text-[20px] leading-[150%] tracking-[0%]">
              Whether you’re starting a business, running a company, or building
              your personal brand, Marqait’s Free AI Logo Generator helps you
              create best logos that stand out
            </p>
            <a
              href="https://app.marqait.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer inline-flex items-center transition-all duration-200 justify-center gap-2"
              style={{
                borderRadius: "15px",
                borderWidth: "1px",
                paddingTop: "6px",
                paddingRight: "11px",
                paddingBottom: "6px",
                paddingLeft: "11px",
                background:
                  "linear-gradient(180deg, rgba(184, 18, 255, 0.85) 0%, rgba(110, 11, 153, 0.85) 100%)",
                border: "1px solid #E6D4FF99",
                fontFamily: "Inter",
                fontWeight: 600,
                fontSize: "14px",
                lineHeight: "30px",
                letterSpacing: "0px",
                verticalAlign: "middle",
                color: "#F2F0F5",
              }}
            >
              Generate a logo with AI
            </a>
          </div>

          {/* Right Illustration */}
          <div className="flex justify-center lg:justify-end">
            <Image
              src="/logoai/what.png"
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
