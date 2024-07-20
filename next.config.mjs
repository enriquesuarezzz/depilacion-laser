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
          'www.depilacion-laser-git-main-enriquesuarezzzs-projects.vercel.app/',
      },
    ],
  },
}

export default nextConfig
