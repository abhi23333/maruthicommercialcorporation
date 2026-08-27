import type { MetadataRoute } from 'next'

const SITE_URL = 'https://maruthicommercial.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  return [
    {
      url: SITE_URL,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 1,
    },
  ]
}
