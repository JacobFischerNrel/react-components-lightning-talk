import fs from 'fs/promises';
import Link from 'next/link';
import { join } from 'path';

const basePath = join(process.cwd(), 'src/app');

export default async function Home() {
  return (
    <div>
      <h2>Pages</h2>
      <ul>
        {(
          await fs.readdir(basePath, {
            recursive: true,
          })
        )
          .filter(
            (pagePath) =>
              pagePath.endsWith('page.tsx') && pagePath.includes('/'),
          )
          .map((pagePath) => pagePath.replace('page.tsx', ''))
          .sort((a, b) => a.localeCompare(b))
          .map((href) => (
            <li key={href}>
              <Link href={href}>{href}</Link>
            </li>
          ))}
      </ul>
    </div>
  );
}
