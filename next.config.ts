import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
    additionalData: `@import "styles/_variables.scss";`,
    silenceDeprecations: ['legacy-js-api'],
  }
};

export default nextConfig;
