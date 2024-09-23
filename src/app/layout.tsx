import { Metadata } from 'next';
import CurrentPath from './CurrentPath';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'React Component Lightning Talk',
  description: 'Comparison of various React Components',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{ margin: '1rem', fontFamily: 'sans-serif' }}>
        <Link href="/">
          <h1>React Components Comparison</h1>
        </Link>
        <CurrentPath />
        <div>{children}</div>
      </body>
    </html>
  );
}
