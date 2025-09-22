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
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production', // false em dev
      sameSite: 'lax',
      path: '/',
      maxAge: 60 * 60 * 24, // 1 dia
    });
  }

  return response;
}
