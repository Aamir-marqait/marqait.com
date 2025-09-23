import Image from "next/image";

export default function FeatureOne() {
  const processSteps = [
    {
      number: "01",
      title: "Quick and Easy Editing",
      description:
        "Upload your photo and let AI handle the work. No software, no complicated steps – just fast and simple online editing from any device.",
    },
    {
      number: "02",
      title: "Smarter Enhancements",
      description:
        "Brighten, sharpen, and improve colors automatically. Our AI makes every photo look clean, clear, and professional.",
    },
    {
      number: "03",
      title: "Background Made Simple",
      description:
        "Remove, replace, or blur backgrounds instantly. Perfect for product photos, profile pictures, or creative edits.",
    },
  ];

  return (
    <section className="py-20 px-4 bg-[#131316]/50 ">
      <div className="max-w-[70rem] mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div className="space-y-8">
            <div className="flex flex-col gap-3">
              <h2 className="font-bold text-white text-[28px] leading-[150%] tracking-[0%]">
                Marqait AI photo editor: Edit your photo in seconds
              </h2>
            </div>
            {processSteps.map((step, index) => (
              <div key={index} className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-[#B812FFE5] rounded-full flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="20"
                      height="20"
                    >
                      <path
                        d="M9.29 16.29a1 1 0 0 1-1.42 0l-3.59-3.59a1 1 0 0 1 1.42-1.42L9 13.17l8.88-8.88a1 1 0 0 1 1.42 1.42L9.29 16.29z"
                        fill="white"
                      />
                    </svg>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-[18px] font-normal text-white mb-2 leading-[150%] tracking-[0%]">
                    {step.title}
                  </h3>
                  <p className="text-[15px] font-normal text-gray-400 leading-[22.75px]">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-lg">
              <Image
                src="/edit/1.png"
                alt="AI Agent Development Process Illustration"
                width={500}
                height={400}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
