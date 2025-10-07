import { NextResponse } from 'next/server';

export async function POST() {
  const response = NextResponse.json({ message: 'Logout feito' });

  response.cookies.set('token', '', {
    httpOnly: false,
    secure: process.env.NEXT_PUBLIC_NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: 0,
  });

  response.cookies.set('id', '', {
    httpOnly: false,
    secure: process.env.NEXT_PUBLIC_NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: 0,
  });

  return response;
}
