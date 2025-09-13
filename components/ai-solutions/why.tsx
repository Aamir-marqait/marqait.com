import Image from "next/image"
import { Sparkles } from "lucide-react"

function Why() {
  return (
    <div className="w-screen mx-auto min-h-screen px-4 sm:px-0">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 sm:gap-12 lg:gap-16 items-center py-8 lg:py-0">
        {/* Left side - Full screen mockup image */}
        <div className="lg:col-span-2 relative">
          <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-screen">
            <Image src="/mockup.png" alt="AI Solutions Mockup" fill className="object-cover rounded-lg shadow-2xl" />
          </div>
        </div>

        {/* Right side - Content */}
        <div className="lg:col-span-3 space-y-6 lg:space-y-8">
          <div>
            <h2 className="font-inter font-bold text-2xl sm:text-3xl lg:text-[40px] leading-[150%] text-white/90 mb-4 lg:mb-6">
              Why Your Business Needs One?
            </h2>
            <p className="font-inter max-w-2xl font-normal text-lg sm:text-xl lg:text-[24px] leading-[150%] text-white/90">
              Growth Pods deliver tangible benefits that traditional marketing can't match.
            </p>
          </div>

          <div className="space-y-4 lg:space-y-6">
            {[
              {
                title: "Unmatched Customization.",
                description:
                  "Solutions built from the ground up to address your precise marketing challenges and opportunities.",
              },
              {
                title: "Competitive Advantage.",
                description:
                  "Gain a significant edge over competitors with proprietary AI capabilities that are unique to your business.",
              },
              {
                title: "Seamless Integration.",
                description:
                  "Designed to work flawlessly with your existing tech stack, minimizing disruption and maximizing efficiency.",
              },
              {
                title: "Scalability & Performance.",
                description:
                  "Engineered for high performance and scalability, capable of handling vast amounts of data and complex marketing operations.",
              },
              {
                title: "Expert Partnership.",
                description:
                  "Collaborate with a dedicated team of AI and marketing specialists committed to your success.",
              },
              {
                title: "Data-Driven Innovation.",
                description:
                  "Leverage advanced analytics and machine learning to uncover deep insights and drive intelligent decision-making.",
              },
            ].map((benefit, index) => (
              <div key={index} className="flex items-start gap-3 lg:gap-4 max-w-3xl">
                <div className="flex-shrink-0 rounded-full flex items-center justify-center mt-1">
                  <span className="">
                    <Sparkles className="w-4 h-4 text-purple-500 " />
                  </span>
                </div>
                <div>
                  <span className="font-inter font-semibold text-sm sm:text-base lg:text-[16px] leading-[150%] text-white">
                    {benefit.title}
                  </span>
                  <span className="font-inter font-normal text-sm sm:text-base lg:text-[16px] leading-[150%] text-white/90">
                    {" "}
                    {benefit.description}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Why
