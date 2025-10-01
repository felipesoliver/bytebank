export async function register(payload: {
  email: string;
  password: string;
  username: string;
}) {
  const res = await fetch('/api/auth/register', {
    method: 'POST',
    body: JSON.stringify(payload),
  });

  if (!res.ok) throw new Error('Erro no register');

  return res.json();
}
