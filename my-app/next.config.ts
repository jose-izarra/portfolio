import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname:
          "github-readme-stats-git-master-jose-izarras-projects.vercel.app",
      },
    ],
  },
};

export default nextConfig;
