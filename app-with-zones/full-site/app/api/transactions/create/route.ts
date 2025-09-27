import api from '@/app/api/client';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

type ITransaction = {
  accountId: string,
  type: 'Credit' | 'Debit',
  value: number,
  from: string,
  to: string,
  anexo: string,
}

export async function POST(req: Request) {
  const body: ITransaction = await req.json();

  const cookieStore = cookies();
  const token = (await cookieStore).get('token')?.value;

  const { data } = await api.post('/account/transaction', body, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const response = NextResponse.json(data);

  return response;
}
