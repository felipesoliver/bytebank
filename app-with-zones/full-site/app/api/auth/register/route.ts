import api from '@/app/api/client';
import { NextResponse } from 'next/server';

type RegisterPayload = { email: string; password: string; username: string };

export async function POST(req: Request) {
  const body: RegisterPayload = await req.json();

  const { data } = await api.post('/user', body);

  const response = NextResponse.json(data);

  const username = data?.result?.username;
  const email = data?.result?.email;

  if (username) {
    response.cookies.set('username', username, {
      httpOnly: false,
      secure: process.env.NEXT_PUBLIC_NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
      maxAge: 60 * 60 * 24,
    });

    response.cookies.set('email', email, {
      httpOnly: false,
      secure: process.env.NEXT_PUBLIC_NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
      maxAge: 60 * 60 * 24,
    });
  }

  return response;
}
