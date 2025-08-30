import React from 'react'
import { IAccount } from './account'
import Cta from '../../../components/cta'
import { useRouter } from 'next/router'
import Input from '../../../components/input'

const AccountForm: React.FC<IAccount> = ({
  cta,
  email,
  emailLabel,
  firstName,
  lastName,
  nameLabel,
  passLabel
}) => {
  const router = useRouter()

  return (
    <form className='lg:w-1/2 flex flex-col gap-6' aria-label="Formulário de informações da conta">
      <Input
        name='name'
        type='text'
        label={nameLabel}
        id='account-name'
        autoComplete='name'
        placeholder={`${firstName} ${lastName}`}
        required
        aria-label="Nome completo do usuário"
      />
      <Input
        name='email'
        type='email'
        label={emailLabel}
        id='account-email'
        autoComplete='email'
        placeholder={email}
        required
        aria-label="Endereço de email"
      />
      <Input
        type='password'
        label={passLabel}
        id='account-password'
        autoComplete='current-password'
        placeholder='******'
        required
        aria-label="Senha da conta"
      />
      <Cta
        onClick={() => router.push('/')}
        className='md:w-fit'
        type='submit'
        aria-label="Salvar alterações na conta"
        {...cta}
      />
    </form>
  )
}

export default AccountForm
