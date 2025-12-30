import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET (context) {
  const posts = await getCollection("blog");
  return rss({
    title: 'The A11y Path',
    description: 'All thing accessibility',
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/blog/${post.id}/`,
    })),
    customData: `<language>en-us</language>`,
  });
}