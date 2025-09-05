export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: {
    name: string;
    avatar: string;
  };
  date: string;
  readTime: string;
  image: string;
  tags: string[];
  category: string;
  description: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "0",
    title: "12 Best AI Tools for Social Media in 2025",
    slug: "best-ai-tools-social-media-2025",
    excerpt:
      "Discover the 12 best AI tools for social media in 2025 to create posts, automate scheduling, boost engagement, and grow your business efficiently.",
    content: `<h1>12 Best AI Tools for Social Media in 2025</h1>

<p style="margin-top: 24px; margin-bottom: 16px;">Social media marketing is evolving rapidly, and AI is at the center of this transformation. From generating content to scheduling posts and engaging audiences, AI tools help businesses save time while delivering better results.</p>

<p style="margin-top: 24px; margin-bottom: 16px;">If your business wants to level up its social strategy in 2025, adopting AI tools is no longer optional — it's essential. From AI social media post generators to AI-powered managers that optimize your entire presence, these tools can completely transform the way you work.</p>

<p style="margin-top: 24px; margin-bottom: 16px;">Here's a clear, practical guide to the 12 best AI tools for social media in 2025.</p>

<h2 style="font-size: 28px; margin-top: 24px; margin-bottom: 16px;"><strong>What is an AI tool for Social Media?</strong></h2>

<p style="margin-top: 24px; margin-bottom: 16px;">AI tools use artificial intelligence technologies like natural language processing, machine learning, and generative AI to improve social media marketing. These tools can:</p>

<p style="margin-top: 24px; margin-bottom: 16px;">✔ Generate social media posts automatically<br/>
✔ Suggest hashtags and optimize posting times<br/>
✔ Create engaging visuals and videos<br/>
✔ Personalize interactions with followers<br/>
✔ Analyze trends and competitive landscapes</p>

<p style="margin-top: 24px; margin-bottom: 16px;">By using AI, businesses can focus on strategy and creativity while automating repetitive manual tasks — resulting in better productivity and stronger outcomes.</p>`,
    author: {
      name: "Marqait Team",
      avatar: "/user.jpg",
    },
    date: "2025-09-05",
    readTime: "10 min read",
    image: "/blog/12So.png",
    tags: ["AI", "Social Media", "Marketing", "Tools"],
    category: "AI & Social Media",
    description:
      "Discover the 12 best AI tools for social media in 2025 to create posts, automate scheduling, boost engagement, and grow your business efficiently.",
  },
  {
    id: "1",
    title: "10 Best AI Marketing Tools for Small Business in 2025",
    slug: "ai-marketing-tools-for-small-business",
    excerpt:
      "Discover the 10 best AI marketing tools some of the business owners use to grow their small businesses. Learn how artificial intelligence helps.",
    content: `<p>Stay ahead of the competition with powerful AI-driven marketing solutions. From automating social media posts to running data-backed ad campaigns, these AI tools help small businesses save time, boost engagement, and drive more sales with ease.</p>

<p style=" margin-top: 24px; margin-bottom: 16px;">✔ Smart automation for marketing tasks<br/>
✔ Affordable tools designed for small businesses<br/>
✔ Scalable solutions to grow your brand in 2025</p>

<p>Discover the 10 best AI marketing tools some of the business owners use to grow their small businesses. Learn how artificial intelligence helps.</p>


<h2 style="font-size: 28px; margin-top: 24px; margin-bottom: 16px;"><strong>What are AI marketing tools for Small Business?</strong></h2>

<p  style=" margin-top: 24px; margin-bottom: 16px;">AI marketing tools are software platforms powered by artificial intelligence that help small businesses automate and improve their marketing efforts. These tools can handle tasks like content creation, social media scheduling, email campaigns, customer engagement, and data-driven insights—all while saving time and reducing manual work.</p>

<p style=" margin-top: 24px; margin-bottom: 16px;">In the past, marketing automation relied on simple machine learning, but today's AI tools use advanced models like ChatGPT, Claude, and Gemini to deliver smarter results. For example, they can generate personalized emails, suggest the best time to post on social media, or analyze customer behavior to predict buying patterns.</p>

<p style=" margin-top: 24px; margin-bottom: 16px;">For small businesses, AI marketing tools are especially valuable because they make enterprise-level strategies affordable and accessible. Instead of needing a large marketing team, small business owners can use AI to reach more customers, create better campaigns, and grow their brand with fewer resources.</p>`,
    author: {
      name: "Marqait Team",
      avatar: "/user.jpg",
    },
    date: "2025-01-20",
    readTime: "12 min read",
    image: "/blog/1.png",
    tags: ["AI", "Marketing", "Small Business", "Automation"],
    category: "AI & Marketing",
    description:
      "Discover the 10 best AI marketing tools some of the business owners use to grow their small businesses. Learn how artificial intelligence helps.",
  },
  {
    id: "2",
    title: "Getting Started with AI-Powered Growth",
    slug: "getting-started-ai-growth",
    excerpt:
      "Learn how to leverage artificial intelligence to accelerate your business growth and optimize operations.",
    content: "Full blog post content here...",
    author: {
      name: "Marqait Team",
      avatar: "/user.jpg",
    },
    date: "2024-01-15",
    readTime: "5 min read",
    image: "/blog/blog1.jpg",
    tags: ["AI", "Growth", "Business"],
    category: "AI & Technology",
    description:
      "Learn how to leverage artificial intelligence to accelerate your business growth and optimize operations with practical strategies and real-world examples.",
  },
  {
    id: "3",
    title: "The Future of Business Automation",
    slug: "future-business-automation",
    excerpt:
      "Explore the latest trends in business automation and how they're reshaping industries.",
    content: "Full blog post content here...",
    author: {
      name: "Marqait Team",
      avatar: "/user.jpg",
    },
    date: "2024-01-10",
    readTime: "7 min read",
    image: "/blog/blog2.png",
    tags: ["Automation", "Technology", "Future"],
    category: "Automation",
    description:
      "Explore the latest trends in business automation and how they're reshaping industries with cutting-edge technology solutions.",
  },
  {
    id: "4",
    title: "Building Scalable Growth Strategies",
    slug: "scalable-growth-strategies",
    excerpt:
      "Discover proven strategies for building scalable growth systems that adapt to your business needs.",
    content: "Full blog post content here...",
    author: {
      name: "Marqait Team",
      avatar: "/user.jpg",
    },
    date: "2024-01-05",
    readTime: "6 min read",
    image: "/blog/blog3.jpg",
    tags: ["Strategy", "Growth", "Scaling"],
    category: "Growth Strategy",
    description:
      "Discover proven strategies for building scalable growth systems that adapt to your business needs and drive sustainable success.",
  },
  {
    id: "5",
    title: "Data-Driven Decision Making",
    slug: "data-driven-decisions",
    excerpt:
      "Learn how to make better business decisions using data analytics and AI insights.",
    content: "Full blog post content here...",
    author: {
      name: "Marqait Team",
      avatar: "/user.jpg",
    },
    date: "2023-12-28",
    readTime: "8 min read",
    image: "/blog/blog4.webp",
    tags: ["Data", "Analytics", "Decisions"],
    category: "Data & Analytics",
    description:
      "Learn how to make better business decisions using data analytics and AI insights to drive measurable results.",
  },
  {
    id: "6",
    title: "Optimizing Customer Experience with AI",
    slug: "ai-customer-experience",
    excerpt:
      "Discover how AI can transform your customer experience and drive loyalty.",
    content: "Full blog post content here...",
    author: {
      name: "Marqait Team",
      avatar: "/user.jpg",
    },
    date: "2023-12-20",
    readTime: "5 min read",
    image: "/blog/blog5.jpeg",
    tags: ["AI", "Customer Experience", "CX"],
    category: "Customer Experience",
    description:
      "Discover how AI can transform your customer experience and drive loyalty through personalized interactions.",
  },
];

// Utility functions
export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getRecentPosts(
  excludeId?: string,
  limit: number = 4
): BlogPost[] {
  return blogPosts.filter((post) => post.id !== excludeId).slice(0, limit);
}
