import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'

type ICreateTransactionParam = {
  type: 'Credit' | 'Debit'
  value: number
  from: string
  to: string
  anexo: string
}

export async function POST(request: Request) {
  try {
    const body: ICreateTransactionParam = await request.json()

    const cookieStore = cookies()
    const userId = (await cookieStore).get('id')?.value
    const token = (await cookieStore).get('token')?.value

    if (!userId || !token) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL_API}/account/transaction/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        accountId: userId,
        ...body,
      }),
    })

    if (!response.ok) {
      const errorText = await response.text()
      return NextResponse.json({ error: errorText }, { status: response.status })
    }

    const data = await response.json()
    return NextResponse.json(data)
  } catch (error) {
    console.error('Error creating transaction:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
