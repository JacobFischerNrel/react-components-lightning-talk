import database from '@/data/database';
import { book } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';

// Define the POST handler for the route
export async function POST(request: NextRequest) {
  try {
    // NOTE: What if they send us the incorrect shape? It might blow up here...
    // a validation library would really be required (like zod)
    const data: book = await request.json();

    await database.book.create({
      data,
    });

    // Respond with a new JSON object
    return NextResponse.json(
      {
        success: true,
      },
      { status: 200 },
    );
  } catch (err) {
    console.log('could not create', err);
    // Handle any errors and return a 400 response
    return NextResponse.json(
      {
        error: 'Invalid input',
        success: false,
      },
      { status: 400 },
    );
  }
}
