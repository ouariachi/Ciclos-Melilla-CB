import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://ciclosmelilla.com',
    },
    {
      url: 'https://ciclosmelilla.com/aviso-legal',
    },
    {
      url: 'https://ciclosmelilla.com/cookies',
    },
    {
      url: 'https://ciclosmelilla.com/privacidad',
    },
  ]
}