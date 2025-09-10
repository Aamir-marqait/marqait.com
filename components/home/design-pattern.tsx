/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useRef, useState } from "react";
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
      // Preload only the first (preferred) image format
      const primaryImage = imageUrls[0];
      if (primaryImage) {
        const img = document.createElement("img");
        img.onload = () => setIsLoaded(true);
        img.onerror = () => {
          setImageError(true);
          // Try fallback image if available
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

  // Use only the first image that works, prioritize webp
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
      className="w-screen h-screen mt-10 pointer-events-none relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Lightweight SVG Background - Load immediately */}
      <motion.div
        className="absolute inset-0 opacity-70"
        style={{
          backgroundImage: "url(/svg/background-pattern.svg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      />

      {/* Priority: Main interactive element first */}
      <div className="absolute inset-0 flex mt-14 justify-center pointer-events-auto">
        <motion.div
          className="h-[35rem] w-[35rem] cursor-pointer"
          whileHover={{
            scale: 1.05,
            rotateY: 180,
            transition: { duration: 0.6, ease: "easeInOut" },
          }}
          whileTap={{ scale: 0.95 }}
          style={{ transformStyle: "preserve-3d" }}
        >
          <LazyImage
            className="h-full w-full"
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
          y: [0, -20, 0],
          rotateX: [-2, 2, -2],
          rotateY: [-3, 3, -3],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ 
          transformStyle: "preserve-3d",
          perspective: "1000px"
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

      <LazyImage
        className="absolute top-0 left-0 w-48 h-48 lg:w-64 lg:h-64"
        imageUrls={["/glowing.webp", "/glowing.png"]}
        delay={1}
        style={{
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          filter: "blur(40px)",
        }}
      />

      <LazyImage
        className="absolute top-0 right-0 w-48 h-48 lg:w-64 lg:h-64"
        imageUrls={["/glowing.webp", "/glowing.png"]}
        delay={1.2}
        style={{
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          filter: "blur(40px)",
        }}
      />

      <LazyImage
        className="absolute bottom-0 right-0 w-48 h-48 lg:w-64 lg:h-64"
        imageUrls={["/glowing.webp", "/glowing.png"]}
        delay={1.4}
        style={{
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          filter: "blur(40px)",
        }}
      />

      {/* Minimal particles for better performance */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1.5 h-1.5 bg-purple-400/20 rounded-full"
          style={{
            left: `${30 + i * 20}%`,
            top: `${40 + (i % 2) * 30}%`,
          }}
          animate={{
            y: [-15, -25, -15],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
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
            transform: scale(1.08) translateZ(10px);
            filter: blur(0.5px);
          }
        }
      `}</style>
    </motion.div>
  );
}
