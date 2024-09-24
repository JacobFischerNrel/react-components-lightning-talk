'use client';

import DisplayBook from '@/components/DisplayBook';
import type { GetBookResult } from '@/data/getBook';
import { useEffect, useState } from 'react';

export default function ManagingStateClientComponent() {
  const [current, setCurrent] = useState(null as null | GetBookResult);
  const [loadIsbn, setLoadIsbn] = useState(undefined as undefined | string);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    console.log('use effect...');
    // NOTE: what happens if this api path is moved?
    // This magic string would be broken, but we wouldn't know till runtime...
    fetch(`/api/getBook${loadIsbn ? `?isbn=${loadIsbn}` : ''}`)
      .then((res) => (res.status === 200 ? res.json() : null))
      .then((rawData) => {
        setLoading(false);
        // NOTE: we are just raw casting this to the EXPECTED result.
        // what if the API changes down the line?
        // what if some weird middleware mutated it?
        // as the client, we shouldn't trust this, and really should inspect
        // the result and ensure its the real shape (zod is a great lib for this)
        setCurrent(rawData as GetBookResult);
      });
  }, [loadIsbn]);

  if (isLoading) {
    return <em>loading...</em>;
  }

  if (!current) {
    return <strong>Error loading book</strong>;
  }

  return (
    <div>
      <DisplayBook {...current.book} />
      <div>
        {current.prevIsbn ? (
          <a href="#" onClick={() => setLoadIsbn(current.prevIsbn)}>
            Prev
          </a>
        ) : (
          'Prev'
        )}{' '}
        {current.nextIsbn ? (
          <a href="#" onClick={() => setLoadIsbn(current.nextIsbn)}>
            Next
          </a>
        ) : (
          'Prev'
        )}
      </div>
    </div>
  );
}
