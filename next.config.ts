import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  // TODO FOR LOCAL!!
  images: {
    domains: ["localhost"],
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "8300",
        pathname: "/animals/**",
      },
    ],
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
    additionalData: `@use "styles/variables" as *;`,
    silenceDeprecations: ['legacy-js-api'],
  }
};

export default nextConfig;
