import api from '@/app/api/client';
import { NextResponse } from 'next/server';

type RegisterPayload = { email: string; password: string; username: string };

export async function POST(req: Request) {
  const body: RegisterPayload = await req.json();

  const { data } = await api.post('/user', body);

  const response = NextResponse.json(data);

  const username = data?.result?.username;

  if (username) {
    response.cookies.set('username', username, {
      httpOnly: false,
      secure: process.env.NODE_ENV === 'production', // false em dev
      sameSite: 'lax',
      path: '/',
      maxAge: 60 * 60 * 24, // 1 dia
    });
  }

  return response;
}
