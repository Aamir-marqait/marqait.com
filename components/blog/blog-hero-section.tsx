import Image from "next/image";

export default function BlogHeroSection() {
  return (
    <section className="relative min-h-screen bg-[#020103] overflow-hidden">
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 w-full h-[85vh] opacity-100"
          style={{
            backgroundImage: "url('/blog/stars.svg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />

        {/* Gradient overlay to fade left side */}
        <div
          className="absolute inset-0 w-full h-[85vh]"
          style={{
            background:
              "linear-gradient(to right, #020103 0%, rgba(2, 1, 3, 0.8) 20%, rgba(2, 1, 3, 0.2) 140%, transparent 70%)",
          }}
        />

        <div
          className="absolute top-1/2 right-1/4 w-96 h-96 rounded-full opacity-30"
          style={{
            background: "radial-gradient(circle, #B372CF 0%, transparent 70%)",
            filter: "blur(100px)",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-16 sm:py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="space-y-8 sm:space-y-12 lg:space-y-16">
            {/* Main Heading */}
            <div className="space-y-2 sm:space-y-5 lg:-mt-24 relative">
              {/* BLOG background image */}
              <div className="absolute -top-14 left-4 w-72 h-32 opacity-90 z-0">
                <Image
                  src="/blog/BLOG.png"
                  alt="Blog background"
                  width={288}
                  height={128}
                  className="w-full h-full object-contain"
                />
              </div>

              <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-7xl xl:text-[7rem] font-bold leading-none relative z-10">
                <span
                  style={{
                    background:
                      "linear-gradient(180deg, #FFF 0%, #B372CF 100%)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  BLOG
                </span>
              </h1>

              {/* HUB background image */}
              <div className="absolute top-20 left-0 sm:left-4 lg:left-[22rem] w-52 h-32 opacity-90 z-0">
                <Image
                  src="/blog/HUB.png"
                  alt="Hub background"
                  width={208}
                  height={128}
                  className="w-full h-full object-contain"
                />
              </div>

              <h2 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[7rem] font-bold leading-none ml-8 sm:ml-12 lg:ml-80 relative z-10">
                <span
                  style={{
                    background:
                      "linear-gradient(180deg, #FFF 0%, #B372CF 100%)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  HUB
                </span>
              </h2>
            </div>

            {/* Description */}
            <div
              className="space-y-6 sm:space-y-8"
              style={{ maxWidth: "499px" }}
            >
              <p
                className="text-white leading-[150%]"
                style={{
                  fontFamily: "Inter",
                  fontSize: "24px",
                  fontWeight: 400,
                  lineHeight: "150%",
                }}
              >
                Stay ahead with ideas at the intersection of AI, growth, and
                execution. From actionable guides to founder stories, this is
                your space to explore how real businesses are building smarter
                with AI.
              </p>

              {/* Quote */}
              <blockquote
                className="border-l-2 border-[#B372CF] pl-4 sm:pl-6"
                style={{ maxWidth: "465px" }}
              >
                <p
                  className="text-white italic"
                  style={{
                    fontFamily: "Inter",
                    fontSize: "24px",
                    fontWeight: 400,
                    lineHeight: "150%",
                  }}
                >
                  "Dive into practical insights, bold ideas, and
                  behind-the-scenes of AI-powered growth.".
                </p>
              </blockquote>
            </div>
          </div>

          {/* Right Content - Robot Image */}
          <div className="flex justify-center lg:justify-end items-start mt-8 sm:mt-12 lg:mt-16">
            <div className="relative">
              {/* Additional glow effect behind robot */}
              <div
                className="absolute inset-0 w-full h-full rounded-full opacity-20"
                style={{
                  background:
                    "radial-gradient(circle, #B372CF 0%, transparent 60%)",
                  filter: "blur(80px)",
                  transform: "scale(1.2)",
                }}
              />

              {/* Robot Image Placeholder */}
              <div className="relative w-64 h-80 sm:w-80 sm:h-96 lg:w-96 lg:h-[28rem] xl:w-[28rem] xl:h-[32rem]">
                {/* Robot Background */}
                <Image
                  src="/blog/background.svg"
                  alt="Robot Background"
                  fill
                  className="absolute inset-0 w-full h-full object-cover z-10 opacity-30 -mt-14"
                />

                {/* Glow Effect */}
                <Image
                  src="/blog/glow.png"
                  alt="Glow Effect"
                  fill
                  className="absolute w-full h-full object-contain opacity-100 z-20 -mt-14"
                />

                {/* Robot Image */}
                <Image
                  src="/blog/robot.png"
                  alt="AI Robot reading newspaper"
                  width={800}
                  height={600}
                  className="absolute inset-0 w-full object-contain z-30"
                  style={{ top: "-9rem", height: "140%" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
