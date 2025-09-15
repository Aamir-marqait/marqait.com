/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
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
    ];
  },
};

export default nextConfig;
