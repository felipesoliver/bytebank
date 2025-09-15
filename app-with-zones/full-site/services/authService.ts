import { login } from '../api/auth';

export const authService = {
  login: async (email: string, password: string) => {
    const response = await login({ email, password });

    localStorage.setItem('token', response?.result?.token);

    return response;
  },
};
