/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
      return [
        {
          source: '/',
          destination: '/home', // Redirect the root URL to /home
          permanent: true, // Set to true for a 301 redirect, or false for a 302
        },
      ];
    },
  };
  
  export default nextConfig;
  