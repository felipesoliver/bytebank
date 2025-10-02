export const getUser = async () => {
  try {
    const res = await fetch('/api/auth/get-user');
    const data = await res.json();
    return data;
  } catch (err) {
    console.error('Error to verify user data', err);
  }
}
