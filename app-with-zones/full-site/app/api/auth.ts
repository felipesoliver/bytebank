export async function login(payload: { email: string; password: string }) {
  const res = await fetch('/api/auth/login', {
    method: 'POST',
    body: JSON.stringify(payload),
  });

  if (!res.ok) throw new Error('Erro no login');

  return res.json();
}
