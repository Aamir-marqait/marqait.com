import { Gamepad2, Box, Play, Tag, Building2 } from "lucide-react";

export default function LogoCategoriesSection() {
  const categories = [
    {
      icon: <Gamepad2 className="w-12 h-12 text-blue-400" />,
      title: "Generate Gaming Logo with AI",
      description:
        "Choose from futuristic, cartoon, or minimalist gaming styles and our AI logo generator creates bold, dynamic, and high-energy gaming logo designs that are perfect for esports teams, gaming channels, and streaming platforms.",
    },
    {
      icon: <Box className="w-12 h-12 text-orange-400" />,
      title: "Generate 3D Logo with AI",
      description:
        "Our AI logo generator creates three-dimensional logo effects that add a premium, eye-catching look to your brand identity.",
    },
    {
      icon: <Play className="w-12 h-12 text-red-500" />,
      title: "Make YouTube Channel Logo with AI",
      description:
        "Need a YouTube channel logo that grabs attention? Our AI logo maker creates unique YouTube channel logos and profile images.",
    },
    {
      icon: <Tag className="w-12 h-12 text-yellow-400" />,
      title: "Generate Name Logo with AI",
      description:
        "Transform your name or initials into a creative brand identity with our AI logo generator. From elegant monograms to bold wordmarks, this is perfect for personal brands, influencers, and freelancers.",
    },
    {
      icon: <Building2 className="w-12 h-12 text-cyan-400" />,
      title: "Make Company Logo with AI",
      description:
        "Whether you run a startup, small business, or enterprise, our AI logo maker delivers corporate-grade designs that align with your industry and target audience.",
    },
  ];

  return (
    <section className="py-20 px-4 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-balance">
            Explore Our Logo Categories
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto text-balance">
            Specialized AI models trained for different industries and use cases
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[70rem] mx-auto">
          {/* First row - 2 cards */}
          <div className="bg-gradient-to-br from-purple-900/50 to-purple-800/30 rounded-2xl p-8 border border-purple-800/20 hover:border-purple-600/40 transition-all duration-300">
            <div className="flex flex-col items-center text-center">
              <div className="mb-6">{categories[0].icon}</div>
              <h3 className="text-2xl font-bold text-white mb-4">
                {categories[0].title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {categories[0].description}
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-900/50 to-purple-800/30 rounded-2xl p-8 border border-purple-800/20 hover:border-purple-600/40 transition-all duration-300">
            <div className="flex flex-col items-center text-center">
              <div className="mb-6">{categories[1].icon}</div>
              <h3 className="text-2xl font-bold text-white mb-4">
                {categories[1].title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {categories[1].description}
              </p>
            </div>
          </div>

          {/* Second row - 2 cards */}
          <div className="bg-gradient-to-br from-purple-900/50 to-purple-800/30 rounded-2xl p-8 border border-purple-800/20 hover:border-purple-600/40 transition-all duration-300">
            <div className="flex flex-col items-center text-center">
              <div className="mb-6">{categories[2].icon}</div>
              <h3 className="text-2xl font-bold text-white mb-4">
                {categories[2].title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {categories[2].description}
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-900/50 to-purple-800/30 rounded-2xl p-8 border border-purple-800/20 hover:border-purple-600/40 transition-all duration-300">
            <div className="flex flex-col items-center text-center">
              <div className="mb-6">{categories[3].icon}</div>
              <h3 className="text-2xl font-bold text-white mb-4">
                {categories[3].title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {categories[3].description}
              </p>
            </div>
          </div>

          {/* Third row - 1 card centered */}
          <div className="md:col-span-2 max-w-lg mx-auto w-full">
            <div className="bg-gradient-to-br from-purple-900/50 to-purple-800/30 rounded-2xl p-8 border border-purple-800/20 hover:border-purple-600/40 transition-all duration-300">
              <div className="flex flex-col items-center text-center">
                <div className="mb-6">{categories[4].icon}</div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  {categories[4].title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {categories[4].description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
