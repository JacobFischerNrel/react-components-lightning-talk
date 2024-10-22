import database from '@/data/database';
import { CSSProperties } from 'react';
import LoadingForm from '@/components/LoadingForm';

const labelStyle = {
  display: 'inline-block',
  width: '10rem',
} satisfies CSSProperties;

function Input(props: { id: string; type: 'text' | 'number' }) {
  return (
    <div>
      <label htmlFor={props.id} style={labelStyle}>
        {props.id.charAt(0).toUpperCase() + props.id.slice(1)}:
      </label>
      <input {...props} name={props.id} required />
    </div>
  );
}

function TextArea(props: { id: string }) {
  return (
    <div>
      <label htmlFor={props.id} style={labelStyle}>
        {props.id.charAt(0).toUpperCase() + props.id.slice(1)}:
      </label>
      <textarea {...props} name={props.id} required />
    </div>
  );
}

export default async function ActionClientComponent() {
  return (
    <>
      <LoadingForm
        action={async (formData) => {
          'use server';

          if (!formData) {
            return {
              success: false,
              message: 'No form data!',
            };
          }

          const isbn = String(formData.get('isbn'));

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
                isbn,
                title: String(formData.get('title')),
                year: Number(formData.get('year') || 0),
              },
            });
          } catch {
            return {
              message: 'Error created book in database',
              success: false,
            };
          }

          // notice: we are passing data back to the client from this server action
          return {
            message: `Created new book: ${isbn}`,
            success: true,
          };
        }}
      >
        <Input id="title" type="text" />
        <Input id="author" type="text" />
        <Input id="genre" type="text" />
        <Input id="year" type="number" />
        <TextArea id="description" />
        <Input id="isbn" type="text" />
        <button type="submit">Submit</button>
      </LoadingForm>
    </>
  );
}
