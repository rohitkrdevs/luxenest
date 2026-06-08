import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    unoptimized: true, // we'll use unoptimized or standard Next config
  }
};

export default nextConfig;
