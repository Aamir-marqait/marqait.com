import React from "react";

export default function DesignPattern() {
  return (
    <div className="w-screen h-screen mt-10 pointer-events-none  relative">
      <div
        className="absolute inset-0 opacity-50"
        style={{
          backgroundImage: "url(/svg/background-pattern.svg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      <div
        className="absolute top-0 left-0 w-64 h-64"
        style={{
          backgroundImage: "url(/glowing.webp), url(/glowing.png)",
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          filter: "blur(50px)",
        }}
      ></div>
      <div
        className="absolute top-0 right-0 w-64 h-64"
        style={{
          backgroundImage: "url(/glowing.webp), url(/glowing.png)",
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          filter: "blur(50px)",
        }}
      ></div>
      <div
        className="absolute bottom-0 right-0 w-64 h-64"
        style={{
          backgroundImage: "url(/glowing.webp), url(/glowing.png)",
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          filter: "blur(50px)",
        }}
      ></div>
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url(/floating.webp), url(/floating.png)",
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          animation: "floatingOut 4s ease-in-out infinite",
        }}
      ></div>
      <div className="absolute inset-0 flex mt-14 justify-center pointer-events-auto">
        <div
          className="h-[35rem] w-[35rem] transition-transform duration-500 ease-in-out hover:scale-x-[-1]"
          style={{
            backgroundImage: "url(/flipping.webp), url(/flipping.png)",
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
      </div>
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
    </div>
  );
}
