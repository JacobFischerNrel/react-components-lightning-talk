import database from '@/data/database';
import { CSSProperties } from 'react';
import { redirect } from 'next/navigation';

const labelStyle = {
  display: 'inline-block',
  width: '10rem',
} satisfies CSSProperties;

function Input(props: {
  id: string;
  type: 'text' | 'number';
  disabled: boolean;
}) {
  return (
    <div>
      <label htmlFor={props.id} style={labelStyle}>
        {props.id.charAt(0).toUpperCase() + props.id.slice(1)}:
      </label>
      <input {...props} name={props.id} required />
    </div>
  );
}

function TextArea(props: { id: string; disabled: boolean }) {
  return (
    <div>
      <label htmlFor={props.id} style={labelStyle}>
        {props.id.charAt(0).toUpperCase() + props.id.slice(1)}:
      </label>
      <textarea {...props} name={props.id} required />
    </div>
  );
}

export default async function ActionClientComponent(props: {
  // Next.js does not directly expose these types unfortunately.
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const params = await props.searchParams;
  const errored = Boolean(params.errored);
  const done = Boolean(params.done);
  const created = errored || done;

  return (
    <>
      <form
        action={async (formData) => {
          'use server';

          const rawBookData = Object.fromEntries(formData.entries());
          console.log('we about to go ham on', rawBookData);

          let success = false;
          try {
            await database.book.create({
              // Note: we can't use the before formData.entries() hack because
              // it's both not type safe, but also next.js will inject a special
              // $ACTION_ID_{UUID} key to the form to help track what
              // the action was to find the callback in our code.
              data: {
                author: String(formData.get('author') || ''),
                description: String(formData.get('description') || ''),
                genre: String(formData.get('genre')),
                isbn: String(formData.get('isbn')),
                title: String(formData.get('title')),
                year: Number(formData.get('year') || 0),
              },
            });

            success = true;
          } catch {}

          return redirect(
            `/5-actions/server-component?${success ? 'done' : 'errored'}=yup`,
          );
        }}
      >
        <Input disabled={created} id="title" type="text" />
        <Input disabled={created} id="author" type="text" />
        <Input disabled={created} id="genre" type="text" />
        <Input disabled={created} id="year" type="number" />
        <TextArea disabled={created} id="description" />
        <Input disabled={created} id="isbn" type="text" />

        <button disabled={created} type="submit">
          Submit
        </button>
      </form>
      {done && <strong>Created your book in the database!</strong>}
      {errored && <em>Oh no! Could not create it</em>}
    </>
  );
}
