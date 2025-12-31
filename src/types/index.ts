type ImageFormat = {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  path: string | null;
  width: number;
  height: number;
  size: number;
  sizeInBytes: number;
  url: string;
};

type ImageFormats = {
  thumbnail?: ImageFormat;
  small?: ImageFormat;
  medium?: ImageFormat;
  large?: ImageFormat;
};

type Image = {
  id: number;
  documentId: string;
  name: string;
  alternativeText: string | null;
  caption: string | null;
  width: number;
  height: number;
  formats: ImageFormats;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: string | null;
  provider: string;
  provider_metadata: unknown | null;
};

export interface Tag {
  id: number;
  name: string;
  slug: string;
  description?: string | null;
}

export type Category = {
  id: number;
  documentId: string;
  name: string;
  slug: string;
  posts: Post[];
  description?: string;
};

export interface Post {
  id: number;
  documentId: string;
  title: string;
  slug: string;
  excerpt: string | null;
  content: string;
  publishedDate: string;
  featuredImage?: Image | null;
  tags?: Tag[];
  category: Category;
}