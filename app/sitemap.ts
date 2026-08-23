import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://racinecreole.com'
  return ['', '/menu', '/commander', '/restaurant', '/groupes', '/evenements', '/contact'].map((path, index) => ({ url: `${base}${path}`, lastModified: new Date(), changeFrequency: index === 0 ? 'weekly' : 'monthly', priority: index === 0 ? 1 : 0.7 }))
}
