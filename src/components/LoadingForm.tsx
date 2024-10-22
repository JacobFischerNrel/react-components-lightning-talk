'use client';

import { useState, type ReactNode } from 'react';

export type LoadingFormResult = {
  message: string;
  success?: boolean;
};

export default function LoadingForm(props: {
  action: (formData: FormData) => Promise<LoadingFormResult>;
  children: ReactNode;
}) {
  const [isLoading, setLoading] = useState(false);
  const [result, setResult] = useState(null as null | LoadingFormResult);

  return (
    <>
      <form
        onChange={() => {
          setResult(null);
        }}
        onSubmit={async (e) => {
          e.preventDefault();
          setLoading(true);
          const formData = new FormData(e.target as HTMLFormElement);
          setResult(await props.action(formData));
          setLoading(false);
        }}
      >
        <fieldset style={{ border: '0' }} disabled={isLoading}>
          {props.children}
        </fieldset>
      </form>
      {isLoading && <em>Loading...</em>}
      {result && (
        <strong>
          {result.success ? 'Success:' : 'Error!:'} {result.message}
        </strong>
      )}
    </>
  );
}
