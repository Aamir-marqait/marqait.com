import Image from "next/image";
import Link from "next/link";

export default function FinalCtaSection() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="relative rounded-3xl p-8 sm:p-12 lg:p-16 border border-[#FFFFFF33] overflow-hidden">
          <div className="absolute inset-0 bg-[url('/tools/bg.png')] bg-cover bg-center opacity-70"></div>
          <div className="relative z-10">
            <div className="text-center">
              <h2 className="text-[38px] max-w-lg mx-auto font-bold text-white mb-6 leading-[100%] tracking-[0px] text-center">
                Ready To Use AI Tools For Marketing?
              </h2>
              <p className="text-[20px] font-normal text-white mb-8 max-w-3xl mx-auto leading-[150%] tracking-[0%] text-center">
                Start using Marqait AI marketing tools today to save time, boost
                creativity, and scale your marketing like never before.
              </p>
              <div className="flex justify-center">
                <Link className="" href={"/contact"}>
                <button
                  className="cursor-pointer  flex items-center transition-all duration-200 justify-center gap-2"
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
                  Get Started
                  <Image
                    src="/icons/arrow.svg"
                    alt="arrow-right"
                    width={21}
                    height={21}
                    style={{
                      borderRadius: "24px",
                      background: "#F2F0F540",
                      opacity: 1,
                      padding: "3px",
                    }}
                  />
                </button>
              </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
