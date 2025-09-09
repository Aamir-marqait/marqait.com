import React from "react";

export default function DesignPattern() {
  return (
    <div className="w-screen h-screen mt-10 pointer-events-none  relative">
      <div
        className="absolute inset-0 opacity-100"
        style={{
          backgroundImage: "url(/svg/background-pattern.svg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url(/floating.png)",
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          animation: "floatingOut 4s ease-in-out infinite",
        }}
      ></div>
      <div className="absolute inset-0 flex mt-14 justify-center">
        <div
          className="h-[35rem] w-[35rem]"
          style={{
            backgroundImage: "url(/flipping.png)",
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
