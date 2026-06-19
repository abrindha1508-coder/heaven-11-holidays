import type { Destination } from '../types/destination';

// Domestic Tour Images
import kashmirImg from '../assets/domestic tour Packages/Kashmir/srinagar.webp';
import keralaImg from '../assets/domestic tour Packages/Alleppey/Houseboat.webp';
import ootyImg from '../assets/domestic tour Packages/ooty/Ooty Lake.webp';
import kodaikanalImg from '../assets/domestic tour Packages/Kodaikanal/Kodai Lake.webp';
import goaImg from '../assets/domestic tour Packages/Goa/Calangute Beach.webp';
import andamanImg from '../assets/domestic tour Packages/Andaman/Radhanagar Beach.webp';
import rajasthanImg from '../assets/domestic tour Packages/Jaipur/Hawa Mahal.webp';
import himachalImg from '../assets/domestic tour Packages/Shimla/Shimla.webp';

import agraImg from '../assets/domestic tour Packages/Agra/Taj Mahal.webp';
import alleppeyImg from '../assets/domestic tour Packages/Alleppey/Houseboat.webp';
import amritsarImg from '../assets/domestic tour Packages/Amritsar/Golden Temple.avif';
import coorgImg from '../assets/domestic tour Packages/Coorg/Abbey Falls.webp';
import delhiImg from '../assets/domestic tour Packages/Delhi/India Gate.avif';
import hampiImg from '../assets/domestic tour Packages/Hampi/Stone Chariot.webp';
import kanyakumariImg from '../assets/domestic tour Packages/Kanyakumari/Vivekananda Rock.webp';
import lehLadakhImg from '../assets/domestic tour Packages/Leh Ladakh/Pangong Lake.webp';
import manaliImg from '../assets/domestic tour Packages/Manali/Solang Valley.webp';
import munnarImg from '../assets/domestic tour Packages/Munnar/Tea Gardens.webp';
import mysoreImg from '../assets/domestic tour Packages/Mysore/Mysore Palace.webp';
import pondicherryImg from '../assets/domestic tour Packages/Pondicherry/Rock Beach.webp';
import rameswaramImg from '../assets/domestic tour Packages/Rameswaram/Dhanushkodi.webp';
import rishikeshImg from '../assets/domestic tour Packages/Rishikesh/Ram Jhula.webp';
import varanasiImg from '../assets/domestic tour Packages/Varanasi/Varanasi.webp';
import wayanadImg from '../assets/domestic tour Packages/Wayanad/Edakkal Caves.webp';
import yercaudImg from '../assets/domestic tour Packages/Yercaud/Yercaud - Yercaud Lake.webp';

// International Tour Images
import dubaiImg from '../assets/International Tour Packages/Dubai/Burj Khalifa.webp';
import thailandImg from '../assets/International Tour Packages/Thailand/Phuket-1.webp';
import singaporeImg from '../assets/International Tour Packages/Singapore/Marina Bay Sands.webp';
import malaysiaImg from '../assets/International Tour Packages/Malaysia/Petronas Towers.webp';
import baliImg from '../assets/International Tour Packages/Bali/Nusa Penida.webp';
import maldivesImg from '../assets/International Tour Packages/Maldives/Water Villas.webp';
import vietnamImg from '../assets/International Tour Packages/Vietnam/Halong Bay1.webp';
import europeImg from '../assets/International Tour Packages/Paris/Eiffel Tower.webp';
import sriLankaImg from '../assets/International Tour Packages/Sri Lanka/Sigiriya.webp';
import switzerlandImg from '../assets/International Tour Packages/Switzerland/Interlaken.webp';
import turkeyImg from '../assets/International Tour Packages/Turkey/Cappadocia.webp';

export const destinations: Destination[] = [
  // Domestic Destinations
  {
    id: 'kashmir',
    name: 'Kashmir',
    image: kashmirImg,
    description: 'The Paradise on Earth. Experience snow-capped mountains, Shikara rides on Dal Lake, and breathtaking valleys.',
    type: 'domestic',
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
    image: keralaImg,
    description: 'God\'s Own Country. Famous for serene backwaters, houseboats, spice plantations, and lush tea gardens.',
    type: 'domestic',
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
    image: ootyImg,
    description: 'The Queen of Hill Stations. Nested in Nilgiri Hills, offering panoramic views, botanical gardens, and toy train rides.',
    type: 'domestic',
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
    image: kodaikanalImg,
    description: 'The Gift of the Forest. Beautiful misty hills, pine forests, pristine lakes, and tranquil walking trails.',
    type: 'domestic',
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
    image: goaImg,
    description: 'The Land of Sun, Sand, and Spices. Famous for golden sand beaches, historic churches, and thrilling water sports.',
    type: 'domestic',
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
    image: andamanImg,
    description: 'Tropical Paradise. Crystal clear blue waters, exquisite coral reefs, and tranquil private beaches.',
    type: 'domestic',
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
    image: rajasthanImg,
    description: 'The Land of Kings. Explore glorious heritage palaces, golden desert safaris, and colorful cultural festivals.',
    type: 'domestic',
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
    image: himachalImg,
    description: 'The Snowy Splendor. Magnificent valleys, adventure sports, paragliding in Solang Valley, and spiritual retreats.',
    type: 'domestic',
    price: 11999,
    rating: 4.7,
    duration: '5 Nights / 6 Days',
    highlights: ['Shimla Mall Road', 'Manali Solang Valley', 'Rohtang Pass Snow Tour', 'Dharamshala Monastery'],
    popular: true,
    country: 'India',
    bestTime: 'March to June & Oct to Dec',
    weather: '5°C - 20°C'
  },
  {
    id: 'agra',
    name: 'Agra',
    image: agraImg,
    description: 'Home of the Taj Mahal. Witness the grand Mughal architecture, historic Agra Fort, and the rich legacy of historic India.',
    type: 'domestic',
    price: 7999,
    rating: 4.8,
    duration: '2 Nights / 3 Days',
    highlights: ['Taj Mahal', 'Agra Fort', 'Fatehpur Sikri', 'Mehtab Bagh'],
    popular: false,
    country: 'India',
    bestTime: 'October to March',
    weather: '12°C - 28°C'
  },
  {
    id: 'alleppey',
    name: 'Alleppey',
    image: alleppeyImg,
    description: 'Venice of the East. Float along palm-fringed backwaters in luxury houseboats and see scenic village life.',
    type: 'domestic',
    price: 10999,
    rating: 4.8,
    duration: '3 Nights / 4 Days',
    highlights: ['Backwater Cruise', 'Houseboat Stay', 'Alappuzha Beach', 'Kuttanad Paddy Fields'],
    popular: true,
    country: 'India',
    bestTime: 'September to March',
    weather: '22°C - 32°C'
  },
  {
    id: 'amritsar',
    name: 'Amritsar',
    image: amritsarImg,
    description: 'The Spiritual Hub. Visit the majestic Golden Temple, witness the Wagah Border Ceremony, and taste Punjabi cuisine.',
    type: 'domestic',
    price: 8999,
    rating: 4.9,
    duration: '3 Nights / 4 Days',
    highlights: ['Golden Temple', 'Wagah Border Ceremony', 'Jallianwala Bagh', 'Partition Museum'],
    popular: false,
    country: 'India',
    bestTime: 'October to March',
    weather: '10°C - 26°C'
  },
  {
    id: 'coorg',
    name: 'Coorg',
    image: coorgImg,
    description: 'The Scotland of India. Rich coffee plantations, mist-covered green hills, cascading waterfalls, and scenic trails.',
    type: 'domestic',
    price: 9999,
    rating: 4.7,
    duration: '3 Nights / 4 Days',
    highlights: ['Abbey Falls', 'Raja\'s Seat', 'Dubare Elephant Camp', 'Namdroling Monastery'],
    popular: false,
    country: 'India',
    bestTime: 'October to March',
    weather: '15°C - 25°C'
  },
  {
    id: 'delhi',
    name: 'Delhi',
    image: delhiImg,
    description: 'The Historic Capital. Explore the blend of old and new: historic red sandstone monuments, bazaars, and modern structures.',
    type: 'domestic',
    price: 6999,
    rating: 4.6,
    duration: '3 Nights / 4 Days',
    highlights: ['India Gate', 'Qutub Minar', 'Red Fort', 'Lotus Temple'],
    popular: false,
    country: 'India',
    bestTime: 'October to March',
    weather: '15°C - 30°C'
  },
  {
    id: 'hampi',
    name: 'Hampi',
    image: hampiImg,
    description: 'Ruins of Vijayanagara. Step back in time among ancient stone temples, rock-cut monuments, and bouldered valleys.',
    type: 'domestic',
    price: 8999,
    rating: 4.8,
    duration: '3 Nights / 4 Days',
    highlights: ['Virupaksha Temple', 'Stone Chariot', 'Vithala Temple Complex', 'Hampi Bazaar'],
    popular: false,
    country: 'India',
    bestTime: 'October to March',
    weather: '18°C - 32°C'
  },
  {
    id: 'kanyakumari',
    name: 'Kanyakumari',
    image: kanyakumariImg,
    description: 'The Lands End. See the spectacular sunset and sunrise over the confluence of three oceans at India\'s southern tip.',
    type: 'domestic',
    price: 5999,
    rating: 4.7,
    duration: '2 Nights / 3 Days',
    highlights: ['Vivekananda Rock Memorial', 'Thiruvalluvar Statue', 'Kanyakumari Beach', 'Sunset View Point'],
    popular: false,
    country: 'India',
    bestTime: 'October to March',
    weather: '22°C - 32°C'
  },
  {
    id: 'leh-ladakh',
    name: 'Leh Ladakh',
    image: lehLadakhImg,
    description: 'Land of High Passes. Stunning blue lakes, cold desert landscapes, ancient monasteries, and thrill-seeking motor tracks.',
    type: 'domestic',
    price: 24999,
    rating: 4.9,
    duration: '6 Nights / 7 Days',
    highlights: ['Pangong Tso Lake', 'Nubra Valley', 'Magnetic Hill', 'Khardung La Pass'],
    popular: true,
    country: 'India',
    bestTime: 'May to September',
    weather: '5°C - 20°C'
  },
  {
    id: 'manali',
    name: 'Manali',
    image: manaliImg,
    description: 'The Adventure Haven. Snow-capped valleys, river rafting, paragliding in Solang, and majestic Himalayan views.',
    type: 'domestic',
    price: 11999,
    rating: 4.8,
    duration: '4 Nights / 5 Days',
    highlights: ['Solang Valley paragliding', 'Rohtang Pass Snow Tour', 'Hadimba Temple', 'Jogini Waterfalls'],
    popular: true,
    country: 'India',
    bestTime: 'March to June & Oct to Dec',
    weather: '5°C - 20°C'
  },
  {
    id: 'munnar',
    name: 'Munnar',
    image: munnarImg,
    description: 'The Tea Paradise. Vast rolling green tea plantations, misty valleys, scenic lakes, and refreshing cool breeze.',
    type: 'domestic',
    price: 9999,
    rating: 4.8,
    duration: '3 Nights / 4 Days',
    highlights: ['Munnar Tea Gardens', 'Echo Point boating', 'Eravikulam National Park', 'Mattupetty Dam'],
    popular: true,
    country: 'India',
    bestTime: 'September to May',
    weather: '12°C - 25°C'
  },
  {
    id: 'mysore',
    name: 'Mysore',
    image: mysoreImg,
    description: 'The Palace City. Witness the grand heritage of Mysore Palace, explore Chamundi Hills, and buy royal sandalwood products.',
    type: 'domestic',
    price: 6999,
    rating: 4.7,
    duration: '2 Nights / 3 Days',
    highlights: ['Mysore Palace', 'Chamundi Hills Temple', 'Brindavan Gardens', 'Mysore Zoo'],
    popular: false,
    country: 'India',
    bestTime: 'October to March',
    weather: '18°C - 30°C'
  },
  {
    id: 'pondicherry',
    name: 'Pondicherry',
    image: pondicherryImg,
    description: 'French Riviera of India. Enjoy relaxing Rock Beach, stroll French Quarter lanes, and experience spiritual Auroville.',
    type: 'domestic',
    price: 7999,
    rating: 4.7,
    duration: '3 Nights / 4 Days',
    highlights: ['Auroville Ashram', 'Rock Beach walking', 'French Colony tour', 'Paradise Beach'],
    popular: false,
    country: 'India',
    bestTime: 'October to March',
    weather: '22°C - 32°C'
  },
  {
    id: 'rameswaram',
    name: 'Rameswaram',
    image: rameswaramImg,
    description: 'The Sacred Island. Stroll through the corridors of Ramanathaswamy Temple, view Pamban Bridge, and visit ghost town Dhanushkodi.',
    type: 'domestic',
    price: 6999,
    rating: 4.8,
    duration: '2 Nights / 3 Days',
    highlights: ['Ramanathaswamy Temple', 'Dhanushkodi Beach', 'Pamban Bridge', 'Agni Theertham'],
    popular: false,
    country: 'India',
    bestTime: 'October to March',
    weather: '22°C - 32°C'
  },
  {
    id: 'rishikesh',
    name: 'Rishikesh',
    image: rishikeshImg,
    description: 'Yoga Capital of the World. Go river rafting, visit ancient ashrams, and watch Ganga Aarti at Triveni Ghat.',
    type: 'domestic',
    price: 9999,
    rating: 4.8,
    duration: '3 Nights / 4 Days',
    highlights: ['River Rafting', 'Ram Jhula & Laxman Jhula', 'Triveni Ghat Ganga Aarti', 'Beatles Ashram'],
    popular: false,
    country: 'India',
    bestTime: 'September to April',
    weather: '12°C - 30°C'
  },
  {
    id: 'varanasi',
    name: 'Varanasi',
    image: varanasiImg,
    description: 'The Eternal Holy City. Spiritual morning boat rides, grand Ganga Aarti rituals, and ancient riverbank temples.',
    type: 'domestic',
    price: 8999,
    rating: 4.9,
    duration: '3 Nights / 4 Days',
    highlights: ['Kashi Vishwanath Temple', 'Dashashwamedh Ghat Aarti', 'Morning Ganges Boat Ride', 'Sarnath Ruins'],
    popular: false,
    country: 'India',
    bestTime: 'October to March',
    weather: '10°C - 28°C'
  },
  {
    id: 'wayanad',
    name: 'Wayanad',
    image: wayanadImg,
    description: 'The Green Retreat. Hike up to ancient Edakkal Caves, see waterfalls, and explore cardamom forests.',
    type: 'domestic',
    price: 8999,
    rating: 4.7,
    duration: '3 Nights / 4 Days',
    highlights: ['Edakkal Caves', 'Soochipara Waterfalls', 'Banasura Sagar Dam', 'Wayanad Wildlife Sanctuary'],
    popular: false,
    country: 'India',
    bestTime: 'October to May',
    weather: '15°C - 28°C'
  },
  {
    id: 'yercaud',
    name: 'Yercaud',
    image: yercaudImg,
    description: 'Jewel of the South. Serene Eastern Ghats hill station famous for orange orchards, lakes, and panoramic viewpoints.',
    type: 'domestic',
    price: 5999,
    rating: 4.5,
    duration: '2 Nights / 3 Days',
    highlights: ['Yercaud Lake boating', 'Pagoda Point', 'Lady\'s Seat', 'Killiyur Falls'],
    popular: false,
    country: 'India',
    bestTime: 'October to June',
    weather: '15°C - 25°C'
  },

  // International Destinations
  {
    id: 'dubai',
    name: 'Dubai',
    image: dubaiImg,
    description: 'The Golden City. Ultramodern skyscrapers, luxury shopping, thrilling desert safaris, and futuristic attractions.',
    type: 'international',
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
    image: thailandImg,
    description: 'The Land of Smiles. Glittering Buddhist temples, vibrant street markets, tropical beaches, and active nightlife.',
    type: 'international',
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
    image: singaporeImg,
    description: 'The Garden City. Futuristic supertrees, top-notch amusement parks, and multi-cultural gourmet dining.',
    type: 'international',
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
    image: malaysiaImg,
    description: 'Truly Asia. Iconic Petronas twin towers, colonial architecture, rainforests, and stunning tropical islands.',
    type: 'international',
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
    image: baliImg,
    description: 'The Island of Gods. A magical mix of volcanic mountains, sandy beaches, cliffside temples, and rice terraces.',
    type: 'international',
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
    image: maldivesImg,
    description: 'The Ultimate Luxury Escape. Secluded overwater villas, gorgeous coral reefs, private white-sand lagoons.',
    type: 'international',
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
    image: vietnamImg,
    description: 'Timeless Charm. Cruising Halong Bay, traversing French-colonial lanes in Hanoi, and tasting delectable street food.',
    type: 'international',
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
    image: europeImg,
    description: 'Dream Continent Tour. Experience the Eiffel Tower in Paris, scenic Swiss Alps train rides, and canals of Venice.',
    type: 'international',
    price: 89999,
    rating: 4.9,
    duration: '9 Nights / 10 Days',
    highlights: ['Eiffel Tower Summit Access', 'Mt. Titlis Swiss Gondola', 'Venice Gondola Ride', 'Rome Colosseum Tour'],
    popular: true,
    country: 'France, Switzerland, Italy',
    bestTime: 'May to September',
    weather: '12°C - 24°C'
  },
  {
    id: 'sri-lanka',
    name: 'Sri Lanka',
    image: sriLankaImg,
    description: 'The Pearl of the Indian Ocean. Beautiful golden beaches, historic Sigiriya rock fortress, and lush tea estates in Ella.',
    type: 'international',
    price: 24999,
    rating: 4.7,
    duration: '4 Nights / 5 Days',
    highlights: ['Sigiriya Rock Fortress', 'Ella Train Ride', 'Temple of the Tooth', 'Mirissa Beach'],
    popular: false,
    country: 'Sri Lanka',
    bestTime: 'December to April',
    weather: '22°C - 30°C'
  },
  {
    id: 'switzerland',
    name: 'Switzerland',
    image: switzerlandImg,
    description: 'The Alpine Paradise. Ride scenic trains through snow-capped Swiss Alps, explore Interlaken, and view Zurich lakes.',
    type: 'international',
    price: 99999,
    rating: 4.9,
    duration: '6 Nights / 7 Days',
    highlights: ['Mt. Titlis Cable Car', 'Interlaken Chalet Stay', 'Lucerne Lake Cruise', 'Scenic Bernina Express'],
    popular: true,
    country: 'Switzerland',
    bestTime: 'June to September & Dec to Mar',
    weather: '-2°C - 18°C'
  },
  {
    id: 'turkey',
    name: 'Turkey',
    image: turkeyImg,
    description: 'Where East Meets West. Fly in a hot air balloon over Cappadocia, visit historic Istanbul mosques, and explore ancient ruins.',
    type: 'international',
    price: 45999,
    rating: 4.8,
    duration: '5 Nights / 6 Days',
    highlights: ['Cappadocia Hot Air Balloon', 'Hagia Sophia Istanbul', 'Pamukkale Thermal Pools', 'Ephesus Ancient City'],
    popular: false,
    country: 'Turkey',
    bestTime: 'April to May & Sept to Oct',
    weather: '12°C - 26°C'
  }
];
