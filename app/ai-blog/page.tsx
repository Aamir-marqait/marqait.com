import type { Metadata } from "next";
import AllBlogPostsSection from "@/components/blog/all-blog-posts-section";
import BlogHeroSection from "@/components/blog/blog-hero-section";
import BlogPostsSection from "@/components/blog/blog-posts-section";
import { getAllPublishedPosts } from "@/data/blogService";

// app/ai-blog/page.tsx
export const revalidate = 600; // refresh in background every 10 min

export const metadata: Metadata = {
  title: "Marqait AI Blogs | Artificial Intelligence Blog and Update",
  description: "Discover the latest AI marketing strategies, tips, and insights. Stay ahead with expert content on AI-powered marketing automation and digital growth.",
  keywords: "AI blog, artificial intelligence marketing, AI marketing strategies, marketing automation insights, digital marketing tips",
  alternates: {
    canonical: "https://www.marqait.com/ai-blog"
  },
  openGraph: {
    title: "Marqait AI Blogs | Artificial Intelligence Blog and Update",
    description: "Discover the latest AI marketing strategies, tips, and insights. Stay ahead with expert content on AI-powered marketing automation and digital growth.",
    url: "https://www.marqait.com/ai-blog",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Marqait AI Blogs | Artificial Intelligence Blog and Update",
    description: "Discover the latest AI marketing strategies, tips, and insights. Stay ahead with expert content on AI-powered marketing automation and digital growth."
  }
};

export default async function Blog() {
  // Fetch all published blog posts
  const blogPosts = await getAllPublishedPosts();

  return (
    <div className="min-h-screen bg-[#020103]">
      {/* <BlogHeroSection /> */}
      <BlogPostsSection blogPosts={blogPosts} />
      <AllBlogPostsSection blogPosts={blogPosts} />
    </div>
  );
}