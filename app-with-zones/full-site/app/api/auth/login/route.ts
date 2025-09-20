import api from '@/app/api/client';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

type LoginPayload = { email: string; password: string };

export async function POST(req: Request) {
  const body: LoginPayload = await req.json();
  const { data } = await api.post('/user/auth', body);

  const token = data?.result?.token;

  if (token) {
    (await cookies()).set('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      path: '/',
      maxAge: 60 * 60 * 24,
    });
  }

  return NextResponse.json(data);
}
