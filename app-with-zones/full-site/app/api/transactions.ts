export async function createTransaction(payload: {
  accountId: string,
  type: 'Credit' | 'Debit',
  value: number,
  from: string,
  to: string,
  anexo: string,
}) {
  const res = await fetch('/api/transactions/create', {
    method: 'POST',
    body: JSON.stringify(payload),
  });

  if (!res.ok) throw new Error('Errr to create transaction');

  return res.json();
}
