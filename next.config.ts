import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
    additionalData: `@use "styles/variables" as *;`,
    silenceDeprecations: ['legacy-js-api'],
  }
};

export default nextConfig;
