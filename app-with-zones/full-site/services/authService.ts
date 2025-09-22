export async function login(payload: { email: string; password: string }) {
  const res = await fetch('user/auth', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });

  if (!res.ok) throw new Error('Erro no login');
  return res.json();
}
