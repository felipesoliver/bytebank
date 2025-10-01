'use client';

import { useState } from 'react';
import { AuthLayout } from './auth-layout';
import IlustracaoCriacaoLogin from '@/assets/images/IlustraçãoCriacaoLogin.svg';
import Button from '../button';
import Input from '../input';
import { register } from '@/app/api/register';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/store';
import { setIsAuthModalOpen } from '@/features/modal/modalSlice';

interface RegisterFormProps {
  onSubmit: (data: { name: string; email: string; password: string }) => void;
  formId?: string;
}

export function RegisterForm({ formId }: RegisterFormProps) {
  const uniqueId =
    formId || `register-form-${Math.random().toString(36).slice(2, 10)}`;
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [emailError, setEmailError] = useState('');

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError('Dado incorreto, Revise e digite novamente.');
      return false;
    } else {
      setEmailError('');
      return true;
    }
  };

  const dispatch = useDispatch<AppDispatch>();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    try {
      const response = await register({ username: name, email, password });
      console.log('antes', response?.result?.id);
      if (response?.result?.id) {
        toast.success('Cadastro realizado com sucesso!');
        dispatch(setIsAuthModalOpen(false));
      }
    } catch (err: unknown) {
      toast.error('Erro ao realizar o registro do usuário');
      console.log('Register error', err);
    }
  }

  return (
    <AuthLayout
      illustration={IlustracaoCriacaoLogin}
      illustrationAlt="Ilustração Criação Login"
      illustrationWidth={354.96}
      illustrationHeight={261.6}
      title="Criar conta"
      subtitle="Preencha os campos abaixo para criar sua conta corrente!"
    >
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <Input
          label="Nome completo"
          id={`${uniqueId}-name`}
          autoComplete="name"
          placeholder="Digite seu nome completo"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          label="Email"
          id={`${uniqueId}-email`}
          type="email"
          autoComplete="email"
          placeholder="Digite seu email"
          value={email}
          error={emailError}
          onChange={(e) => {
            setEmail(e.target.value);
            validateEmail(e.target.value);
          }}
        />
        <Input
          label="Senha"
          id={`${uniqueId}-password`}
          type="password"
          autoComplete="new-password"
          placeholder="Digite sua senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="flex items-start gap-3 my-2">
          <input
            type="checkbox"
            id={`${uniqueId}-terms`}
            checked={agreedToTerms}
            onChange={(e) => setAgreedToTerms(e.target.checked)}
            className="mt-1 w-4 h-4 accent-[var(--color-green)] border-[var(--color-green)] border-2 rounded focus:ring-green-500"
            aria-describedby={`${uniqueId}-terms-description`}
            required
          />
          <label
            htmlFor={`${uniqueId}-terms`}
            className="text-sm text-gray-600 leading-relaxed cursor-pointer"
            id={`${uniqueId}-terms-description`}
          >
            Li e estou ciente quanto às condições de tratamento dos meus dados
            conforme descrito na Política de Privacidade do banco.
          </label>
        </div>
        <Button
          label="Criar conta"
          type="submit"
          disabled={!agreedToTerms}
          centered
          aria-label={
            agreedToTerms
              ? 'Criar nova conta'
              : 'Aceite os termos para criar conta'
          }
        />
      </form>
    </AuthLayout>
  );
}
