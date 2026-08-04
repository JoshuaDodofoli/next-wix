import { getBlogPosts } from "@/lib/blogPost";
import type { MetadataRoute } from 'next'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://next-wix.vercel.app/";
  const blogposts = await getBlogPosts();
  const sitemapEntries = blogposts.map((post) => ({
    url: `${baseUrl}blog/${post.slug}`,
    lastModified: post._updatedDate ? new Date(post._updatedDate) : undefined,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}blog`,
      lastModified: new Date(),
    },
    ...sitemapEntries,
  ];
}
