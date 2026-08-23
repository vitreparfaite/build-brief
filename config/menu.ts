export type MenuItem = { name: string; description?: string; price?: string; note?: string }
export type MenuSection = { id: string; title: string; subtitle?: string; items: MenuItem[] }

// Transcribed from the supplied Racine Créole menu PDFs. Keep this file as the single source of truth.
export const menuSections: MenuSection[] = [
  { id: 'entrees', title: 'Entrées', items: [
    { name: 'Acras de morue', description: 'Beignets de morue, sauce maison', price: '12' },
    { name: 'Marinades', description: 'Beignets haïtiens, pikliz', price: '10' },
    { name: 'Plantains pesés', description: 'Plantains croustillants et pikliz', price: '9' },
    { name: 'Griot bites', description: 'Porc mariné, frit et pikliz', price: '16' },
    { name: 'Crevettes créoles', description: 'Crevettes sautées, sauce créole', price: '18' },
  ]},
  { id: 'plats', title: 'Plats principaux', subtitle: 'Servis avec accompagnements selon le plat.', items: [
    { name: 'Griot', description: 'Porc mariné et frit, riz, bananes pesées, pikliz', price: '24' },
    { name: 'Tassot de bœuf', description: 'Bœuf mariné et frit, riz, bananes pesées, pikliz', price: '27' },
    { name: 'Poulet créole', description: 'Poulet assaisonné aux épices de la maison', price: '23' },
    { name: 'Cabrit en sauce', description: 'Chèvre mijotée à la créole', price: '29' },
    { name: 'Lambi', description: 'Conque préparée à la créole', price: '34' },
    { name: 'Poisson entier', description: 'Poisson assaisonné, frit ou en sauce', note: 'Prix selon arrivage' },
  ]},
  { id: 'fusion', title: 'Créations fusion', items: [
    { name: 'Mac & cheese au griot', description: 'Macaroni crémeux garni de griot', price: '25' },
    { name: 'Poutine créole', description: 'Frites, fromage en grains, sauce créole et griot', price: '22' },
    { name: 'Burger Racine', description: 'Galette assaisonnée, pikliz, sauce maison et frites', price: '21' },
  ]},
  { id: 'accompagnements', title: 'Accompagnements', items: [
    { name: 'Riz collé', price: '7' }, { name: 'Riz blanc et sauce pois', price: '8' },
    { name: 'Bananes pesées', price: '7' }, { name: 'Pikliz', price: '4' }, { name: 'Frites', price: '6' },
  ]},
  { id: 'desserts', title: 'Desserts', items: [
    { name: 'Pain patate', description: 'Gâteau haïtien à la patate douce', price: '10' },
    { name: 'Gâteau au rhum', price: '11' }, { name: 'Dessert du moment', note: 'Demandez à notre équipe' },
  ]},
  { id: 'boissons', title: 'Boissons', items: [
    { name: 'Jus de fruit maison', description: 'Saveur selon disponibilité', price: '6' },
    { name: 'Cola Couronne', price: '5' }, { name: 'Malta', price: '5' },
    { name: 'Kremas', description: 'Boisson crémeuse haïtienne', price: '9' },
    { name: 'Cocktail maison', note: 'Sélection disponible sur place' },
  ]},
]

export const menuNotice = 'Les prix et la disponibilité peuvent changer sans préavis. Informez notre équipe de toute allergie ou restriction alimentaire.'
