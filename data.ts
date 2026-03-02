export interface TourPackage {
  id: string;
  name: string;
  destination: string;
  image: string;
  duration: string;
  price: string;
  bestSeason: string;
  description: string;
  tags: string[];
}

export const tourPackages: TourPackage[] = [
  {
    id: 'manali-winter',
    name: 'Manali Winter Escape',
    destination: 'Manali',
    image: '/images/manali.jpg',
    duration: '5 Nights / 6 Days',
    price: '₹4,499',
    bestSeason: 'Dec – Jan',
    description: 'Experience the magic of snow-clad Manali with guided snow treks, bonfire nights, and visits to Solang Valley and Old Manali.',
    tags: ['Manali'],
  },
  {
    id: 'kedarnath-yatra',
    name: 'Kedarnath Sacred Trek',
    destination: 'Kedarnath',
    image: '/images/kedarnath.jpg',
    duration: '4 Nights / 5 Days',
    price: '₹5,999',
    bestSeason: 'May – Jun, Sep – Oct',
    description: 'A spiritual and adventurous journey to one of the holiest Jyotirlingas, nestled at 3,583m amidst the Garhwal Himalayas.',
    tags: ['Kedarnath'],
  },
  {
    id: 'kashmir-paradise',
    name: 'Kashmir Paradise Tour',
    destination: 'Kashmir',
    image: '/images/kashmir.jpg',
    duration: '6 Nights / 7 Days',
    price: '₹8,499',
    bestSeason: 'Mar – Oct',
    description: 'Explore the paradise on earth — from Dal Lake houseboats to Gulmarg meadows and the serene Pahalgam valley.',
    tags: ['Kashmir'],
  },
  {
    id: 'arunachal-explorer',
    name: 'Arunachal Frontier Explorer',
    destination: 'Arunachal',
    image: '/images/arunachal.jpg',
    duration: '7 Nights / 8 Days',
    price: '₹12,999',
    bestSeason: 'Oct – Apr',
    description: 'Discover the untouched beauty of Tawang, Ziro Valley, and Bomdila in India\'s far northeast frontier.',
    tags: ['Arunachal'],
  },
  {
    id: 'badrinath-pilgrimage',
    name: 'Badrinath Divine Journey',
    destination: 'Badrinath',
    image: '/images/badrinath.jpg',
    duration: '4 Nights / 5 Days',
    price: '₹5,499',
    bestSeason: 'May – Jun, Sep – Nov',
    description: 'Visit the sacred Badrinath Temple and witness the breathtaking Neelkanth Peak and Mana Village, India\'s last village.',
    tags: ['Badrinath'],
  },
  {
    id: 'chardham-yatra',
    name: 'Chardham Complete Yatra',
    destination: 'Chardham',
    image: '/images/chardham.jpg',
    duration: '10 Nights / 11 Days',
    price: '₹14,999',
    bestSeason: 'May – Jun, Sep – Oct',
    description: 'The complete spiritual circuit covering Yamunotri, Gangotri, Kedarnath, and Badrinath — a once-in-a-lifetime pilgrimage.',
    tags: ['Chardham'],
  },
  {
    id: 'kuari-pass-trek',
    name: 'Kuari Pass Trek',
    destination: 'Kuari Pass',
    image: '/images/kuari-pass.jpg',
    duration: '5 Nights / 6 Days',
    price: '₹6,999',
    bestSeason: 'Mar – May, Sep – Nov',
    description: 'Lord Curzon\'s trail offering panoramic views of Nanda Devi, Dronagiri, and Kamet peaks from 12,516 ft.',
    tags: ['Kuari Pass'],
  },
  {
    id: 'dayara-bugyal-trek',
    name: 'Dayara Bugyal Meadow Trek',
    destination: 'Dayara Bugyal',
    image: '/images/dayara-bugyal.jpg',
    duration: '4 Nights / 5 Days',
    price: '₹5,499',
    bestSeason: 'May – Jun, Sep – Nov',
    description: 'Trek through one of the highest and most beautiful alpine meadows in India, a vast expanse of green at 11,000 ft.',
    tags: ['Dayara Bugyal'],
  },
  {
    id: 'kedarkantha-trek',
    name: 'Kedarkantha Winter Trek',
    destination: 'Kedarkantha',
    image: '/images/kedarkantha.jpg',
    duration: '5 Nights / 6 Days',
    price: '₹5,999',
    bestSeason: 'Dec – Apr',
    description: 'India\'s best winter trek! Summit at 12,500 ft with stunning 360° views of snow-covered Himalayan peaks.',
    tags: ['Kedarkantha'],
  },
];

export const destinations = ['Manali', 'Kashmir', 'Arunachal', 'Kedarnath', 'Badrinath', 'Chardham'];
export const treks = ['Kuari Pass', 'Dayara Bugyal', 'Kedarkantha'];

export const WHATSAPP_NUMBER = '918208354452';

export function getWhatsAppLink(packageName: string): string {
  const message = encodeURIComponent(
    `Hi Beyond Miles Stories, I'm interested in the ${packageName} package on {Dates} for {Number} people. Can I get more details?`
  );
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
}

export function getWhatsAppGeneral(): string {
  const message = encodeURIComponent(
    `Hi Beyond Miles Stories, I'd like to know more about your tours and packages. Can you help me plan a trip?`
  );
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
}

export const galleryImages = [
  { src: '/images/gallery-1.jpg', alt: 'Serene mountain lake at dawn', span: 'col-span-2 row-span-2' },
  { src: '/images/gallery-2.jpg', alt: 'Campfire under the stars', span: 'col-span-1 row-span-1' },
  { src: '/images/gallery-3.jpg', alt: 'River valley gorge', span: 'col-span-1 row-span-2' },
  { src: '/images/gallery-4.jpg', alt: 'Mountain peaks through clouds', span: 'col-span-1 row-span-1' },
  { src: '/images/manali.jpg', alt: 'Manali snow valley', span: 'col-span-1 row-span-1' },
  { src: '/images/gallery-5.jpg', alt: 'Snow covered forest trail', span: 'col-span-1 row-span-2' },
  { src: '/images/gallery-6.jpg', alt: 'Mountain reflection', span: 'col-span-2 row-span-1' },
  { src: '/images/gallery-7.jpg', alt: 'Trekkers on mountain trail', span: 'col-span-1 row-span-1' },
  { src: '/images/gallery-8.jpg', alt: 'Prayer flags in mountains', span: 'col-span-1 row-span-2' },
  { src: '/images/kedarnath.jpg', alt: 'Kedarnath temple', span: 'col-span-1 row-span-1' },
  { src: '/images/kashmir.jpg', alt: 'Dal Lake Kashmir', span: 'col-span-2 row-span-1' },
  { src: '/images/hero-mountain.jpg', alt: 'Dramatic mountain peaks', span: 'col-span-1 row-span-1' },
];

export const instagramPosts = [
  { src: '/images/gallery-1.jpg', likes: '2.4k' },
  { src: '/images/gallery-2.jpg', likes: '1.8k' },
  { src: '/images/kedarnath.jpg', likes: '3.1k' },
  { src: '/images/manali.jpg', likes: '2.7k' },
  { src: '/images/gallery-4.jpg', likes: '1.5k' },
  { src: '/images/gallery-7.jpg', likes: '2.1k' },
];
