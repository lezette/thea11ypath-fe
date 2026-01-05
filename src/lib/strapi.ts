import type { Post, Tag, Category } from '../types/';

const strapiUrl = import.meta.env.STRAPI_URL;

export async function fetchPosts() {
  const response = await fetch(`${strapiUrl}/api/posts?populate=*`);
  const { data }: {data: Post[]} = await response.json();  
  return data;
}

export async function fetchTags() {
  const response = await fetch(`${strapiUrl}/api/tags?populate=*`);
  const { data }: { data: Tag[] } = await response.json();
  return data;
}

export async function fetchCategories() {
  const response = await fetch(`${strapiUrl}/api/categories?populate[posts][populate][0]=tags`);
  const { data }: { data: Category[] } = await response.json();
  return data;
}

export async function fetchHomeContent() {
  const response = await fetch(`${strapiUrl}/api/home?populate=*`);
  const { data } = await response.json();
  return data;
}