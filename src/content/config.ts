// src/content/config.ts
import { defineCollection, z } from "astro:content";

const blogCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: z.coerce.date().optional(),
    author: z.string().optional(),
  }),
});

const toursCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    price: z.number().optional(),
    tags: z.array(z.string()),
    features: z.array(z.string()),
    thumbnail: z.string().optional(),
    thumbnailAlt: z.string(),
    excerpt: z.string(),
  }),
});

export const collections = {
  blog: blogCollection,
  tours: toursCollection,
};
