/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "wesleyanargus.com",
        pathname: "/wp-content/uploads/**", // Allow images from this path
      },
      {
        protocol: "https",
        hostname: "wesleyanargus.com",
        pathname: "/wp-content/uploads/**", // Ensure both HTTP & HTTPS are supported
      },
    ],
  },
};

export default nextConfig;
