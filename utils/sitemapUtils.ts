import fs from 'fs';
import path from 'path';

export interface SitemapUrl {
  url: string;
  lastModified: string;
  changeFrequency: 'daily' | 'weekly' | 'monthly' | 'yearly';
  priority: number;
}

export interface SitemapItem {
  title: string;
  url: string;
  description: string;
}

export interface SitemapSection {
  title: string;
  items: SitemapItem[];
}

// Function to recursively scan directory for page.tsx files
function scanDirectory(dirPath: string, baseUrl: string = ''): string[] {
  const routes: string[] = [];
  
  try {
    const items = fs.readdirSync(dirPath, { withFileTypes: true });
    
    for (const item of items) {
      const fullPath = path.join(dirPath, item.name);
      
      if (item.isDirectory()) {
        // Skip certain directories
        if (['api', 'studio', 'components', '[...nextauth]'].includes(item.name)) {
          continue;
        }
        
        // Handle dynamic routes (but skip them for sitemap)
        if (item.name.startsWith('[') && item.name.endsWith(']')) {
          continue;
        }
        
        // Recursively scan subdirectories
        const subRoutes = scanDirectory(fullPath, `${baseUrl}/${item.name}`);
        routes.push(...subRoutes);
      } else if (item.name === 'page.tsx') {
        // Found a page, add the route
        const route = baseUrl || '/';
        routes.push(route);
      }
    }
  } catch (error) {
    console.error(`Error scanning directory ${dirPath}:`, error);
  }
  
  return routes;
}

// Generate sitemap URLs from app directory
export function generateSitemapUrls(): SitemapUrl[] {
  const appDir = path.join(process.cwd(), 'app');
  const routes = scanDirectory(appDir);
  
  const baseUrl = 'https://www.marqait.com';
  const currentDate = new Date().toISOString().split('T')[0] + 'T00:00:00+00:00';
  
  return routes.map(route => {
    const url = route === '/' ? baseUrl : `${baseUrl}${route}`;
    
    // Set priority and change frequency based on route
    let priority = 0.5;
    let changeFrequency: 'daily' | 'weekly' | 'monthly' | 'yearly' = 'monthly';
    
    if (route === '/') {
      priority = 1.0;
      changeFrequency = 'daily';
    } else if (route.includes('/ai-') || route === '/products' || route === '/ai-tools') {
      priority = 0.8;
      changeFrequency = 'weekly';
    } else if (route === '/ai-blog' || route === '/blog') {
      priority = 0.9;
      changeFrequency = 'weekly';
    } else if (route === '/contact' || route === '/contacts') {
      priority = 0.9;
      changeFrequency = 'weekly';
    } else if (route === '/privacy-policy' || route === '/terms') {
      priority = 0.5;
      changeFrequency = 'monthly';
    }
    
    return {
      url,
      lastModified: currentDate,
      changeFrequency,
      priority
    };
  });
}

// Generate structured sitemap sections for the sitemap page
export function generateSitemapSections(): SitemapSection[] {
  const appDir = path.join(process.cwd(), 'app');
  const routes = scanDirectory(appDir);
  
  const mainPages: SitemapItem[] = [];
  const aiTools: SitemapItem[] = [];
  const aiSolutions: SitemapItem[] = [];
  const otherPages: SitemapItem[] = [];
  
  // Define page metadata
  const pageMetadata: Record<string, { title: string; description: string }> = {
    '/': {
      title: 'Home',
      description: 'Marketing automation platform for everyone - Transform your business with AI-powered growth solutions'
    },
    '/about': {
      title: 'About',
      description: 'Learn more about Marqait AI and our mission to revolutionize marketing automation'
    },
    '/contact': {
      title: 'Contact Us',
      description: 'Get in touch with our team - we\'re here to help you grow your business with AI marketing automation'
    },
    '/contacts': {
      title: 'Contact Us',
      description: 'Get in touch with our team - we\'re here to help you grow your business with AI marketing automation'
    },
    '/ai-blog': {
      title: 'AI Blog',
      description: 'Read the latest insights, tips, and updates about AI marketing automation'
    },
    '/blog': {
      title: 'Insights',
      description: 'Read the latest insights, tips, and updates about AI marketing automation'
    },
    '/ai-tools': {
      title: 'AI Tools',
      description: 'Discover our comprehensive suite of AI-powered marketing tools'
    },
    '/products': {
      title: 'Products',
      description: 'Explore our AI-powered marketing automation products'
    },
    '/ai-logo-generator': {
      title: 'AI Logo Generator',
      description: 'Create professional logos in seconds with AI-powered logo generation'
    },
    '/ai-social-media-post-generator': {
      title: 'AI Social Media Post Generator',
      description: 'Generate engaging social media posts with AI-powered content creation'
    },
    '/ai-brandbook-generator': {
      title: 'AI BrandBook Generator',
      description: 'Create comprehensive brand books and guidelines with AI assistance'
    },
    '/ai-reel-generator': {
      title: 'AI Reels Generator',
      description: 'Generate engaging video reels and short-form content with AI'
    },
    '/ai-campaign-generator': {
      title: 'AI Campaign Generator',
      description: 'Create and optimize advertising campaigns with AI-powered insights'
    },
    '/ai-image-editor': {
      title: 'AI Image Editor',
      description: 'Advanced AI-powered image editing and optimization tools'
    },
    '/ai-solutions': {
      title: 'AI Solutions',
      description: 'Comprehensive AI marketing solutions for businesses of all sizes'
    },
    '/custom-ai-solutions': {
      title: 'Custom AI Solutions',
      description: 'Tailored AI solutions designed specifically for your business needs'
    },
    '/ai-for-healthcare': {
      title: 'AI For Healthcare',
      description: 'Specialized AI marketing solutions for healthcare organizations'
    },
    '/ai-for-startups': {
      title: 'AI For Startups',
      description: 'AI-powered marketing automation designed for growing startups'
    },
    '/ai-for-customer-service': {
      title: 'AI For Customer Service',
      description: 'Enhance customer service with AI-powered automation and insights'
    },
    '/ai-for-retails': {
      title: 'AI For Retails',
      description: 'AI marketing solutions tailored for retail and e-commerce businesses'
    },
    '/ai-agent-development': {
      title: 'AI Agent Development',
      description: 'Custom AI agent development for automated business processes'
    },
    '/ai-for-seo': {
      title: 'AI For SEO',
      description: 'AI-powered SEO optimization and content strategy solutions'
    },
    '/ai-for-ecommerce': {
      title: 'AI For E-Commerce',
      description: 'Comprehensive AI marketing solutions for e-commerce platforms'
    },
    '/growth-pods': {
      title: 'Growth Pods',
      description: 'Accelerate your business growth with our Growth Pods program'
    },
    '/privacy-policy': {
      title: 'Privacy Policy',
      description: 'Learn about how we protect and handle your personal information'
    },
    '/terms': {
      title: 'Terms of Service',
      description: 'Terms and conditions for using Marqait AI services'
    },
    '/user-data-deletion': {
      title: 'User Data Deletion',
      description: 'Information about user data deletion policies and procedures'
    },
    '/sitemap': {
      title: 'Site Map',
      description: 'Navigate through all Marqait AI pages and resources'
    }
  };
  
  // Categorize routes
  for (const route of routes) {
    const metadata = pageMetadata[route];
    if (!metadata) continue;
    
    const item: SitemapItem = {
      title: metadata.title,
      url: route,
      description: metadata.description
    };
    
    if (['/contact', '/contacts', '/', '/about', '/ai-blog', '/blog'].includes(route)) {
      mainPages.push(item);
    } else if (route.startsWith('/ai-') && 
               ['ai-logo-generator', 'ai-social-media-post-generator', 'ai-brandbook-generator', 
                'ai-reel-generator', 'ai-campaign-generator', 'ai-image-editor'].includes(route.replace('/', ''))) {
      aiTools.push(item);
    } else if (route.startsWith('/ai-') || route === '/custom-ai-solutions') {
      aiSolutions.push(item);
    } else {
      otherPages.push(item);
    }
  }
  
  const sections: SitemapSection[] = [];
  
  if (mainPages.length > 0) {
    sections.push({ title: 'Main Pages', items: mainPages });
  }
  
  if (aiTools.length > 0) {
    sections.push({ title: 'AI Tools', items: aiTools });
  }
  
  if (aiSolutions.length > 0) {
    sections.push({ title: 'AI Solutions', items: aiSolutions });
  }
  
  if (otherPages.length > 0) {
    sections.push({ title: 'Other Pages', items: otherPages });
  }
  
  // Add social media section
  sections.push({
    title: 'Social Media & External Links',
    items: [
      {
        title: 'Facebook',
        url: 'https://www.facebook.com/share/1G2Rsu27c8/',
        description: 'Follow Marqait on Facebook for the latest updates and marketing insights'
      },
      {
        title: 'Instagram',
        url: 'https://www.instagram.com/marqait.ai',
        description: 'Connect with Marqait on Instagram for visual content and behind-the-scenes updates'
      },
      {
        title: 'Twitter/X',
        url: 'https://www.x.com/marqait_ai',
        description: 'Follow @marqait_ai on Twitter/X for real-time updates and industry insights'
      },
      {
        title: 'YouTube',
        url: 'https://www.youtube.com/@MarqaitAI',
        description: 'Subscribe to our YouTube channel for tutorials and marketing automation guides'
      },
      {
        title: 'LinkedIn',
        url: 'https://www.linkedin.com/company/marqait-ai/',
        description: 'Connect with Marqait on LinkedIn for professional insights and company updates'
      }
    ]
  });
  
  return sections;
}