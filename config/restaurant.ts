export const restaurant = {
  name: 'Racine Créole',
  descriptor: 'Cuisine fusion créole à Laval',
  address: {
    street: '4721 boulevard des Laurentides, suite 15',
    city: 'Laval',
    region: 'Québec',
    postalCode: 'H7K 3G4',
  },
  phone: '450-669-8699',
  phoneHref: 'tel:+14506698699',
  email: 'racinecreoleresto@gmail.com',
  mapUrl:
    'https://www.google.com/maps/dir/?api=1&destination=4721+Boulevard+des+Laurentides+Laval+QC+H7K+3G4',
  parking: 'Stationnement gratuit',
  reservationPolicy: 'Sans réservation',
  hours: {
    status: 'confirmation-required',
    note: 'Les heures ne sont pas affichées tant qu’elles ne sont pas confirmées par une source officielle actuelle.',
    entries: [],
  },
  ordering: [
    {
      name: 'Skip',
      url: 'https://www.skipthedishes.com/racine-creole',
    },
    {
      name: 'DoorDash',
      url: 'https://www.doordash.com/en-CA/fr-CA/store/racine-creole-laval-25694087/',
    },
  ],
  social: {
    instagram: 'https://www.instagram.com/racinecreole/',
    facebook: 'https://www.facebook.com/profile.php?id=61553726185059',
  },
  features: {
    events: false,
    reservations: false,
  },
} as const

export const fullAddress = `${restaurant.address.street}, ${restaurant.address.city}, ${restaurant.address.region} ${restaurant.address.postalCode}`
