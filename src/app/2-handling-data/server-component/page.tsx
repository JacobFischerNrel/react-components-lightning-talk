import DisplayBook from '@/components/DisplayBook';
import database from '@/data/database';

export default async function HandlingDataServerComponent() {
  const books = await database.book.findMany();

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
