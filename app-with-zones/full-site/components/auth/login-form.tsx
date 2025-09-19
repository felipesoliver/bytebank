import { useState } from 'react';
import { AuthLayout } from './auth-layout';
import IlustracaoLogin from '@/assets/images/ilustracaoLogin.svg';
import Button from '../button';
import Input from '../input';
import { authService } from '@/services/authService';
import useStateController from '@/hooks/use-state-controller';

export function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { setIsLoggedIn, setIsAuthModalOpen } = useStateController();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    try {
      const response = await authService.login(email, password);

      if (response.result.token) {
        setIsAuthModalOpen(false);
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
