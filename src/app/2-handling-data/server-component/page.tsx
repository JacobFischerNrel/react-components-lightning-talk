import DisplayBook from '@/components/DisplayBook';
import getAllBooks from '@/data/getAllBooks';

export default async function HandlingDataServerComponent() {
  const books = await getAllBooks();

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
