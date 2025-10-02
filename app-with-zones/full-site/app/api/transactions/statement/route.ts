import api from '../../client';
import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function GET() {
  const cookieStore = cookies();
  const userId = (await cookieStore).get('id')?.value;
  const token = (await cookieStore).get('token')?.value;

  const { data } = await api.get(`/account/${userId}/statement`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const response = NextResponse.json(data);
  return response;
}
