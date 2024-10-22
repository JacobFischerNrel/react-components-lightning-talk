'use client';

import { CSSProperties, useState } from 'react';

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

export default function ActionClientComponent() {
  const [created, setCreated] = useState(false);
  return (
    <>
      <form
        onSubmit={async (e) => {
          e.preventDefault();

          const formData = new FormData(e.target as HTMLFormElement);
          const rawBookData = Object.fromEntries(formData.entries());

          try {
            // Send the data as JSON to the server
            const response = await fetch('/api/createBook', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                ...rawBookData,
                // Convert the `year` field from string to number
                year: Number(rawBookData.year),
              }),
            });

            // Check if the response was successful
            if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
            }
            setCreated(true);
          } catch (error) {
            console.error('Error during fetch:', error);
          }
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
      {created && <strong>Created your book in the database!</strong>}
    </>
  );
}
