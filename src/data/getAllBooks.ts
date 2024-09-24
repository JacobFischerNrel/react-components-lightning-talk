import books from './books.json';
import { Book } from './getBook';

export default async function getAllBooks() {
  // we could also use getBooks to iterate through them, but I'm lazy
  return books satisfies Book[];
}
