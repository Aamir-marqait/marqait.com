import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { blogPosts } from "../../data/blogPosts";

export default function AllBlogPostsSection() {
  const allPosts = blogPosts.slice(4);

  return (
    <section className="relative bg-[#020103] py-16 sm:py-20 lg:py-10 xl:py-20">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="mb-12 sm:mb-16 lg:mb-10">
          <h2
            className="text-white font-semibold leading-8"
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
            All blog posts
          </h2>
        </div>

        {/* Blog Posts Grid - 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 xl:gap-12">
          {allPosts.map((post) => (
            <article key={post.id} className="group cursor-pointer h-full">
              <Link href={`/blog/${post.slug}`} className="block h-full">
                <div
                  className="overflow-hidden transition-all duration-300 h-full flex flex-col"
                  style={{ minHeight: "500px" }}
                >
                  {/* Image */}
                  <div
                    className="overflow-hidden"
                    style={{ height: "240px", alignSelf: "stretch" }}
                  >
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-2 sm:p-0 flex-1 flex flex-col">
                    {/* Category */}
                    <div className="mb-3">
                      <span
                        className={`inline-flex items-center  py-5  `}
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
                    <div className="flex items-start justify-between mb-3 flex-1">
                      <h3
                        className="group-hover:text-gray-200 transition-colors duration-200 flex-1 mr-4"
                        style={{
                          color: "#FFF",
                          fontFamily: "Inter",
                          fontSize: "24px",
                          fontStyle: "normal",
                          fontWeight: 600,
                          lineHeight: "32px",
                        }}
                      >
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
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>

                    {/* Description */}
                    <p
                      className="flex-2"
                      style={{
                        color: "rgba(255, 255, 255, 0.90)",
                        fontFamily: "Inter",
                        fontSize: "16px",
                        fontStyle: "normal",
                        fontWeight: 300,
                        lineHeight: "24px",
                        display: "-webkit-box",
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                        marginBottom: "24px",
                      }}
                    >
                      {post.description}
                    </p>

                    <div className="flex items-center gap-3">
                      <img
                        src={post.author.avatar}
                        alt={post.author.name}
                        className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover"
                      />
                      <div className="flex gap-5 items-center">
                        <p style={{
                          color: '#FFF',
                          fontFamily: 'Work Sans',
                          fontSize: '16px',
                          fontStyle: 'normal',
                          fontWeight: 500,
                          lineHeight: '24px'
                        }}>
                          {post.author.name}
                        </p>
                        <p style={{
                          color: 'rgba(255, 255, 255, 0.80)',
                          fontFamily: 'Work Sans',
                          fontSize: '16px',
                          fontStyle: 'normal',
                          fontWeight: 400,
                          lineHeight: '24px'
                        }}>
                          {post.date}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
