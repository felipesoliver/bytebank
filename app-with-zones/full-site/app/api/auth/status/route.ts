import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function GET() {
  const cookieStore = cookies();
  const token = (await cookieStore).get('token')?.value;

  return NextResponse.json({
    isLoggedIn: Boolean(token),
  });
}
