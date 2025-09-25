'use client';
import Link from "next/link";
import Image from "next/image";
import { TransformedBlogPost } from "../../data/blogService";
import { useState } from "react";

interface BlogPostsSectionProps {
  blogPosts: TransformedBlogPost[];
}

// Helper component for images with error handling
function BlogImage({ 
  src, 
  alt, 
  width, 
  height, 
  className 
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  className: string;
}) {
  const [imageSrc, setImageSrc] = useState(src);
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    if (!hasError) {
      setHasError(true);
      setImageSrc('/blog/default-post.jpg');
    }
  };

  return (
    <Image
      src={imageSrc}
      alt={alt}
      width={width}
      height={height}
      className={className}
      onError={handleError}
      priority={false}
    />
  );
}

// Helper function to convert category slugs to user-friendly names
function formatCategoryName(category: string): string {
  return category
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

export default function BlogPostsSection({ blogPosts }: BlogPostsSectionProps) {
  // If no posts, show empty state
  if (!blogPosts || blogPosts.length === 0) {
    return (
      <section className="relative bg-[#020103] py-16 sm:py-20 lg:py-24 xl:py-32">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="text-center py-20">
            <h1 className="text-white text-4xl font-bold mb-6">No Blog Posts Available</h1>
            <p className="text-gray-400 text-lg">Check back soon for the latest updates!</p>
          </div>
        </div>
      </section>
    );
  }

  const featuredPost = blogPosts[0]; // Latest blog (featured)
  const gridPosts = blogPosts.slice(1, 5); // Next 4 blogs for 2x2 grid

  return (
    <section className="relative bg-[#020103] py-16 sm:py-20 lg:py-24 xl:py-32">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        
        {/* Hero Title Section */}
        <div className="text-center mb-16 sm:mb-20 lg:mb-24">
          <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight">
            Marqait AI Blog:<span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent">Latest AI Trends</span> & Updates
          </h1>
          <p className="text-gray-300 text-lg sm:text-xl lg:text-2xl max-w-4xl mx-auto leading-relaxed">
            Stay up to date on Artificial Intelligence with our blogs covering the latest AI trends, tools, solutions, updates, and news
          </p>
        </div>
        
        {/* Featured Blog - Horizontal Layout */}
        {featuredPost && (
          <div className="mb-16 sm:mb-20 lg:mb-24">
            <article className="group">
              <Link href={`/ai-blog/${featuredPost.slug}`} className="block">
                <div className="bg-gradient-to-br from-gray-900/50 to-purple-900/20 rounded-2xl lg:rounded-3xl border border-white/10 backdrop-blur-sm overflow-hidden transition-all duration-500 hover:border-purple-500/30 hover:shadow-2xl hover:shadow-purple-500/10">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                    
                    {/* Image Section */}
                    <div className="relative aspect-[16/10] lg:aspect-[4/3] overflow-hidden">
                      <BlogImage
                        src={featuredPost.image}
                        alt={featuredPost.title}
                        width={800}
                        height={600}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      
                      {/* Overlay gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-black/30"></div>
                      
                      {/* Category badge */}
                      <div className="absolute top-4 left-4 sm:top-6 sm:left-6">
                        <span className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 bg-purple-600/90 backdrop-blur-sm text-white text-sm font-semibold rounded-full border border-purple-400/30">
                          {formatCategoryName(featuredPost.category)}
                        </span>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10 xl:p-12">
                      <div className="space-y-4 sm:space-y-6">
                        
                        {/* Title with Arrow */}
                        <div className="flex items-start gap-4">
                          <h2 className="text-white text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight group-hover:text-purple-300 transition-colors duration-300 flex-1">
                            {featuredPost.title}
                          </h2>
                          <div className="flex-shrink-0 w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-full h-full text-white group-hover:text-purple-300 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth="2"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" d="M7 17l9.2-9.2M17 17V7H7" />
                            </svg>
                          </div>
                        </div>

                        {/* Description */}
                        <p className="text-gray-300 text-base sm:text-lg lg:text-xl leading-relaxed line-clamp-3">
                          {featuredPost.description}
                        </p>

                        {/* Author and Date */}
                        <div className="flex items-center gap-4 pt-2">
                          <BlogImage
                            src={featuredPost.author.avatar}
                            alt={featuredPost.author.name}
                            width={48}
                            height={48}
                            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover border-2 border-purple-500/20"
                          />
                          <div>
                            <p className="text-white font-semibold text-sm sm:text-base">
                              {featuredPost.author.name}
                            </p>
                            <div className="flex items-center gap-2 text-gray-400 text-xs sm:text-sm">
                              <span>{featuredPost.date}</span>
                              <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                              <span>{featuredPost.readTime}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </article>
          </div>
        )}

        {/* Section Title for Grid Posts */}
        {gridPosts.length > 0 && (
          <div className="mb-12 sm:mb-16">
            <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold text-center lg:text-left">
              Latest Blogs
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto lg:mx-0 mt-4"></div>
          </div>
        )}

        {/* 2x2 Grid Layout */}
        {gridPosts.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
            {gridPosts.map((post, index) => (
              <article key={post.id} className="group">
                <Link href={`/ai-blog/${post.slug}`} className="block h-full">
                  <div className="bg-gradient-to-br from-gray-900/30 to-purple-900/10 rounded-xl lg:rounded-2xl border border-white/5 backdrop-blur-sm overflow-hidden transition-all duration-500 hover:border-purple-500/20 hover:shadow-xl hover:shadow-purple-500/5 h-full flex flex-col">
                    
                    {/* Image */}
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <BlogImage
                        src={post.image}
                        alt={post.title}
                        width={600}
                        height={400}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      
                      {/* Category badge */}
                      <div className="absolute top-3 left-3 sm:top-4 sm:left-4">
                        <span className="inline-flex items-center px-2.5 py-1 sm:px-3 sm:py-1.5 bg-black/60 backdrop-blur-sm text-purple-300 text-xs sm:text-sm font-medium rounded-full border border-purple-400/20">
                          {formatCategoryName(post.category)}
                        </span>
                      </div>

                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                    </div>

                    {/* Content */}
                    <div className="p-5 sm:p-6 lg:p-7 flex-1 flex flex-col">
                      
                      {/* Title with Arrow */}
                      <div className="flex items-start gap-3 mb-3 sm:mb-4">
                        <h3 className="text-white text-lg sm:text-xl lg:text-2xl font-bold leading-tight group-hover:text-purple-300 transition-colors duration-300 flex-1 line-clamp-2">
                          {post.title}
                        </h3>
                        <div className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-full h-full text-gray-400 group-hover:text-purple-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M7 17l9.2-9.2M17 17V7H7" />
                          </svg>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-gray-300 text-sm sm:text-base leading-relaxed line-clamp-3 mb-4 sm:mb-6 flex-1">
                        {post.description}
                      </p>

                      {/* Author and Date */}
                      <div className="flex items-center gap-3 mt-auto">
                        <BlogImage
                          src={post.author.avatar}
                          alt={post.author.name}
                          width={32}
                          height={32}
                          className="w-8 h-8 sm:w-9 sm:h-9 rounded-full object-cover border border-purple-500/20"
                        />
                        <div className="flex-1 min-w-0">
                          <p className="text-white font-medium text-sm truncate">
                            {post.author.name}
                          </p>
                          <div className="flex items-center gap-2 text-gray-400 text-xs">
                            <span>{post.date}</span>
                            <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                            <span>{post.readTime}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        )}

        {/* Show message if less than 5 posts total */}
        {blogPosts.length > 0 && blogPosts.length < 5 && (
          <div className="text-center mt-12 sm:mt-16">
            <p className="text-gray-400 text-base sm:text-lg">
              More amazing content coming soon!
            </p>
          </div>
        )}

      </div>
    </section>
  );
}