import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.marqait.com';
  const currentDate = new Date();
  
  // Define all routes manually for now to avoid file system issues
  const routes = [
    { path: '/', priority: 1.0, changeFrequency: 'daily' as const },
    { path: '/about', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/contact', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: '/ai-blog', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: '/ai-tools', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: '/ai-logo-generator', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/ai-social-media-post-generator', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/ai-brandbook-generator', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/ai-reel-generator', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/ai-campaign-generator', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/ai-image-editor', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/ai-solutions', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: '/custom-ai-solutions', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/ai-for-healthcare', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/ai-for-startups', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/ai-for-customer-service', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/ai-for-retails', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/ai-agent-development', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/ai-for-seo', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/ai-for-ecommerce', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/growth-pods', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/privacy-policy', priority: 0.5, changeFrequency: 'monthly' as const },
    { path: '/terms', priority: 0.5, changeFrequency: 'monthly' as const },
    { path: '/user-data-deletion', priority: 0.5, changeFrequency: 'monthly' as const },
    { path: '/sitemap', priority: 0.6, changeFrequency: 'monthly' as const }
  ];
  
  return routes.map(route => ({
    url: route.path === '/' ? baseUrl : `${baseUrl}${route.path}`,
    lastModified: currentDate,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}