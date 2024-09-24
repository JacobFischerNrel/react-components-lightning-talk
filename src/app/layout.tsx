import type { Metadata } from 'next';
import Link from 'next/link';
import CodeHighlight from './CodeHighlight';

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
        <div style={{ display: 'flex' }}>
          <div style={{ flex: 1, width: '50%' }}>{children}</div>
          <div style={{ flex: 1, width: '50%' }}>
            <CodeHighlight />
          </div>
        </div>
      </body>
    </html>
  );
}
