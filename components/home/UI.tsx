"use client";
import Image from "next/image";
import { motion } from "framer-motion";

function UI() {
  return (
    <div className="relative w-full min-h-screen overflow-hidden mb-8">
      {/* Background images */}
      <div className="absolute left-0 top-0 w-full sm:w-1/3 h-screen">
        <Image
          src="/optimized/1250.webp"
          alt="Background pattern left"
          fill
          className="object-cover"
          priority={false}
          sizes="(max-width: 640px) 100vw, 33vw"
        />
      </div>
      <div className="absolute right-0 top-0 w-full sm:w-1/2 h-screen opacity-20 sm:opacity-100">
        <Image
          src="/optimized/ui.webp"
          alt="Background pattern right"
          fill
          className="object-cover"
          priority={false}
          sizes="(max-width: 640px) 100vw, 50vw"
        />
      </div>
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#05000A] via-[#05000A]/80 to-transparent z-5" />

      {/* Dashboard image with responsive margins and overlaid text */}
      <div className="relative  max-w-[70rem] mx-auto z-10 mt-16 sm:mt-32 md:mt-48 lg:mt-[16.5rem] ">
        <Image
          src="/optimized/Dashboard.webp"
          alt="Dashboard showcasing marketing platform interface"
          width={1200}
          height={800}
          className="w-full h-auto object-contain"
          priority={true}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70rem"
        />

        {/* Text overlaid on Dashboard image */}
        <motion.div
          className="absolute -bottom-10 sm:bottom-12 md:bottom-0 lg:bottom-3 left-0 right-0 text-center z-20 px-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-white font-semibold text-xl sm:text-3xl md:text-xl lg:text-5xl xl:text-[34px] leading-tight sm:leading-snug md:leading-relaxed lg:leading-[150%] text-balance animate-in fade-in slide-in-from-bottom-4 duration-700">
            Integrate and Manage
            <br />
            all your marketing efforts with one platform
          </h2>

          {/* Description text */}
          <div className="flex justify-center mt-3 sm:mt-4 md:mt-6">
            <p className="text-white w-full sm:w-4/5 md:w-3/4 lg:w-2/3 xl:w-1.5/2 text-center text-sm sm:text-base md:text-base lg:text-lg leading-relaxed tracking-tight text-pretty opacity-[90%] animate-in fade-in slide-in-from-bottom-2 duration-700 delay-200">
              Unify your workflows and tools with a single, intelligent
              marketing automation dashboard. Track performance, monitor
              campaigns, and optimize results in real time — all from one place.
              Marqait simplifies marketing management so you can focus on
              creativity and growth.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default UI;
