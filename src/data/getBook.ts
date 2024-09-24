import books from './books.json'; // for simplicity

// Imagine this is an actual database connector
export async function getBook(isbn: string) {
  const index = books.findIndex((book) => book.isbn === isbn);
  const book = books[index];
  if (!book) {
    return null;
  }

  return {
    book,
    nextIsbn: books[index + 1]?.isbn,
    prevIsbn: books[index - 1]?.isbn,
  };
}

export type GetBookResult = Awaited<ReturnType<typeof getBook>>;

export type Book = NonNullable<GetBookResult>['book'];
