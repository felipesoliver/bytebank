import api from '@/app/api/client';
import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function GET() {
  const cookieStore = cookies();
  const token = (await cookieStore).get('token')?.value;

  const { data } = await api.get('/account', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const id = data?.result?.account[0]?.id;
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
