import { useState } from 'react';
import { AuthLayout } from './auth-layout';
import IlustracaoLogin from '@/assets/images/ilustracaoLogin.svg';
import Button from '../button';
import Input from '../input';
import useStateController from '@/hooks/use-state-controller';
import { login } from '@/app/api/auth';
import { setIsAuthModalOpen } from '@/features/modal/modalSlice';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/store';

export function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { setIsLoggedIn } = useStateController();
  const dispatch = useDispatch<AppDispatch>();
  const isOpen = useSelector((state: RootState) => state.modal.isAuthModalOpen);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    try {
      const response = await login({ email, password });

      if (response.result.token) {
        dispatch(setIsAuthModalOpen(!isOpen));
        setIsLoggedIn(true);
      }
    } catch (err: unknown) {
      console.log('Email ou senha inválidos', err);
    }
  }

  return (
    <AuthLayout
      illustration={IlustracaoLogin}
      illustrationAlt="Ilustração Login"
      illustrationWidth={333.25}
      illustrationHeight={267}
      title="Login"
    >
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <Input
          label="Email"
          type="email"
          id="login-email"
          autoComplete="email"
          placeholder="Digite seu email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          label="Senha"
          type="password"
          id="login-password"
          autoComplete="current-password"
          placeholder="Digite sua senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="text-left mb-2">
          <Button
            variant="link"
            label="Esqueci a senha!"
            aria-label="Recuperar senha esquecida"
          />
        </div>
        <Button
          label="Acessar"
          centered
          aria-label="Fazer login na conta"
          type="submit"
        />
      </form>
    </AuthLayout>
  );
}
