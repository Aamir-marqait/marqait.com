"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

export default function ClientTestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const testimonials = [
    {
      id: 1,
      quote:
        "This product has completely transformed how I manage my projects and deadlines",
      name: "Talia Taylor",
      title: "Digital Marketing Director @ Quantum",
      image: "/user.jpg",
    },
    {
      id: 2,
      quote:
        "The AI-driven insights have revolutionized our marketing strategy and boosted our ROI significantly",
      name: "Marcus Johnson",
      title: "CEO @ TechFlow Solutions",
      image: "/user.jpg",
    },
    {
      id: 3,
      quote:
        "Our team productivity increased by 300% after implementing this platform into our workflow",
      name: "Sarah Chen",
      title: "Operations Manager @ InnovateCorp",
      image: "/user.jpg",
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section
      ref={ref}
      className="relative bg-[#05000A] overflow-hidden py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28"
    >
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Header Section */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20">
          <h2
            className="text-white text-center font-inter font-semibold max-w-4xl mx-auto px-2 mb-2
            text-[20px] leading-[32px]
            xs:text-[24px] xs:leading-[36px]
            sm:text-[27px] sm:leading-[42px]
            md:text-[31px] md:leading-[48px]
            lg:text-[35px] lg:leading-[54px]
            xl:text-[37.8px] xl:leading-[62.4px] 2xl:text-[40px]"
          >
            Our Clients
          </h2>
          <p
            className="text-white text-center font-inter font-normal mx-auto max-w-[500px] px-2
            text-[14px] leading-[22px] tracking-[-0.001px]
            sm:text-[16px] sm:leading-[25px] sm:tracking-[-0.0015px]
            md:text-[18px] md:leading-[28px] md:tracking-[-0.002px]
            lg:text-[18px] lg:leading-[31px] lg:tracking-[-0.002px]"
          >
            Hear firsthand how our solutions have boosted online success for
            users like you.
          </p>
        </div>

        {/* Testimonial Container */}
        <div className="relative mx-auto mb-8 sm:mb-12 md:mb-16 lg:mb-20">
          <div
            className="relative mx-auto
            w-full max-w-[320px]
            sm:max-w-[500px]
            md:max-w-[700px]
            lg:max-w-[900px]
            xl:max-w-[990px]
            h-auto
            lg:h-[350px]
            xl:h-[401px]"
          >
            <div className="relative w-full h-full flex flex-col lg:flex-row items-center">
              {/* Left Side - User Image */}
              <div className="w-full lg:w-1/2 flex justify-center lg:justify-end px-4 sm:px-6 lg:px-6 mb-6 lg:mb-0">
                <div className="relative">
                  <div
                    className="relative flex-shrink-0 rounded-[20px] overflow-hidden
                    w-[160px] h-[160px]
                    sm:w-[180px] sm:h-[180px]
                    md:w-[200px] md:h-[200px]
                    lg:w-[217px] lg:h-[217px]"
                  >
                    <Image
                      src={
                        currentTestimonial.image ||
                        "/placeholder.svg?height=217&width=217&query=user profile"
                      }
                      alt={currentTestimonial.name}
                      fill
                      className="object-cover transition-all duration-500"
                    />
                  </div>

                  {/* Decorative Lines - Now visible on all devices */}
                  <div className="hidden sm:block">
                    {/* Right vertical line */}
                    <motion.div
                      className="absolute transform translate-x-full
                        -top-16 md:-top-12 lg:-top-24 md:h-[300px] h-[240px]
                        right-0"
                      style={{
                        width: "1px",
                        opacity: 0.6,
                        background:
                          "linear-gradient(180deg, transparent 0%, #FFF 20%, #EAEAEA 80%, transparent 100%)",
                      }}
                      initial={{ scaleY: 0, transformOrigin: "bottom" }}
                      animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
                      transition={{ duration: 1, delay: 0.7 }}
                    />
                    {/* Left vertical line */}
                    <motion.div
                      className="absolute transform -translate-x-full
                        -top-16 md:-top-12 lg:-top-24 md:h-[300px] h-[240px]
                        left-0"
                      style={{
                        width: "1px",
                        opacity: 0.6,
                        background:
                          "linear-gradient(180deg, transparent 0%, #FFF 20%, #EAEAEA 80%, transparent 100%)",
                      }}
                      initial={{ scaleY: 0, transformOrigin: "top" }}
                      animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
                      transition={{ duration: 1, delay: 0.5 }}
                    />
                    {/* Top horizontal line */}
                    <motion.div
                      className="absolute transform -translate-y-full
                        -top-2
                        -right-[20rem] md:-right-[10rem] lg:-right-[30rem]"
                      style={{
                        width: "500px",
                        height: "1px",
                        opacity: 0.6,
                        background:
                          "linear-gradient(90deg, transparent 0%, #FFF 20%, #EAEAEA 80%, transparent 100%)",
                      }}
                      initial={{ scaleX: 0, transformOrigin: "left" }}
                      animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                      transition={{ duration: 1, delay: 0.9 }}
                    />
                    {/* Bottom horizontal line */}
                    <motion.div
                      className="absolute transform translate-y-full
                        -bottom-2
                        -right-[20rem] md:-right-[10rem] lg:-right-[30rem]"
                      style={{
                        width: "500px",
                        height: "1px",
                        opacity: 0.6,
                        background:
                          "linear-gradient(90deg, transparent 0%, #FFF 20%, #EAEAEA 80%, transparent 100%)",
                      }}
                      initial={{ scaleX: 0, transformOrigin: "right" }}
                      animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                      transition={{ duration: 1, delay: 1.1 }}
                    />
                  </div>

                  {/* Additional responsive decorative lines for larger screens */}
                  <div className="hidden xl:block">
                    {/* Extended lines for XL screens */}
                    <motion.div
                      className="absolute -top-24 right-0 transform translate-x-full"
                      style={{
                        width: "1px",
                        height: "401px",
                        opacity: 0.6,
                        background:
                          "linear-gradient(180deg, transparent 0%, #FFF 20%, #EAEAEA 80%, transparent 100%)",
                      }}
                      initial={{ scaleY: 0, transformOrigin: "bottom" }}
                      animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
                      transition={{ duration: 1, delay: 0.7 }}
                    />
                    <motion.div
                      className="absolute -top-24 left-0 transform -translate-x-full"
                      style={{
                        width: "1px",
                        height: "401px",
                        opacity: 0.6,
                        background:
                          "linear-gradient(180deg, transparent 0%, #FFF 20%, #EAEAEA 80%, transparent 100%)",
                      }}
                      initial={{ scaleY: 0, transformOrigin: "top" }}
                      animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
                      transition={{ duration: 1, delay: 0.5 }}
                    />
                    <motion.div
                      className="absolute -top-2 -right-[30rem] transform -translate-y-full"
                      style={{
                        width: "1001px",
                        height: "1px",
                        opacity: 0.6,
                        background:
                          "linear-gradient(90deg, transparent 0%, #FFF 20%, #EAEAEA 80%, transparent 100%)",
                      }}
                      initial={{ scaleX: 0, transformOrigin: "left" }}
                      animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                      transition={{ duration: 1, delay: 0.9 }}
                    />
                    <motion.div
                      className="absolute -bottom-2 -right-[30rem] transform translate-y-full"
                      style={{
                        width: "1001px",
                        height: "1px",
                        opacity: 0.6,
                        background:
                          "linear-gradient(90deg, transparent 0%, #FFF 20%, #EAEAEA 80%, transparent 100%)",
                      }}
                      initial={{ scaleX: 0, transformOrigin: "right" }}
                      animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                      transition={{ duration: 1, delay: 1.1 }}
                    />
                  </div>
                </div>
              </div>

              {/* Right Side - Testimonial Content (Desktop) */}
              <div className="hidden lg:flex lg:w-1/2 flex-col justify-center px-0 xl:px-0">
                <div className="space-y-4 lg:space-y-6 xl:space-y-8">
                  <blockquote
                    className="text-white font-inter font-medium
                    text-[18px] leading-[26px] tracking-[-0.001px]
                    lg:text-[20px] lg:leading-[30px] lg:tracking-[-0.0015px]
                    xl:text-[23px] xl:leading-[34px] xl:tracking-[-0.002px]
                    max-w-[339px]"
                  >
                    &ldquo;{currentTestimonial.quote}&rdquo;
                  </blockquote>
                  <div className="space-y-1 sm:space-y-2">
                    <h4
                      className="text-white font-inter font-normal
                      text-[14px] leading-[22px] tracking-[-0.001px]
                      lg:text-[15px] lg:leading-[24px] lg:tracking-[-0.0015px]
                      xl:text-[16px] xl:leading-[26px] xl:tracking-[-0.002px]"
                    >
                      {currentTestimonial.name}
                    </h4>
                    <p
                      className="font-inter font-normal text-[rgba(255,255,255,0.70)]
                      text-[12px] leading-[20px] tracking-[-0.0005px]
                      lg:text-[13px] lg:leading-[22px] lg:tracking-[-0.0008px]
                      xl:text-[14px] xl:leading-[26px] xl:tracking-[-0.001px]
                      max-w-[289px]"
                    >
                      {currentTestimonial.title}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Testimonial Content */}
          <div className="lg:hidden mt-6 sm:mt-8 px-4 sm:px-8 text-center">
            <blockquote
              className="text-white font-medium leading-relaxed mb-4 sm:mb-6
              text-[16px] 
              sm:text-[18px] sm:leading-[27px]
              md:text-[20px] md:leading-[30px]"
            >
              &ldquo;{currentTestimonial.quote}&rdquo;
            </blockquote>
            <div className="space-y-1 sm:space-y-2">
              <h4
                className="text-white font-semibold
                text-[16px] sm:text-[17px] md:text-[18px]"
              >
                {currentTestimonial.name}
              </h4>
              <p
                className="text-gray-400
                text-[13px] sm:text-[14px] md:text-[15px]"
              >
                {currentTestimonial.title}
              </p>
            </div>
          </div>
        </div>

        {/* Navigation Arrows */}
        <div className="flex items-center justify-center gap-4 sm:gap-6 lg:gap-8">
          <button
            onClick={prevSlide}
            className="cursor-pointer flex justify-center items-center flex-shrink-0 rounded-full bg-white/15 hover:bg-white/25 transition-all duration-200 group
              w-[36px] h-[36px] p-[8px]
              sm:w-[40px] sm:h-[40px] sm:p-[9px]
              lg:w-[43.489px] lg:h-[43.489px] lg:p-[9.745px]"
            aria-label="Previous testimonial"
          >
            <Image
              src="/icons/arrow.svg"
              width={20}
              height={20}
              className="rotate-180 group-hover:scale-110 transition-transform duration-200
                w-4 h-4 sm:w-5 sm:h-5"
              alt="Previous"
            />
          </button>

          {/* Dots Indicator */}
          <div className="flex items-center gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-200 ${
                  index === currentIndex
                    ? "bg-white"
                    : "bg-white/30 hover:bg-white/50"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="cursor-pointer flex justify-center items-center flex-shrink-0 rounded-full bg-white/15 hover:bg-white/25 transition-all duration-200 group
              w-[36px] h-[36px] p-[8px]
              sm:w-[40px] sm:h-[40px] sm:p-[9px]
              lg:w-[43.489px] lg:h-[43.489px] lg:p-[9.745px]"
            aria-label="Next testimonial"
          >
            <Image
              src="/icons/arrow.svg"
              width={20}
              height={20}
              className="group-hover:scale-110 transition-transform duration-200
                w-4 h-4 sm:w-5 sm:h-5"
              alt="Next"
            />
          </button>
        </div>
      </div>
    </section>
  );
}
