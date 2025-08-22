"use client";

import type React from "react";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

interface VideoOverlayProps {
  videoSrc?: string;
  fallbackImage?: string;
  overlayImage?: string;
  backgroundColor?: string;
}

export default function VideoOverlay({
  videoSrc = "/main.mp4",
  fallbackImage = "/video-fallback.jpg",
  overlayImage = "/overlay.png",
  backgroundColor = "#3B246F",
}: VideoOverlayProps) {
  const [videoLoaded, setVideoLoaded] = useState<boolean>(false);
  const [videoError, setVideoError] = useState<boolean>(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleVideoLoad = (): void => {
    setVideoLoaded(true);
    setVideoError(false);
  };

  const handleVideoError = (): void => {
    setVideoError(true);
    setVideoLoaded(true); // Hide loading spinner
  };

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      // Try to play the video when component mounts
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch((error: Error) => {
          console.log("Video autoplay failed:", error);
          // Video autoplay failed, but this is normal in many browsers
        });
      }
    }
  }, []);

  return (
    <div
      className="relative w-full overflow-hidden
        h-[50vh] xs:h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-[90vh] xl:h-screen
        min-h-[400px] sm:min-h-[500px] lg:min-h-[600px]"
    >
      {/* Video Background */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        onLoadedData={handleVideoLoad}
        onError={handleVideoError}
        onCanPlay={handleVideoLoad}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
          videoLoaded && !videoError ? "opacity-100" : "opacity-0"
        }`}
        style={{
          // Ensure video covers the entire container properly
          minWidth: "100%",
          minHeight: "100%",
        }}
      >
        <source src={videoSrc} type="video/mp4" />
        {/* Fallback for browsers that don't support video */}
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundColor,
            backgroundImage: `url(${fallbackImage})`,
          }}
        />
      </video>

      {/* Loading Spinner */}
      {!videoLoaded && (
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{ backgroundColor }}
        >
          <div className="animate-pulse">
            <div className="w-16 h-16 border-4 border-white/20 border-t-white/60 rounded-full animate-spin"></div>
          </div>
        </div>
      )}

      {/* Fallback background when video fails */}
      {videoError && (
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundColor,
            backgroundImage: `url(${overlayImage})`,
            filter: "blur(2px) brightness(0.3)",
          }}
        />
      )}

      {/* Overlay Content */}
      <div className="absolute inset-0 flex items-center justify-center p-4 sm:p-6 lg:p-8">
        <div className="relative w-full h-full flex items-center justify-center">
          <Image
            src={overlayImage || "/placeholder.svg?height=400&width=600"}
            alt="Overlay"
            width={600}
            height={400}
            className="max-w-full max-h-full object-contain
              w-screen h-auto
              scale-75 xs:scale-85 sm:scale-90 md:scale-95 lg:scale-100
              transition-transform duration-300 ease-out"
            style={{
              // Ensure the image maintains its aspect ratio
              maxWidth: "min(90vw, 90vh * (16/9))", // Assuming 16:9 aspect ratio, adjust as needed
              maxHeight: "min(90vh, 90vw * (9/16))",
            }}
            priority
            onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
              const target = e.currentTarget;
              target.style.display = "none";
            }}
          />
        </div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-black/10 pointer-events-none" />
    </div>
  );
}
