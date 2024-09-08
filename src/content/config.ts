import { defineCollection, z } from "astro:content";

const tours = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    featuredImage: z.string(),
    price: z.string(),
    category: z.string().optional(),
    pubDate: z.coerce.date().optional(),
  }),
});

export const collections = { tours };
