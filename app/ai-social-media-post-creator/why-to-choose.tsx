export default function WhyToChoose() {
  const features = [
    {
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20.3993 22.267L22.266 20.4003L17.3327 15.467V9.33366H14.666V16.5337L20.3993 22.267ZM15.9993 29.3337C14.1549 29.3337 12.4216 28.9837 10.7993 28.2837C9.17713 27.5837 7.76602 26.6337 6.56602 25.4337C5.36602 24.2337 4.41602 22.8225 3.71602 21.2003C3.01602 19.5781 2.66602 17.8448 2.66602 16.0003C2.66602 14.1559 3.01602 12.4225 3.71602 10.8003C4.41602 9.1781 5.36602 7.76699 6.56602 6.56699C7.76602 5.36699 9.17713 4.41699 10.7993 3.71699C12.4216 3.01699 14.1549 2.66699 15.9993 2.66699C17.8438 2.66699 19.5771 3.01699 21.1993 3.71699C22.8216 4.41699 24.2327 5.36699 25.4327 6.56699C26.6327 7.76699 27.5827 9.1781 28.2827 10.8003C28.9827 12.4225 29.3327 14.1559 29.3327 16.0003C29.3327 17.8448 28.9827 19.5781 28.2827 21.2003C27.5827 22.8225 26.6327 24.2337 25.4327 25.4337C24.2327 26.6337 22.8216 27.5837 21.1993 28.2837C19.5771 28.9837 17.8438 29.3337 15.9993 29.3337ZM15.9993 26.667C18.9549 26.667 21.4716 25.6281 23.5493 23.5503C25.6271 21.4725 26.666 18.9559 26.666 16.0003C26.666 13.0448 25.6271 10.5281 23.5493 8.45033C21.4716 6.37255 18.9549 5.33366 15.9993 5.33366C13.0438 5.33366 10.5271 6.37255 8.44935 8.45033C6.37157 10.5281 5.33268 13.0448 5.33268 16.0003C5.33268 18.9559 6.37157 21.4725 8.44935 23.5503C10.5271 25.6281 13.0438 26.667 15.9993 26.667Z"
            fill="white"
          />
        </svg>
      ),
      title: "Save Time & Effort",
      description:
        "Generate high-quality posts instantly, without spending hours brainstorming.",
    },
    {
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 33 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M24.3304 27.9997H9.66374V10.6663L18.9971 1.33301L20.6637 2.99967C20.8193 3.15523 20.9471 3.36634 21.0471 3.63301C21.1471 3.89967 21.1971 4.15523 21.1971 4.39967V4.86634L19.7304 10.6663H28.3304C29.0415 10.6663 29.6637 10.933 30.1971 11.4663C30.7304 11.9997 30.9971 12.6219 30.9971 13.333V15.9997C30.9971 16.1552 30.9748 16.3219 30.9304 16.4997C30.886 16.6775 30.8415 16.8441 30.7971 16.9997L26.7971 26.3997C26.5971 26.8441 26.2637 27.2219 25.7971 27.533C25.3304 27.8441 24.8415 27.9997 24.3304 27.9997ZM12.3304 25.333H24.3304L28.3304 15.9997V13.333H16.3304L18.1304 5.99967L12.3304 11.7997V25.333ZM9.66374 10.6663V13.333H5.66374V25.333H9.66374V27.9997H2.99707V10.6663H9.66374Z"
            fill="white"
          />
        </svg>
      ),
      title: "Multi-Platform Ready",
      description:
        "Create optimized posts for Instagram, Facebook, LinkedIn, Twitter (X), and more.",
    },
    {
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_1979_29299)">
            <path
              d="M13.2 18.8C12.4889 18.0889 11.8389 17.3444 11.25 16.5667C10.6611 15.7889 10.1222 14.9667 9.63333 14.1C9.52222 14.4111 9.45 14.7278 9.41667 15.05C9.38333 15.3722 9.36667 15.6889 9.36667 16C9.36667 17.8444 10.0111 19.4111 11.3 20.7C12.5889 21.9889 14.1556 22.6333 16 22.6333C16.3111 22.6333 16.6278 22.6111 16.95 22.5667C17.2722 22.5222 17.5889 22.4556 17.9 22.3667C17.0333 21.8778 16.2111 21.3389 15.4333 20.75C14.6556 20.1611 13.9111 19.5111 13.2 18.8ZM15.1 16.9333C16.2333 18.0667 17.5 19.0389 18.9 19.85C20.3 20.6611 21.8 21.2889 23.4 21.7333C22.5111 22.8667 21.4222 23.75 20.1333 24.3833C18.8444 25.0167 17.4778 25.3333 16.0333 25.3333C13.4333 25.3333 11.2278 24.4278 9.41667 22.6167C7.60556 20.8056 6.7 18.6 6.7 16C6.7 14.5556 7.01667 13.1889 7.65 11.9C8.28333 10.6111 9.16667 9.52222 10.3 8.63333C10.7444 10.2333 11.3722 11.7333 12.1833 13.1333C12.9944 14.5333 13.9667 15.8 15.1 16.9333ZM24.7667 19.3333C24.3222 19.2222 23.8833 19.1 23.45 18.9667C23.0167 18.8333 22.5889 18.6778 22.1667 18.5C22.3444 18.1 22.4722 17.6944 22.55 17.2833C22.6278 16.8722 22.6667 16.4444 22.6667 16C22.6667 14.1556 22.0167 12.5833 20.7167 11.2833C19.4167 9.98333 17.8444 9.33333 16 9.33333C15.5556 9.33333 15.1278 9.37222 14.7167 9.45C14.3056 9.52778 13.9 9.65556 13.5 9.83333C13.3222 9.41111 13.1722 8.98889 13.05 8.56667C12.9278 8.14444 12.8111 7.71111 12.7 7.26667C13.2333 7.06667 13.7778 6.91667 14.3333 6.81667C14.8889 6.71667 15.4556 6.66667 16.0333 6.66667C18.6333 6.66667 20.8389 7.57222 22.65 9.38333C24.4611 11.1944 25.3667 13.4 25.3667 16C25.3667 16.5778 25.3167 17.1444 25.2167 17.7C25.1167 18.2556 24.9667 18.8 24.7667 19.3333ZM14.6667 4V0H17.3333V4H14.6667ZM14.6667 32V28H17.3333V32H14.6667ZM25.4333 8.46667L23.5333 6.56667L26.3667 3.76667L28.2667 5.63333L25.4333 8.46667ZM5.63333 28.2333L3.73333 26.3667L6.56667 23.5333L8.46667 25.4333L5.63333 28.2333ZM28 17.3333V14.6667H32V17.3333H28ZM0 17.3333V14.6667H4V17.3333H0ZM26.3667 28.2667L23.5333 25.4333L25.4333 23.5333L28.2333 26.3667L26.3667 28.2667ZM6.56667 8.46667L3.76667 5.63333L5.63333 3.73333L8.46667 6.56667L6.56667 8.46667Z"
              fill="white"
            />
          </g>
          <defs>
            <clipPath id="clip0_1979_29299">
              <rect width="32" height="32" fill="white" />
            </clipPath>
          </defs>
        </svg>
      ),
      title: "Stay Consistent",
      description:
        "Maintain a steady posting schedule without creative burnout.",
    },
    {
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 33 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.5787 20.6663C13.4596 20.2049 13.2191 19.7838 12.8822 19.4469C12.5452 19.1099 12.1241 18.8694 11.6627 18.7503L3.48268 16.641C3.34312 16.6014 3.22029 16.5173 3.13283 16.4016C3.04537 16.2859 2.99805 16.1448 2.99805 15.9997C2.99805 15.8546 3.04537 15.7135 3.13283 15.5978C3.22029 15.482 3.34312 15.398 3.48268 15.3583L11.6627 13.2477C12.1239 13.1288 12.5449 12.8884 12.8819 12.5517C13.2188 12.215 13.4594 11.7942 13.5787 11.333L15.688 3.15301C15.7272 3.01291 15.8112 2.88947 15.9271 2.80154C16.043 2.71361 16.1845 2.66602 16.33 2.66602C16.4755 2.66602 16.617 2.71361 16.7329 2.80154C16.8488 2.88947 16.9328 3.01291 16.972 3.15301L19.08 11.333C19.1991 11.7944 19.4396 12.2155 19.7765 12.5525C20.1135 12.8895 20.5346 13.13 20.996 13.249L29.176 15.357C29.3167 15.3958 29.4407 15.4797 29.5291 15.5958C29.6175 15.7119 29.6654 15.8538 29.6654 15.9997C29.6654 16.1456 29.6175 16.2875 29.5291 16.4036C29.4407 16.5197 29.3167 16.6035 29.176 16.6423L20.996 18.7503C20.5346 18.8694 20.1135 19.1099 19.7765 19.4469C19.4396 19.7838 19.1991 20.2049 19.08 20.6663L16.9707 28.8463C16.9315 28.9865 16.8475 29.1099 16.7316 29.1978C16.6157 29.2858 16.4742 29.3333 16.3287 29.3333C16.1832 29.3333 16.0417 29.2858 15.9258 29.1978C15.8099 29.1099 15.7259 28.9865 15.6867 28.8463L13.5787 20.6663Z"
            stroke="white"
            strokeWidth="2.66667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M26.9961 4V9.33333"
            stroke="white"
            strokeWidth="2.66667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M29.6634 6.66602H24.3301"
            stroke="white"
            strokeWidth="2.66667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M5.66406 22.666V25.3327"
            stroke="white"
            strokeWidth="2.66667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6.99674 24H4.33008"
            stroke="white"
            strokeWidth="2.66667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: "Personalized post",
      description: " Posts tailored to your audience, niche, and brand voice.",
    },
    {
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.7009 28V25.1333C13.5231 24.8667 12.5065 24.3556 11.6509 23.6C10.7954 22.8444 10.1676 21.7778 9.76758 20.4L12.2342 19.4C12.5676 20.4667 13.062 21.2778 13.7176 21.8333C14.3731 22.3889 15.2342 22.6667 16.3009 22.6667C17.212 22.6667 17.9842 22.4611 18.6176 22.05C19.2509 21.6389 19.5676 21 19.5676 20.1333C19.5676 19.3556 19.3231 18.7389 18.8342 18.2833C18.3454 17.8278 17.212 17.3111 15.4342 16.7333C13.5231 16.1333 12.212 15.4167 11.5009 14.5833C10.7898 13.75 10.4342 12.7333 10.4342 11.5333C10.4342 10.0889 10.9009 8.96667 11.8342 8.16667C12.7676 7.36667 13.7231 6.91111 14.7009 6.8V4H17.3676V6.8C18.4787 6.97778 19.3954 7.38333 20.1176 8.01667C20.8398 8.65 21.3676 9.42222 21.7009 10.3333L19.2342 11.4C18.9676 10.6889 18.5898 10.1556 18.1009 9.8C17.612 9.44444 16.9454 9.26667 16.1009 9.26667C15.1231 9.26667 14.3787 9.48333 13.8676 9.91667C13.3565 10.35 13.1009 10.8889 13.1009 11.5333C13.1009 12.2667 13.4342 12.8444 14.1009 13.2667C14.7676 13.6889 15.9231 14.1333 17.5676 14.6C19.1009 15.0444 20.262 15.75 21.0509 16.7167C21.8398 17.6833 22.2342 18.8 22.2342 20.0667C22.2342 21.6444 21.7676 22.8444 20.8342 23.6667C19.9009 24.4889 18.7454 25 17.3676 25.2V28H14.7009Z"
            fill="white"
          />
        </svg>
      ),
      title: "Cost-Effective Marketing",
      description:
        "Get high quality social media posts without hiring a full-time social media manager.",
    },
  ];

  return (
    <section className="py-20 px-4 bg-black">
      <div className="max-w-[70rem] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-[#F2F2F2] font-bold text-[32px] max-w-2xl mx-auto leading-[150%] tracking-[0%] text-center mb-6 font-inter">
            Benefits of{" "}
            <span className="text-[#BD14FF]">
              AI Social Media Post Generator
            </span>
          </h2>
          <p className="text-[18px] leading-[150%] tracking-[0%] text-center max-w-4xl mx-auto font-inter text-white/90">
            Advanced AI technology with marketing insights help you create
            platform-ready, engaging, and personalized posts in seconds. Whether
            you’re a business owner, marketer, influencer, or freelancer, Our AI
            Social Media Post Generator tool makes social media content creation
            effortless. Key Benefits:
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
            style={{ width: "calc(66.666667% + 5rem)" }}
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
