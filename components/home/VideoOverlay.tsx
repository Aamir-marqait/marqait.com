import { useState, useEffect, useRef } from "react";

export default function VideoOverlay() {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const videoRef = useRef(null);

  const handleVideoLoad = () => {
    setVideoLoaded(true);
    setVideoError(false);
  };

  const handleVideoError = () => {
    setVideoError(true);
    setVideoLoaded(true); // Hide loading spinner
  };

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      // Try to play the video when component mounts
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(error => {
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
      // style={{ backgroundColor: "#3B246F" }}
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
        <source src="/main.mp4" type="video/mp4" />
        {/* Fallback for browsers that don't support video */}
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundColor: "#3B246F",
            backgroundImage: "url(/video-fallback.jpg)", // Add a fallback image
          }}
        />
      </video>

      {!videoLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-[#3B246F]">
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
            backgroundColor: "#3B246F",
            backgroundImage: "url(/overlay.png)",
            filter: "blur(2px) brightness(0.3)"
          }}
        />
      )}

      <div className="absolute inset-0 flex items-center justify-center p-4 sm:p-6 lg:p-8">
        <div className="relative w-full h-full flex items-center justify-center">
          <img
            src="/overlay.png"
            alt="Overlay"
            className="max-w-full max-h-full object-contain
              w-auto h-auto
              scale-75 xs:scale-85 sm:scale-90 md:scale-95 lg:scale-100
              transition-transform duration-300 ease-out"
            style={{
              // Ensure the image maintains its aspect ratio
              maxWidth: "min(90vw, 90vh * (16/9))", // Assuming 16:9 aspect ratio, adjust as needed
              maxHeight: "min(90vh, 90vw * (9/16))",
            }}
            loading="eager"
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
          />
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-black/10 pointer-events-none" />
    </div>
  );
}
