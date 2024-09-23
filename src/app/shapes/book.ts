import { z } from 'zod';

export const zodBook = z.object({
  title: z.string(),
  author: z.string(),
  genre: z.string(),
  description: z.string(),
  releaseDate: z.date(),
});

export type Book = z.TypeOf<typeof zodBook>;
