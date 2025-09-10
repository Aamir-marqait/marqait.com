import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

function UI() {
  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      {/* Background images */}
      <div
        className="absolute left-0 top-0 w-1/2 h-screen bg-no-repeat bg-cover bg-center opacity-50"
        style={{ backgroundImage: "url(/ellipse.svg)" }}
      />
      <div
        className="absolute right-0 top-0 w-1/2 h-screen bg-no-repeat bg-cover bg-center"
        style={{ backgroundImage: "url(/ui.png)" }}
      />

      {/* Dashboard image with margins and overlaid text */}
      <div className="relative z-10 mt-[24rem] mx-8">
        <Image
          src="/Dashboard.png"
          alt="Dashboard"
          width={1200}
          height={800}
          className="w-full h-auto object-contain"
        />

        {/* Text overlaid on Dashboard image */}
        <motion.div 
          className="absolute bottom-24 left-0 right-0 text-center z-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h1
            className="text-white"
            style={{
              fontFamily: "Inter",
              fontWeight: 600,
              fontSize: "43.8px",
              lineHeight: "62.4px",
              letterSpacing: "0px",
              textAlign: "center",
              verticalAlign: "middle",
            }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            Integrate and Manage
            <br />
            all your marketing efforts with one platform.
          </motion.h1>

          {/* Description text */}
          <motion.div 
            className="flex justify-center mt-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <p
              className="text-white w-1/2 text-center"
              style={{
                fontFamily: "Inter",
                fontWeight: 400,
                fontSize: "20px",
                lineHeight: "27px",
                letterSpacing: "-0.5px",
                textAlign: "center",
                verticalAlign: "middle",
              }}
            >
              Integrate and manage all your marketing efforts with one powerful
              platform. Simplify workflows, monitor performance, and unify tools
              to boost efficiency, strengthen campaigns, and deliver consistent
              results across every channel.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default UI;
