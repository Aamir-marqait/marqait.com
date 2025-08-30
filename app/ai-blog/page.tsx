"use client";

import AllBlogPostsSection from "@/components/blog/all-blog-posts-section";
import BlogHeroSection from "@/components/blog/blog-hero-section";
import BlogPostsSection from "@/components/blog/blog-posts-section";
import { useSEO } from "@/utils/seo";

export default function Blog() {
  useSEO({
    canonical: "https://www.marqait.com/ai-blog",
  });

  return (
    <div className="min-h-screen bg-[#020103]">
      <BlogHeroSection />
      <BlogPostsSection />
      <AllBlogPostsSection />
    </div>
  );
}
