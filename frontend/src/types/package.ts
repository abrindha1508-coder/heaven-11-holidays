export interface ItineraryDay {
  day: number;
  title: string;
  description: string;
}

export interface TourPackage {
  id: string;
  title: string;
  destinationId: string;
  destinationName: string;
  duration: string;
  price: number;
  discountPrice?: number;
  rating: number;
  reviewsCount: number;
  image: string;
  highlights: string[];
  inclusions: string[];
  exclusions: string[];
  itinerary: ItineraryDay[];
  type: 'domestic' | 'international' | 'family' | 'group';
  popular: boolean;
  featured: boolean;
}
