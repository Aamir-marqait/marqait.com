"use client";
import Link from "next/link";
import Image from "next/image";
import { trackCTAClick } from "../../analytics";

export default function AIProductsSection() {
  const products = [
    {
      id: 1,
      icon: (props: React.SVGProps<SVGSVGElement>) => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="53"
          height="52"
          viewBox="0 0 53 52"
          fill="none"
          {...props}
        >
          <path
            d="M17.8327 39H35.166V34.6667H17.8327V39ZM17.8327 30.3333H35.166V26H17.8327V30.3333ZM13.4993 47.6667C12.3077 47.6667 11.2875 47.2424 10.4389 46.3938C9.59032 45.5451 9.16602 44.525 9.16602 43.3333V8.66668C9.16602 7.47501 9.59032 6.45487 10.4389 5.60626C11.2875 4.75765 12.3077 4.33334 13.4993 4.33334H30.8327L43.8327 17.3333V43.3333C43.8327 44.525 43.4084 45.5451 42.5598 46.3938C41.7112 47.2424 40.691 47.6667 39.4993 47.6667H13.4993ZM28.666 19.5V8.66668H13.4993V43.3333H39.4993V19.5H28.666Z"
            fill="#C7AEFF"
          />
        </svg>
      ),
      title: "Strategy Agent",
      description:
        "Comprehensive business intelligence gathering, competitor analysis, and 12-month marketing strategy reports with KPIs and channel recommendations.",
    },
    {
      id: 2,
      icon: (props: React.SVGProps<SVGSVGElement>) => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="52"
          height="52"
          viewBox="0 0 52 52"
          fill="none"
          {...props}
        >
          <path
            d="M39.0006 28.1667V23.8333H47.6673V28.1667H39.0006ZM41.6006 43.3333L34.6673 38.1333L37.2673 34.6667L44.2006 39.8667L41.6006 43.3333ZM37.2673 17.3333L34.6673 13.8667L41.6006 8.66666L44.2006 12.1333L37.2673 17.3333ZM10.834 41.1667V32.5H8.66732C7.47565 32.5 6.45551 32.0757 5.6069 31.2271C4.75829 30.3785 4.33398 29.3583 4.33398 28.1667V23.8333C4.33398 22.6417 4.75829 21.6215 5.6069 20.7729C6.45551 19.9243 7.47565 19.5 8.66732 19.5H17.334L28.1673 13V39L17.334 32.5H15.1673V41.1667H10.834ZM23.834 31.3083V20.6917L18.5257 23.8333H8.66732V28.1667H18.5257L23.834 31.3083ZM30.334 33.2583V18.7417C31.309 19.6083 32.0944 20.6646 32.6902 21.9104C33.2861 23.1562 33.584 24.5194 33.584 26C33.584 27.4805 33.2861 28.8437 32.6902 30.0896C32.0944 31.3354 31.309 32.3917 30.334 33.2583Z"
            fill="#C7AEFF"
          />
        </svg>
      ),
      title: "Campaign Generator",
      description:
        "Automated business analysis, platform selection intelligence, campaign blueprints, and ready-to-use advertising creatives with performance predictions.",
    },
    {
      id: 3,
      icon: (props: React.SVGProps<SVGSVGElement>) => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="52"
          height="52"
          viewBox="0 0 52 52"
          fill="none"
          {...props}
        >
          <path
            d="M26.0007 47.6667C23.0395 47.6667 20.2409 47.0979 17.6048 45.9604C14.9687 44.8229 12.6666 43.2701 10.6986 41.3021C8.73051 39.334 7.17773 37.032 6.04023 34.3958C4.90273 31.7597 4.33398 28.9611 4.33398 26C4.33398 23.0028 4.92079 20.1861 6.0944 17.55C7.26801 14.9139 8.8569 12.6208 10.8611 10.6708C12.8652 8.72084 15.2034 7.17709 17.8757 6.03959C20.5479 4.90209 23.4007 4.33334 26.434 4.33334C29.3229 4.33334 32.0493 4.82987 34.6131 5.82293C37.177 6.81598 39.425 8.1882 41.3569 9.93959C43.2888 11.691 44.8236 13.7674 45.9611 16.1688C47.0986 18.5701 47.6673 21.1611 47.6673 23.9417C47.6673 28.0945 46.4034 31.2813 43.8756 33.5021C41.3479 35.7229 38.2784 36.8333 34.6673 36.8333H30.659C30.334 36.8333 30.1083 36.9236 29.9819 37.1042C29.8555 37.2847 29.7923 37.4833 29.7923 37.7C29.7923 38.1333 30.0632 38.7563 30.6048 39.5688C31.1465 40.3813 31.4173 41.3111 31.4173 42.3583C31.4173 44.1639 30.9208 45.5 29.9277 46.3667C28.9347 47.2333 27.6257 47.6667 26.0007 47.6667ZM14.084 28.1667C15.0229 28.1667 15.7993 27.8597 16.4132 27.2458C17.027 26.632 17.334 25.8556 17.334 24.9167C17.334 23.9778 17.027 23.2014 16.4132 22.5875C15.7993 21.9736 15.0229 21.6667 14.084 21.6667C13.1451 21.6667 12.3687 21.9736 11.7548 22.5875C11.1409 23.2014 10.834 23.9778 10.834 24.9167C10.834 25.8556 11.1409 26.632 11.7548 27.2458C12.3687 27.8597 13.1451 28.1667 14.084 28.1667ZM20.584 19.5C21.5229 19.5 22.2993 19.1931 22.9132 18.5792C23.527 17.9653 23.834 17.1889 23.834 16.25C23.834 15.3111 23.527 14.5347 22.9132 13.9208C22.2993 13.307 21.5229 13 20.584 13C19.6451 13 18.8687 13.307 18.2548 13.9208C17.6409 14.5347 17.334 15.3111 17.334 16.25C17.334 17.1889 17.6409 17.9653 18.2548 18.5792C18.8687 19.1931 19.6451 19.5 20.584 19.5ZM31.4173 19.5C32.3562 19.5 33.1326 19.1931 33.7465 18.5792C34.3604 17.9653 34.6673 17.1889 34.6673 16.25C34.6673 15.3111 34.3604 14.5347 33.7465 13.9208C33.1326 13.307 32.3562 13 31.4173 13C30.4784 13 29.702 13.307 29.0882 13.9208C28.4743 14.5347 28.1673 15.3111 28.1673 16.25C28.1673 17.1889 28.4743 17.9653 29.0882 18.5792C29.702 19.1931 30.4784 19.5 31.4173 19.5ZM37.9173 28.1667C38.8562 28.1667 39.6326 27.8597 40.2465 27.2458C40.8604 26.632 41.1673 25.8556 41.1673 24.9167C41.1673 23.9778 40.8604 23.2014 40.2465 22.5875C39.6326 21.9736 38.8562 21.6667 37.9173 21.6667C36.9784 21.6667 36.202 21.9736 35.5882 22.5875C34.9743 23.2014 34.6673 23.9778 34.6673 24.9167C34.6673 25.8556 34.9743 26.632 35.5882 27.2458C36.202 27.8597 36.9784 28.1667 37.9173 28.1667ZM26.0007 43.3333C26.3256 43.3333 26.5875 43.2431 26.7861 43.0625C26.9847 42.882 27.084 42.6472 27.084 42.3583C27.084 41.8528 26.8132 41.257 26.2715 40.5708C25.7298 39.8847 25.459 38.8556 25.459 37.4833C25.459 35.9667 25.9826 34.757 27.0298 33.8542C28.077 32.9514 29.359 32.5 30.8757 32.5H34.6673C37.0506 32.5 39.0909 31.8049 40.7881 30.4146C42.4854 29.0243 43.334 26.8667 43.334 23.9417C43.334 19.5722 41.6638 15.934 38.3236 13.0271C34.9833 10.1201 31.0201 8.66668 26.434 8.66668C21.5229 8.66668 17.334 10.3458 13.8673 13.7042C10.4007 17.0625 8.66732 21.1611 8.66732 26C8.66732 30.8028 10.3555 34.8924 13.7319 38.2688C17.1083 41.6451 21.1979 43.3333 26.0007 43.3333Z"
            fill="#C7AEFF"
          />
        </svg>
      ),
      title: "Brand Book Creator",
      description:
        "Complete brand identity development with logo variations, color palettes, typography systems, and comprehensive brand guidelines documentation.",
    },
    {
      id: 4,
      icon: (props: React.SVGProps<SVGSVGElement>) => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="52"
          height="52"
          viewBox="0 0 52 52"
          fill="none"
          {...props}
        >
          <path
            d="M2.16602 43.3333V37.2667C2.16602 36.0389 2.48199 34.9104 3.11393 33.8812C3.74588 32.8521 4.58546 32.0667 5.63268 31.525C7.87157 30.4055 10.1466 29.566 12.4577 29.0062C14.7688 28.4465 17.116 28.1667 19.4993 28.1667C21.8827 28.1667 24.2299 28.4465 26.541 29.0062C28.8521 29.566 31.1271 30.4055 33.366 31.525C34.4132 32.0667 35.2528 32.8521 35.8848 33.8812C36.5167 34.9104 36.8327 36.0389 36.8327 37.2667V43.3333H2.16602ZM41.166 43.3333V36.8333C41.166 35.2444 40.7237 33.7187 39.8389 32.2562C38.9542 30.7937 37.6993 29.5389 36.0743 28.4917C37.916 28.7083 39.6493 29.0785 41.2743 29.6021C42.8993 30.1257 44.416 30.7667 45.8243 31.525C47.1243 32.2472 48.1174 33.0507 48.8035 33.9354C49.4896 34.8201 49.8327 35.7861 49.8327 36.8333V43.3333H41.166ZM19.4993 26C17.116 26 15.0757 25.1514 13.3785 23.4542C11.6813 21.7569 10.8327 19.7167 10.8327 17.3333C10.8327 14.95 11.6813 12.9097 13.3785 11.2125C15.0757 9.51527 17.116 8.66666 19.4993 8.66666C21.8827 8.66666 23.923 9.51527 25.6202 11.2125C27.3174 12.9097 28.166 14.95 28.166 17.3333C28.166 19.7167 27.3174 21.7569 25.6202 23.4542C23.923 25.1514 21.8827 26 19.4993 26ZM41.166 17.3333C41.166 19.7167 40.3174 21.7569 38.6202 23.4542C36.923 25.1514 34.8827 26 32.4993 26C32.1021 26 31.5966 25.9549 30.9827 25.8646C30.3688 25.7743 29.8632 25.675 29.466 25.5667C30.441 24.4111 31.1903 23.1292 31.7139 21.7208C32.2375 20.3125 32.4993 18.85 32.4993 17.3333C32.4993 15.8167 32.2375 14.3542 31.7139 12.9458C31.1903 11.5375 30.441 10.2555 29.466 9.09999C29.9716 8.91943 30.4771 8.80207 30.9827 8.74791C31.4882 8.69374 31.9938 8.66666 32.4993 8.66666C34.8827 8.66666 36.923 9.51527 38.6202 11.2125C40.3174 12.9097 41.166 14.95 41.166 17.3333ZM6.49935 39H32.4993V37.2667C32.4993 36.8694 32.4 36.5083 32.2014 36.1833C32.0028 35.8583 31.741 35.6055 31.416 35.425C29.466 34.45 27.498 33.7187 25.5118 33.2312C23.5257 32.7437 21.5216 32.5 19.4993 32.5C17.4771 32.5 15.473 32.7437 13.4868 33.2312C11.5007 33.7187 9.53268 34.45 7.58268 35.425C7.25768 35.6055 6.99588 35.8583 6.79727 36.1833C6.59865 36.5083 6.49935 36.8694 6.49935 37.2667V39ZM19.4993 21.6667C20.691 21.6667 21.7112 21.2424 22.5598 20.3937C23.4084 19.5451 23.8327 18.525 23.8327 17.3333C23.8327 16.1417 23.4084 15.1215 22.5598 14.2729C21.7112 13.4243 20.691 13 19.4993 13C18.3077 13 17.2875 13.4243 16.4389 14.2729C15.5903 15.1215 15.166 16.1417 15.166 17.3333C15.166 18.525 15.5903 19.5451 16.4389 20.3937C17.2875 21.2424 18.3077 21.6667 19.4993 21.6667Z"
            fill="#C7AEFF"
          />
        </svg>
      ),
      title: "Social Media Post Creator",
      description:
        "Multi-format creative generation, platform-specific copy and captions, hashtag research, and content calendar planning with optimal posting schedules.",
    },
  ];

  return (
    <section className="relative py-16 sm:py-20 lg:py-24 xl:py-14 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <div className="flex items-center justify-center mb-6 sm:mb-8">
            <div className="space-y-2 sm:space-y-2">
              <h2
                className="self-stretch text-center font-inter text-[36px] font-bold leading-normal"
                style={{
                  background:
                    "linear-gradient(185deg, #FFF 3.77%, #B372CF 96.23%)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Powered By AI Excellence
              </h2>
              <p
                className="text-center font-inter text-[24px] font-bold leading-[35px] max-w-4xl mx-auto"
                style={{ color: "#FFF" }}
              >
                Discover our comprehensive suite of AI-driven marketing products
                designed to elevate your business. These agents are part of our
                beta version, with advanced multi-agent orchestration, automated
                campaign execution, and enhanced analytics coming in Version 1.
              </p>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 max-w-4xl mx-auto md:grid-cols-2 gap-x-2 gap-y-8 sm:gap-x-3 sm:gap-y-10 lg:gap-x-4 lg:gap-y-1 xl:gap-x-10 xl:gap-y-10 mb-16 sm:mb-20 lg:mb-24 xl:mb-24 justify-items-center">
          {products.map((product) => {
            const IconComponent = product.icon;
            return (
              <div
                key={product.id}
                className="flex flex-col items-center gap-[28px] flex-shrink-0 w-[375px] p-[30px_20px] rounded-[16px] border border-[rgba(255,255,255,0.30)] hover:border-gray-600/50 transition-all duration-300 group"
                style={{
                  background:
                    "linear-gradient(180deg, #05000A 0%, #1B1125 100%), linear-gradient(180deg, rgba(242, 240, 245, 0.10) 0%, #B782FF 100%)",
                  boxShadow: "0px 4px 4px 5px rgba(255, 255, 255, 0.04)",
                }}
              >
                {/* Icon */}
                <div className="flex justify-center mb-6 sm:mb-8">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-gradient-to-br from-gray-700/60 to-gray-600/40 rounded-full flex items-center justify-center group-hover:from-purple-700/40 group-hover:to-purple-600/30 transition-all duration-300">
                    <IconComponent className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-gray-300 group-hover:text-purple-300 transition-colors duration-300" />
                  </div>
                </div>

                {/* Content */}
                <div className="text-center space-y-4 sm:space-y-6">
                  <h3
                    className="text-center font-inter text-[24px] font-bold leading-normal"
                    style={{ color: "#FFF" }}
                  >
                    {product.title}
                  </h3>
                  <p
                    className="text-center font-inter text-[18px] font-normal leading-normal"
                    style={{ color: "rgba(242, 240, 245, 0.90)" }}
                  >
                    {product.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center space-y-8 sm:space-y-10 lg:space-y-6">
          {/* CTA Header */}
          <div className="space-y-4 sm:space-y-2">
            <h3
              className="text-center font-inter text-[36px] font-bold leading-normal"
              style={{
                background:
                  "linear-gradient(185deg, #FFF 3.77%, #B372CF 96.23%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Ready to Replace Your Marketing Agency?
            </h3>
            <p
              className="text-center font-inter text-[24px] font-bold leading-[35px] max-w-4xl mx-auto"
              style={{ color: "#FFF" }}
            >
              Get enterprise-level marketing capabilities without the agency
              overhead. Our AI agents deliver comprehensive strategy, branding,
              and campaigns at a fraction of traditional costs.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 lg:gap-8 pt-4 sm:pt-8">
            <Link
              href="/contacts"
              onClick={() =>
                trackCTAClick("Get Started Today", "AI Products Section")
              }
              className="cursor-pointer flex items-center bg-[rgba(140,69,255,0.40)] hover:bg-[rgba(140,69,255,0.50)] border border-[rgba(255,255,255,0.25)] text-[#F2F0F5] font-semibold rounded-2xl transition-all duration-200 justify-center gap-2 w-full sm:w-auto sm:min-w-[180px]
                px-4 py-3 text-sm
                sm:px-5 sm:py-3 sm:text-base
                md:px-6 md:py-4
                lg:px-4 lg:py-4 lg:text-[19.8px] lg:leading-[30px] lg:tracking-[-0.4px]
                lg:[box-shadow:0px_12px_16px_0px_rgba(111,17,242,0.25),0px_0px_6px_3px_rgba(255,255,255,0.25)_inset]"
            >
              Get Started Today
              <Image
                src="/icons/arrow.svg"
                alt="arrow-right"
                width={32}
                height={32}
                className="rounded-3xl bg-[rgba(242,240,245,0.15)] p-2 h-6 sm:h-7 lg:h-8"
              />
            </Link>

            <Link
              href="/contacts"
              onClick={() =>
                trackCTAClick("Schedule a Demo", "AI Products Section")
              }
              className="cursor-pointer flex items-center border border-[rgba(255,255,255,0.25)] hover:border-[rgba(255,255,255,0.35)] text-[#F2F0F5] font-semibold rounded-2xl transition-all duration-200 justify-center gap-2 w-full sm:w-auto sm:min-w-[180px]
                px-4 py-3 text-sm
                sm:px-5 sm:py-3 sm:text-base
                md:px-6 md:py-4
                lg:px-4 lg:py-4 lg:text-[19.8px] lg:leading-[30px] lg:tracking-[-0.4px]"
            >
              Schedule a Demo
              <Image
                src="/icons/arrow.svg"
                alt="arrow-right"
                width={32}
                height={32}
                className="rounded-3xl bg-[rgba(242,240,245,0.15)] p-2 h-6 sm:h-7 lg:h-8"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
