import { Book } from '../shapes/book';

export default function DisplayBook(props: Book) {
  return (
    <div style={{ marginBottom: '0.5rem' }}>
      <div>
        <strong>{props.title}</strong> by <em>{props.author}</em>
      </div>
      <div>
        <em>{props.genre}</em> -{' '}
        <em>
          {props.releaseDate.getMonth() + 1}/{props.releaseDate.getDay() + 1}/
          {props.releaseDate.getFullYear()}
        </em>
      </div>
      <div>{props.description}</div>
    </div>
  );
}
