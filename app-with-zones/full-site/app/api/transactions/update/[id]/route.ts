/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'

type IUpdateTransactionParam = {
  id: string
  type: 'Credit' | 'Debit'
  value: number
}

export async function PUT(
  request: Request,
  { params }: any
) {
  try {
    const body: Omit<IUpdateTransactionParam, 'id'> = await request.json()

    const cookieStore = cookies()
    const token = (await cookieStore).get('token')?.value
    const id = (await params).id

    if (!token) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL_API}/account/transaction/${id}`,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          ...body,
          urlAnexo: '',
        }),
      }
    )

    if (!response.ok) {
      const errorText = await response.text()
      return NextResponse.json({ error: errorText }, { status: response.status })
    }

    const data = await response.json()
    return NextResponse.json(data)
  } catch (error) {
    console.error('Error updating transaction:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
