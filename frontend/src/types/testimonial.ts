export interface Testimonial {
  id: string;
  name: string;
  location?: string;
  role?: string;
  avatar: string;
  rating: number;
  comment: string;
  type: 'google' | 'video';
  videoUrl?: string; // Mock or real video iframe/embed URL
  thumbnailUrl?: string; // Premium video thumbnail
  tourName?: string; // e.g. "Kashmir Explorer Tour"
  date?: string; // Date of review
}
export interface BlogArticle {
  id: string;
  title: string;
  slug: string;
  summary: string;
  content: string;
  image: string;
  category: string;
  author: string;
  readTime: string;
  date: string;
  tags: string[];
}
