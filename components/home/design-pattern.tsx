import React from "react";

export default function DesignPattern() {
  return (
    <div
      className="w-screen h-screen mt-3 pointer-events-none"
      style={{
        backgroundImage: "url(/svg/background-pattern.svg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    ></div>
  );
}
