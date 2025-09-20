export default function Why() {
  const features = [
    {
      icon: (
        <svg
          className="w-6 h-6 text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 8v4l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
      ),
      title: "24/7 Customer Support",
      description:
        "AI chatbots provide round-the-clock assistance without human intervention.",
    },
    {
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13 3C8.03 3 4 7.03 4 12H1L5 16L9 12H6C6 8.13 9.13 5 13 5S20 8.13 20 12S16.87 19 13 19C11.07 19 9.32 18.21 8.06 16.94L6.64 18.36C8.27 20 10.5 21 13 21C17.97 21 22 16.97 22 12S17.97 3 13 3ZM12 8V13L16.28 15.54L17 14.33L13.5 12.25V8H12Z"
            fill="white"
          />
        </svg>
      ),
      title: "Instant Responses",
      description:
        "Reduce wait times and resolve issues quickly with immediate AI responses.",
    },
    {
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z"
            fill="white"
          />
        </svg>
      ),
      title: "Personalized Interactions",
      description:
        "Tailor responses based on customer history and preferences for better service.",
    },
    {
      icon: (
        <svg
          className="w-6 h-6 text-white dark:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M7.99999 10.8571 12 13.1428m-4.00001-2.2857L4 13.1428m3.99999-2.2857.00004-4.57139M12 13.1428v4.5715m0-4.5715-4.00001 2.2857M12 13.1428l4-2.2857m-4 2.2857V8.57143m0 4.57137 4 2.2858m-4 2.2857L7.99999 20M12 17.7143 16 20m-8.00001 0L4 17.7143v-4.5715M7.99999 20v-4.5715M4 13.1428l3.99999 2.2857M16 6.28571 12 4 8.00003 6.28571m7.99997 0v4.57139m0-4.57139-4 2.28572m4 2.28567 4 2.2858M8.00003 6.28571 12 8.57143m8 4.57147v4.5714L16 20m4-6.8571-4 2.2857M16 20v-4.5714"
          />
        </svg>
      ),
      title: "Scalable Support",
      description:
        "Handle thousands of queries simultaneously without extra staff or resources.",
    },
    {
      icon: (
        <svg
          className="w-6 h-6 text-white dark:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M8 17.345a4.76 4.76 0 0 0 2.558 1.618c2.274.589 4.512-.446 4.999-2.31.487-1.866-1.273-3.9-3.546-4.49-2.273-.59-4.034-2.623-3.547-4.488.486-1.865 2.724-2.899 4.998-2.31.982.236 1.87.793 2.538 1.592m-3.879 12.171V21m0-18v2.2"
          />
        </svg>
      ),
      title: "Cost Efficiency",
      description:
        "Automate repetitive tasks and reduce support team workload for significant savings.",
    },
  ];

  return (
    <section className="py-20 px-4 bg-black">
      <div className="max-w-[70rem] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-[#F2F2F2] font-bold text-[32px] max-w-xl mx-auto leading-[150%] tracking-[0%] text-center mb-6 font-inter">
            Why Use
            <span className="text-[#BD14FF]">
              {" "}
              AI Solutions for Customer Service
            </span>
          </h2>
          <p className="text-[18px] leading-[150%] tracking-[0%] text-center max-w-4xl mx-auto font-inter text-white/90">
            AI provides capabilities that traditional customer service systems
            cannot match:
          </p>
        </div>

        <div className="grid max-w-[70rem] grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.slice(0, 3).map((feature, index) => (
            <div
              key={index}
              className="rounded-lg px-5 py-3 transition-colors duration-300"
              style={{
                background: "linear-gradient(180deg, #0C0C0E 0%, #1B1125 100%)",
                boxShadow: "0px 8px 32px 0px #00000066",
              }}
            >
              <div className="w-12 h-12 bg-[#B812FFE5] opacity-90 rounded-[16px] flex items-center justify-center text-white mb-6">
                {feature.icon}
              </div>
              <h3
                className="text-white mb-4 text-[20px] leading-[28px] tracking-[0%]"
                style={{ fontFamily: "Inter", fontWeight: 700 }}
              >
                {feature.title}
              </h3>
              <p className="text-[16px] leading-[26px] tracking-[0%] font-inter text-[#FFFFFF]">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom row - 2 centered boxes */}
        <div className="flex justify-center mt-8">
          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            style={{ width: "calc(66.666667% + 1rem)" }}
          >
            {features.slice(3, 5).map((feature, index) => (
              <div
                key={index + 3}
                className="rounded-lg p-8 transition-colors duration-300"
                style={{
                  background:
                    "linear-gradient(180deg, #0C0C0E 0%, #1B1125 100%)",
                  boxShadow: "0px 8px 32px 0px #00000066",
                }}
              >
                <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center text-white mb-6">
                  {feature.icon}
                </div>
                <h3
                  className="text-white mb-4 text-[20px] leading-[28px] tracking-[0%]"
                  style={{ fontFamily: "Inter", fontWeight: 700 }}
                >
                  {feature.title}
                </h3>
                <p className="text-[16px] leading-[26px] tracking-[0%] font-inter text-[#FFFFFF]">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
