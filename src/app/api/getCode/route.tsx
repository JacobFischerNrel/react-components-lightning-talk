import fs from 'fs/promises';
import { NextRequest, NextResponse } from 'next/server';
import { join } from 'path';

export type GetCodeResult = {
  code: string;
  fullPath: string;
  path: string;
};

export async function GET(req: NextRequest) {
  const rawPath = req.nextUrl.searchParams.get('path');
  const path = join(
    'src/app',
    typeof rawPath === 'string' ? rawPath : '',
    'page.tsx',
  );
  const fullPath = join(process.cwd(), path);

  try {
    await fs.access(fullPath);
    const code = (await fs.readFile(fullPath))?.toString();
    return NextResponse.json({
      path,
      code,
      fullPath,
    } satisfies GetCodeResult);
  } catch {
    return new Response(null, {
      status: 400,
    });
  }
}
