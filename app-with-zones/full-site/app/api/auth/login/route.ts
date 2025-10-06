import api from '@/app/api/client';
import { NextResponse } from 'next/server';

type LoginPayload = { email: string; password: string };

export async function POST(req: Request) {
  const body: LoginPayload = await req.json();

  const { data } = await api.post('/user/auth', body);

  const token = data?.result?.token;

  const response = NextResponse.json(data);

  if (token) {
    response.cookies.set('token', token, {
      httpOnly: false,
      secure: process.env.NEXT_PUBLIC_NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
      maxAge: 60 * 60 * 24,
    });
  }

  return response;
}
