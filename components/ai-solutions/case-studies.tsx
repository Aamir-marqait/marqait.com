import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

function CaseStudies() {
  return (
    <div className="mt-16 md:mt-32 max-w-[90%] md:max-w-[70rem] mx-auto mb-12 md:mb-20 px-4 md:px-0">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 md:mb-12 gap-4 sm:gap-0">
        <h2 className="text-white/90 font-bold text-2xl md:text-4xl leading-[150%]">
          Case Studies
        </h2>
        <button className="text-white cursor-pointer font-normal text-sm md:text-[16px] leading-[150%] hover:text-white transition-colors">
          See All
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {[
          {
            image: "/case1.png",
            title:
              "How a leading e-commerce brand boosted customer lifetime value by 25% with a custom AI-powered personalization engine",
            description:
              "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty is associated...",
          },
          {
            image: "/case2.png",
            title:
              "How a global B2B SaaS company reduced customer churn by 15% using an AI-driven predictive analytics platform for proactive engagement",
            description:
              "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty...",
          },
          {
            image: "/case3.png",
            title:
              "How a global B2B SaaS company reduced customer churn by 15% using an AI-driven predictive analytics platform for proactive engagement",
            description:
              "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty...",
          },
        ].map((caseStudy, index) => (
          <div
            key={index}
            className=" rounded-2xl overflow-hidden transition-colors group"
          >
            <div className="aspect-[4/3] overflow-hidden">
              <Image
                src={caseStudy.image || "/placeholder.svg"}
                alt={`Case study ${index + 1}`}
                width={400}
                height={300}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="py-4 md:py-6">
              <h3 className="text-white font-semibold text-base md:text-[18px] mb-3 md:mb-4 leading-7 md:leading-8">
                {caseStudy.title}
              </h3>
              <p className="text-white/90 font-normal text-sm md:text-[14px] mb-4 md:mb-6 leading-5 md:leading-6">
                {caseStudy.description}
              </p>
              <button className="flex items-center gap-2 text-white hover:text-purple-300 transition-colors group/btn">
                <span className="font-medium text-sm md:text-base">
                  Read More
                </span>
                <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CaseStudies;
