import type { BlogArticle } from '../types/testimonial';

export const blogs: BlogArticle[] = [
  {
    id: 'dubai-places',
    title: '10 Best Places to Visit in Dubai',
    slug: '10-best-places-to-visit-in-dubai',
    summary: 'Plan your dream getaway to the Golden City. Discover top attractions like Burj Khalifa, red dune safaris, luxury cruising, and shopping highlights.',
    category: 'International Tours',
    author: 'Elena Rostova (Travel Specialist)',
    readTime: '6 min read',
    date: 'May 20, 2024',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80',
    tags: ['Dubai', 'Luxury Travel', 'Shopping', 'Adventure'],
    content: `
# Discovering the Wonders of Dubai

Dubai is a city of superlatives—home to the world's tallest building, the biggest shopping malls, and some of the most luxurious hotels on the planet. Whether you are seeking a luxury escape, a romantic getaway, or a fun-filled family vacation, our travel guide covers the absolute essentials.

## 1. Top Attractions You Cannot Miss
* **Burj Khalifa**: Climb to the 124th and 125th floors for a stunning 360-degree vista of the city, gulf, and desert.
* **The Palm Jumeirah**: A man-made island shaped like a palm tree, featuring ultra-luxury resorts like Atlantis The Palm.
* **Dubai Mall & Fountain**: Check out the massive aquarium inside the mall and witness the mesmerizing dancing fountain show outside.

## 2. Adventure & Deserts
A Dubai trip is incomplete without a **Red Dune Desert Safari**. Climb into a 4x4 Land Cruiser for exhilarating dune bashing, ride a camel, try sandboarding, and end the evening at a Bedouin-style camp with live Tanoura dance, fire shows, and a premium BBQ dinner.
    `
  },
  {
    id: 'thailand-guide',
    title: 'Thailand Budget Travel Guide',
    slug: 'thailand-budget-travel-guide',
    summary: 'A complete handbook on how to explore Bangkok, Pattaya, and tropical Thai islands without breaking the bank.',
    category: 'Budget Travel',
    author: 'Karan Malhotra (Explorer)',
    readTime: '5 min read',
    date: 'May 18, 2024',
    image: 'https://images.unsplash.com/photo-1506665531195-3566af2b4dfa?auto=format&fit=crop&w=800&q=80',
    tags: ['Thailand', 'Budget Guide', 'Backpacking', 'Street Food'],
    content: `
# Thailand on a Budget: The Ultimate Guide

Thailand offers an incredible combination of rich culture, pristine beaches, mouthwatering street food, and gorgeous temples—all at highly affordable prices. Here is how you can make the most of your Thai vacation on a budget.

## 1. Cheap Eats: Street Food is King
Don't spend a fortune on high-end restaurants. Thailand's street markets offer the most authentic and delicious Pad Thai, Green Curry, and Mango Sticky Rice for just $2 - $4 per plate. Look for stalls crowded with locals!
    `
  },
  {
    id: 'bali-tips',
    title: 'Bali Travel Tips for First Time Travelers',
    slug: 'bali-travel-tips-first-timers',
    summary: 'A curated list of local customs, transport options, dining advice, and hidden gems to know before you fly to Bali.',
    category: 'International Tours',
    author: 'Wayan Subawa (Local Guide)',
    readTime: '4 min read',
    date: 'May 10, 2024',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80',
    tags: ['Bali', 'Travel Tips', 'First Timer', 'Ubud'],
    content: `
# Essential Tips for Your First Bali Adventure

Bali, the Island of Gods, is a dream destination. To make sure your experience is seamless, respectful, and magical, keep these 10 essential tips in mind.

## 1. Respect Temple Etiquette
When visiting Bali's magnificent temples (like Tanah Lot or Uluwatu), you must wear a sarong (usually provided at the entrance or available for hire). Never step directly in front of someone praying, and be mindful of active ceremonies.
    `
  }
];
export const blogsList = blogs;
export default blogs;
