import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Racine Créole',
    short_name: 'Racine Créole',
    description: 'Cuisine fusion créole à Laval.',
    start_url: '/',
    display: 'standalone',
    background_color: '#f7f2e8',
    theme_color: '#153a2a',
    lang: 'fr-CA',
  }
}
