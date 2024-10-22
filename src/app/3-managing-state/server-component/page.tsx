import DisplayBook from '@/components/DisplayBook';
import database from '@/data/database';
import Link from 'next/link';

export default async function ManagingStateServerComponent(props: {
  // Note: next.js does not type these for some reason...
  // but they are indeed magically passed
  searchParams: Record<string, string | string[]>;
}) {
  const rawIsbn = props.searchParams.isbn;
  const maybeIsn = typeof rawIsbn === 'string' ? rawIsbn : undefined;

  const book = await (maybeIsn
    ? database.book.findUnique({
        where: {
          isbn: maybeIsn,
        },
      })
    : database.book.findFirst());

  if (!book) {
    return <strong>Error loading isbn!</strong>;
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

  return (
    <div>
      <DisplayBook {...book} />
      <div>
        {prev?.isbn ? (
          <Link href={`/3-managing-state/server-component?isbn=${prev.isbn}`}>
            Prev
          </Link>
        ) : (
          'Prev'
        )}{' '}
        {next?.isbn ? (
          <Link href={`/3-managing-state/server-component?isbn=${next.isbn}`}>
            Next
          </Link>
        ) : (
          'Next'
        )}
      </div>
    </div>
  );
}
