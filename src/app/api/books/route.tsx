import books from '@/data/books';

export async function GET() {
  return Response.json(
    books.map((book) => ({
      ...book,
      releaseDate: book.releaseDate.toUTCString(), // because Date is not type-safe, we have to MANUALLY convert it here, then expect clients to know they have to deserialize it
    })),
  );
}
