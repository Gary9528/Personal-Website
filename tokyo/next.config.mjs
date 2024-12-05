// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Enables static export
  images: {
    unoptimized: true, // Optional: disable Next.js image optimization if needed
  },
};

export default nextConfig;
