import type { NextConfig } from "next";

const isProd = process.env.GITHUB_ACTIONS === "true";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isProd ? "/swarnimkanwal" : "",
  assetPrefix: isProd ? "/swarnimkanwal/" : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
