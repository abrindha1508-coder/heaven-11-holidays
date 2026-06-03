import type { Destination } from '../types/destination';

export const destinations: Destination[] = [
  // Domestic Destinations
  {
    id: 'kashmir',
    name: 'Kashmir',
    // Dal Lake with snow-capped mountains, Kashmir
    image: '/kashmir.jpg',
    description: 'The Paradise on Earth. Experience snow-capped mountains, Shikara rides on Dal Lake, and breathtaking valleys.',
    type: 'domestic',
    isHoneymoon: true,
    price: 15999,
    rating: 4.9,
    duration: '5 Nights / 6 Days',
    highlights: ['Dal Lake Shikara Ride', 'Gulmarg Gondola Ride', 'Pahalgam Valley', 'Mughal Gardens'],
    popular: true,
    country: 'India',
    bestTime: 'March to October',
    weather: '10°C - 25°C'
  },
  {
    id: 'kerala',
    name: 'Kerala',
    // Alleppey backwaters houseboat Kerala
    image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=800&q=80',
    description: 'God\'s Own Country. Famous for serene backwaters, houseboats, spice plantations, and lush tea gardens.',
    type: 'domestic',
    isHoneymoon: true,
    price: 12999,
    rating: 4.8,
    duration: '6 Nights / 7 Days',
    highlights: ['Alleppey Houseboat Stay', 'Munnar Tea Gardens', 'Thekkady Wildlife Sanctuary', 'Kovalam Beach'],
    popular: true,
    country: 'India',
    bestTime: 'September to March',
    weather: '18°C - 30°C'
  },
  {
    id: 'ooty',
    name: 'Ooty',
    // Nilgiri hills green tea estates Ooty
    image: '/ooty.jpg',
    description: 'The Queen of Hill Stations. Nested in Nilgiri Hills, offering panoramic views, botanical gardens, and toy train rides.',
    type: 'domestic',
    isHoneymoon: false,
    price: 9999,
    rating: 4.6,
    duration: '3 Nights / 4 Days',
    highlights: ['Nilgiri Mountain Railway', 'Ooty Lake boating', 'Botanical Garden', 'Doddabetta Peak'],
    popular: true,
    country: 'India',
    bestTime: 'October to June',
    weather: '12°C - 20°C'
  },
  {
    id: 'kodaikanal',
    name: 'Kodaikanal',
    // Kodaikanal lake misty hills
    image: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=800&q=80',
    description: 'The Gift of the Forest. Beautiful misty hills, pine forests, pristine lakes, and tranquil walking trails.',
    type: 'domestic',
    isHoneymoon: true,
    price: 8999,
    rating: 4.7,
    duration: '3 Nights / 4 Days',
    highlights: ['Kodaikanal Lake', 'Coakers Walk', 'Pillar Rocks', 'Pine Forest Trails'],
    popular: false,
    country: 'India',
    bestTime: 'April to June & Sept to Oct',
    weather: '10°C - 18°C'
  },
  {
    id: 'goa',
    name: 'Goa',
    // Goa beach golden sand blue sea
    image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=800&q=80',
    description: 'The Land of Sun, Sand, and Spices. Famous for golden sand beaches, historic churches, and thrilling water sports.',
    type: 'domestic',
    isHoneymoon: false,
    price: 10999,
    rating: 4.7,
    duration: '4 Nights / 5 Days',
    highlights: ['North Goa Beach Tour', 'Scuba Diving & Watersports', 'Mandovi River Cruise', 'Dudhsagar Waterfalls'],
    popular: true,
    country: 'India',
    bestTime: 'November to February',
    weather: '22°C - 32°C'
  },
  {
    id: 'andaman',
    name: 'Andaman & Nicobar',
    // Andaman crystal clear blue water beach
    image: 'https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?auto=format&fit=crop&w=800&q=80',
    description: 'Tropical Paradise. Crystal clear blue waters, exquisite coral reefs, and tranquil private beaches.',
    type: 'domestic',
    isHoneymoon: true,
    price: 18999,
    rating: 4.9,
    duration: '5 Nights / 6 Days',
    highlights: ['Radhanagar Beach (Havelock)', 'Scuba diving & Snorkeling', 'Cellular Jail Light Show', 'Ross Island Tour'],
    popular: true,
    country: 'India',
    bestTime: 'October to May',
    weather: '23°C - 31°C'
  },
  {
    id: 'rajasthan',
    name: 'Rajasthan',
    // Hawa Mahal palace Jaipur Rajasthan
    image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=800&q=80',
    description: 'The Land of Kings. Explore glorious heritage palaces, golden desert safaris, and colorful cultural festivals.',
    type: 'domestic',
    isHoneymoon: false,
    price: 13999,
    rating: 4.8,
    duration: '6 Nights / 7 Days',
    highlights: ['Jaipur Amer Fort', 'Udaipur Lake Palace boating', 'Jaisalmer Desert Safari', 'Jodhpur Blue City Tour'],
    popular: false,
    country: 'India',
    bestTime: 'October to March',
    weather: '15°C - 28°C'
  },
  {
    id: 'himachal',
    name: 'Himachal Pradesh',
    // Manali snow mountains Rohtang Pass
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80',
    description: 'The Snowy Splendor. Magnificent valleys, adventure sports, paragliding in Solang Valley, and spiritual retreats.',
    type: 'domestic',
    isHoneymoon: false,
    price: 11999,
    rating: 4.7,
    duration: '5 Nights / 6 Days',
    highlights: ['Shimla Mall Road', 'Manali Solang Valley', 'Rohtang Pass Snow Tour', 'Dharamshala Monastery'],
    popular: true,
    country: 'India',
    bestTime: 'March to June & Oct to Dec',
    weather: '5°C - 20°C'
  },

  // International Destinations
  {
    id: 'dubai',
    name: 'Dubai',
    // Burj Khalifa Dubai city skyline
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80',
    description: 'The Golden City. Ultramodern skyscrapers, luxury shopping, thrilling desert safaris, and futuristic attractions.',
    type: 'international',
    isHoneymoon: false,
    price: 39999,
    rating: 4.9,
    duration: '4 Nights / 5 Days',
    highlights: ['Burj Khalifa 124th Floor', 'Desert Safari with BBQ Dinner', 'Dhow Cruise Marina', 'Dubai Mall & Aquarium'],
    popular: true,
    country: 'UAE',
    bestTime: 'November to April',
    weather: '18°C - 30°C'
  },
  {
    id: 'thailand',
    name: 'Thailand',
    // Wat Arun temple Bangkok river Thailand
    image: 'https://images.unsplash.com/photo-1555400038-63f5ba517a47?auto=format&fit=crop&w=800&q=80',
    description: 'The Land of Smiles. Glittering Buddhist temples, vibrant street markets, tropical beaches, and active nightlife.',
    type: 'international',
    isHoneymoon: false,
    price: 29999,
    rating: 4.7,
    duration: '4 Nights / 5 Days',
    highlights: ['Bangkok Temple Tour', 'Coral Island Speedboat Tour', 'Pattaya Alcazar Show', 'Safari World & Marine Park'],
    popular: true,
    country: 'Thailand',
    bestTime: 'November to April',
    weather: '24°C - 32°C'
  },
  {
    id: 'singapore',
    name: 'Singapore',
    // Marina Bay Sands Singapore at night
    image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=800&q=80',
    description: 'The Garden City. Futuristic supertrees, top-notch amusement parks, and multi-cultural gourmet dining.',
    type: 'international',
    isHoneymoon: false,
    price: 34999,
    rating: 4.8,
    duration: '4 Nights / 5 Days',
    highlights: ['Universal Studios Singapore', 'Gardens by the Bay', 'Sentosa Island Cable Car', 'Night Safari'],
    popular: true,
    country: 'Singapore',
    bestTime: 'February to April',
    weather: '25°C - 31°C'
  },
  {
    id: 'malaysia',
    name: 'Malaysia',
    // Petronas Twin Towers KL Malaysia night
    image: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&w=800&q=80',
    description: 'Truly Asia. Iconic Petronas twin towers, colonial architecture, rainforests, and stunning tropical islands.',
    type: 'international',
    isHoneymoon: false,
    price: 25999,
    rating: 4.6,
    duration: '4 Nights / 5 Days',
    highlights: ['Kuala Lumpur City Tour', 'Batu Caves Visit', 'Genting Highlands Cable Car', 'Langkawi Island Hopping'],
    popular: true,
    country: 'Malaysia',
    bestTime: 'March to October',
    weather: '23°C - 32°C'
  },
  {
    id: 'bali',
    name: 'Bali',
    // Kelingking Beach cliffs Nusa Penida Bali
    image: 'https://images.unsplash.com/photo-1573790387438-4da905039392?auto=format&fit=crop&w=800&q=80',
    description: 'The Island of Gods. A magical mix of volcanic mountains, sandy beaches, cliffside temples, and rice terraces.',
    type: 'international',
    isHoneymoon: true,
    price: 32999,
    rating: 4.9,
    duration: '5 Nights / 6 Days',
    highlights: ['Ubud Rice Terraces & Swing', 'Tanah Lot Cliff Temple', 'Kintamani Volcano View', 'Nusa Penida Day Trip'],
    popular: true,
    country: 'Indonesia',
    bestTime: 'April to October',
    weather: '24°C - 30°C'
  },
  {
    id: 'maldives',
    name: 'Maldives',
    // Maldives overwater villas turquoise lagoon
    image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=800&q=80',
    description: 'The Ultimate Luxury Escape. Secluded overwater villas, gorgeous coral reefs, private white-sand lagoons.',
    type: 'international',
    isHoneymoon: true,
    price: 49999,
    rating: 4.9,
    duration: '3 Nights / 4 Days',
    highlights: ['Luxury Overwater Villa Stay', 'Speedboat Transfers', 'Snorkeling & Coral Watching', 'Private Beach Dinner'],
    popular: true,
    country: 'Maldives',
    bestTime: 'November to April',
    weather: '26°C - 31°C'
  },
  {
    id: 'vietnam',
    name: 'Vietnam',
    // Ha Long Bay limestone karsts cruise boats Vietnam
    image: 'https://images.unsplash.com/photo-1528360983277-13d401cdc186?auto=format&fit=crop&w=800&q=80',
    description: 'Timeless Charm. Cruising Halong Bay, traversing French-colonial lanes in Hanoi, and tasting delectable street food.',
    type: 'international',
    isHoneymoon: false,
    price: 27999,
    rating: 4.8,
    duration: '5 Nights / 6 Days',
    highlights: ['Halong Bay Cruise', 'Hanoi Old Quarter', 'Ba Na Hills Golden Bridge', 'Cu Chi Tunnels Tour'],
    popular: true,
    country: 'Vietnam',
    bestTime: 'February to April & Oct to Dec',
    weather: '20°C - 28°C'
  },
  {
    id: 'europe',
    name: 'Europe Scenic Highlights',
    // Eiffel Tower Paris France at sunset
    image: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=800&q=80',
    description: 'Dream Continent Tour. Experience the Eiffel Tower in Paris, scenic Swiss Alps train rides, and canals of Venice.',
    type: 'international',
    isHoneymoon: true,
    price: 89999,
    rating: 4.9,
    duration: '9 Nights / 10 Days',
    highlights: ['Eiffel Tower Summit Access', 'Mt. Titlis Swiss Gondola', 'Venice Gondola Ride', 'Rome Colosseum Tour'],
    popular: true,
    country: 'France, Switzerland, Italy',
    bestTime: 'May to September',
    weather: '12°C - 24°C'
  }
];
