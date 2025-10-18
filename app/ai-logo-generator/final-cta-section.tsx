import { Zap } from "lucide-react";

export default function FinalCtaSection() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[70rem] mx-auto">
        <div className="relative p-8 sm:p-12 lg:p-16 border border-[#FFFFFF33] overflow-hidden">
          <div className="absolute inset-0 bg-[url('/logoai/bg.png')] bg-cover bg-center opacity-70"></div>
          <div className="relative z-10">
            <div className="text-center">
              <h2 className="text-[38px] max-w-lg mx-auto font-bold text-white mb-6 leading-[100%] tracking-[0px] text-center">
                Generate a logo
                <br />
                <span className="text-[#BD14FF]">you love in seconds</span>
              </h2>
              <p className="text-[20px] font-normal text-white mb-8 max-w-3xl mx-auto leading-[150%] tracking-[0%] text-center">
                Don’t let branding hold you back. Use our Free AI Logo Generator
                to create a professional logo in minutes. No design skills, no
                complicated software, no huge expenses.
              </p>
              <div className="flex justify-center">
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
                  <Zap className="w-4 h-4" />
                  Generate My Logo Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
