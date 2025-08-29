/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useParams } from "next/navigation";
import { notFound } from "next/navigation";
import Image from "next/image";
import { getPostBySlug, getRecentPosts } from "../../../data/blogPosts";
import BlogContactForm from "../../../components/blog/blog-contact-form";
import BlogSocialShare from "../../../components/blog/blog-social-share";

// Generate additional image based on blog post category/topic
const getAdditionalImage = (blogPost: any) => {
  const imageMap: Record<string, string> = {
    "AI & Technology": "/blog/add2.png",
    "AI & Marketing": "/blog/recent2.png",
    "Data & Analytics": "/blog/add2.png",
    "Customer Experience": "/blog/add3.jpg",
    "Growth Strategy": "/blog/add4.png",
    Automation: "/blog/add5.webp",
    "Business Strategy": "/blog/add6.png",
    "Case Studies": "/blog/dd7.webp",
  };

  return imageMap[blogPost.category.trim()] || "/blog/post.jpg";
};

// Generate additional content based on blog post category/topic
const getAdditionalContent = (blogPost: any) => {
  // Special content for AI marketing tools blog post
  if (blogPost.slug === "ai-marketing-tools-for-small-business") {
    return [
      `<h2 style="font-size: 28px; margin-top: 24px; margin-bottom: 16px;"><strong>AI Marketing Tool for Small Business</strong></h2>

<h3 style="font-size: 20px; margin-top: 24px; margin-bottom: 16px;">1. Marqait AI - Complete Marketing Automation Platform</h3>
<p style=" margin-top: 10px; margin-bottom: 10px;"><strong>Best for:</strong> All-in-one AI marketing automation</p>
<p style=" margin-top: 10px; margin-bottom: 10px;">Marqait AI is a comprehensive marketing automation platform designed specifically for small businesses. It combines content generation, social media management, email marketing, and customer analytics in one powerful tool. The AI can create personalized marketing campaigns, schedule posts across multiple platforms, and analyze customer behavior to optimize engagement.</p>
<p style=" margin-top: 10px; margin-bottom: 10px;"><strong>Key Features:</strong></p>
<p>✔ AI-powered content generation for social media and emails<br/>
✔ Automated customer segmentation and targeting<br/>
✔ Multi-platform social media scheduling<br/>
✔ Real-time analytics and performance insights<br/>
✔ Integration with major CRM systems</p>
<p style=" margin-top: 10px; margin-bottom: 10px;"><strong>Pricing:</strong> Starting at $49/month</p>

<h3 style="font-size: 20px; margin-top: 24px; margin-bottom: 16px;">2. HubSpot AI - Smart CRM and Marketing Hub</h3>
<p style=" margin-top: 10px; margin-bottom: 10px;"><strong>Best for:</strong> CRM integration and lead nurturing</p>
<p style=" margin-top: 10px; margin-bottom: 10px;">HubSpot's AI features help small businesses automate lead scoring, personalize email campaigns, and predict customer behavior. The platform uses machine learning to identify the best times to contact prospects and suggests the most effective content for different audience segments.</p>
<p style=" margin-top: 10px; margin-bottom: 10px;"><strong>Key Features:</strong></p>
<p>✔ AI-powered lead scoring and qualification<br/>
✔ Predictive analytics for sales forecasting<br/>
✔ Automated email sequences and personalization<br/>
✔ Content optimization suggestions<br/>
✔ Smart chatbots for customer support</p>
<p style=" margin-top: 10px; margin-bottom: 10px;"><strong>Pricing:</strong> Free plan available, paid plans start at $20/month</p>

<h3 style="font-size: 20px; margin-top: 24px; margin-bottom: 16px;">3. Mailchimp AI - Email Marketing Intelligence</h3>
<p style=" margin-top: 10px; margin-bottom: 10px;"><strong>Best for:</strong> AI-driven email campaigns</p>
<p style=" margin-top: 10px; margin-bottom: 10px;">Mailchimp's AI capabilities help small businesses create more effective email campaigns through predictive analytics, automated A/B testing, and personalized content recommendations. The platform can predict the best send times and optimize subject lines for higher open rates.</p>
<p style=" margin-top: 10px; margin-bottom: 10px;"><strong>Key Features:</strong></p>
<p style=" margin-top: 10px; margin-bottom: 10px;">✔ Predictive analytics for audience insights<br/>
✔ Automated A/B testing for campaigns<br/>
✔ AI-generated subject line suggestions<br/>
✔ Smart segmentation based on behavior<br/>
✔ Personalized product recommendations</p>
<p style=" margin-top: 10px; margin-bottom: 10px;"><strong>Pricing:</strong> Free plan for up to 500 contacts, paid plans start at $13/month</p>

<h3 style="font-size: 20px; margin-top: 24px; margin-bottom: 16px;">4. Buffer AI - Social Media Content Creation</h3>
<p style=" margin-top: 10px; margin-bottom: 10px;"><strong>Best for:</strong> Social media content generation and scheduling</p>
<p>Buffer's AI assistant helps small businesses create engaging social media content, suggests optimal posting times, and analyzes performance across different platforms. The tool can generate captions, hashtags, and even visual content ideas based on your brand voice.</p>
<p style=" margin-top: 10px; margin-bottom: 10px;"><strong>Key Features:</strong></p>
<p style=" margin-top: 10px; margin-bottom: 10px;">✔ AI-powered content creation and caption writing<br/>
✔ Optimal posting time recommendations<br/>
✔ Hashtag suggestions and trend analysis<br/>
✔ Multi-platform scheduling and publishing<br/>
✔ Performance analytics and insights</p>
<p style=" margin-top: 10px; margin-bottom: 10px;"><strong>Pricing:</strong> Free plan available, paid plans start at $6/month per channel</p>

<h3 style="font-size: 20px; margin-top: 24px; margin-bottom: 16px;">5. Jasper AI - Content Marketing Powerhouse</h3>
<p style=" margin-top: 10px; margin-bottom: 10px;"><strong>Best for:</strong> Blog posts, ads, and marketing copy</p>
<p style=" margin-top: 10px; margin-bottom: 10px;">Jasper AI specializes in creating high-quality marketing content, from blog posts and social media captions to ad copy and email campaigns. The platform can maintain your brand voice across all content and adapt to different marketing channels.</p>
<p style=" margin-top: 10px; margin-bottom: 10px;"><strong>Key Features:</strong></p>
<p style=" margin-top: 10px; margin-bottom: 10px;">✔ Long-form content generation for blogs and articles<br/>
✔ Brand voice training and consistency<br/>
✔ Multiple content templates for different use cases<br/>
✔ Plagiarism checker and fact-checking<br/>
✔ Team collaboration features</p>
<p style=" margin-top: 10px; margin-bottom: 10px;"><strong>Pricing:</strong> Starting at $49/month</p>

<h3 style="font-size: 20px; margin-top: 24px; margin-bottom: 16px;">6. Canva AI - Visual Content Creation</h3>
<p style=" margin-top: 10px; margin-bottom: 10px;"><strong>Best for:</strong> AI-powered graphic design and visual content</p>
<p style=" margin-top: 10px; margin-bottom: 10px;">Canva's AI features help small businesses create professional-looking graphics, social media posts, and marketing materials without design skills. The Magic Design feature can generate entire design suites based on a simple text prompt.</p>
<p style=" margin-top: 10px; margin-bottom: 10px;"><strong>Key Features:</strong></p>
<p style=" margin-top: 10px; margin-bottom: 10px;">✔ AI-powered design generation from text prompts<br/>
✔ Brand kit integration for consistent visuals<br/>
✔ Automated background removal and image editing<br/>
✔ Video creation with AI-powered templates<br/>
✔ Smart resize for different social media platforms</p>
<p style=" margin-top: 10px; margin-bottom: 10px;"><strong>Pricing:</strong> Free plan available, Canva Pro starts at $15/month</p>

<h3 style="font-size: 20px; margin-top: 24px; margin-bottom: 16px;">7. Hootsuite AI - Social Media Management</h3>
<p style=" margin-top: 10px; margin-bottom: 10px;"><strong>Best for:</strong> Multi-platform social media management</p>
<p style=" margin-top: 10px; margin-bottom: 10px;">Hootsuite's AI capabilities include content suggestions, optimal posting times, and automated responses to customer inquiries. The platform can analyze social media trends and suggest content that's likely to perform well with your audience.</p>
<p style=" margin-top: 10px; margin-bottom: 10px;"><strong>Key Features:</strong></p>
<p style=" margin-top: 10px; margin-bottom: 10px;">✔ AI-powered content suggestions and curation<br/>
✔ Automated scheduling based on audience activity<br/>
✔ Social listening and sentiment analysis<br/>
✔ Chatbot integration for customer service<br/>
✔ Performance analytics and reporting</p>
<p style=" margin-top: 10px; margin-bottom: 10px;"><strong>Pricing:</strong> Starting at $99/month</p>

<h3 style="font-size: 20px; margin-top: 24px; margin-bottom: 16px;">8. Drift AI - Conversational Marketing</h3>
<p style=" margin-top: 10px; margin-bottom: 10px;"><strong>Best for:</strong> AI chatbots and lead qualification</p>
<p style=" margin-top: 10px; margin-bottom: 10px;">Drift's AI chatbots can engage website visitors, qualify leads, and even book meetings automatically. The platform uses natural language processing to have meaningful conversations with prospects and customers.</p>
<p style=" margin-top: 10px; margin-bottom: 10px;"><strong>Key Features:</strong></p>
<p style=" margin-top: 10px; margin-bottom: 10px;">✔ AI-powered chatbots for lead qualification<br/>
✔ Automated meeting scheduling and booking<br/>
✔ Real-time visitor identification and targeting<br/>
✔ Integration with CRM and marketing tools<br/>
✔ Conversation analytics and insights</p>
<p style=" margin-top: 10px; margin-bottom: 10px;"><strong>Pricing:</strong> Free plan available, paid plans start at $50/month</p>

<h3 style="font-size: 20px; margin-top: 24px; margin-bottom: 16px;">9. Copy.ai - Marketing Copy Generator</h3>
<p style=" margin-top: 10px; margin-bottom: 10px;"><strong>Best for:</strong> Sales copy and marketing materials</p>
<p style=" margin-top: 10px; margin-bottom: 10px;">Copy.ai helps small businesses create compelling sales copy, ad headlines, product descriptions, and marketing emails. The platform offers templates for various marketing needs and can adapt to different brand tones.</p>
<p style=" margin-top: 10px; margin-bottom: 10px;"><strong>Key Features:</strong></p>
<p style=" margin-top: 10px; margin-bottom: 10px;">✔ AI-generated sales copy and ad headlines<br/>
✔ Product description automation<br/>
✔ Email marketing templates and sequences<br/>
✔ Social media caption generation<br/>
✔ Blog post outlines and content ideas</p>
<p style=" margin-top: 10px; margin-bottom: 10px;"><strong>Pricing:</strong> Free plan available, paid plans start at $49/month</p>

<h3 style="font-size: 20px; margin-top: 24px; margin-bottom: 16px;">10. Klaviyo AI - Email and SMS Marketing</h3>
<p style=" margin-top: 10px; margin-bottom: 10px;"><strong>Best for:</strong> E-commerce email marketing automation</p>
<p style=" margin-top: 10px; margin-bottom: 10px;">Klaviyo's AI features are particularly powerful for e-commerce businesses, offering predictive analytics, automated product recommendations, and personalized email campaigns based on customer behavior and purchase history.</p>
<p style=" margin-top: 10px; margin-bottom: 10px;"> <strong>Key Features:</strong></p>
<p style=" margin-top: 10px; margin-bottom: 10px;">✔ Predictive analytics for customer lifetime value<br/>
✔ Automated product recommendations in emails<br/>
✔ Behavioral trigger campaigns<br/>
✔ Advanced segmentation based on purchase data<br/>
✔ A/B testing with statistical significance</p>
<p style=" margin-top: 10px; margin-bottom: 10px;"><strong>Pricing:</strong> Free plan available, paid plans start at $20/month</p>

<h2 style="font-size: 28px; margin-top: 24px; margin-bottom: 16px;"><strong>Conclusion</strong></h2>
<p style=" margin-top: 10px; margin-bottom: 10px;">These 10 AI marketing tools represent the best options for small businesses in 2025. Whether you're looking to automate your email campaigns, create better content, or improve customer engagement, there's an AI solution that can help you achieve your marketing goals more efficiently and effectively.</p>

<p style=" margin-top: 10px; margin-bottom: 10px;">The key to success with AI marketing tools is to start small, focus on one or two areas where you need the most help, and gradually expand your use of AI as you become more comfortable with the technology. Remember, AI tools are meant to enhance your marketing efforts, not replace the human creativity and strategic thinking that makes your brand unique.</p>`,
    ];
  }

  const baseContent: Record<string, string[]> = {
    "AI & Technology": [
      "Strategic AI implementation represents a fundamental shift in how businesses approach problem-solving and innovation. Organizations that successfully integrate AI into their strategic framework don't just adopt technology—they reimagine their entire value proposition. This transformation requires a comprehensive understanding of both current capabilities and future potential, coupled with a clear roadmap that aligns AI initiatives with broader business objectives. The most successful companies treat AI not as a standalone solution but as an enabler that amplifies human intelligence and creativity, creating new opportunities for growth and competitive differentiation in an increasingly digital marketplace.",
    ],
    "Data & Analytics": [
      "The evolution from data collection to data-driven decision making represents one of the most significant transformations in modern business operations. While organizations have been gathering information for decades, the ability to extract meaningful insights and translate them into actionable strategies has been revolutionized by AI and machine learning technologies. Today's business leaders are discovering that the true value of data lies not in its volume, but in the quality of insights it can generate and the speed at which those insights can be applied to real-world challenges. This shift from intuition-based to evidence-based decision making is creating more resilient, adaptive, and successful organizations across every industry sector.",
    ],
    "Customer Experience": [
      "The modern customer experience landscape has been fundamentally transformed by AI technologies that enable unprecedented levels of personalization and responsiveness. Organizations are discovering that successful customer engagement in the digital age requires a delicate balance between technological efficiency and human touch, where AI handles the complexity of real-time personalization while human agents focus on building meaningful relationships and solving complex problems. This evolution has created new expectations among consumers who now demand not just quality products and services, but intelligent, anticipatory experiences that adapt to their preferences, behaviors, and contexts in real-time across all touchpoints and channels.",
    ],
    "Growth Strategy": [
      "Real-world AI implementations across diverse industries reveal a consistent pattern: success comes not from the technology itself, but from the organizational commitment to transformation and the strategic approach to change management. These case studies demonstrate that the most impactful AI deployments are those that address specific business challenges with measurable outcomes, rather than implementing AI for its own sake. Companies that achieve significant ROI from AI investments typically share common characteristics including strong leadership commitment, comprehensive employee training programs, robust data infrastructure, and a culture that embraces experimentation and continuous learning from both successes and failures.",
    ],
    Automation: [
      "The relationship between automation and human workforce represents one of the most nuanced and important conversations in modern business strategy. Rather than viewing AI and automation as replacement technologies, forward-thinking organizations are discovering that the most powerful applications combine machine efficiency with human creativity, emotional intelligence, and critical thinking. This collaborative approach to human-AI interaction is creating new job categories, enhancing existing roles, and enabling employees to focus on higher-value activities that require uniquely human skills such as strategic thinking, relationship building, and creative problem-solving, ultimately leading to more fulfilling and productive work environments.",
    ],
  };

  return (
    baseContent[blogPost.category.trim()] || [
      "The rapid evolution of artificial intelligence continues to reshape the business landscape, creating new opportunities for organizations willing to embrace change and adapt their strategies to leverage these powerful technologies. As AI becomes more accessible and sophisticated, the competitive advantage will increasingly shift from simply having access to AI tools to developing the organizational capabilities, cultural mindset, and strategic vision necessary to apply these technologies effectively in solving real business challenges and creating meaningful value for customers, employees, and stakeholders.",
    ]
  );
};

export default function BlogPost() {
  const params = useParams();
  const slug = params?.slug as string;

  const blogPost = getPostBySlug(slug);

  if (!blogPost) {
    notFound();
  }

  const recentPosts = getRecentPosts(blogPost?.id);
  const additionalContent = blogPost ? getAdditionalContent(blogPost) : [];
  const additionalImage = blogPost
    ? getAdditionalImage(blogPost)
    : "/blog/post.jpg";

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
                  {blogPost.category.toUpperCase()}
                </span>
              </div>

              {/* Title */}
              <h1
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
              </h1>

              {/* Description */}
              <p
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
              </p>

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
              <div className="space-y-4 sm:space-y-5 lg:space-y-6 blog-content">
                <div
                  className="text-white font-inter font-normal leading-relaxed
                  text-sm 
                  sm:text-base sm:leading-[26px]
                  md:text-lg md:leading-[28px]
                  lg:text-[18px] lg:leading-[30px]"
                  style={{
                    fontFeatureSettings: "'liga' off",
                  }}
                  dangerouslySetInnerHTML={{ __html: blogPost.content }}
                />
              </div>

              {/* Additional Image */}
              <div
                className="w-full flex-shrink-0 rounded-lg overflow-hidden relative
                h-48 sm:h-64 md:h-80 lg:h-[380px]
                max-w-full lg:max-w-[701px]"
              >
                <Image
                  src={additionalImage}
                  alt={`${blogPost.category} related image`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Additional Content */}
              <div className="space-y-4 sm:space-y-5 lg:space-y-6">
                {additionalContent.map((paragraph, index) => (
                  <div
                    key={index}
                    className="text-white font-inter font-normal leading-relaxed
                    text-sm 
                    sm:text-base sm:leading-[26px]
                    md:text-lg md:leading-[28px]
                    lg:text-[18px] lg:leading-[30px]"
                    style={{
                      fontFeatureSettings: "'liga' off",
                    }}
                    dangerouslySetInnerHTML={{ __html: paragraph }}
                  />
                ))}
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
                        href={`/blog/${post.slug}`}
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
                              {post.category}
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
