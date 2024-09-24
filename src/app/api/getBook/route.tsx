import getAllBooks from '@/data/getAllBooks';
import { getBook } from '@/data/getBook';
import { NextRequest } from 'next/server';

export async function GET(req: NextRequest) {
  const isbn =
    req.nextUrl.searchParams.get('isbn') || (await getAllBooks())[0]?.isbn;
  console.log('getting isbn', isbn);
  const found = isbn && (await getBook(isbn));
  if (!found) {
    return new Response(null, {
      status: 400,
    });
  }
  // fun trap here: .json() takes `any` object and _tries_ to convert it to
  // JSON.
  // What if we wanted to send a Date object, like a releaseDate?
  // answer: We'd need to manually serialize it before this step. Such a drag.
  return Response.json(found);
}
