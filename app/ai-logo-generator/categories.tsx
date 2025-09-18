import Image from "next/image";

export default function LogoCategoriesSection() {
  const categories = [
    {
      image: "/logoai/1.png",
      title: "Generate Gaming Logo with AI",
      description:
        "Choose from futuristic, cartoon, or minimalist gaming styles and our AI logo generator creates bold, dynamic, and high-energy gaming logo designs that are perfect for esports teams, gaming channels, and streaming platforms.",
    },
    {
      image: "/logoai/2.png",
      title: "Generate 3D Logo with AI",
      description:
        "Our AI logo generator creates three-dimensional logo effects that add a premium, eye-catching look to your brand identity.",
    },
    {
      image: "/logoai/3.png",
      title: "Make YouTube Channel Logo with AI",
      description:
        "Need a YouTube channel logo that grabs attention? Our AI logo maker creates unique YouTube channel logos and profile images.",
    },
    {
      image: "/logoai/4.png",
      title: "Generate Name Logo with AI",
      description:
        "Transform your name or initials into a creative brand identity with our AI logo generator. From elegant monograms to bold wordmarks, this is perfect for personal brands, influencers, and freelancers.",
    },
    {
      image: "/logoai/5.png",
      title: "Make Company Logo with AI",
      description:
        "Whether you run a startup, small business, or enterprise, our AI logo maker delivers corporate-grade designs that align with your industry and target audience.",
    },
  ];

  return (
    <section className="py-20 px-4 bg-black">
      <div className="max-w-[70rem] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-[36px] font-bold font-inter text-[#F2F2F2] mb-4 leading-[48px] tracking-[0%] text-center align-middle">
            Explore Our Logo Categories
          </h2>
          <p className="text-[16px] font-normal text-white/90 max-w-3xl mx-auto leading-[28px] tracking-[0%] text-center align-middle">
            Specialized AI models trained for different industries and use cases
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[70rem] mx-auto">
          {/* First row - 2 cards */}
          <div
            className="rounded-2xl p-8 transition-all duration-300"
            style={{
              background:
                "linear-gradient(180deg, #09090B 0%, rgba(110, 11, 153, 0.3) 50%, rgba(110, 11, 153, 0) 100%)",
              boxShadow: "0px 8px 32px 0px #00000066",
              borderRadius: "16px",
            }}
          >
            <div className="flex flex-col items-center text-center">
              <div className="mb-6">
                <Image
                  src={categories[0].image}
                  alt={categories[0].title}
                  width={64}
                  height={64}
                  className="w-16 h-16"
                />
              </div>
              <h3 className="text-[24px] font-bold text-white mb-4 leading-[32px] tracking-[0%] text-center align-middle">
                {categories[0].title}
              </h3>
              <p className="text-[16px] font-normal text-white/90 leading-[26px] tracking-[0%] text-center align-middle">
                {categories[0].description}
              </p>
            </div>
          </div>

          <div
            className="rounded-2xl p-8 transition-all duration-300"
            style={{
              background:
                "linear-gradient(180deg, #09090B 0%, rgba(110, 11, 153, 0.3) 50%, rgba(110, 11, 153, 0) 100%)",
              boxShadow: "0px 8px 32px 0px #00000066",
              borderRadius: "16px",
            }}
          >
            <div className="flex flex-col items-center text-center">
              <div className="mb-6">
                <Image
                  src={categories[1].image}
                  alt={categories[1].title}
                  width={48}
                  height={48}
                  className="w-16 h-16"
                />
              </div>
              <h3 className="text-[24px] font-bold text-white mb-4 leading-[32px] tracking-[0%] text-center align-middle">
                {categories[1].title}
              </h3>
              <p className="text-[16px] font-normal text-white/90 leading-[26px] tracking-[0%] text-center align-middle">
                {categories[1].description}
              </p>
            </div>
          </div>

          {/* Second row - 2 cards */}
          <div
            className="rounded-2xl p-8 transition-all duration-300"
            style={{
              background:
                "linear-gradient(180deg, #09090B 0%, rgba(110, 11, 153, 0.3) 50%, rgba(110, 11, 153, 0) 100%)",
              boxShadow: "0px 8px 32px 0px #00000066",
              borderRadius: "16px",
            }}
          >
            <div className="flex flex-col items-center text-center">
              <div className="mb-6">
                <Image
                  src={categories[2].image}
                  alt={categories[2].title}
                  width={48}
                  height={48}
                 className="w-16 h-16"
                />
              </div>
              <h3 className="text-[24px] font-bold text-white mb-4 leading-[32px] tracking-[0%] text-center align-middle">
                {categories[2].title}
              </h3>
              <p className="text-[16px] font-normal text-white/90 leading-[26px] tracking-[0%] text-center align-middle">
                {categories[2].description}
              </p>
            </div>
          </div>

          <div
            className="rounded-2xl p-8 transition-all duration-300"
            style={{
              background:
                "linear-gradient(180deg, #09090B 0%, rgba(110, 11, 153, 0.3) 50%, rgba(110, 11, 153, 0) 100%)",
              boxShadow: "0px 8px 32px 0px #00000066",
              borderRadius: "16px",
            }}
          >
            <div className="flex flex-col items-center text-center">
              <div className="mb-6">
                <Image
                  src={categories[3].image}
                  alt={categories[3].title}
                  width={48}
                  height={48}
                  className="w-16 h-16"
                />
              </div>
              <h3 className="text-[24px] font-bold text-white mb-4 leading-[32px] tracking-[0%] text-center align-middle">
                {categories[3].title}
              </h3>
              <p className="text-[16px] font-normal text-white/90 leading-[26px] tracking-[0%] text-center align-middle">
                {categories[3].description}
              </p>
            </div>
          </div>

          {/* Third row - 1 card centered */}
          <div className="md:col-span-2 max-w-lg mx-auto w-full">
            <div
              className="rounded-2xl p-8 transition-all duration-300"
              style={{
                background:
                  "linear-gradient(180deg, #09090B 0%, rgba(110, 11, 153, 0.3) 50%, rgba(110, 11, 153, 0) 100%)",
                boxShadow: "0px 8px 32px 0px #00000066",
                borderRadius: "16px",
              }}
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-6">
                  <Image
                    src={categories[4].image}
                    alt={categories[4].title}
                    width={48}
                    height={48}
                    className="w-16 h-16"
                  />
                </div>
                <h3 className="text-[24px] font-bold text-white mb-4 leading-[32px] tracking-[0%] text-center align-middle">
                  {categories[4].title}
                </h3>
                <p className="text-[16px] font-normal text-white/90 leading-[26px] tracking-[0%] text-center align-middle">
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
