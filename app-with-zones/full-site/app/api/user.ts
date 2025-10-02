export const getUser = async () => {
  try {
    const userRes = await fetch('/api/transactions/get-user');
    const userData = await userRes.json();

    const statementRes = await fetch('/api/transactions/statement');
    const statementData = await statementRes.json();

    return {
      user: userData.result,
      statement: statementData.result.transactions
    };
  } catch (err) {
    console.error('Error to verify user data', err);
  }
}
