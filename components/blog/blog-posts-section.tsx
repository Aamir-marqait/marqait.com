import Link from "next/link";
import Image from "next/image";
import { blogPosts } from "../../data/blogPosts";

export default function BlogPostsSection() {
  const featuredPost = blogPosts[0];
  const sidebarPosts = blogPosts.slice(1, 3);
  const fullWidthPost = blogPosts[3];

  return (
    <section className="relative bg-[#020103] py-16 sm:py-2 lg:py-6 xl:py-8">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="mb-12 sm:mb-16 lg:mb-10">
          <h2
            className="text-white font-semibold"
            style={{
              alignSelf: "stretch",
              color: "#FFF",
              fontFamily: "Inter",
              fontSize: "32px",
              fontStyle: "normal",
              fontWeight: 600,
              lineHeight: "32px",
            }}
          >
            Recent blog posts
          </h2>
        </div>

        {/* Main Grid Layout - 50/50 Split */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 xl:gap-12 mb-12 sm:mb-16 lg:mb-20 items-start">
          {/* Left Side - Featured Post (Half Width) */}
          <div className="w-full cursor-pointer">
            <article className="group cursor-pointer">
              <Link href={`/blog/${featuredPost.slug}`} className="block">
                <div className="overflow-hidden transition-all duration-300 flex flex-col">
                  <div className="aspect-[3/1] overflow-hidden">
                    <Image
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      width={800}
                      height={267}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Content */}
                  <div className=" py-4 flex flex-col">
                    {/* Category */}
                    <div className="">
                      <span
                        className="inline-flex items-center font-semibold py-1"
                        style={{
                          alignSelf: "stretch",
                          color: "#BB8BFF",
                          fontFamily: "Inter",
                          fontSize: "14px",
                          fontStyle: "normal",
                          fontWeight: 600,
                          lineHeight: "20px",
                          marginBottom: "24px",
                        }}
                      >
                        {featuredPost.category}
                      </span>
                    </div>

                    {/* Title and Arrow */}
                    <div className="flex items-start justify-between mb-2">
                      <h3
                        className="text-white font-semibold group-hover:text-gray-200 transition-colors duration-200 flex-1 mr-4"
                        style={{
                          color: "#FFF",
                          fontFamily: "Inter",
                          fontSize: "24px",
                          fontStyle: "normal",
                          fontWeight: 600,
                          lineHeight: "32px",
                          marginBottom: "24px",
                        }}
                      >
                        {featuredPost.title}
                      </h3>
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M7 17L17 7M17 7H7M17 7V17"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </div>

                    {/* Description */}
                    <p
                      className="mb-6"
                      style={{
                        alignSelf: "stretch",
                        color: "rgba(255, 255, 255, 0.90)",
                        fontFamily: "Inter",
                        fontSize: "16px",
                        fontStyle: "normal",
                        fontWeight: 400,
                        lineHeight: "24px",
                        marginBottom: "24px",
                      }}
                    >
                      {featuredPost.description}
                    </p>

                    {/* Author and Date */}
                    <div className="flex items-center gap-3">
                      <Image
                        src={featuredPost.author.avatar}
                        alt={featuredPost.author.name}
                        width={48}
                        height={40}
                        className="w-10 h-10 sm:w-12 sm:h-10 rounded-full object-cover"
                      />
                      <div>
                        <p
                          className="text-white font-medium"
                          style={{
                            color: "#FFF",
                            fontFamily: "Inter",
                            fontSize: "14px",
                            fontStyle: "normal",
                            fontWeight: 500,
                            lineHeight: "20px",
                          }}
                        >
                          {featuredPost.author.name}
                        </p>
                        <p
                          className="text-gray-400"
                          style={{
                            color: "rgba(255, 255, 255, 0.80)",
                            fontFamily: "Inter",
                            fontSize: "14px",
                            fontStyle: "normal",
                            fontWeight: 400,
                            lineHeight: "20px",
                          }}
                        >
                          {featuredPost.date}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </article>
          </div>

          {/* Right Side - Two Posts Stacked Vertically (Half Width) */}
          <div className="w-full">
            <div className="flex flex-col gap-4">
              {sidebarPosts.map((post) => (
                <article key={post.id} className="group cursor-pointer">
                  <Link href={`/blog/${post.slug}`} className="block">
                    <div className="overflow-hidden  transition-all duration-300">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-0 h-full">
                        <div
                          className="overflow-hidden"
                          style={{ height: "200px", width: "100%" }}
                        >
                          <Image
                            src={post.image}
                            alt={post.title}
                            width={400}
                            height={200}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>

                        <div
                          className="md:px-3  px-0 py-3 md:py-0 flex flex-col justify-center"
                          // style={{ height: "200px" }}
                        >
                          <div className="mb-3">
                            <span
                              className="inline-flex items-center font-semibold"
                              style={{
                                alignSelf: "stretch",
                                color: "#BB8BFF",
                                fontFamily: "Inter",
                                fontSize: "14px",
                                fontStyle: "normal",
                                fontWeight: 600,
                                lineHeight: "20px",
                              }}
                            >
                              {post.category}
                            </span>
                          </div>

                          {/* Title and Arrow */}
                          <div className="flex items-start justify-between mb-3">
                            <h3 className="truncate  text-white text-lg sm:text-xl font-bold leading-tight group-hover:text-gray-200 transition-colors duration-200 flex-1 mr-3">
                              {post.title}
                            </h3>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                            >
                              <path
                                d="M7 17L17 7M17 7H7M17 7V17"
                                stroke="white"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </div>

                          {/* Description */}
                          <p
                            className="mb-4 flex-1 truncate"
                            style={{
                              color: "rgba(255, 255, 255, 0.90)",
                              fontFamily: "Inter",
                              fontSize: "16px",
                              fontStyle: "normal",
                              fontWeight: 400,
                              lineHeight: "24px",
                            }}
                          >
                            {post.description}
                          </p>

                          {/* Author and Date */}
                          <div className="flex items-center gap-3">
                            <Image
                              src={post.author.avatar || "/placeholder.svg"}
                              alt={post.author.name}
                              width={32}
                              height={32}
                              className="w-8 h-8 rounded-full object-cover"
                            />
                            <div>
                              <p
                                className="text-white font-medium"
                                style={{
                                  color: "#FFF",
                                  fontFamily: "Inter",
                                  fontSize: "14px",
                                  fontStyle: "normal",
                                  fontWeight: 500,
                                  lineHeight: "20px",
                                }}
                              >
                                {post.author.name}
                              </p>
                              <p
                                className="text-gray-400"
                                style={{
                                  color: "rgba(255, 255, 255, 0.80)",
                                  fontFamily: "Inter",
                                  fontSize: "14px",
                                  fontStyle: "normal",
                                  fontWeight: 400,
                                  lineHeight: "20px",
                                }}
                              >
                                {post.date}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </div>

        <article className="group cursor-pointer">
          <Link href={`/blog/${fullWidthPost.slug}`} className="block">
            <div className="overflow-hidden transition-all duration-300">
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
                <div className="aspect-[2/1] overflow-hidden lg:col-span-2">
                  <Image
                    src={fullWidthPost.image}
                    alt={fullWidthPost.title}
                    width={800}
                    height={400}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="px-0 py-2 md:py-0 sm:px-4 lg:px-6 xl:px-8 flex flex-col justify-center lg:col-span-3">
                  <div className="mb-2 sm:mb-2">
                    <span
                      className="inline-flex items-center font-semibold"
                      style={{
                        alignSelf: "stretch",
                        color: "#BB8BFF",
                        fontFamily: "Inter",
                        fontSize: "14px",
                        fontStyle: "normal",
                        fontWeight: 600,
                        lineHeight: "20px",
                      }}
                    >
                      {fullWidthPost.category}
                    </span>
                  </div>

                  {/* Title and Arrow */}
                  <div className="flex items-start justify-between mb-2 sm:mb-2">
                    <h3
                      className="text-white font-semibold group-hover:text-gray-200 transition-colors duration-200 mr-2"
                      style={{
                        color: "#FFF",
                        fontFamily: "Inter",
                        fontSize: "24px",
                        fontStyle: "normal",
                        fontWeight: 600,
                        lineHeight: "32px",
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        maxWidth: "calc(100% - 40px)",
                      }}
                    >
                      {fullWidthPost.title}
                    </h3>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M7 17L17 7M17 7H7M17 7V17"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>

                  {/* Description */}
                  <p
                    className="mb-6 sm:mb-8"
                    style={{
                      color: "rgba(255, 255, 255, 0.90)",
                      fontFamily: "Inter",
                      fontSize: "16px",
                      fontStyle: "normal",
                      fontWeight: 400,
                      lineHeight: "24px",
                    }}
                  >
                    {fullWidthPost.description}
                  </p>

                  {/* Author and Date */}
                  <div className="flex items-center gap-4">
                    <Image
                      src={fullWidthPost.author.avatar}
                      alt={fullWidthPost.author.name}
                      width={40}
                      height={40}
                      className="w-10 h-10 sm:w-10 sm:h-10 rounded-full object-cover"
                    />
                    <div>
                      <p
                        className="text-white font-medium"
                        style={{
                          color: "#FFF",
                          fontFamily: "Inter",
                          fontSize: "14px",
                          fontStyle: "normal",
                          fontWeight: 500,
                          lineHeight: "20px",
                        }}
                      >
                        {fullWidthPost.author.name}
                      </p>
                      <p
                        className="text-gray-400"
                        style={{
                          color: "rgba(255, 255, 255, 0.80)",
                          fontFamily: "Inter",
                          fontSize: "14px",
                          fontStyle: "normal",
                          fontWeight: 400,
                          lineHeight: "20px",
                        }}
                      >
                        {fullWidthPost.date}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </article>
      </div>
    </section>
  );
}
