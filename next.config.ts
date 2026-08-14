import type { NextConfig } from "next";

const backendApiUrl =
  process.env.API_URL?.replace(/\/$/, "") ?? "https://thiendangle.com/api";

const nextConfig: NextConfig = {
  output: "standalone",
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: `${backendApiUrl}/:path*`,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "thiendangle.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
