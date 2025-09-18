import { Target, Palette, Sparkles, Lightbulb } from "lucide-react";

export default function ProTipsSection() {
  const tips = [
    {
      icon: Target,
      title: "Be Clear with Brand Name & Tagline",
      description: "AI works best with precise input.",
    },
    {
      icon: Palette,
      title: "Experiment with Color Palettes",
      description: "Try multiple combinations for different moods.",
    },
    {
      icon: Sparkles,
      title: "Know Your Brand Personality",
      description: "Decide if you want playful, corporate, or luxury vibes.",
    },
    {
      icon: Lightbulb,
      title: "Compare Multiple Variations",
      description: "Don't settle on the first design.",
    },
  ];

  return (
    <section className="py-16 md:pb-24 bg-black">
      <div className="container mx-auto px-4 max-w-[70rem]">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-[36px] font-bold font-inter text-[#F2F2F2] mb-4 leading-[48px] tracking-[0%] text-center align-middle">
            Pro Tips for Best Results
          </h2>
          <p className="text-[18px] font-normal text-white/90 max-w-2xl mx-auto leading-[28px] text-center">
            Follow these expert recommendations to create the perfect logo with
            our AI generator
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {tips.map((tip, index) => {
            const IconComponent = tip.icon;
            return (
              <div
                key={index}
                className="flex items-start gap-4 p-6 md:p-8 rounded-2xl hover:bg-gray-900/70 transition-colors duration-300"
                style={{
                  background:
                    "linear-gradient(135deg, #131316 0%, rgba(19, 19, 22, 0.5) 100%)",
                  border: "1px solid #30303680",
                  boxShadow: "0px 8px 32px 0px #00000066",
                }}
              >
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-[#B812FFE5] opacity-90 rounded-[16px] flex items-center justify-center">
                    <IconComponent className="w-6 h-6 md:w-7 md:h-7 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-[#F2F2F2] text-[18px] font-bold mb-2 leading-[22.5px] tracking-[0%] align-middle">
                    {tip.title}
                  </h3>
                  <p className="text-white/90 text-[14px] font-normal leading-[22.75px] tracking-[0%] align-middle">
                    {tip.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
