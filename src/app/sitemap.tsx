import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://depilacion-laser-oj0d2wyob-enriquesuarezzzs-projects.vercel.app',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: 'https://depilacion-laser-oj0d2wyob-enriquesuarezzzs-projects.vercel.app/contacto',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.8,
    },
    {
      url: 'https://depilacion-laser-oj0d2wyob-enriquesuarezzzs-projects.vercel.app/politica-de-privacidad',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.4,
    },
    {
      url: 'https://depilacion-laser-oj0d2wyob-enriquesuarezzzs-projects.vercel.app/aviso-legal',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.4,
    },
    {
      url: 'https://depilacion-laser-oj0d2wyob-enriquesuarezzzs-projects.vercel.app/politica-de-cookies',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.4,
    },
  ]
}
