import type { Post, Tag } from '../types/';

const strapiUrl = import.meta.env.STRAPI_URL;

export async function fetchPosts(type: string) {
  const response = await fetch(`${strapiUrl}/api/${type}?populate=*`);
  const { data }: {data: Post[]} = await response.json();
  return data;
}

export async function fetchTags() {
  const response = await fetch(`${strapiUrl}/api/tags?populate=*`);
  const { data }: { data: Tag[] } = await response.json();
  return data;
}