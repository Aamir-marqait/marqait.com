import Image from "next/image";

export default function HowGrowthPodsWork() {
  return (
    <div id="how-growth-pods-work" className="relative overflow-hidden">
      <div className="relative z-10 container mx-auto px-4 py-8 sm:py-12 md:py-16 lg:py-20 xl:py-10 max-w-7xl">
        <div className="text-center space-y-1 sm:space-y-2 lg:space-y-2">
          <div className="space-y-3 sm:space-y-4 lg:space-y-6">
            {/* Commented out heading - preserved as in original */}
            {/* <h2
              className="text-center font-inter font-bold leading-[150%]
              text-2xl
              sm:text-3xl
              md:text-4xl
              lg:text-[36px]"
              style={{
                background: "linear-gradient(90deg, rgba(255, 255, 255, 0.90) 0%, rgba(153, 153, 153, 0.90) 100%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontSize: typeof window !== "undefined" && window.innerWidth >= 1024 ? "36px" : undefined,
              }}
            >
              How Growth Pods Works?
            </h2> */}
          </div>

          <div className="max-w-6xl mx-auto px-2 sm:px-4 lg:px-0">
            {/* Commented out description - preserved as in original */}
            {/* <p
              className="text-center font-inter font-normal leading-[150%]
              text-sm
              sm:text-base
              md:text-lg
              lg:text-xl
              xl:text-[24px]"
              style={{
                color: "rgba(255, 255, 255, 0.90)",
                fontSize: typeof window !== "undefined" && window.innerWidth >= 1024 ? "24px" : undefined,
              }}
            >
              Three simple steps to unlock collaborative growth and amplify your reach.
            </p> */}
          </div>

          {/* Pods Working Image */}
          <div className="w-full flex justify-center mt-6 sm:mt-8 md:mt-10 lg:mt-12">
            <Image
              src="/pods/podsworking.svg"
              alt="How Growth Pods Work"
              width={800}
              height={600}
              className="w-full object-contain
              max-w-xs
              sm:max-w-sm
              md:max-w-md
              lg:max-w-lg
              xl:max-w-full xl:w-full xl:h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
