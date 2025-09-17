import Image from "next/image";

export default function WhatIsAiSeo() {
  return (
    <section className="bg-black py-20 px-6 max-w-[70rem]  mx-auto">
      <div className="">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <h2 className="text-white font-bold font-inter text-[32px] leading-[150%] tracking-[1%]">
              What Is <span className="text-[#BD14FF]">AI SEO?</span>
            </h2>

            <p className="text-[#FFFFFFE5] opacity-90 font-inter text-[20px] leading-[150%] tracking-[0%]">
              AI SEO (Artificial Intelligence for SEO) is the use of machine
              learning, natural language processing, and AI-powered algorithms
              to follow search engine optimization (SEO) practices in order to
              improve website visibility and rankings on search engines. Unlike
              traditional SEO, which relies heavily on manual research and
              repetitive tasks, AI for SEO optimization automates processes and
              provides data-driven recommendations in real time.
            </p>

            <div className="space-y-4">
              <p className="text-[#FFFFFFE5] opacity-90 text-[20px] font-inter leading-[150%] tracking-[0%]">
                With AI and SEO combined, businesses can:
              </p>
              <ol className="space-y-3 text-[#FFFFFFE5] text-[20px] leading-[150%] tracking-[0%]">
                <li className="flex items-start">
                  <span className=" mr-3">1.</span>
                  Discover ranking opportunities faster.
                </li>
                <li className="flex items-start">
                  <span className="mr-3">2.</span>
                  Optimize content for search intent, not just keywords.
                </li>
                <li className="flex items-start">
                  <span className="mr-3">3.</span>
                  Adapt to Google's algorithm updates instantly.
                </li>
                <li className="flex items-start">
                  <span className=" mr-3">4.</span>
                  Generate User and SEO-friendly content at scale using SEO
                  writing AI.
                </li>
              </ol>
            </div>
          </div>

          {/* Right Illustration */}
          <div className="flex justify-center lg:justify-end">
            <Image
              src="/seo/seo1.png"
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
