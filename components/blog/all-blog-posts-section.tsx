'use client';
import Link from "next/link";
import Image from "next/image";
import { TransformedBlogPost } from "../../data/blogService";
import { useState, useMemo, useEffect } from "react";

interface AllBlogPostsSectionProps {
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

export default function AllBlogPostsSection({ blogPosts }: AllBlogPostsSectionProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isLoading, setIsLoading] = useState(false);

  // Extract unique categories from blog posts
  const categories = useMemo(() => {
    const uniqueCategories = [...new Set(blogPosts.map(post => post.category))];
    return [
      { slug: 'all', name: 'All' },
      ...uniqueCategories.map(cat => ({
        slug: cat,
        name: formatCategoryName(cat)
      }))
    ];
  }, [blogPosts]);

  // Filter blogs based on search and category
  const filteredBlogs = useMemo(() => {
    let filtered = blogPosts;

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(post => post.category === selectedCategory);
    }

    // Filter by search term
    if (searchTerm.trim()) {
      filtered = filtered.filter(post =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    return filtered;
  }, [blogPosts, selectedCategory, searchTerm]);

  // Simulate loading effect when filters change
  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 300);
    return () => clearTimeout(timer);
  }, [selectedCategory, searchTerm]);

  if (!blogPosts || blogPosts.length === 0) {
    return (
      <section className="relative bg-[#020103] py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center py-20">
            <h2 className="text-white text-4xl font-bold mb-6">No Blog Posts Available</h2>
            <p className="text-gray-400 text-lg">Check back soon for amazing content!</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative bg-[#020103] py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-white text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Explore Our <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">AI Insights</span>
          </h2>
          <p className="text-gray-300 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
            Discover the latest trends, tools, and strategies in artificial intelligence and marketing automation
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-8 sm:mb-12">
          <div className="relative max-w-2xl mx-auto">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <svg
                className="h-5 w-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search articles..."
              className="w-full pl-12 pr-4 py-4 bg-gray-900/50 border border-gray-700/50 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 backdrop-blur-sm text-lg"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-white transition-colors"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="mb-12 sm:mb-16">
          <div className="flex items-center justify-center">
            <div className="overflow-x-auto scrollbar-hide">
              <div className="flex gap-2 sm:gap-3 min-w-max px-4 lg:px-0">
                {categories.map((category) => (
                  <button
                    key={category.slug}
                    onClick={() => setSelectedCategory(category.slug)}
                    className={`px-6 py-3 rounded-full font-medium transition-all duration-300 whitespace-nowrap text-sm sm:text-base ${
                      selectedCategory === category.slug
                        ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/25 transform scale-105'
                        : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:text-white border border-gray-700/30'
                    }`}
                  >
                    {category.name}
                    {category.slug !== 'all' && (
                      <span className="ml-2 px-2 py-0.5 text-xs bg-white/10 rounded-full">
                        {blogPosts.filter(post => post.category === category.slug).length}
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Results Info */}
        <div className="mb-8 text-center">
          <p className="text-gray-400 text-sm sm:text-base">
            {isLoading ? (
              <span className="inline-flex items-center">
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Searching...
              </span>
            ) : (
              <>
                Showing <span className="text-purple-400 font-semibold">{filteredBlogs.length}</span> 
                {filteredBlogs.length === 1 ? ' article' : ' articles'}
                {searchTerm && (
                  <> for "<span className="text-white font-medium">{searchTerm}</span>"</>
                )}
                {selectedCategory !== 'all' && (
                  <> in <span className="text-purple-400 font-medium">{formatCategoryName(selectedCategory)}</span></>
                )}
              </>
            )}
          </p>
        </div>

        {/* Blog Posts Grid */}
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="animate-pulse">
                <div className="bg-gray-800/30 rounded-2xl h-80"></div>
              </div>
            ))}
          </div>
        ) : filteredBlogs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {filteredBlogs.map((post, index) => (
              <article 
                key={post.id} 
                className="group h-full"
                style={{ 
                  animationDelay: `${index * 100}ms`,
                  animation: 'fadeInUp 0.6s ease-out forwards'
                }}
              >
                <Link href={`/ai-blog/${post.slug}`} className="block h-full">
                  <div className="bg-gradient-to-br from-gray-900/40 to-gray-800/20 rounded-2xl border border-gray-700/30 backdrop-blur-sm overflow-hidden transition-all duration-500 hover:border-purple-500/30 hover:shadow-2xl hover:shadow-purple-500/10 hover:transform hover:scale-105 h-full flex flex-col">
                    
                    {/* Image */}
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <BlogImage
                        src={post.image}
                        alt={post.title}
                        width={600}
                        height={400}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      
                      {/* Category Badge */}
                      <div className="absolute top-4 left-4">
                        <span className="inline-flex items-center px-3 py-1.5 bg-black/60 backdrop-blur-sm text-purple-300 text-sm font-medium rounded-full border border-purple-400/20">
                          {formatCategoryName(post.category)}
                        </span>
                      </div>

                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>

                    {/* Content */}
                    <div className="p-6 lg:p-7 flex-1 flex flex-col">
                      
                      {/* Title with Arrow */}
                      <div className="flex items-start gap-3 mb-4">
                        <h3 className="text-white text-lg sm:text-xl font-bold leading-tight group-hover:text-purple-300 transition-colors duration-300 flex-1 line-clamp-2">
                          {post.title}
                        </h3>
                        <div className="flex-shrink-0 w-6 h-6 opacity-50 group-hover:opacity-100 group-hover:text-purple-300 transition-all duration-300">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-full h-full group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"
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
                      <p className="text-gray-300 text-sm sm:text-base leading-relaxed line-clamp-3 mb-6 flex-1">
                        {post.description}
                      </p>

                      {/* Author and Date */}
                      <div className="flex items-center justify-between pt-4 border-t border-gray-700/30 mt-auto">
                        <div className="flex items-center gap-3">
                          <BlogImage
                            src={post.author.avatar}
                            alt={post.author.name}
                            width={32}
                            height={32}
                            className="w-8 h-8 rounded-full object-cover border border-purple-500/20"
                          />
                          <div>
                            <p className="text-white font-medium text-sm">
                              {post.author.name}
                            </p>
                            <p className="text-gray-400 text-xs">
                              {post.date}
                            </p>
                          </div>
                        </div>
                        <div className="text-xs text-gray-400 bg-gray-800/50 px-2 py-1 rounded-full">
                          {post.readTime}
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className="text-center py-20">
            <div className="max-w-md mx-auto">
              <div className="w-24 h-24 mx-auto mb-6 bg-gray-800/50 rounded-full flex items-center justify-center">
                <svg
                  className="w-12 h-12 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <h3 className="text-white text-xl font-semibold mb-2">No articles found</h3>
              <p className="text-gray-400 mb-6">
                {searchTerm 
                  ? `No articles match "${searchTerm}"`
                  : `No articles available in ${formatCategoryName(selectedCategory)}`
                }
              </p>
              <div className="flex gap-3 justify-center">
                {searchTerm && (
                  <button
                    onClick={() => setSearchTerm('')}
                    className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors text-sm"
                  >
                    Clear search
                  </button>
                )}
                {selectedCategory !== 'all' && (
                  <button
                    onClick={() => setSelectedCategory('all')}
                    className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors text-sm"
                  >
                    Show all articles
                  </button>
                )}
              </div>
            </div>
          </div>
        )}

      </div>

      {/* CSS for animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}