import api from '@/app/api/client';
import { NextResponse } from 'next/server';

export async function GET() {
  const { data } = await api.get('/user');
  const response = NextResponse.json(data);
  return response;
}
