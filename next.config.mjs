import withPWAInit from "@ducanh2912/next-pwa";

const withPWA = withPWAInit({
  fallbacks: {
    document: "/offline",
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = {};

export default withPWA(nextConfig);
