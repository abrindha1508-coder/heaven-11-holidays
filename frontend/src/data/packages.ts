import type { TourPackage } from '../types/package';

// Import local assets for packages
import dubaiPkgImg from '../assets/International Tour Packages/Dubai/Burj Khalifa.webp';
import thailandPkgImg from '../assets/International Tour Packages/Thailand/Pattaya.webp';
import singaporePkgImg from '../assets/International Tour Packages/Singapore/Marina Bay Sands.webp';
import baliPkgImg from '../assets/International Tour Packages/Bali/Nusa Penida.webp';
import maldivesPkgImg from '../assets/International Tour Packages/Maldives/Water Villas.webp';
import europePkgImg from '../assets/International Tour Packages/Paris/Eiffel Tower.webp';
import vietnamPkgImg from '../assets/International Tour Packages/Vietnam/Halong Bay1.webp';
import malaysiaPkgImg from '../assets/International Tour Packages/Malaysia/Petronas Towers.webp';


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
    image: dubaiPkgImg,
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
    image: thailandPkgImg,
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
    image: singaporePkgImg,
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
    image: baliPkgImg,
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
    image: maldivesPkgImg,
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
    image: europePkgImg,
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
    image: vietnamPkgImg,
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
    image: malaysiaPkgImg,
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

];

export const groupTours = ['dubai-explorer', 'europe-marvels', 'thailand-getaway', 'malaysia-tour'];
export const tourPackages = packages;
export const familyPackages = { enabled: true };
