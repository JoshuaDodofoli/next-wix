import { unstable_cache } from "next/cache";
import { wixClient } from "@/lib/wixClient";

export type BlogPost = {
  _id: string;
  slug: string;
  title: string;
  description: string;
  author: string;
  date: string;
  arraystring: string;
  _updatedDate?: string | Date;
};

export const getBlogPosts = unstable_cache(
  async (): Promise<BlogPost[]> => {
    const posts = await wixClient.items
      .query("Exampleposts")
      .ascending("title")
      .find();

    return posts.items as BlogPost[];
  },
  ["blog-posts"],
  { revalidate: 60, tags: ["blog-posts"] },
);

export const getBlogPost = unstable_cache(
  async (slug: string): Promise<BlogPost | undefined> => {
    const posts = await wixClient.items
      .query("Exampleposts")
      .eq("slug", slug)
      .limit(1)
      .find();

    return posts.items[0] as BlogPost | undefined;
  },
  ["blog-post"],
  { revalidate: 60, tags: ["blog-posts"] },
);
