/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000, // 1 year
    domains: ["drive.google.com", "lh3.googleusercontent.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
        pathname: "/images/**",
      },
      // Google Drive direct file delivery host (what Next/Image will actually fetch)
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        pathname: "/**",
      },

      // If you end up serving via the Drive "uc" endpoint
      { protocol: "https", hostname: "drive.google.com", pathname: "/uc**" },

      // Optional: add the storages you plan to use
      { protocol: "https", hostname: "res.cloudinary.com", pathname: "/**" },
      {
        protocol: "https",
        hostname: "*.supabase.co",
        pathname: "/storage/v1/object/**",
      },
    ],
  },

  experimental: {
    optimizePackageImports: ['framer-motion'],
  },

  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },

  async redirects() {
    return [
      {
        source: "/products",
        destination: "/ai-tools",
        permanent: true,
      },
      {
        source: "/blog",
        destination: "/ai-blog",
        permanent: true,
      },
      {
        source: "/contacts",
        destination: "/contact",
        permanent: true,
      },
      {
        source: "/adpilot-ai",
        destination: "/ai-ad-generator",
        permanent: true,
      },
      {
        source: "/ai-campaign-generator",
        destination: "/ai-ad-generator",
        permanent: true,
      },
      {
        source: "/ai-editor",
        destination: "/ai-image-editor",
        permanent: true,
      },
      {
        source: "/brandmark-ai",
        destination: "/ai-logo-generator",
        permanent: true,
      },
      {
        source: "/contentspark-ai",
        destination: "/ai-social-media-post-generator",
        permanent: true,
      },
      {
        source: "/reelcraft-ai",
        destination: "/ai-reel-generator",
        permanent: true,
      },
      {
        source: "/brandblueprint-ai",
        destination: "/ai-brandbook-generator",
        permanent: true,
      },
      {
        source: "/ai-solutions/free-linkedin-carousel-generator",
        destination: "/free-linkedin-carousel-generator",
        permanent: true,
      },
      {
        source: "/ai-solutions/gaming-logo-maker",
        destination: "/gaming-logo-maker",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
