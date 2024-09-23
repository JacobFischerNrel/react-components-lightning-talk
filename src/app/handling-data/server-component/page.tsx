import DisplayBook from '@/app/components/DisplayBook';
import books from '@/data/books';

export default function HandlingDataServerComponent() {
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
