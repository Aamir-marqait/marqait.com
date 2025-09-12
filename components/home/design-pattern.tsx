// /* eslint-disable @typescript-eslint/no-unused-vars */
// import React, { useEffect, useRef, useState } from "react";
// import { motion, useAnimation, useInView } from "framer-motion";

// interface LazyImageProps {
//   className: string;
//   imageUrls: string[];
//   style?: React.CSSProperties;
//   children?: React.ReactNode;
//   delay?: number;
//   priority?: boolean;
// }

// const LazyImage: React.FC<LazyImageProps> = ({
//   className,
//   imageUrls,
//   style = {},
//   children,
//   delay = 0,
//   priority = false,
// }) => {
//   const [isLoaded, setIsLoaded] = useState(false);
//   const [imageError, setImageError] = useState(false);
//   const elementRef = useRef<HTMLDivElement>(null);
//   const controls = useAnimation();
//   const inView = useInView(elementRef, { once: true, margin: "100px" });

//   useEffect(() => {
//     if (inView && !isLoaded) {
//       const primaryImage = imageUrls[0];
//       if (primaryImage) {
//         const img = document.createElement("img");
//         img.onload = () => setIsLoaded(true);
//         img.onerror = () => {
//           setImageError(true);
//           if (imageUrls[1]) {
//             const fallbackImg = document.createElement("img");
//             fallbackImg.onload = () => setIsLoaded(true);
//             fallbackImg.onerror = () => setIsLoaded(true); // Show even if failed
//             fallbackImg.src = imageUrls[1];
//           } else {
//             setIsLoaded(true);
//           }
//         };
//         img.src = primaryImage;
//       }
//     }
//   }, [inView, imageUrls, isLoaded]);

//   useEffect(() => {
//     if (inView && isLoaded) {
//       controls.start("visible");
//     }
//   }, [controls, inView, isLoaded]);

//   const backgroundImage =
//     isLoaded && !imageError
//       ? `url(${imageUrls[0]})`
//       : isLoaded && imageUrls[1]
//       ? `url(${imageUrls[1]})`
//       : "none";

//   return (
//     <motion.div
//       ref={elementRef}
//       className={className}
//       style={{
//         ...style,
//         backgroundImage,
//       }}
//       initial="hidden"
//       animate={controls}
//       variants={{
//         hidden: {
//           opacity: 0,
//           scale: 0.9,
//           y: 10,
//         },
//         visible: {
//           opacity: isLoaded ? 1 : 0,
//           scale: 1,
//           y: 0,
//           transition: {
//             duration: 0.4,
//             delay,
//             ease: "easeOut",
//           },
//         },
//       }}
//     >
//       {children}
//     </motion.div>
//   );
// };

// export default function DesignPattern() {
//   return (
//     <motion.div
//       className="w-screen h-screen mt-10 pointer-events-none relative overflow-hidden"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 0.6 }}
//     >
//       <motion.div
//         className="absolute inset-0 opacity-70"
//         style={{
//           backgroundImage: "url(/svg/background-pattern.svg)",
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           backgroundRepeat: "no-repeat",
//         }}
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 0.7 }}
//         transition={{ duration: 0.8, ease: "easeOut" }}
//       />

//       <div className="absolute inset-0 flex mt-20 justify-center pointer-events-auto">
//         <motion.div
//           className="h-[32rem] w-[32rem] cursor-pointer"
//           whileHover={{
//             scale: 1.05,
//             rotateY: 180,
//             transition: { duration: 0.6, ease: "easeInOut" },
//           }}
//           whileTap={{ scale: 0.95 }}
//           style={{ transformStyle: "preserve-3d" }}
//         >
//           <LazyImage
//             className="h-full w-full"
//             imageUrls={["/flipping.webp", "/flipping.png"]}
//             delay={0.2}
//             priority={true}
//             style={{
//               backgroundSize: "contain",
//               backgroundPosition: "center",
//               backgroundRepeat: "no-repeat",
//             }}
//           />
//         </motion.div>
//       </div>

//       <motion.div
//         className="absolute inset-0"
//         animate={{
//           y: [0, -20, 0],
//           rotateX: [-2, 2, -2],
//           rotateY: [-3, 3, -3],
//           scale: [1, 1.05, 1],
//         }}
//         transition={{
//           duration: 4,
//           repeat: Infinity,
//           ease: "easeInOut",
//         }}
//         style={{
//           transformStyle: "preserve-3d",
//           perspective: "1000px",
//         }}
//       >
//         <LazyImage
//           className="absolute inset-0"
//           imageUrls={["/floating.webp", "/floating.png"]}
//           delay={0.6}
//           style={{
//             backgroundSize: "contain",
//             backgroundPosition: "center",
//             backgroundRepeat: "no-repeat",
//           }}
//         />
//       </motion.div>

//       <LazyImage
//         className="absolute top-0 left-0 w-48 h-48 lg:w-64 lg:h-64"
//         imageUrls={["/glowing.webp", "/glowing.png"]}
//         delay={1}
//         style={{
//           backgroundSize: "contain",
//           backgroundPosition: "center",
//           backgroundRepeat: "no-repeat",
//           filter: "blur(40px)",
//         }}
//       />

//       <LazyImage
//         className="absolute top-0 right-0 w-48 h-48 lg:w-64 lg:h-64"
//         imageUrls={["/glowing.webp", "/glowing.png"]}
//         delay={1.2}
//         style={{
//           backgroundSize: "contain",
//           backgroundPosition: "center",
//           backgroundRepeat: "no-repeat",
//           filter: "blur(40px)",
//         }}
//       />

//       <LazyImage
//         className="absolute bottom-0 right-0 w-48 h-48 lg:w-64 lg:h-64"
//         imageUrls={["/glowing.webp", "/glowing.png"]}
//         delay={1.4}
//         style={{
//           backgroundSize: "contain",
//           backgroundPosition: "center",
//           backgroundRepeat: "no-repeat",
//           filter: "blur(40px)",
//         }}
//       />

//       {[...Array(3)].map((_, i) => (
//         <motion.div
//           key={i}
//           className="absolute w-1.5 h-1.5 bg-purple-400/20 rounded-full"
//           style={{
//             left: `${30 + i * 20}%`,
//             top: `${40 + (i % 2) * 30}%`,
//           }}
//           animate={{
//             y: [-15, -25, -15],
//             opacity: [0.2, 0.6, 0.2],
//           }}
//           transition={{
//             duration: 4 + i,
//             repeat: Infinity,
//             delay: i * 0.8,
//             ease: "easeInOut",
//           }}
//         />
//       ))}
//       <style jsx>{`
//         @keyframes floatingOut {
//           0%,
//           100% {
//             transform: scale(1) translateZ(0);
//             filter: blur(0px);
//           }
//           50% {
//             transform: scale(1.08) translateZ(10px);
//             filter: blur(0.5px);
//           }
//         }
//       `}</style>
//     </motion.div>
//   );
// }

"use client";

/* eslint-disable @typescript-eslint/no-unused-vars */
import type React from "react";
import { useEffect, useRef, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

interface LazyImageProps {
  className: string;
  imageUrls: string[];
  style?: React.CSSProperties;
  children?: React.ReactNode;
  delay?: number;
  priority?: boolean;
}

const LazyImage: React.FC<LazyImageProps> = ({
  className,
  imageUrls,
  style = {},
  children,
  delay = 0,
  priority = false,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const inView = useInView(elementRef, { once: true, margin: "100px" });

  useEffect(() => {
    if (inView && !isLoaded) {
      const primaryImage = imageUrls[0];
      if (primaryImage) {
        const img = document.createElement("img");
        img.onload = () => setIsLoaded(true);
        img.onerror = () => {
          setImageError(true);
          if (imageUrls[1]) {
            const fallbackImg = document.createElement("img");
            fallbackImg.onload = () => setIsLoaded(true);
            fallbackImg.onerror = () => setIsLoaded(true); // Show even if failed
            fallbackImg.src = imageUrls[1];
          } else {
            setIsLoaded(true);
          }
        };
        img.src = primaryImage;
      }
    }
  }, [inView, imageUrls, isLoaded]);

  useEffect(() => {
    if (inView && isLoaded) {
      controls.start("visible");
    }
  }, [controls, inView, isLoaded]);

  const backgroundImage =
    isLoaded && !imageError
      ? `url(${imageUrls[0]})`
      : isLoaded && imageUrls[1]
        ? `url(${imageUrls[1]})`
        : "none";

  return (
    <motion.div
      ref={elementRef}
      className={className}
      style={{
        ...style,
        backgroundImage,
      }}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: {
          opacity: 0,
          scale: 0.9,
          y: 10,
        },
        visible: {
          opacity: isLoaded ? 1 : 0,
          scale: 1,
          y: 0,
          transition: {
            duration: 0.4,
            delay,
            ease: "easeOut",
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
};

export default function DesignPattern() {
  return (
    <motion.div
      className="w-full min-h-screen mt-4 sm:mt-6 md:mt-8 lg:mt-10 pointer-events-none relative overflow-hidden "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        className="absolute inset-0 opacity-70"
        style={{
          backgroundImage: "url(/svg/background-pattern.svg)",
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      />

      <div className="w-screen flex justify-center items-center h-[87vh]">
        <motion.div
          className="h-48 w-48 sm:h-64 sm:w-64 md:h-80 md:w-80 lg:h-96 lg:w-96 xl:h-[32rem] xl:w-[32rem] 2xl:h-[34rem] 2xl:w-[34rem] cursor-pointer touch-manipulation"
          whileHover={{
            scale: 1.05,
            rotateY: 180,
            transition: { duration: 0.6, ease: "easeInOut" },
          }}
          whileTap={{ scale: 0.95 }}
          style={{ transformStyle: "preserve-3d" }}
          role="button"
          tabIndex={0}
          aria-label="Interactive design element - click or tap to flip"
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              // Trigger the same animation as click
            }
          }}
        >
          <LazyImage
            className="h-full w-full focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 rounded-lg"
            imageUrls={["/flipping.webp", "/flipping.png"]}
            delay={0.2}
            priority={true}
            style={{
              backgroundSize: "contain",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          />
        </motion.div>
      </div>

      <motion.div
        className="absolute inset-0"
        animate={{
          y: [0, -10, 0], // Reduced animation range for mobile
          rotateX: [-1, 1, -1], // Reduced rotation for mobile
          rotateY: [-1.5, 1.5, -1.5],
          scale: [1, 1.02, 1], // Reduced scale change for mobile
        }}
        transition={{
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        style={{
          transformStyle: "preserve-3d",
          perspective: "1000px",
        }}
      >
        <LazyImage
          className="absolute inset-0"
          imageUrls={["/floating.webp", "/floating.png"]}
          delay={0.6}
          style={{
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
      </motion.div>

      {/* <LazyImage
        className="absolute top-2 left-2 w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 xl:w-64 xl:h-64"
        imageUrls={["/glowing.webp", "/glowing.png"]}
        delay={1}
        style={{
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          filter: "blur(20px) sm:blur(30px) lg:blur(40px)", // Responsive blur
        }}
      />

      <LazyImage
        className="absolute top-2 right-2 w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 xl:w-64 xl:h-64"
        imageUrls={["/glowing.webp", "/glowing.png"]}
        delay={1.2}
        style={{
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          filter: "blur(20px) sm:blur(30px) lg:blur(40px)",
        }}
      />

      <LazyImage
        className="absolute bottom-2 right-2 w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 xl:w-64 xl:h-64"
        imageUrls={["/glowing.webp", "/glowing.png"]}
        delay={1.4}
        style={{
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          filter: "blur(20px) sm:blur(30px) lg:blur(40px)",
        }}
      /> */}

      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 sm:w-1.5 sm:h-1.5 bg-purple-400/20 rounded-full"
          style={{
            left: `${30 + i * 20}%`,
            top: `${40 + (i % 2) * 30}%`,
          }}
          animate={{
            y: [-10, -20, -10], // Reduced range for mobile
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: 4 + i,
            repeat: Number.POSITIVE_INFINITY,
            delay: i * 0.8,
            ease: "easeInOut",
          }}
        />
      ))}

      <style jsx>{`
        @keyframes floatingOut {
          0%,
          100% {
            transform: scale(1) translateZ(0);
            filter: blur(0px);
          }
          50% {
            transform: scale(1.04) translateZ(5px);
            filter: blur(0.25px);
          }
        }

        /* Reduce motion for users who prefer it */
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </motion.div>
  );
}
