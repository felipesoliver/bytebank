export const getStatement = async () => {
  try {
    const res = await fetch('/api/transactions/statement');
    const data = await res.json();
    return data.result?.transactions || [];
  } catch (err) {
    console.error('Error to verify statement data', err);
  }
}
