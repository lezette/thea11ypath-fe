const strapiUrl = import.meta.env.STRAPI_URL;

export async function fetchPosts(type: string) {
  const response = await fetch(`${strapiUrl}/api/${type}?populate=*`);
  const { data } = await response.json();
  return data;
}