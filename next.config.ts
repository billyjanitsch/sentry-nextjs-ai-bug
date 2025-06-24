import { withSentryConfig } from "@sentry/nextjs";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {};

// swap these lines to reproduce the bug:
// export default withSentryConfig(nextConfig);
export default nextConfig;
