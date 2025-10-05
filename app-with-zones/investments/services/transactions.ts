import api from "@/app/api/client";
import { getCookie } from "@/utils/get-cookie";

type ICreateTransactionParam = {
  type: 'Credit' | 'Debit',
  value: number,
  from: string,
  to: string,
  anexo: string,
}

export const createTransaction = async ({
  anexo,
  from,
  to,
  type,
  value
}: ICreateTransactionParam) => {
  const userId = getCookie('id')
  const token = getCookie('token')

  try {
    const { data } = await api.post('/account/transaction/', {
      accountId: userId,
      anexo,
      from,
      to,
      type,
      value
    }, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const response = JSON.stringify(data);
    return response;
  } catch (error) {
    console.error('Error to create new transaction', error)
  }
}

type IUpdateTransactionParam = {
  id: string,
  type: 'Credit' | 'Debit',
  value: number,
}

export const updateTransaction = async ({
  id,
  type,
  value,
}: IUpdateTransactionParam) => {
  const token = getCookie('token')

  try {
    const { data } = await api.put(`/account/transaction/${id}`, {
      type,
      value,
      urlAnexo: '',
    }, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const response = JSON.stringify(data);
    return response;
  } catch (error) {
    console.error('Error to update transaction', error)
  }
}

type IDeleteTransactionParam = {
  id: string
}

export const deleteTransaction = async ({ id }: IDeleteTransactionParam) => {
  const token = getCookie('token')

  try {
    const { data } = await api.delete(`/account/transaction/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const response = JSON.stringify(data);
    return response;
  } catch (error) {
    console.error('Error to delete transaction', error)
  }
}
