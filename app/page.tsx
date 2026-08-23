import Image from 'next/image'
import {
  ArrowDown,
  ArrowRight,
  Car,
  Clock3,
  MapPin,
  Phone,
  UtensilsCrossed,
} from 'lucide-react'
import { fullAddress, restaurant } from '@/config/restaurant'

const featuredDishes = [
  {
    name: 'Griot créole',
    note: 'Porc mariné, plantains dorés, riz collé et pikliz.',
    image: '/images/racine/dish-2.jpg',
    alt: 'Assiette de griot avec riz, plantains et légumes marinés chez Racine Créole',
  },
  {
    name: 'Poulet boucané',
    note: 'Poulet grillé, riz collé et plantains.',
    image: '/images/racine/dish-1.jpg',
    alt: 'Poulet grillé servi avec riz et plantains chez Racine Créole',
  },
  {
    name: 'Poutine fusion',
    note: 'Le réconfort québécois traversé par les saveurs créoles.',
    image: '/images/racine/dish-3.jpg',
    alt: 'Poutine fusion garnie de viande et d’oignons verts chez Racine Créole',
  },
]

function ActionLink({ href, label, external = false }: { href: string; label: string; external?: boolean }) {
  return (
    <a href={href} target={external ? '_blank' : undefined} rel={external ? 'noreferrer' : undefined} className="text-link">
      {label}
      <ArrowRight aria-hidden="true" />
    </a>
  )
}

export default function Page() {
  const restaurantJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Restaurant',
    name: restaurant.name,
    servesCuisine: ['Cuisine haïtienne', 'Cuisine créole', 'Cuisine fusion'],
    telephone: restaurant.phone,
    email: restaurant.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: restaurant.address.street,
      addressLocality: restaurant.address.city,
      addressRegion: 'QC',
      postalCode: restaurant.address.postalCode,
      addressCountry: 'CA',
    },
    sameAs: [restaurant.social.instagram, restaurant.social.facebook],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantJsonLd) }} />
      <main id="accueil">
        <section className="hero-section">
          <div className="hero-copy">
            <p className="eyebrow">Cuisine fusion créole · Laval</p>
            <h1>Saveurs créoles<br />au goût d&apos;ici.</h1>
            <p className="hero-intro">
              Une cuisine d&apos;inspiration haïtienne, généreuse et contemporaine, servie dans un lieu pensé pour se retrouver.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="#menu" className="button-primary button-large">Découvrir le menu</a>
              <a href="#commander" className="button-outline button-large">Commander</a>
            </div>
            <a href="#menu" className="hero-scroll">
              <ArrowDown aria-hidden="true" />
              Goûtez la différence
            </a>
          </div>
          <div className="hero-visual">
            <Image src="/images/racine/dish-2.jpg" alt="Assiette de griot, riz collé et plantains de Racine Créole" fill priority sizes="(max-width: 768px) 100vw, 54vw" className="object-cover" />
            <div className="hero-stamp">
              <span>Racines</span>
              <strong>Haïtiennes</strong>
              <span>Élan montréalais</span>
            </div>
          </div>
        </section>

        <section className="quick-bar" aria-label="Actions rapides">
          <a href="#menu"><UtensilsCrossed aria-hidden="true" /><span>Voir le menu</span></a>
          <a href="#commander"><ArrowRight aria-hidden="true" /><span>Commander</span></a>
          <a href={restaurant.phoneHref}><Phone aria-hidden="true" /><span>Appeler</span></a>
          <a href={restaurant.mapUrl} target="_blank" rel="noreferrer"><MapPin aria-hidden="true" /><span>Itinéraire</span></a>
        </section>

        <section id="menu" className="section-shell py-20 md:py-32">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Nos incontournables</p>
              <h2>La tradition<br />en mouvement.</h2>
            </div>
            <div className="max-w-md">
              <p className="text-pretty text-muted-foreground leading-relaxed">
                Des recettes créoles franches, des assiettes généreuses et des clins d&apos;œil d&apos;ici. Chaque plat raconte une cuisine vivante, sans raccourci.
              </p>
              <ActionLink href="#commander" label="Commander vos favoris" />
            </div>
          </div>
          <div className="dish-grid">
            {featuredDishes.map((dish, index) => (
              <article key={dish.name} className={index === 0 ? 'dish-card dish-card-featured group' : 'dish-card group'}>
                <div className="dish-image">
                  <Image src={dish.image} alt={dish.alt} fill sizes={index === 0 ? '(max-width: 768px) 100vw, 56vw' : '(max-width: 768px) 100vw, 28vw'} className="object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="dish-copy">
                  <p className="font-serif text-2xl font-semibold">{dish.name}</p>
                  <p>{dish.note}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="histoire" className="story-section">
          <div className="story-mark" aria-hidden="true">R</div>
          <div className="story-copy">
            <p className="eyebrow eyebrow-light">D&apos;Haïti à Laval</p>
            <h2>Une table enracinée dans la famille.</h2>
            <p>
              Racine Créole est né d&apos;un héritage haïtien et d&apos;une enfance marquée par le partage autour de la table. Ici, recettes authentiques et influences multiculturelles se rencontrent avec chaleur.
            </p>
            <p>
              Plus qu&apos;un repas, c&apos;est une invitation à ralentir, à goûter et à se rassembler.
            </p>
          </div>
          <figure className="story-image">
            <Image src="/images/racine/hero-food.jpg" alt="Mur végétal et enseigne lumineuse Racine Créole dans le restaurant" fill loading="eager" sizes="(max-width: 768px) 100vw, 42vw" className="object-cover" />
          </figure>
        </section>

        <section id="restaurant" className="section-shell py-20 md:py-32">
          <div className="experience-grid">
            <div className="experience-image">
              <Image src="/images/racine/hero-food.jpg" alt="Décor végétal distinctif à l’intérieur de Racine Créole" fill loading="eager" sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
              <span className="image-source">Photo officielle Racine Créole</span>
            </div>
            <div className="experience-copy">
              <p className="eyebrow">Prenez place</p>
              <h2>Une adresse<br />pour se retrouver.</h2>
              <p>
                Un décor végétal, une ambiance accueillante et des plats faits pour être partagés. Venez comme vous êtes — en famille, entre amis ou pour votre prochaine tablée.
              </p>
              <div className="fact-list">
                <div><UtensilsCrossed aria-hidden="true" /><span><strong>Sur place</strong>Une vraie expérience de restaurant</span></div>
                <div><Car aria-hidden="true" /><span><strong>Facile d&apos;accès</strong>{restaurant.parking}</span></div>
                <div><MapPin aria-hidden="true" /><span><strong>À Laval</strong>Boulevard des Laurentides</span></div>
              </div>
              <ActionLink href={restaurant.mapUrl} label="Obtenir l’itinéraire" external />
            </div>
          </div>
        </section>

        <section id="commander" className="order-section">
          <div className="order-copy">
            <p className="eyebrow eyebrow-light">Racine à la maison</p>
            <h2>Votre commande,<br />à votre façon.</h2>
            <p>Retrouvez Racine Créole sur nos plateformes de livraison officielles.</p>
          </div>
          <div className="order-options">
            {restaurant.ordering.map((provider) => (
              <a key={provider.name} href={provider.url} target="_blank" rel="noreferrer">
                <span>Commander avec</span>
                <strong>{provider.name}</strong>
                <ArrowRight aria-hidden="true" />
              </a>
            ))}
          </div>
        </section>

        <section id="contact" className="contact-section">
          <div className="contact-intro">
            <p className="eyebrow">Nous trouver</p>
            <h2>À table,<br />à Laval.</h2>
          </div>
          <div className="contact-details">
            <div className="contact-block">
              <MapPin aria-hidden="true" />
              <div><p className="label">Adresse</p><address>{fullAddress}</address></div>
            </div>
            <div className="contact-block">
              <Clock3 aria-hidden="true" />
              <div><p className="label">Avant de venir</p><p>Consultez notre profil officiel ou appelez-nous pour confirmer les heures du jour.</p></div>
            </div>
            <div className="flex flex-wrap gap-3">
              <a href={restaurant.mapUrl} target="_blank" rel="noreferrer" className="button-primary button-large">Itinéraire</a>
              <a href={restaurant.phoneHref} className="button-outline button-large">{restaurant.phone}</a>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
