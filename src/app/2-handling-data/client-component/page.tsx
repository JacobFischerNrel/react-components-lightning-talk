'use client';

import DisplayBook from '@/components/DisplayBook';
import type { Book } from '@/data/getBook';

import { useState, useEffect } from 'react';

export default function HandlingDataClientComponent() {
  const [books, setBooks] = useState<null | ReadonlyArray<Book>>(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    // NOTE: what happens if this api path is moved?
    // This magic string would be broken, but we wouldn't know till runtime...
    fetch('/api/getBooks')
      .then((res) => res.json())
      .then((rawData) => {
        setLoading(false);
        // NOTE: we are just raw casting this to the EXPECTED result.
        // what if the API changes down the line?
        // what if some weird middleware mutated it?
        // as the client, we shouldn't trust this, and really should inspect
        // the result and ensure its the real shape (zod is a great lib for this)
        setBooks(rawData as ReadonlyArray<Book>);
      });
  }, []);

  if (isLoading) {
    return <em>Loading...</em>;
  }

  if (!books) {
    return <strong>Error: could not load books</strong>;
  }

  return (
    <ul>
      {books.map((book) => (
        <li key={book.title}>
          <DisplayBook {...book} />
        </li>
      ))}
    </ul>
  );
}
