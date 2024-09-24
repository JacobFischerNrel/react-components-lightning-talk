'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { coy } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { GetCodeResult } from './api/getCode/route';

export default function CodeHighlight() {
  const path = usePathname();
  const [loading, setLoading] = useState(false);
  const [firstLoad, setFirstLoad] = useState(true);
  const [result, setResult] = useState<GetCodeResult | null>(null);
  useEffect(() => {
    setFirstLoad(false);
    setLoading(true);
    fetch(`/api/getCode?path=${encodeURI(path)}`) // NOTE: what happens if this api path is moved? This magic string would be broken, but we wouldn't know till runtime...
      .then(async (res) => {
        const newResult: GetCodeResult = await res.json();
        setLoading(false);
        if (newResult) {
          setResult(newResult);
        } else {
          setResult(null);
        }
      });
  }, [path, setFirstLoad]);
  return loading ? (
    <em>Loading Code</em>
  ) : result ? (
    <div style={{ fontSize: '0.75rem' }}>
      <a
        style={{ marginLeft: '2rem', color: 'grey', fontFamily: 'monospace' }}
        href={`vscode://file/${result.fullPath}`}
      >
        {result.path}
      </a>
      <SyntaxHighlighter language="tsx" style={coy} showLineNumbers>
        {result.code}
      </SyntaxHighlighter>
    </div>
  ) : firstLoad ? (
    <pre>First page load waiting for client side JS to start up</pre>
  ) : (
    <pre>Error loading code</pre>
  );
}
