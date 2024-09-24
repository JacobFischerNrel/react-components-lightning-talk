import fs from 'fs/promises';
import Link from 'next/link';
import { parse, join } from 'path';

const basePath = join(process.cwd(), 'src/app');

export default async function Home() {
  return (
    <div>
      <h2>Root Index</h2>
      <p>These are the dynamically generated pages in the application.</p>
      <p>Code used to generate these pages is displayed on the right.</p>
      <p>
        For the examples, we have a simple json &quot;database&quot; of books to
        pull records from.
      </p>
      <h3>Pages</h3>
      <Directory path={basePath} />
    </div>
  );
}

async function Directory(props: { path: string }) {
  let linkTitle = false;
  try {
    await fs.access(join(props.path, 'page.tsx')); // will throw if not valid
    linkTitle = true;
  } catch {
    // there's not a page there
  }
  const dirs = (await fs.readdir(props.path))
    .filter((dir) => !parse(dir).ext)
    .map((dir) => join(props.path, dir))
    .sort((a, b) => a.localeCompare(b));

  const file = parse(props.path);

  return (
    <div>
      <strong>
        {linkTitle ? (
          <Link href={props.path.replace(basePath, '')}>{file.base}</Link>
        ) : (
          file.base
        )}
      </strong>
      <ul>
        {dirs.map((path) => (
          <Directory key={path} path={path} />
        ))}
      </ul>
    </div>
  );
}
