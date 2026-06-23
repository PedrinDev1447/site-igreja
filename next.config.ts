import type { NextConfig } from "next";
import os from "os";

function getLocalNetworkHosts(): string[] {
  const hosts = new Set<string>();

  for (const iface of Object.values(os.networkInterfaces())) {
    if (!iface) continue;
    for (const config of iface) {
      if (config.family === "IPv4" && !config.internal) {
        hosts.add(config.address);
      }
    }
  }

  return [...hosts];
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
    ],
  },
};

export default nextConfig;
