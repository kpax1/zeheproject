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
  };
  