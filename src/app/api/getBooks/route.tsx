import database from '@/data/database';

export async function GET() {
  try {
    const books = await database.book.findMany();
    // fun trap here: .json() takes `any` object and _tries_ to convert it to
    // JSON.
    // What if we wanted to send a Date object, like a releaseDate?
    // answer: We'd need to manually serialize it before this step. Such a drag.
    return Response.json(books);
  } catch (err) {
    console.log('yolo', err);
    return Response.json([]);
  }
}
