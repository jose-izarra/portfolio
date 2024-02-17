/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
          {
            source: '/api/v1/:path*',
            destination: 'http://localhost:8888/api/spotify', // Proxy to Backend
          }
        ]
    },
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