import { ArrowRight, Percent, Clock, Globe, Network } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function MarketingTransforms() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: -30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const slideLeftVariants = {
    hidden: {
      opacity: 0,
      x: -50,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const slideRightVariants = {
    hidden: {
      opacity: 0,
      x: 50,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const features = [
    {
      icon: Percent,
      title: "Automated Efficiency",
      description: "Automate tasks, save time, and focus on strategy",
    },
    {
      icon: Clock,
      title: "24/7 Availability",
      description: "Your AI team works tirelessly, around the clock",
    },
    {
      icon: Globe,
      title: "Intelligent Adaptation",
      description:
        "Our AI agents learn your brand, style, and goals for personalized results",
    },
    {
      icon: Network,
      title: "Seamless Integration",
      description: "Connect with your favorite marketing tools and platforms",
    },
  ];

  return (
    <section className=" px-4 bg-black">
      <motion.div
        ref={ref}
        className="relative mx-auto px-4 sm:px-6 lg:px-8 xl:px-12"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <div className="text-center mb-4 sm:mb-6 md:mb-8 lg:mb-10">
          <motion.div
            className="flex items-center justify-center mb-4 sm:mb-5"
            variants={itemVariants}
          >
            <div className="flex-1 max-w-[60px] xs:max-w-[80px] sm:max-w-[100px] md:max-w-[150px] lg:max-w-[250px] h-px bg-gradient-to-r from-transparent to-gray-600"></div>
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full"></div>
            <span
              className="text-[#F2F0F5] font-inter font-bold uppercase mx-3 sm:mx-4 md:mx-6
              text-[10px] leading-[14px] tracking-[0.6px]
              xs:text-[11px] xs:leading-[15px] xs:tracking-[0.7px]
              sm:text-xs sm:leading-[16.8px] sm:tracking-[0.8px]
              md:text-sm md:leading-[19.6px] md:tracking-[1px]"
            >
              CORE BENEFITS
            </span>
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full"></div>
            <div className="flex-1 max-w-[60px] xs:max-w-[80px] sm:max-w-[100px] md:max-w-[150px] lg:max-w-[250px] h-px bg-gradient-to-l from-transparent to-gray-600"></div>
          </motion.div>
        </div>
      </motion.div>
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <h2 className="font-inter font-semibold text-[#FFFFFF] text-center mb-16 text-balance text-[43.8px] leading-[62.4px]">
          How Marqait AI Transforms Your Marketing
        </h2>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-12">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-start text-left relative pl-6 lg:pl-8 h-full">
              {/* Vertical divider line - only show between items, not after last */}
              {index < features.length - 1 && (
                <div 
                  className="absolute -right-6 lg:-right-8 top-0 w-px h-[251px] hidden lg:block bg-gradient-to-b from-transparent via-white/50 to-transparent"
                />
              )}
              {/* Icon Circle */}
              <div className="w-16 h-16 bg-[#F2F0F526] rounded-full flex items-center justify-center mb-6 p-2.5">
                <feature.icon className="w-8 h-8 text-white" />
              </div>

              {/* Title */}
              <h3 className="w-full font-inter font-semibold text-2xl leading-[150%] text-white mb-4 text-balance">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="font-inter font-normal text-base leading-[150%] text-white/90 mb-6 text-pretty flex-grow">
                {feature.description}
              </p>

              {/* Learn More Link */}
              <button className="inline-flex items-center gap-2 font-inter font-medium text-base leading-[150%] text-[#D26DFE] hover:text-purple-300 transition-colors group">
                <span>Learn more</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
