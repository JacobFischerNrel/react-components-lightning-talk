'use client';

import { GetBookResult } from '@/app/api/getBook/route';
import DisplayBook from '@/components/DisplayBook';
import { useEffect, useState } from 'react';

export default function ManagingStateClientComponent() {
  const [result, setResult] = useState(null as null | GetBookResult);
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
        setResult(rawData as GetBookResult);
      });
  }, [loadIsbn]);

  if (isLoading) {
    return <em>loading...</em>;
  }

  if (!result) {
    return <strong>Error loading book</strong>;
  }

  return (
    <div>
      <DisplayBook {...result.book} />
      <div>
        {result?.prev?.isbn ? (
          <a href="#" onClick={() => setLoadIsbn(result?.prev?.isbn)}>
            Prev
          </a>
        ) : (
          'Prev'
        )}{' '}
        {result?.next?.isbn ? (
          <a href="#" onClick={() => setLoadIsbn(result?.next?.isbn)}>
            Next
          </a>
        ) : (
          'Prev'
        )}
      </div>
    </div>
  );
}
