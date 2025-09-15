import api from './client';

type LoginPayload = { email: string; password: string };
type LoginResponse = {
  result: any; token: string; user: { id: string; name: string } 
};

export async function login(payload: LoginPayload): Promise<LoginResponse> {
  const { data } = await api.post('/user/auth', payload);
  return data;
}
