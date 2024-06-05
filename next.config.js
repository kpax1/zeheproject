/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      // Use regular expressions to match remote image URLs
      // Include the 'hostname' property
      remotePatterns: [{ 
        hostname: 'ucarecdn.com',
        // Path prefix is optional if you want to match all URLs under the hostname
        // path: '/optional-prefix/',
      }],
    },
  };
  
  

  module.exports = {
    ...nextConfig,
    ...require('next-videos')(),

    async headers() {
      return [
        {
          // matching all API routes
          source: "/api/:path*",
          headers: [
            { key: "Access-Control-Allow-Credentials", value: "true" },
            { key: "Access-Control-Allow-Origin", value: "*" },
            { key: "Access-Control-Allow-Methods", value: "GET,OPTIONS,PATCH,DELETE,POST,PUT" },
            { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
          ]
        }
      ]
    }
  };

