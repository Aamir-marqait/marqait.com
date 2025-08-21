import Link from "next/link";

export default function ProductsHeroSection() {
  // const statistics = [
  //   {
  //     number: "10K +",
  //     label: "Active Users",
  //   },
  //   {
  //     number: "99.9%",
  //     label: "Uptime",
  //   },
  //   {
  //     number: "500M +",
  //     label: "AI Operations",
  //   },
  // ];

  return (
    <section className="relative overflow-hidden min-h-[70vh]">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        style={{ minHeight: "100vh" }}
      >
        <source src="/service/service.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/70  z-10"></div>

      <div className="relative max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-28 py-16 sm:py-20 lg:py-24 z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[80vh]">
          <div className="space-y-8 sm:space-y-10 lg:space-y-4">
            <div className="self-stretch">
              <span
                className="font-inter text-[20px] font-semibold leading-normal uppercase tracking-wider"
                style={{ color: "#BB8BFF" }}
              >
                OUR PRODUCTS
              </span>
            </div>

            <h1
              className="font-inter text-[32px] font-bold leading-normal lg:min-w-3xl"
              style={{ color: "#FFF" }}
            >
              AI-Native Platform Replacing Marketing Agencies
            </h1>

            <p
              className="font-inter text-[20px] font-normal leading-[150%] max-w-2xl"
              style={{ color: "#FFF" }}
            >
              Replace expensive agency retainers with intelligent AI agents that
              deliver comprehensive marketing strategy, brand development,
              campaign creation, and social media management. Get
              enterprise-level marketing capabilities at a fraction of
              traditional agency costs—no lengthy onboarding, no hidden fees,
              just transparent AI-powered marketing excellence.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 pt-4 sm:pt-8">
              <Link
                href="/contacts"
                className="cursor-pointer flex items-center bg-[rgba(140,69,255,0.40)] hover:bg-[rgba(140,69,255,0.50)] border border-[rgba(255,255,255,0.25)] text-[#F2F0F5] font-semibold rounded-2xl transition-all duration-200 justify-center gap-2 w-full sm:w-auto sm:min-w-[180px]
                px-4 py-3 text-sm
                sm:px-5 sm:py-3 sm:text-base
                md:px-6 md:py-4
                lg:px-4 lg:py-4 lg:text-[19.8px] lg:leading-[30px] lg:tracking-[-0.4px]"
                style={{
                  boxShadow:
                    typeof window !== "undefined" && window.innerWidth >= 1024
                      ? "0px 12px 16px 0px rgba(111, 17, 242, 0.25), 0px 0px 6px 3px rgba(255, 255, 255, 0.25) inset"
                      : "",
                }}
              >
                Get Started
                <img
                  src="/icons/arrow.svg"
                  alt="arrow-right"
                  className="rounded-3xl bg-[rgba(242,240,245,0.15)] p-2 h-6 sm:h-7 lg:h-8"
                />
              </Link>

              <Link
                href="/contacts"
                className="cursor-pointer flex items-center border border-[rgba(255,255,255,0.25)] hover:border-[rgba(255,255,255,0.35)] text-[#F2F0F5] font-semibold rounded-2xl transition-all duration-200 justify-center gap-2 w-full sm:w-auto sm:min-w-[180px]
                px-4 py-3 text-sm
                sm:px-5 sm:py-3 sm:text-base
                md:px-6 md:py-4
                lg:px-4 lg:py-4 lg:text-[19.8px] lg:leading-[30px] lg:tracking-[-0.4px]"
              >
                Learn More
                <img
                  src="/icons/arrow.svg"
                  alt="arrow-right"
                  className="rounded-3xl bg-[rgba(242,240,245,0.15)] p-2 h-6 sm:h-7 lg:h-8"
                />
              </Link>
            </div>

            <div className="pt-12 sm:pt-16 lg:pt-10">
              {/* <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6 lg:gap-8">
                {statistics.map((stat, index) => (
                  <div key={index} className="space-y-2 sm:space-y-3">
                    <div
                      className="font-inter text-[32px] font-semibold leading-[30px]"
                      style={{ color: "#BB8BFF" }}
                    >
                      {stat.number}
                    </div>
                    <div
                      className="font-inter text-[28px] font-semibold leading-[30px]"
                      style={{ color: "#FFF" }}
                    >
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
