import Image from "next/image";
import Link from "next/link";

export default function Introduction() {
  return (
    <section className="bg-black py-20 px-6 max-w-[70rem]  mx-auto">
      <div className="">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <h2 className="text-white font-bold font-inter max-w-md text-[32px] leading-[150%] tracking-[1%]">
              Introducing Marqait’s Pro
              <br />
              <span className="text-[#BD14FF]">
                AI BrandBlueprint Generator
              </span>
            </h2>

            <p className="text-[#FFFFFFE5] opacity-90 font-inter text-[20px] leading-[150%] tracking-[0%]">
              Our powerful tool designed to help businesses craft a strong,
              consistent, and professional brand identity. With AI-driven
              precision, it builds comprehensive brand books that cover
              everything from colors and typography to tone of voice and
              messaging guidelines. The result is a clear, accessible blueprint
              that ensures your brand stays cohesive and impactful across every
              platform and interaction.
            </p>

            <p className="text-[#FFFFFFE5] opacity-90 font-inter text-[20px] leading-[150%] tracking-[0%]">
              Beyond just design assets, the Pro AI BrandBlueprint Generator
              empowers your team with actionable guidelines that streamline
              decision-making and reduce inconsistencies. Whether you’re
              launching a new brand, refreshing an existing one, or scaling
              across multiple channels, it ensures every touchpoint reflects
              your brand’s true identity with clarity and confidence.
            </p>
            <Link className="hidden lg:block" href={"/contact"}>
              <button
                className="cursor-pointer flex items-center transition-all duration-200 justify-center gap-2"
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
                Generate BrandBlueprint
              </button>
            </Link>
          </div>

          {/* Right Illustration */}
          <div className="flex justify-center lg:justify-end">
            <Image
              src="/brand/2 image.png"
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
