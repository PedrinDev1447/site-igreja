import type { NextConfig } from "next";
import os from "os";

function getLocalNetworkHosts(): string[] {
  try {
    const hosts = new Set<string>();

    for (const iface of Object.values(os.networkInterfaces() ?? {})) {
      if (!iface) continue;
      for (const config of iface) {
        if (config.family === "IPv4" && !config.internal) {
          hosts.add(config.address);
        }
      }
    }

    return [...hosts];
  } catch {
    return [];
  }
}

const nextConfig: NextConfig = {
  reactCompiler: true,
  allowedDevOrigins: getLocalNetworkHosts(),
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.ytimg.com",
        pathname: "/vi/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
