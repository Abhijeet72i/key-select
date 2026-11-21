export type GalleryCategory =
  | 'All'
  | 'Hotel Exterior'
  | 'Rooms & Suites'
  | 'Restaurant & Dining'
  | 'Jacuzzi & Amenities'
  | 'Property & Surroundings';

export interface VideoAssetConfig {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  src: string;
  posterImage: string;
  posterAlt: string;
}

export interface RoomCategory {
  id: string;
  name: string;
  shortLabel: string;
  size: string;
  view: string;
  bedType: string;
  occupancy: string;
  image: string;
  description: string;
  highlights: string[];
}

export interface ExperienceItem {
  id: string;
  number: string;
  name: string;
  category: string;
  timing: string;
  tagline: string;
  description: string;
  image: string;
  secondaryImage?: string;
  highlights: string[];
  featured?: boolean;
  ctaLabel: string;
}

export interface GalleryPhoto {
  id: string;
  src: string;
  title: string;
  caption: string;
  category: Exclude<GalleryCategory, 'All'>;
  orientation: 'landscape' | 'portrait';
}

export interface NearbyAttraction {
  id: string;
  name: string;
  distance: string;
  driveTime: string;
  category: string;
  description: string;
}

export const VIDEO_ASSETS: Record<'hero' | 'experience' | 'property', VideoAssetConfig> = {
  hero: {
    id: 'hero-video',
    number: '00',
    title: 'Keys Select Kufri Film',
    subtitle: 'Full-Screen Himalayan Arrival',
    description:
      'A cinematic arrival at Keys Select by Lemon Tree Hotels, Kufri.',
    src: '/assets/aistudio/gemini_generated_video_534ce8c5_d68bdc93.mp4',
    posterImage: '/assets/aistudio/i1_163bcf02.jpg',
    posterAlt: 'Keys Select by Lemon Tree Hotels, Kufri at twilight overlooking the Himalayan valley',
  },
  experience: {
    id: 'hotel-experience',
    number: '01',
    title: 'Hotel Experience',
    subtitle: 'Wellness, Calm & Mountain Warmth',
    description:
      'Unwind in steaming rose-petal warmth at our Open Deck Jacuzzi overlooking Kufri’s deodar slopes, or stay energized at our sunlit mountain Fitness Centre.',
    src: '/assets/aistudio/gemini_generated_video_4a5f7c6d_b352ad35.mp4',
    posterImage: '/assets/aistudio/i21_b3a8c848.jpg',
    posterAlt: 'Open Deck Jacuzzi overlooking pine-covered Kufri hills at sunset',
  },
  property: {
    id: 'property-showcase',
    number: '02',
    title: 'Explore the Property',
    subtitle: 'Architecture Framed by Cedar Ridges',
    description:
      'Step through handcrafted timber doors into sunlit mountain-view rooms, open-air terraces, Unlock Bar, and warm twilight courtyards above Shimla.',
    src: '/assets/aistudio/gemini_generated_video_534ce8c5_d68bdc93.mp4',
    posterImage: '/assets/aistudio/i2_5a31c7bd.jpg',
    posterAlt: 'Keys Select by Lemon Tree Hotels, Kufri exterior illuminated at dusk',
  },
};

export const HOTEL_INFO = {
  name: 'Keys Select by Lemon Tree Hotels',
  shortName: 'Keys Select',
  logo: '/assets/aistudio/image_f64ec886.png',
  locationShort: 'Kufri, Shimla',
  address: 'NH-22, Near Kufri Fun World, Kufri, Shimla, Himachal Pradesh 171012, India',
  phone: '+91 177 273 8400',
  centralReservations: '1800 102 2323',
  email: 'hi.kufri@lemontreehotels.com',
  checkIn: '2:00 PM',
  checkOut: '12:00 PM',
  altitude: '2,510 m',
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=Keys+Select+by+Lemon+Tree+Hotels,+Kufri,+Shimla',
  directionsUrl:
    'https://www.google.com/maps/dir/?api=1&destination=Keys+Select+by+Lemon+Tree+Hotels,+Kufri,+Shimla',
  mapsEmbedUrl:
    'https://maps.google.com/maps?q=Keys+Select+by+Lemon+Tree+Hotels,+Kufri,+Shimla&t=&z=13&ie=UTF8&iwloc=&output=embed',
};

export const ROOM_CATEGORIES: RoomCategory[] = [
  {
    id: 'standard-double',
    name: 'Standard Double Room',
    shortLabel: 'Contemporary Comfort',
    size: '235 sq. ft.',
    view: 'Courtyard & Hillside',
    bedType: 'Queen Bed',
    occupancy: 'Up to 2 Guests',
    image: '/assets/aistudio/i9_fbf2266f.jpg',
    description:
      'Thoughtfully crafted with warm hardwood flooring, ambient cove lighting, and a dedicated work corner — an inviting mountain sanctuary for couples and leisure travellers.',
    highlights: [
      'Plush queen bed with orthopedic mattress',
      'Warm hardwood flooring & cove lighting',
      'High-speed Wi-Fi & 43" LED television',
      'Tea & coffee maker with complimentary water',
    ],
  },
  {
    id: 'standard-double-mountain',
    name: 'Standard Double Room with Mountain View',
    shortLabel: 'Panoramic Bay Window',
    size: '255 sq. ft.',
    view: 'Deodar Forest & Valley',
    bedType: 'Queen Bed',
    occupancy: 'Up to 2 Guests',
    image: '/assets/aistudio/i10_1b80a283.jpg',
    description:
      'Anchored by a sunlit bay window seating nook overlooking Kufri’s evergreen pine slopes, blending cozy mountain interiors with uninterrupted Himalayan scenery.',
    highlights: [
      'Signature bay window with twin armchairs',
      'Uninterrupted cedar hillside views',
      'Climate control & room heater for winter stays',
      '24-hour in-room dining from Keys Café',
    ],
  },
  {
    id: 'superior-double',
    name: 'Superior Double Room',
    shortLabel: 'Expanded Living Space',
    size: '280 sq. ft.',
    view: 'Resort & Pine Ridge',
    bedType: 'King Bed',
    occupancy: 'Up to 3 Guests',
    image: '/assets/aistudio/i11_5de7b311.jpg',
    description:
      'Generously proportioned interiors featuring refined upholstery, a tailored upholstered ottoman bench, custom timber wall accents, and restorative quietude.',
    highlights: [
      'Spacious layout with upholstered lounge bench',
      'Recessed architectural ceiling illumination',
      'Work desk, minibar & electronic in-room safe',
      'Rain shower & curated bath amenities',
    ],
  },
  {
    id: 'superior-balcony-mountain',
    name: 'Superior Double Room with Balcony and Mountain View',
    shortLabel: 'Private Mountain Sit-Out',
    size: '310 sq. ft.',
    view: 'Private Balcony · Valley View',
    bedType: 'King Bed',
    occupancy: 'Up to 3 Guests',
    image: '/assets/aistudio/i12_b144bb82.jpg',
    description:
      'Step through full-height sliding glass doors onto your private sit-out balcony to sip morning Himalayan tea while mist rises across the forested Kufri ridges.',
    highlights: [
      'Private furnished mountain-facing balcony',
      'Floor-to-ceiling sliding glass balcony doors',
      'Writing desk, tea/coffee station & room heating',
      'Panoramic sunrise & golden-hour forest views',
    ],
  },
  {
    id: 'studio-suite',
    name: 'Studio Suite',
    shortLabel: 'Signature Mountain Suite',
    size: '410 sq. ft.',
    view: 'Wide Balcony · Panoramic Hills',
    bedType: 'King Bed + Lounge',
    occupancy: 'Up to 3 Guests',
    image: '/assets/aistudio/i13_07268425.jpg',
    description:
      'Our finest mountain accommodation pairs an expansive timber-floored bedroom with a serene fireside-style seating area and a wide panoramic balcony overlooking Kufri.',
    highlights: [
      'Expansive open-plan suite with lounge seating',
      'Wide private balcony overlooking pine valleys',
      'Priority sunset slot assistance for Open Deck Jacuzzi',
      'Premium linen, bathrobes & bespoke welcome amenities',
    ],
  },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'keys-cafe',
    number: '01',
    name: 'Keys Café',
    category: 'All-Day Multi-Cuisine Dining',
    timing: '7:00 AM – 11:00 PM',
    tagline: 'Sunlit mountain breakfasts and comforting Himachali & global fare.',
    description:
      'Framed by sculpted undulating timber walls and warm ambient lighting, Keys Café welcomes guests from crisp Himalayan mornings through leisurely dinners with fresh regional flavours, North Indian classics, and international favourites.',
    image: '/assets/aistudio/i15_f52b696e.jpg',
    secondaryImage: '/assets/aistudio/i17_740aadcf.jpg',
    highlights: [
      'Generous morning breakfast buffet & live counters',
      'Authentic Himachali, Indian, Asian & Continental menus',
      'Warm contemporary interiors & attentive table service',
    ],
    featured: true,
    ctaLabel: 'Reserve a Table',
  },
  {
    id: 'unlock-bar',
    number: '02',
    name: 'Unlock Bar',
    category: 'Panoramic Mountain Terrace Bar',
    timing: '12:00 PM – 11:00 PM',
    tagline: 'Crafted spirits and warm mountain conversations above the pine canopy.',
    description:
      'Set beneath an airy arched terrace overlooking Kufri’s wooded valleys, Unlock Bar pairs artisanal cocktails, fine single malts, and crisp mountain air with mesmerizing dusk horizons.',
    image: '/assets/aistudio/i18_de751dc5.jpg',
    secondaryImage: '/assets/aistudio/i19_37cf0fc9.jpg',
    highlights: [
      'Open-air covered terrace with sweeping valley views',
      'Curated selection of spirits, wines & signature cocktails',
      'Gourmet bar bites ideal for twilight gatherings',
    ],
    featured: true,
    ctaLabel: 'Enquire for Private Gatherings',
  },
  {
    id: 'open-deck-jacuzzi',
    number: '03',
    name: 'Open Deck Jacuzzi',
    category: 'Signature Himalayan Wellness',
    timing: '8:00 AM – 8:00 PM',
    tagline: 'Twin heated outdoor jacuzzis poised above Kufri’s deodar forests.',
    description:
      'Unwind in steaming, hydro-jetted warmth under open mountain skies. Our signature twin timber-clad jacuzzis look straight across untouched pine ridges—magical at sunset or amidst cool mountain mist.',
    image: '/assets/aistudio/i21_b3a8c848.jpg',
    highlights: [
      'Two heated open-air wooden-clad terrace jacuzzis',
      'Optional romantic rose-petal & sunset deck setups',
      'Unobstructed panoramic forest & sky horizon',
    ],
    featured: true,
    ctaLabel: 'Book a Jacuzzi Session',
  },
  {
    id: 'fitness-centre',
    number: '04',
    name: 'Fitness Centre',
    category: 'Wellness & Movement',
    timing: '6:30 AM – 9:30 PM',
    tagline: 'Stay energized at altitude with modern cardio and strength equipment.',
    description:
      'A bright, well-appointed indoor studio equipped with treadmills, stationary cycling, free weights, and multi-station resistance gear so your daily wellness ritual travels effortlessly with you.',
    image: '/assets/aistudio/i20_0bd3d8da.jpg',
    highlights: [
      'Cardio treadmills & indoor exercise cycles',
      'Free weights, kettlebells & multi-gym trainer',
      'Complimentary access for all resident guests',
    ],
    ctaLabel: 'Learn More',
  },
  {
    id: 'refresh-recreation',
    number: '05',
    name: 'Refresh Recreation Room',
    category: 'Indoor Games & Sunset Lounge',
    timing: '9:00 AM – 10:00 PM',
    tagline: 'Friendly frames of billiards with Himalayan sunsets as your backdrop.',
    description:
      'Perched on a bright panoramic terrace wrapped in mountain vistas, the Refresh Recreation Room brings families and friends together over snooker, billiards, air hockey, and board games.',
    image: '/assets/aistudio/i22_034caaf6.jpg',
    highlights: [
      'Full-size billiards & snooker table',
      'Air hockey & family-friendly indoor games',
      'Expansive sunset valley viewing deck',
    ],
    ctaLabel: 'Learn More',
  },
  {
    id: 'banquet-events',
    number: '06',
    name: 'Banquet & Events',
    category: 'Celebrations & Mountain Retreats',
    timing: 'Custom Event Scheduling',
    tagline: 'Intimate mountain weddings, leadership offsites, and milestone dinners.',
    description:
      'Elegantly illuminated with recessed ceiling coves and framed by tall windows opening onto Himalayan peaks, our banquet hall transforms effortlessly for destination celebrations and corporate retreats.',
    image: '/assets/aistudio/i14_2c30328c.jpg',
    secondaryImage: '/assets/aistudio/i16_e4f738c5.jpg',
    highlights: [
      'Scenic banquet hall with mountain-facing terrace access',
      'Bespoke catering curated by Keys Café chefs',
      'Dedicated event planning for weddings & conferences',
    ],
    ctaLabel: 'Plan Your Event',
  },
];

export const GALLERY_CATEGORIES: GalleryCategory[] = [
  'All',
  'Hotel Exterior',
  'Rooms & Suites',
  'Restaurant & Dining',
  'Jacuzzi & Amenities',
  'Property & Surroundings',
];

/**
 * All 22 authentic uploaded hotel photographs organized by category.
 */
export const GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    id: 'photo-1',
    src: '/assets/aistudio/i1_163bcf02.jpg',
    title: 'Twilight Resort Panorama',
    caption: 'The terraced hillside expanse of Keys Select by Lemon Tree Hotels, Kufri at dusk.',
    category: 'Property & Surroundings',
    orientation: 'landscape',
  },
  {
    id: 'photo-2',
    src: '/assets/aistudio/i2_5a31c7bd.jpg',
    title: 'Dusk Facade Amidst Deodar Pines',
    caption: 'Warm illuminated rooms rising against the forested mountain silhouette of Kufri.',
    category: 'Hotel Exterior',
    orientation: 'landscape',
  },
  {
    id: 'photo-3',
    src: '/assets/aistudio/i21_b3a8c848.jpg',
    title: 'Open Deck Jacuzzi at Sunset',
    caption: 'Twin rose-petal heated jacuzzis overlooking Kufri’s evergreen pine valley.',
    category: 'Jacuzzi & Amenities',
    orientation: 'landscape',
  },
  {
    id: 'photo-4',
    src: '/assets/aistudio/i12_b144bb82.jpg',
    title: 'Superior Double Room with Balcony',
    caption: 'Private mountain-facing balcony framed by emerald Himalayan pine slopes.',
    category: 'Rooms & Suites',
    orientation: 'landscape',
  },
  {
    id: 'photo-5',
    src: '/assets/aistudio/i18_de751dc5.jpg',
    title: 'Unlock Bar Terrace',
    caption: 'Open-air canopy lounge and cocktail bar looking out over twilight hills.',
    category: 'Restaurant & Dining',
    orientation: 'landscape',
  },
  {
    id: 'photo-6',
    src: '/assets/aistudio/i5_78e33721.jpeg',
    title: 'Winter Snowfall at the Entrance',
    caption: 'The iconic Keys Select stone marquee blanketed in crisp Kufri winter snow.',
    category: 'Property & Surroundings',
    orientation: 'portrait',
  },
  {
    id: 'photo-7',
    src: '/assets/aistudio/i13_07268425.jpg',
    title: 'Studio Suite Mountain View',
    caption: 'Generous open-plan suite with hardwood floors, lounge chairs, and wide valley balcony.',
    category: 'Rooms & Suites',
    orientation: 'landscape',
  },
  {
    id: 'photo-8',
    src: '/assets/aistudio/i15_f52b696e.jpg',
    title: 'Keys Café Buffet & Dining',
    caption: 'Warm timber interiors and gourmet buffet display at Keys Café.',
    category: 'Restaurant & Dining',
    orientation: 'landscape',
  },
  {
    id: 'photo-9',
    src: '/assets/aistudio/i4_c2402e8e.jpg',
    title: 'Arrival Porte-Cochère',
    caption: 'Flower-lined stone walls and vibrant red-gabled entrance under clear mountain skies.',
    category: 'Hotel Exterior',
    orientation: 'landscape',
  },
  {
    id: 'photo-10',
    src: '/assets/aistudio/i22_034caaf6.jpg',
    title: 'Refresh Recreation Terrace',
    caption: 'Billiards and indoor games framed by dramatic Himalayan dusk skies.',
    category: 'Jacuzzi & Amenities',
    orientation: 'landscape',
  },
  {
    id: 'photo-11',
    src: '/assets/aistudio/i3_256bb861.jpeg',
    title: 'Misty Winter Morning in Kufri',
    caption: 'Snow-dusted heritage lamps and mountain terraces wrapped in winter fog.',
    category: 'Property & Surroundings',
    orientation: 'portrait',
  },
  {
    id: 'photo-12',
    src: '/assets/aistudio/i10_1b80a283.jpg',
    title: 'Standard Mountain View Room',
    caption: 'Cozy bay-window seating overlooking Kufri’s lush forested slopes.',
    category: 'Rooms & Suites',
    orientation: 'landscape',
  },
  {
    id: 'photo-13',
    src: '/assets/aistudio/i19_37cf0fc9.jpg',
    title: 'Unlock Bar Counter',
    caption: 'Backlit timber display, geometric lattice front, and curated mountain cocktails.',
    category: 'Restaurant & Dining',
    orientation: 'landscape',
  },
  {
    id: 'photo-14',
    src: '/assets/aistudio/i6_f2125a2e.jpg',
    title: 'Timber Main Entrance',
    caption: 'Warm pinewood portico with symmetrical glass doors and coach lanterns.',
    category: 'Hotel Exterior',
    orientation: 'landscape',
  },
  {
    id: 'photo-15',
    src: '/assets/aistudio/i14_2c30328c.jpg',
    title: 'Banquet & Celebration Hall',
    caption: 'Warmly lit event venue with glass doors opening to sweeping Himalayan ridges.',
    category: 'Jacuzzi & Amenities',
    orientation: 'landscape',
  },
  {
    id: 'photo-16',
    src: '/assets/aistudio/i11_5de7b311.jpg',
    title: 'Superior Double Room',
    caption: 'Refined bedroom with upholstered ottoman bench and custom warm cove lighting.',
    category: 'Rooms & Suites',
    orientation: 'landscape',
  },
  {
    id: 'photo-17',
    src: '/assets/aistudio/i7_a862e5aa.jpg',
    title: 'Front Desk & Reception',
    caption: 'Sunlit welcome desk crafted in warm wood and ivory for seamless arrivals.',
    category: 'Hotel Exterior',
    orientation: 'landscape',
  },
  {
    id: 'photo-18',
    src: '/assets/aistudio/i17_740aadcf.jpg',
    title: 'Keys Café Morning Counter',
    caption: 'Fresh juices, artisanal breakfast selections, and sculpted wave-wall accents.',
    category: 'Restaurant & Dining',
    orientation: 'landscape',
  },
  {
    id: 'photo-19',
    src: '/assets/aistudio/i20_0bd3d8da.jpg',
    title: 'Fitness Centre',
    caption: 'Modern cardio machines, free weights, and strength training equipment.',
    category: 'Jacuzzi & Amenities',
    orientation: 'landscape',
  },
  {
    id: 'photo-20',
    src: '/assets/aistudio/i9_fbf2266f.jpg',
    title: 'Standard Double Room',
    caption: 'Minimalist mountain comfort with hardwood floors and signature Keys accents.',
    category: 'Rooms & Suites',
    orientation: 'landscape',
  },
  {
    id: 'photo-21',
    src: '/assets/aistudio/i8_9f316d3a.jpg',
    title: 'Lobby Lounge Seating',
    caption: 'Intimate velvet seating framed by Himalayan mountain artwork and timber paneling.',
    category: 'Hotel Exterior',
    orientation: 'landscape',
  },
  {
    id: 'photo-22',
    src: '/assets/aistudio/i16_e4f738c5.jpg',
    title: 'Banquet Hall Formal Setup',
    caption: 'Champagne-gold round tables configured for weddings and executive retreats.',
    category: 'Jacuzzi & Amenities',
    orientation: 'landscape',
  },
];

export const NEARBY_ATTRACTIONS: NearbyAttraction[] = [
  {
    id: 'kufri',
    name: 'Kufri',
    distance: '2 km',
    driveTime: '5 mins',
    category: 'Mountain Ridge & Snow Point',
    description:
      'Renowned for panoramic views of the Pir Panjal range, tranquil cedar trails, the Himalayan Nature Park, and pristine winter snowfall.',
  },
  {
    id: 'hip-hip-hurray',
    name: 'Hip Hip Hurray Adventure Park',
    distance: '3.5 km',
    driveTime: '10 mins',
    category: 'Outdoor Adventure & Family Fun',
    description:
      'Set amidst scenic hill slopes offering Burma bridge walks, valley crossing, zip-lining, and memorable outdoor activities for families and groups.',
  },
  {
    id: 'mashobra',
    name: 'Mashobra',
    distance: '12 km',
    driveTime: '25 mins',
    category: 'Cedar Valley & Orchards',
    description:
      'A serene, uncrowded highland sanctuary celebrated for Asia’s largest watershed reserve, fragrant apple orchards, and forested walking trails.',
  },
  {
    id: 'shimla',
    name: 'Shimla',
    distance: '16 km',
    driveTime: '35 mins',
    category: 'Historic Hill Capital',
    description:
      'Explore iconic Mall Road, The Ridge, Christ Church, Viceregal Lodge, and heritage cafés in Himachal Pradesh’s celebrated mountain capital.',
  },
];
