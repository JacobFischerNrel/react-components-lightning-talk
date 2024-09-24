import DisplayBook from '@/components/DisplayBook';
import getAllBooks from '@/data/getAllBooks';
import { getBook } from '@/data/getBook';
import Link from 'next/link';

export default async function ManagingStateServerComponent(props: {
  // Note: next.js does not type these for some reason...
  // but they are indeed magically passed
  searchParams: Record<string, string | string[]>;
}) {
  const rawIsbn = props.searchParams.isbn;
  const maybeIsn = typeof rawIsbn === 'string' ? rawIsbn : undefined;
  const isbn = maybeIsn || (await getAllBooks())[0]?.isbn;

  if (!isbn) {
    return <strong>Error loading isbn!</strong>;
  }

  const got = await getBook(isbn);
  if (!got) {
    return <strong>Error loading book!</strong>;
  }

  return (
    <div>
      <DisplayBook {...got.book} />
      <div>
        {got.prevIsbn ? (
          <Link
            href={`/3-managing-state/server-component?isbn=${got.prevIsbn}`}
          >
            Prev
          </Link>
        ) : (
          'Prev'
        )}{' '}
        {got.nextIsbn ? (
          <Link
            href={`/3-managing-state/server-component?isbn=${got.nextIsbn}`}
          >
            Next
          </Link>
        ) : (
          'Prev'
        )}
      </div>
    </div>
  );
}
