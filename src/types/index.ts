export interface Tag {
  id: number;
  name: string;
  slug: string;
  description?: string | null;
}

export interface FeaturedImage {
  id: number;
  url: string;
  alternativeText?: string | null;
}

export interface Post {
  id: number;
  documentId: string;
  title: string;
  slug: string;
  excerpt: string | null;
  content: string;
  publishedDate: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string | null;
  tags?: Tag[];
  featuredImage?: FeaturedImage | null;
}

export interface Tag {
  id: number;
  name: string;
  slug: string;
  description?: string | null;
}