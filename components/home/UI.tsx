"use client";
import Image from "next/image";
import { motion } from "framer-motion";

function UI() {
  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      {/* Background images */}
      <div
        className="absolute left-0 top-0 w-full sm:w-1/3 h-screen bg-no-repeat bg-cover bg-center "
        style={{ backgroundImage: "url(/1250.png)" }}
      />
      <div
        className="absolute right-0 top-0 w-full sm:w-1/2 h-screen bg-no-repeat bg-cover bg-center opacity-20 sm:opacity-100"
        style={{ backgroundImage: "url(/ui.png)" }}
      />
       <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#05000A] via-[#05000A]/80 to-transparent z-5" />

      {/* Dashboard image with responsive margins and overlaid text */}
      <div className="relative  max-w-[70rem] mx-auto z-10 mt-16 sm:mt-32 md:mt-48 lg:mt-[16.5rem] ">
        <Image
          src="/Dashboard.png"
          alt="Dashboard showcasing marketing platform interface"
          width={1200}
          height={800}
          className="w-full h-auto object-contain"
        />

        {/* Text overlaid on Dashboard image */}
        <motion.div
          className="absolute -bottom-10 sm:bottom-12 md:bottom-0 lg:bottom-3 left-0 right-0 text-center z-20 px-4"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h1
            className="text-white font-semibold text-xl sm:text-3xl md:text-xl lg:text-5xl xl:text-[34px] leading-tight sm:leading-snug md:leading-relaxed lg:leading-[150%] text-balance"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            Integrate and Manage
            <br />
            all your marketing efforts with one platform
          </motion.h1>

          {/* Description text */}
          <motion.div
            className="flex justify-center mt-3 sm:mt-4 md:mt-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <p className="text-white w-full sm:w-4/5 md:w-3/4 lg:w-2/3 xl:w-1.5/2 text-center text-sm sm:text-base md:text-base lg:text-lg leading-relaxed tracking-tight text-pretty">
              Integrate and manage all your marketing efforts with one powerful
              platform. Simplify workflows, monitor performance, and unify tools
              to boost efficiency, strengthen campaigns, and deliver consistent
              results across every channel
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default UI;
