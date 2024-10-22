import database from '@/data/database';
import { book } from '@prisma/client';
import { NextRequest } from 'next/server';

export type GetBookResult = {
  book: book;
  next?: book;
  prev?: book;
};

export async function GET(req: NextRequest) {
  const isbn = req.nextUrl.searchParams.get('isbn');

  const book = await (isbn
    ? database.book.findUnique({
        where: {
          isbn,
        },
      })
    : database.book.findFirst());

  if (!book) {
    return new Response(null, {
      status: 400,
    });
  }

  const [prev] = await database.book.findMany({
    cursor: {
      isbn: book.isbn,
    },
    skip: 1,
    take: -1,
  });

  const [next] = await database.book.findMany({
    cursor: {
      isbn: book.isbn,
    },
    skip: 1,
    take: 1,
  });

  // fun trap here: .json() takes `any` object and _tries_ to convert it to
  // JSON.
  // What if we wanted to send a Date object, like a releaseDate?
  // answer: We'd need to manually serialize it before this step. Such a drag.
  return Response.json({ book, next, prev } satisfies GetBookResult);
}
