import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/products',
        destination: '/ai-tools',
        permanent: true,
      },
      {
        source: '/blog',
        destination: '/ai-blog',
        permanent: true,
      },
      {
        source: '/contacts',
        destination: '/contact',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
