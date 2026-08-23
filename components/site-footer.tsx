import Image from 'next/image'
import Link from 'next/link'
import { Camera, Mail, MapPin, Phone } from 'lucide-react'
import { fullAddress, restaurant } from '@/config/restaurant'

export function SiteFooter() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 md:grid-cols-[1.1fr_1fr_1fr] md:px-8">
        <div className="flex flex-col items-start gap-4">
          <Image src="/images/racine/logo-full.jpg" alt="Racine Créole — cuisine fusion" width={150} height={150} className="h-28 w-auto rounded-sm object-contain" />
          <p className="max-w-sm text-sm leading-6 opacity-80">Cuisine haïtienne et créole, servie avec chaleur à Laval.</p>
        </div>
        <div className="flex flex-col gap-3 text-sm">
          <p className="font-serif text-xl">Nous joindre</p>
          <a className="flex min-h-11 items-center gap-3" href={restaurant.mapUrl}><MapPin className="size-5" aria-hidden="true" />{fullAddress}</a>
          <a className="flex min-h-11 items-center gap-3" href={restaurant.phoneHref}><Phone className="size-5" aria-hidden="true" />{restaurant.phone}</a>
          <a className="flex min-h-11 items-center gap-3" href={`mailto:${restaurant.email}`}><Mail className="size-5" aria-hidden="true" />{restaurant.email}</a>
        </div>
        <div className="flex flex-col gap-3 text-sm">
          <p className="font-serif text-xl">Explorer</p>
          <Link className="min-h-11 content-center" href="/menu">Menu</Link>
          <Link className="min-h-11 content-center" href="/groupes">Traiteur & groupes</Link>
          <Link className="min-h-11 content-center" href="/contact">Contact</Link>
          <a className="flex min-h-11 items-center gap-2" href={restaurant.social.instagram} target="_blank" rel="noreferrer"><Camera className="size-5" aria-hidden="true" />Instagram</a>
        </div>
      </div>
      <div className="border-t border-primary-foreground/20 px-5 py-5 text-center text-xs opacity-70">© {new Date().getFullYear()} Racine Créole. Tous droits réservés.</div>
    </footer>
  )
}
