export type Category = {
  slug: string;
  name: string;
  description: string;
  icon: string;
  productCount: number;
  image: string;
};

export type Product = {
  slug: string;
  name: string;
  brand: string;
  category: string;
  categorySlug: string;
  price: number;
  originalPrice?: number;
  currency: string;
  rating: number;
  reviewCount: number;
  image: string;
  badge?: string;
  badgeTone?: 'green' | 'blue' | 'amber';
  summary: string;
  pros: string[];
  cons: string[];
  specs: { label: string; value: string }[];
  verdict: string;
  score: number;
  recommended: boolean;
};

export type Review = {
  slug: string;
  title: string;
  category: string;
  categorySlug: string;
  excerpt: string;
  author: string;
  authorRole: string;
  date: string;
  readTime: string;
  image: string;
};

export type ComparisonRow = {
  feature: string;
  values: (string | boolean)[];
};

export type NavItem = { label: string; href: string };
