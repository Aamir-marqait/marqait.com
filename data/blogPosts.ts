export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  tags: string[];
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Getting Started with AI-Powered Growth",
    slug: "getting-started-ai-growth",
    excerpt: "Learn how to leverage artificial intelligence to accelerate your business growth and optimize operations.",
    content: "Full blog post content here...",
    author: "Marqait Team",
    date: "2024-01-15",
    readTime: "5 min read",
    image: "/blog/ai-growth.jpg",
    tags: ["AI", "Growth", "Business"]
  },
  {
    id: "2",
    title: "The Future of Business Automation",
    slug: "future-business-automation",
    excerpt: "Explore the latest trends in business automation and how they're reshaping industries.",
    content: "Full blog post content here...",
    author: "Marqait Team",
    date: "2024-01-10",
    readTime: "7 min read",
    image: "/blog/automation.jpg",
    tags: ["Automation", "Technology", "Future"]
  },
  {
    id: "3",
    title: "Building Scalable Growth Strategies",
    slug: "scalable-growth-strategies",
    excerpt: "Discover proven strategies for building scalable growth systems that adapt to your business needs.",
    content: "Full blog post content here...",
    author: "Marqait Team", 
    date: "2024-01-05",
    readTime: "6 min read",
    image: "/blog/growth-strategies.jpg",
    tags: ["Strategy", "Growth", "Scaling"]
  },
  {
    id: "4",
    title: "Data-Driven Decision Making",
    slug: "data-driven-decisions",
    excerpt: "Learn how to make better business decisions using data analytics and AI insights.",
    content: "Full blog post content here...",
    author: "Marqait Team",
    date: "2023-12-28",
    readTime: "8 min read", 
    image: "/blog/data-decisions.jpg",
    tags: ["Data", "Analytics", "Decisions"]
  },
  {
    id: "5",
    title: "Optimizing Customer Experience with AI",
    slug: "ai-customer-experience",
    excerpt: "Discover how AI can transform your customer experience and drive loyalty.",
    content: "Full blog post content here...",
    author: "Marqait Team",
    date: "2023-12-20",
    readTime: "5 min read",
    image: "/blog/customer-ai.jpg", 
    tags: ["AI", "Customer Experience", "CX"]
  }
];