import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, Manrope } from 'next/font/google'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'
import './globals.css'

const display = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['500', '600', '700'],
  display: 'swap',
})

const body = Manrope({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://racinecreole.com'),
  title: 'Racine Créole | Cuisine fusion créole à Laval',
  description:
    'Découvrez Racine Créole à Laval : une cuisine d’inspiration haïtienne, généreuse et contemporaine, à savourer sur place ou à commander.',
  applicationName: 'Racine Créole',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Racine Créole | Saveurs créoles au goût d’ici',
    description: 'Cuisine fusion créole à Laval, inspirée d’Haïti et pensée pour se retrouver.',
    type: 'website',
    locale: 'fr_CA',
    images: [{ url: '/images/racine/dish-2.jpg', width: 1600, height: 1600, alt: 'Une assiette signée Racine Créole' }],
  },
  icons: { icon: '/icon.svg', apple: '/apple-icon.png' },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  themeColor: '#153a2a',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr-CA" className={`bg-background ${display.variable} ${body.variable}`}>
      <body className="font-sans antialiased">
        <SiteHeader />
        {children}
        <SiteFooter />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
