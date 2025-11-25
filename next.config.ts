import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/martello',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
