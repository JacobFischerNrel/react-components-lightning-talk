import type { book } from '@prisma/client';

export default function DisplayBook(props: book) {
  return (
    <div style={{ marginBottom: '0.5rem' }}>
      <div>
        <strong>{props.title}</strong> by <em>{props.author}</em>
      </div>
      <div>
        <em>{props.genre}</em> - <em>{props.year}</em> -{' '}
        <code>{props.isbn}</code>
      </div>
      <div>{props.description}</div>
    </div>
  );
}
