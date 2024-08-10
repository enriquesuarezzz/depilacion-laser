/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
      },
      {
        protocol: 'https',
        hostname:
          'www.depilacion-laser-git-main-enriquesuarezzzs-projects.vercel.app',
      },
    ],
  },
  async headers() {
    return [
      {
        source: '/(.*)', // Apply to all pages
        headers: [
          {
            key: 'x-robots-tag',
            value: 'index', // Allow indexing
          },
        ],
      },
    ]
  },
}

export default nextConfig
