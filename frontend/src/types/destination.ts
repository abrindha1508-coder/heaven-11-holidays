export interface Destination {
  id: string;
  name: string;
  image: string;
  description: string;
  type: 'domestic' | 'international';
  isHoneymoon: boolean;
  price: number;
  rating: number;
  duration: string;
  highlights: string[];
  popular: boolean;
  country?: string;
  bestTime?: string;
  weather?: string;
}
