/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: [
      'images.unsplash.com',
      'encrypted-tbn0.gstatic.com',
      'i.chzbgr.com',
      'preview.redd.it',
      'media.tenor.com',
      'thunderdungeon.com',
      'i.pinimg.com',
      'i.imgur.com'
    ],
    unoptimized: true,
  },
}

export default nextConfig
