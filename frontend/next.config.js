const withMDX = require('@next/mdx')()
/** @type {import('next').NextConfig} */
const nextConfig = {
    pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
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
   
  module.exports = withMDX(nextConfig)