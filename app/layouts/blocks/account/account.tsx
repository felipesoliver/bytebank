import { accountData } from '@/data/global-data'
import { ICta } from '@/types/types'
import React from 'react'

import Graphism from '@/assets/images/graphism-dark.svg'
import AccountImage from '@/assets/images/account-image.svg'
import AccountForm from './account-form'

export interface IAccount {
  title: string
  nameLabel: string
  firstName: string
  lastName: string
  email: string
  emailLabel: string
  passLabel: string
  imageAlt: string
  cta: ICta
}

const Account = () => {
  const {
    title,
  } = accountData as IAccount

  return (
    <section className='relative min-h-[45.625rem] lg:min-h-[33rem] bg-gray-medium rounded-lg overflow-hidden p-5 md:px-[4.375rem] md:py-8 lg:px-8'>
      <Graphism className='absolute bottom-0 right-0 md:right-auto md:left-0 w-[9rem] md:w-[11.25rem] h-auto' />
      <Graphism className='absolute top-0 left-0 md:left-auto md:right-0 w-[9rem] md:w-[11.25rem] h-auto rotate-180' />
      <div className='relative z-10 flex flex-col gap-5'>
        <h1 className='text-[1.5625rem] font-semibold text-black'>{title}</h1>
        <div className='flex flex-col lg:flex-row-reverse gap-8'>
          <AccountForm {...accountData as IAccount} />
          <picture className='block w-full lg:w-1/2'>
            <AccountImage className='w-full h-auto' />
          </picture>
        </div>
      </div>
    </section>
  )
}

export default Account
