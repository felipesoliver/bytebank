import React, { useEffect, useState } from 'react'
import { IMenu } from './header'
import { twMerge } from 'tailwind-merge'

import Avatar from '@/assets/icons/avatar.svg'
import Close from '@/assets/icons/close.svg'
import { headerData } from '@/data/global-data'
import { useRouter } from 'next/navigation'
import { getCookie } from '@/utils/get-cookie'

interface Properties {
  closeMenu: () => void
  closeProfileMenu: () => void
  isMenuActive: boolean
  isProfileMenuActive: boolean
  openProfileMenu: () => void
  openRegister?: () => void
}

const NavMenu: React.FC<Properties> = ({
  closeMenu,
  closeProfileMenu,
  isMenuActive,
  isProfileMenuActive,
  openProfileMenu,
}) => {
  const router = useRouter()
  const [email, setEmail] = useState<string>('')
  const {
    loggedInMenu,
    profileMenu,
  } = headerData as IMenu

  useEffect(() => {
    const mail = getCookie('email')
    setEmail(mail ?? '')
  }, []);

  return (
        <>
          <div className='w-full flex items-center justify-end gap-4'>
            <span className='hidden md:block opacity-0 animate-fadein'>{email}</span>
            <button onClick={openProfileMenu} aria-label="Abrir menu do perfil do usuário">
              <span className="sr-only">Abrir menu de perfil</span>
              <Avatar className='w-10 h-10' />
            </button>
          </div>
          <nav className={
            twMerge(
              'fixed top-0 left-0 w-fit p-6 pt-10 flex md:hidden flex-col transition-all duration-300 bg-green-light',
              isMenuActive ? 'translate-x-0' : '-translate-x-full',
            )}
          >
            <button className='absolute top-4 right-4' onClick={closeMenu} aria-label="Fechar menu">
              <span className="sr-only">Fechar menu</span>
              <Close className='w-4 h-4' />
            </button>
            <ul className='flex flex-col'>
              {loggedInMenu.map((loggedInItem, index) => (
                <li className='py-4 not-last:border-b border-black' key={`item-${index}`}>
                  <a
                    className='block w-full text-lg text-center text-black' href={loggedInItem.url}
                    onClick={closeMenu}
                    aria-label={`Navegar para ${loggedInItem.text}`}
                  >
                    {loggedInItem.text}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <nav className={
            twMerge(
              'fixed md:absolute top-0 md:top-[5.5rem] right-0 md:right-8 lg:right-0 w-fit p-6 pt-10 flex flex-col transition-all duration-300 bg-black',
              isProfileMenuActive ? 'translate-x-0 md:translate-y-0 md:opacity-100 md:pointer-events-auto z-20' : 'translate-x-full md:translate-0 md:translate-y-2 md:opacity-0 md:pointer-events-none -z-10',
            )}
          >
            <button className='absolute top-4 right-4' onClick={closeProfileMenu} aria-label="Fechar menu de perfil">
              <span className="sr-only">Fechar menu de perfil</span>
              <Close className='w-4 h-4' />
            </button>
            <ul className='flex flex-col'>
              {profileMenu.slice(0, 2).map((profileItem, index) => (
                <li className='py-4 border-b border-white' key={`item-${index}`}>
                  <a
                    className='block w-full text-lg text-center text-white' href={profileItem.url}
                    onClick={closeProfileMenu}
                    aria-label={`Navegar para ${profileItem.text}`}
                  >
                    {profileItem.text}
                  </a>
                </li>
              ))}
              <li className='py-4'>
                <button
                  className='block w-full text-lg text-center text-white'
                  onClick={() => {
                    closeProfileMenu()
                    router.push('/')
                  }}
                  aria-label="Sair da conta"
                >
                  {profileMenu[2].text}
                </button>
              </li>
            </ul>
          </nav>
    </>
  )
}

export default NavMenu
