import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/',
    },
    sitemap:
      'https://depilacion-laser-oj0d2wyob-enriquesuarezzzs-projects.vercel.app/sitemap.xml',
  }
}
