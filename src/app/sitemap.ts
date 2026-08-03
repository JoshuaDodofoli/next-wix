import { wixClient } from "@/lib/wixClient";
import type { MetadataRoute } from 'next'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://next-wix.vercel.app/";
  const posts = await wixClient.items
    .query("Exampleposts")
    .ascending("title")
    .find();
  const blogposts = posts.items;
  const sitemapEntries = blogposts.map((post: any) => ({
    url: `${baseUrl}blog/${post.slug}`,
    lastModified: new Date(post._updatedDate),
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
