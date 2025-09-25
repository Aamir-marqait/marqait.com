import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { getPostBySlug, getRecentPosts } from "../../../data/blogService";
import BlogContactForm from "../../../components/blog/blog-contact-form";
import BlogSocialShare from "../../../components/blog/blog-social-share";




type RouteParams = { slug: string };

// Next.js 15: params is a Promise now
export async function generateMetadata(
  { params }: { params: Promise<RouteParams> }
): Promise<Metadata> {
  const { slug } = await params;
  const blogPost = await getPostBySlug(slug);

  if (!blogPost) {
    return {
      title: "Blog Post Not Found",
      description: "The requested blog post could not be found."
    };
  }

  return {
    title: blogPost.title,
    description: blogPost.description,
    keywords: [blogPost.category, blogPost.title, "Marqait AI blog"],
    alternates: {
      canonical: `https://www.marqait.com/ai-blog/${slug}`,
    },
    openGraph: {
      title: blogPost.title,
      description: blogPost.description,
      url: `https://www.marqait.com/ai-blog/${slug}`,
      type: "article",
      images: [
        {
          url: blogPost.image || "https://www.marqait.com/og-image.jpg",
          width: 1200,
          height: 630,
          alt: blogPost.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: blogPost.title,
      description: blogPost.description,
      images: [blogPost.image || "https://www.marqait.com/twitter-image.jpg"],
    },
  };
}

// Helper to tag the TOC UL as a card without editing source HTML
function enhanceBlogHtml(html: string) {
  // Mark the first UL after "Table of Contents" as .toc (no DOM changes needed elsewhere)
  let out = html.replace(
    /(<h2[^>]*>\s*Table of Contents\s*<\/h2>\s*)<ul(?![^>]*class=)/i,
    '$1<ul class="toc"'
  );
  out = out.replace(
    /(<h2[^>]*>\s*Table of Contents\s*<\/h2>\s*)<ul([^>]*class=(['"])([^'"]*)\3)/i,
    (_m, h2, clsAttr, _q, classes) => `${h2}<ul ${clsAttr.replace(classes, `${classes} toc`)}`
  );
  return out;
}

// Helper function to convert category slugs to user-friendly names
function formatCategoryName(category: string): string {
  return category
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}




// Make the page async and await params
export default async function BlogPost(
  { params }: { params: Promise<RouteParams> }
) {
  const { slug } = await params;
  const blogPost = await getPostBySlug(slug);

  if (!blogPost) {
    notFound();
  }

  const recentPosts = await getRecentPosts(blogPost?.id);
  
  console.log("Rendering blog post:", blogPost);

  return (
    <section className="relative bg-[#020103] py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24">
      <div className="relative max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 xl:gap-16">
          {/* Main Content - Left Side */}
          <div className="lg:col-span-8">
            <article className="space-y-4 sm:space-y-5 lg:space-y-6">
              {/* Category */}
              <div>
                <span
                  className="uppercase font-inter font-normal leading-normal tracking-[1.4px]
                  text-xs sm:text-sm lg:text-[14px]"
                  style={{
                    color: "#BB8BFF",
                    fontFeatureSettings: "'dlig' on",
                  }}
                >
                 
                  {formatCategoryName(blogPost.category)}
                </span>
              </div>

              {/* Title */}
              {/* <h1
                className="text-white font-inter font-bold leading-tight flex-1 self-stretch
                text-xl 
                sm:text-2xl sm:leading-[32px]
                md:text-3xl md:leading-[40px]
                lg:text-[32px] lg:leading-normal"
                style={{
                  fontFeatureSettings: "'dlig' on",
                }}
              >
                {blogPost.title}
              </h1> */}

              {/* Description */}
              {/* <p
                className="text-white font-inter font-normal leading-relaxed
                text-sm 
                sm:text-base sm:leading-[26px]
                md:text-lg md:leading-[28px]
                lg:text-[18px] lg:leading-[30px]
                max-w-full lg:max-w-[757px]"
                style={{
                  fontFeatureSettings: "'liga' off",
                }}
              >
                {blogPost.description}
              </p> */}

              {/* Author Info Card */}
              <div
                className="flex items-center justify-between rounded-[8px] sm:rounded-[10px] lg:rounded-[12px] border border-[rgba(255,255,255,0.15)] backdrop-blur-[10px]
                p-3 sm:p-4 lg:p-[16px_20px] xl:p-[16px_44px_16px_20px]
                gap-4 sm:gap-6 lg:gap-[249px]"
                style={{
                  background:
                    "radial-gradient(146.13% 118.42% at 50% -15.5%, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.00) 99.59%), linear-gradient(180deg, rgba(46, 51, 90, 0.00) 0%, rgba(28, 27, 51, 0.10) 100%)",
                  boxShadow:
                    "0px 0px 100px 0px rgba(204, 215, 255, 0.25) inset, 0px 5px 10px 0px rgba(0, 0, 0, 0.05), 0px 15px 30px 0px rgba(0, 0, 0, 0.05), 0px 30px 60px 0px rgba(0, 0, 0, 0.20)",
                }}
              >
                <div className="flex items-center gap-3 sm:gap-4 flex-1 min-w-0">
                  <Image
                    src={blogPost.author.avatar || "/placeholder.svg"}
                    alt={blogPost.author.name}
                    width={48}
                    height={48}
                    className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-full object-cover flex-shrink-0"
                  />
                  <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 lg:gap-[8px] min-w-0">
                    <p
                      className="text-white font-inter font-bold leading-normal truncate
                      text-sm sm:text-base lg:text-[16px]"
                      style={{
                        fontFeatureSettings: "'dlig' on",
                      }}
                    >
                      {blogPost.author.name}
                    </p>
                    <div className="hidden sm:block">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="6"
                        height="6"
                        viewBox="0 0 6 6"
                        fill="none"
                        className="flex-shrink-0"
                      >
                        <circle cx="3" cy="3" r="3" fill="white" />
                      </svg>
                    </div>
                    <div className="flex items-center gap-1 sm:gap-2 lg:gap-[8px] text-xs sm:text-sm lg:text-base">
                      <span
                        className="text-white font-inter font-normal leading-normal
                        text-xs sm:text-sm lg:text-[16px]"
                        style={{
                          fontFeatureSettings: "'dlig' on",
                        }}
                      >
                        {blogPost.date}
                      </span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="6"
                        height="6"
                        viewBox="0 0 6 6"
                        fill="none"
                        className="flex-shrink-0"
                      >
                        <circle cx="3" cy="3" r="3" fill="white" />
                      </svg>
                      <span
                        className="text-white font-inter font-normal leading-normal
                        text-xs sm:text-sm lg:text-[16px]"
                        style={{
                          fontFeatureSettings: "'dlig' on",
                        }}
                      >
                        {blogPost.readTime}
                      </span>
                    </div>
                  </div>
                </div>
                <button className="transition-colors duration-200 flex-shrink-0 p-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 sm:w-6 sm:h-6"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M8.68387 13.3419C8.88616 12.9381 9 12.4824 9 12C9 11.5176 8.88616 11.0619 8.68387 10.6581M8.68387 13.3419C8.19134 14.3251 7.17449 15 6 15C4.34315 15 3 13.6569 3 12C3 10.3431 4.34315 9 6 9C7.17449 9 8.19134 9.67492 8.68387 10.6581M8.68387 13.3419L15.3161 16.6581M8.68387 10.6581L15.3161 7.34193M15.3161 7.34193C15.8087 8.32508 16.8255 9 18 9C19.6569 9 21 7.65685 21 6C21 4.34315 19.6569 3 18 3C16.3431 3 15 4.34315 15 6C15 6.48237 15.1138 6.93815 15.3161 7.34193ZM15.3161 16.6581C15.1138 17.0619 15 17.5176 15 18C15 19.6569 16.3431 21 18 21C19.6569 21 21 19.6569 21 18C21 16.3431 19.6569 15 18 15C16.8255 15 15.8087 15.6749 15.3161 16.6581Z"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>

              {/* Hero Image */}
              <div
                className="overflow-hidden rounded-lg
                h-48 sm:h-64 md:h-80 lg:h-[408px] relative"
              >
                <Image
                  src={blogPost.image || "/placeholder.svg"}
                  alt={blogPost.title}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Content */}
             <div className="blog-content">
  <article
    className="
      prose prose-invert prose-lg max-w-none
      prose-headings:font-inter prose-p:font-inter prose-li:font-inter
      prose-h2:mt-10 prose-h2:mb-3
      prose-h3:mt-8 prose-h3:mb-2
    "
    dangerouslySetInnerHTML={{ __html: enhanceBlogHtml(blogPost.content) }}
  />
</div>

             

              
            </article>

            <BlogSocialShare
              views={369}
              url={typeof window !== "undefined" ? window.location.href : ""}
              title={blogPost.title}
            />
            <BlogContactForm />
          </div>

          {/* Sidebar - Right Side */}
          <div className="lg:col-span-4">
            <div className="sticky top-4 sm:top-6 lg:top-8">
              <div
                className="border border-[rgba(255,255,255,0.15)] rounded-lg backdrop-blur-[10px]
                p-4 sm:p-6 lg:p-8"
              >
                {/* Sidebar Header */}
                <h3
                  className="text-white font-inter font-bold leading-normal mb-4 sm:mb-6 lg:mb-8
                  text-lg sm:text-xl lg:text-[24px]"
                  style={{
                    fontFeatureSettings: "'dlig' on",
                  }}
                >
                  Recent Posts
                </h3>

                {/* Recent Posts List */}
                <div
                  className="space-y-4 sm:space-y-5 lg:space-y-6 lg:h-[75vh] overflow-y-auto pr-2"
                  style={{
                    scrollbarWidth: "thin",
                    scrollbarColor: "#4B5563 #1F2937",
                  }}
                >
                  {recentPosts.map((post) => (
                    <article key={post.id} className="group cursor-pointer">
                      <a
                        href={`/ai-blog/${post.slug}`}
                        className="flex gap-3 sm:gap-4 hover:opacity-80 transition-opacity duration-200"
                      >
                        {/* Post Thumbnail */}
                        <div className="flex-shrink-0">
                          <div className="rounded-lg overflow-hidden w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 relative">
                            <Image
                              src={post.image || "/placeholder.svg"}
                              alt={post.title}
                              fill
                              className="object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                          </div>
                        </div>

                        {/* Post Info */}
                        <div className="flex-1 min-w-0">
                          <h4
                            className="text-white font-inter font-light leading-tight mb-2 line-clamp-3
                            text-sm 
                            sm:text-base sm:leading-[20px]
                            lg:text-[18px] lg:leading-[20px]"
                            style={{}}
                          >
                            {post.title}
                          </h4>
                          <div className="flex items-center gap-2 text-xs sm:text-sm">
                            <span
                              className="text-white/80 font-inter font-normal leading-normal
                              text-xs sm:text-sm lg:text-[14px]"
                              style={{}}
                            >
                              {post.date}
                            </span>
                            <span className="text-gray-600">•</span>
                            <span
                              className="text-[#BB8BFF] font-inter font-normal leading-normal
                              text-xs sm:text-sm lg:text-[14px]"
                              style={{}}
                            >
                                {formatCategoryName(post.category)}
                           
                            </span>
                          </div>
                        </div>
                      </a>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}