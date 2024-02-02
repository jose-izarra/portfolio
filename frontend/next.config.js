/** @type {import('next').NextConfig} */
const nextConfig = {
    /* config options here */
    images: {
      remotePatterns: [
        {
            protocol: 'https',
            hostname: 'images.unsplash.com',
            port: '',
            pathname: '/photo',
        },
    ],
    },
  }
   
  module.exports = nextConfig