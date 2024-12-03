import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      { hostname: "upbeat-stoat-959.convex.cloud", protocol: "https" },
      { hostname: "wary-anaconda-29.convex.cloud", protocol: "https" },
      { hostname: "mild-mole-632.convex.cloud", protocol: "https" },
    ],
    domains: ["mild-mole-632.convex.cloud"],
  },
};

export default nextConfig;
