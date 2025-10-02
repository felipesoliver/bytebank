import api from '@/app/api/client';
import { NextResponse } from 'next/server';

export async function GET() {
  const { data } = await api.get('/user');
  const id = data?.result[0]?.id;
  const response = NextResponse.json(data);

  if (id) {
    response.cookies.set('id', id, {
      httpOnly: false,
      secure: process.env.NEXT_PUBLIC_NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
      maxAge: 60 * 60 * 24,
    });
  }

  return response;
}
