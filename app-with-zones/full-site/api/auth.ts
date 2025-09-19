import api from './client';

type LoginPayload = { email: string; password: string };
type LoginResponse = {
  result: {
    token: string;
  };
  message: string;
};

function saveToken(token: string) {
  localStorage.setItem('token', token);
}

export async function login(payload: LoginPayload): Promise<LoginResponse> {
  const { data } = await api.post<LoginResponse>('/user/auth', payload);

  if (data?.result?.token) {
    saveToken(data.result.token); 
  }

  return data;
}
