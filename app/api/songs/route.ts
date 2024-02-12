import { NextResponse } from 'next/server';
import { getAll } from '../controllers/songControllers';

export const dynamic = 'force-dynamic'; // defaults to auto

export async function GET(request: Request) {
  const songs = await getAll();

  return NextResponse.json({ songs });
}
