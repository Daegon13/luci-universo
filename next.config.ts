import type { NextConfig } from "next";

const allowedDevOrigins = process.env.NEXT_ALLOWED_DEV_ORIGINS?.split(",")
  .map((origin) => origin.trim())
  .filter(Boolean) ?? ["192.168.1.2"];

const nextConfig: NextConfig = {
  allowedDevOrigins,
  turbopack: {
    root: process.cwd(),
  },
  images: {
    maximumResponseBody: 6_000_000,
  },
};

export default nextConfig;
