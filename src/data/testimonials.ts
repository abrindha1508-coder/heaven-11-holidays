import type { Testimonial } from '../types/testimonial';

export const testimonials: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Rahul Kumar',
    location: 'India',
    role: 'Dubai Trip',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80',
    rating: 5,
    comment: 'Amazing experience with Heaven11 Holidays. Everything was perfectly organized.',
    type: 'google',
    tourName: 'Dubai Trip',
    date: '1 week ago'
  },
  {
    id: 'test-2',
    name: 'Priya Sharma',
    location: 'India',
    role: 'Malaysia Trip',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80',
    rating: 5,
    comment: 'Great service and support. Best travel partner for unforgettable trips.',
    type: 'google',
    tourName: 'Malaysia Trip',
    date: '2 weeks ago'
  },
  {
    id: 'test-3',
    name: 'Arun & Divya',
    location: 'India',
    role: 'Bali Honeymoon',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150&q=80',
    rating: 5,
    comment: 'Our honeymoon was magical, thanks to Heaven11 Holidays!',
    type: 'google',
    tourName: 'Bali Honeymoon',
    date: '3 weeks ago'
  }
];
export const testimonialsList = testimonials;
