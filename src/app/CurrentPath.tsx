'use client';

import { usePathname } from 'next/navigation';

export default function CurrentPath() {
  return (
    <div style={{ paddingBottom: '1rem', color: 'gray' }}>
      Currently at: <code>{usePathname()}</code>
    </div>
  );
}
