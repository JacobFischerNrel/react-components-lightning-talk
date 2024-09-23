'use client';

import DisplayBook from '@/app/components/DisplayBook';
import { Book, zodBook } from '@/app/shapes/book';
import { useState, useEffect } from 'react';
import { z } from 'zod';

export default function HandlingDataClientComponent() {
  const [data, setData] = useState<null | ReadonlyArray<Book>>(null);
  const [isLoading, setLoading] = useState(true);
  const [errorString, setErrorString] = useState('');

  useEffect(() => {
    fetch('/api/books') // NOTE: what happens if this api path is moved? This magic string would be broken, but we wouldn't know till runtime...
      .then((res) => res.json())
      .then((data: unknown /* default type is `any`, which is BAD */) => {
        // remember, releaseDate is expected as a string, but we want to use it as a date, so we have to convert it here
        const transformedData: unknown[] =
          (Array.isArray(data) &&
            data.map((data) =>
              data !== null &&
              typeof data === 'object' &&
              'releaseDate' in data &&
              typeof data.releaseDate === 'string'
                ? {
                    ...data,
                    releaseDate: new Date(data.releaseDate),
                  }
                : data,
            )) ||
          [];

        const parsed = z.array(zodBook).safeParse(transformedData);
        setLoading(false);
        if (parsed.success) {
          setData(parsed.data);
        } else {
          setErrorString('Could not validate shape of API data');
        }
      });
  }, []);

  if (isLoading) return <em>Loading...</em>;
  if (!data || errorString)
    return (
      <div>
        <strong>Error</strong>: {errorString}
      </div>
    );

  return (
    <div>
      <h2>Books from the client component</h2>
      <ul>
        {data.map((book) => (
          <li key={book.title}>
            <DisplayBook {...book} />
          </li>
        ))}
      </ul>
    </div>
  );
}
