import type { TourPackage } from '../types/package';

export const packages: TourPackage[] = [
  // Trending Tour Packages
  {
    id: 'dubai-explorer',
    title: 'Dubai Explorer',
    destinationId: 'dubai',
    destinationName: 'Dubai',
    duration: '5 Days / 4 Nights',
    price: 44999,
    discountPrice: 49999,
    rating: 4.9,
    reviewsCount: 182,
    // Burj Khalifa Dubai skyline
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80',
    highlights: ['Burj Khalifa 124th Floor', 'Desert Safari with BBQ Dinner', 'Dhow Cruise Marina', 'Dubai Mall & Aquarium'],
    inclusions: ['4-Star Deluxe Stays', 'Daily Breakfast & Dinner', 'Desert Safari Tour', 'Direct Airport Transfers'],
    exclusions: ['International Flights', 'Dirham Tourism Tax', 'Lunches & Personal expenses'],
    itinerary: [
      { day: 1, title: 'Arrival & Marina Dhow Cruise', description: 'Arrive at DXB airport, transfer to hotel. In the evening, enjoy a premium Marina Dhow Cruise with a buffet dinner.' }
    ],
    type: 'international',
    popular: true,
    featured: true
  },
  {
    id: 'thailand-getaway',
    title: 'Thailand Getaway',
    destinationId: 'thailand',
    destinationName: 'Thailand',
    duration: '5 Days / 4 Nights',
    price: 29999,
    discountPrice: 34999,
    rating: 4.7,
    reviewsCount: 156,
    // Wat Arun temple Bangkok Thailand
    image: 'https://images.unsplash.com/photo-1555400038-63f5ba517a47?auto=format&fit=crop&w=800&q=80',
    highlights: ['Pattaya Coral Island Speedboat', 'Bangkok Reclining Buddha', 'Safari World & Marine Park'],
    inclusions: ['3-Star Premium Stays', 'Daily Breakfast & Lunch', 'Speedboat Transfers', 'Accredited Local Guides'],
    exclusions: ['Airfare & Visa Fees', 'Personal expenses'],
    itinerary: [
      { day: 1, title: 'Arrival in Bangkok & Pattaya Transfer', description: 'Land at Bangkok, transfer to Pattaya. Spend the evening visiting local markets.' }
    ],
    type: 'international',
    popular: true,
    featured: true
  },
  {
    id: 'singapore-delight',
    title: 'Singapore Delight',
    destinationId: 'singapore',
    destinationName: 'Singapore',
    duration: '4 Days / 3 Nights',
    price: 34999,
    discountPrice: 42999,
    rating: 4.8,
    reviewsCount: 165,
    // Gardens by the Bay supertrees Singapore
    image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=800&q=80',
    highlights: ['Universal Studios Singapore', 'Gardens by the Bay Double Conservatories', 'Sentosa Cable Car'],
    inclusions: ['4-Star City Hotels', 'Daily Buffet Breakfast', 'Universal Studios Passes', 'Sling Transits'],
    exclusions: ['Airfare & Visa fees', 'Lunches & Dinners'],
    itinerary: [
      { day: 1, title: 'Arrival & Gardens by the Bay', description: 'Arrive at Changi, explore Jewel, transfer to hotel. Visit Gardens by the Bay in the evening.' }
    ],
    type: 'international',
    popular: true,
    featured: true
  },
  {
    id: 'bali-bliss',
    title: 'Bali Bliss',
    destinationId: 'bali',
    destinationName: 'Bali',
    duration: '5 Days / 4 Nights',
    price: 32999,
    discountPrice: 38999,
    rating: 4.9,
    reviewsCount: 194,
    // Kelingking Beach Nusa Penida Bali
    image: 'https://images.unsplash.com/photo-1573790387438-4da905039392?auto=format&fit=crop&w=800&q=80',
    highlights: ['Ubud Rice Terraces & Swing', 'Tanah Lot Cliff Temple', 'Kelingking Beach Nusa Penida'],
    inclusions: ['Private Pool Villa Stay', 'Daily Breakfast', 'Nusa Penida Boat tickets', 'Private AC Sedan Transfers'],
    exclusions: ['Flights & Personal Tips'],
    itinerary: [
      { day: 1, title: 'Arrival in Bali & Villa Check-in', description: 'Arrive at Denpasar Airport, meet your private guide, and check into your Seminyak pool villa.' }
    ],
    type: 'international',
    popular: true,
    featured: true
  },
  {
    id: 'maldives-paradise',
    title: 'Maldives Paradise',
    destinationId: 'maldives',
    destinationName: 'Maldives',
    duration: '4 Days / 3 Nights',
    price: 68999,
    discountPrice: 75000,
    rating: 4.9,
    reviewsCount: 112,
    // Maldives overwater bungalows crystal blue lagoon
    image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=800&q=80',
    highlights: ['Luxury Water Villa with slide', 'Speedboat Airport Transfers', 'All-Inclusive Dine Around Plan'],
    inclusions: ['Luxury Water Villa Stays', 'All Meals & Premium Beverages', 'Roundtrip Speedboat Transfers'],
    exclusions: ['Airfare & Green Taxes'],
    itinerary: [
      { day: 1, title: 'Speedboat Transfer & Lagoon Check-in', description: 'Arrive at Male airport, board speedboat, and check into your overwater luxury suite.' }
    ],
    type: 'international',
    popular: true,
    featured: true
  },
  {
    id: 'europe-marvels',
    title: 'Europe Marvels',
    destinationId: 'europe',
    destinationName: 'Europe',
    duration: '8 Days / 7 Nights',
    price: 89999,
    discountPrice: 99999,
    rating: 4.9,
    reviewsCount: 94,
    // Eiffel Tower Paris at sunset
    image: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=800&q=80',
    highlights: ['Eiffel Tower Level 3 Entry', 'Seine River Cruise tickets', 'Swiss Alps Mountain Cogwheel Train'],
    inclusions: ['Premium Scenic Hotel stays', 'European Daily Breakfasts', 'Inter-city Eurail passes'],
    exclusions: ['Airfare & VFS visa fees'],
    itinerary: [
      { day: 1, title: 'Bienvenue à Paris', description: 'Arrive in Paris, transfer to hotel. In the evening, enjoy a sunset Seine river cruise.' }
    ],
    type: 'international',
    popular: true,
    featured: true
  },
  {
    id: 'vietnam-discovery',
    title: 'Vietnam Discovery',
    destinationId: 'vietnam',
    destinationName: 'Vietnam',
    duration: '6 Days / 5 Nights',
    price: 27999,
    discountPrice: 32999,
    rating: 4.8,
    reviewsCount: 88,
    // Ha Long Bay cruise limestone islands Vietnam
    image: 'https://images.unsplash.com/photo-1528360983277-13d401cdc186?auto=format&fit=crop&w=800&q=80',
    highlights: ['Halong Bay Overnight Cruise', 'Hanoi Old Quarter tour', 'Golden Bridge Ba Na Hills'],
    inclusions: ['4-Star Hotel Stays', 'Daily Breakfast & Cruise meals', 'English-speaking tour guides'],
    exclusions: ['Visa & Flight charges'],
    itinerary: [
      { day: 1, title: 'Arrival in Hanoi', description: 'Arrive in Hanoi, check into your boutique hotel, explore Hoan Kiem lake.' }
    ],
    type: 'international',
    popular: true,
    featured: true
  },
  {
    id: 'malaysia-tour',
    title: 'Malaysia Tour',
    destinationId: 'malaysia',
    destinationName: 'Malaysia',
    duration: '5 Days / 4 Nights',
    price: 26999,
    discountPrice: 29999,
    rating: 4.6,
    reviewsCount: 78,
    // Petronas Twin Towers Kuala Lumpur Malaysia
    image: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&w=800&q=80',
    highlights: ['Petronas Twin Towers photo op', 'Batu Caves golden statue', 'Genting Cable Car Ride'],
    inclusions: ['Premium City Hotels', 'Daily Breakfasts', 'Return Cable Car booking'],
    exclusions: ['Visa & International Airfare'],
    itinerary: [
      { day: 1, title: 'Kuala Lumpur Check-in', description: 'Arrive at KLIA, transfer to city hotel, spend evening at Bukit Bintang.' }
    ],
    type: 'international',
    popular: true,
    featured: true
  },

  // Honeymoon Packages
  {
    id: 'maldives-honeymoon',
    title: 'Maldives Honeymoon',
    destinationId: 'maldives',
    destinationName: 'Maldives',
    duration: '4 Days / 3 Nights',
    price: 54999,
    discountPrice: 59999,
    rating: 4.9,
    reviewsCount: 142,
    // Maldives private beach sunset overwater villa
    image: 'https://images.unsplash.com/photo-1573843981267-be1fb9b73556?auto=format&fit=crop&w=800&q=80',
    highlights: ['Private Overwater Villa Stay', 'Speedboat Transfers', 'Romantic Floating Breakfast'],
    inclusions: ['Romantic Villa Decor', 'Complimentary Champagne & Cake', 'Beachfront Candlelit Dinner'],
    exclusions: ['Airfare'],
    itinerary: [
      { day: 1, title: 'Romantic Welcome at Maldives', description: 'Check into your overwater pool villa with special honeymoon decoration.' }
    ],
    type: 'honeymoon',
    popular: true,
    featured: true
  },
  {
    id: 'bali-honeymoon',
    title: 'Bali Honeymoon',
    destinationId: 'bali',
    destinationName: 'Bali',
    duration: '5 Days / 4 Nights',
    price: 24999,
    discountPrice: 28999,
    rating: 4.9,
    reviewsCount: 164,
    // Tanah Lot sea temple Bali romantic sunset
    image: 'https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?auto=format&fit=crop&w=800&q=80',
    highlights: ['Seminyak Pool Villa', 'Ubud Jungle Swing couple pass', 'Jimbaran Candlelight BBQ'],
    inclusions: ['Couple Floating Breakfast', 'Complimentary Honeymoon Cake', 'All entry fees'],
    exclusions: ['Airfare & Personal expenses'],
    itinerary: [
      { day: 1, title: 'Seminyak Pool Villa welcome', description: 'Check into Seminyak pool villa. Evening romantic dinner.' }
    ],
    type: 'honeymoon',
    popular: true,
    featured: true
  },
  {
    id: 'kashmir-honeymoon',
    title: 'Kashmir Honeymoon',
    destinationId: 'kashmir',
    destinationName: 'Kashmir',
    duration: '5 Days / 4 Nights',
    price: 18999,
    discountPrice: 21999,
    rating: 4.9,
    reviewsCount: 96,
    // Dal Lake shikara romantic Kashmir mountains
    image: '/kashmir.jpg',
    highlights: ['Dal Lake Houseboat night', 'Gulmarg Snow Gondola Ride', 'Betaab Valley Couple Safari'],
    inclusions: ['1 Night Luxury Houseboat', 'Shikara Ride flowers block', 'AC Vehicle with Driver'],
    exclusions: ['Airfare'],
    itinerary: [
      { day: 1, title: 'Dal Lake shikara welcome', description: 'Board the houseboat in Dal Lake. Enjoy a romantic Shikara ride.' }
    ],
    type: 'honeymoon',
    popular: true,
    featured: true
  },
  {
    id: 'switzerland-honeymoon',
    title: 'Switzerland Honeymoon',
    destinationId: 'europe',
    destinationName: 'Switzerland',
    duration: '6 Days / 5 Nights',
    price: 118999,
    discountPrice: 129999,
    rating: 4.9,
    reviewsCount: 84,
    // Swiss Alps Interlaken snow mountains lake
    image: 'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?auto=format&fit=crop&w=800&q=80',
    highlights: ['Lucerne Lake Cruise couple pass', 'Interlaken Chalet stay', 'Mount Titlis Snow Gondola'],
    inclusions: ['Alpine Scenic Resorts', 'Eurail Passes', 'Cable car tickets'],
    exclusions: ['Schengen Visa fees & Flights'],
    itinerary: [
      { day: 1, title: 'Lucerne lake welcome', description: 'Arrive in Lucerne, check into lakefront hotel, enjoy evening sunset cruise.' }
    ],
    type: 'honeymoon',
    popular: true,
    featured: true
  }
];

export const honeymoonPackages = ['maldives-honeymoon', 'bali-honeymoon', 'kashmir-honeymoon', 'switzerland-honeymoon'];
export const groupTours = ['dubai-explorer', 'europe-marvels', 'thailand-getaway', 'malaysia-tour'];
export const tourPackages = packages;
export const familyPackages = { enabled: true };
