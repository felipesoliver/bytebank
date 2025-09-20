import { NextResponse } from 'next/server';

export async function POST() {
  // Remove o cookie
  const response = NextResponse.json({ message: 'Logout feito' });
  response.cookies.set({
    name: 'token',
    value: '',
    path: '/',
    maxAge: 0,
    httpOnly: true,
    sameSite: 'strict',
    secure: process.env.NODE_ENV === 'production',
  });

  return response;
}
