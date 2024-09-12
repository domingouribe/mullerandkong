// src/content/config.ts
import { defineCollection, z } from "astro:content";

const blogCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: z.coerce.date().optional(), // Esto asegura que la fecha se convierta a un objeto Date
    author: z.string().optional(),
  }),
});

const toursCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    duration: z.string().optional(),
    price: z.number().optional(),
  }),
});

export const collections = {
  blog: blogCollection,
  tours: toursCollection,
};
