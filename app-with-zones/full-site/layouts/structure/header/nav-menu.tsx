'use client';

import React, { useEffect, useState } from 'react';
import { IMenu } from './header';
import Cta from '@/components/cta';
import { twMerge } from 'tailwind-merge';
import Avatar from '@/assets/icons/avatar.svg';
import Close from '@/assets/icons/close.svg';
import { headerData } from '@/data/global-data';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '@/store';
import {
  setIsAuthModalOpen,
  setCurrentAuthModal,
} from '@/features/modal/modalSlice';
import { setIsLoggedIn } from '@/features/auth/authSlice';

interface Properties {
  closeMenu: () => void;
  closeProfileMenu: () => void;
  isMenuActive: boolean;
  isProfileMenuActive: boolean;
  openProfileMenu: () => void;
}

const NavMenu: React.FC<Properties> = ({
  closeMenu,
  closeProfileMenu,
  isMenuActive,
  isProfileMenuActive,
  openProfileMenu,
}) => {
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();

  const { loggedOutMenu, loggedInMenu, profileMenu, loginCta, subscribeCta } =
    headerData as IMenu;

  const authStatus = useSelector((state: RootState) => state.auth.isLoggedIn);
  const [authChecked, setAuthChecked] = useState(false);
  const [userName, setUserName] = useState('');

  useEffect(() => {
    async function checkAuthStatus() {
      const user = localStorage.getItem('user');

      if (user) {
        setUserName(JSON.parse(user));
      }

      try {
        const res = await fetch('/api/auth/status');
        const data = await res.json();
        dispatch(setIsLoggedIn(data.isLoggedIn));
      } catch (err) {
        console.error('Erro ao verificar status de login', err);
      } finally {
        setAuthChecked(true);
      }
    }

    checkAuthStatus();
  }, [dispatch]);

  const handleLogout = async () => {
    closeProfileMenu();
    await fetch('/api/auth/logout', { method: 'POST' });
    localStorage.removeItem('user');
    dispatch(setIsLoggedIn(false));
    router.push('/');
  };

  if (!authChecked) return null;

  return (
    <>
      {authStatus ? (
        <>
          {/* Menu logado */}
          <div className="w-full flex items-center justify-end gap-4">
            <span className="hidden md:block">{userName}</span>
            <button onClick={openProfileMenu} aria-label="Abrir menu do perfil">
              <Avatar className="w-10 h-10" />
            </button>
          </div>

          {/* Menu mobile */}
          <nav
            className={twMerge(
              'fixed top-0 left-0 w-fit p-6 pt-10 flex md:hidden flex-col transition-all duration-300 bg-green-light',
              isMenuActive ? 'translate-x-0' : '-translate-x-full'
            )}
          >
            <button
              className="absolute top-4 right-4"
              onClick={closeMenu}
              aria-label="Fechar menu"
            >
              <Close className="w-4 h-4" />
            </button>
            <ul className="flex flex-col">
              {loggedInMenu.map((item, idx) => (
                <li className="py-4 not-last:border-b border-black" key={idx}>
                  <a href={item.url} onClick={closeMenu}>
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Menu perfil */}
          <nav
            className={twMerge(
              'fixed md:absolute top-0 md:top-[5.5rem] right-0 md:right-8 lg:right-0 w-fit p-6 pt-10 flex flex-col transition-all duration-300 bg-black',
              isProfileMenuActive
                ? 'translate-x-0 md:translate-y-0 md:opacity-100 md:pointer-events-auto z-20'
                : 'translate-x-full md:translate-0 md:translate-y-2 md:opacity-0 md:pointer-events-none -z-10'
            )}
          >
            <button
              className="absolute top-4 right-4"
              onClick={closeProfileMenu}
              aria-label="Fechar menu de perfil"
            >
              <Close className="w-4 h-4" />
            </button>
            <ul className="flex flex-col">
              {profileMenu.slice(0, 2).map((item, idx) => (
                <li className="py-4 border-b border-white" key={idx}>
                  <a href={item.url} onClick={closeProfileMenu}>
                    {item.text}
                  </a>
                </li>
              ))}
              <li className="py-4">
                <button onClick={handleLogout}>{profileMenu[2].text}</button>
              </li>
            </ul>
          </nav>
        </>
      ) : (
        <>
          {/* Menu deslogado */}
          <nav
            className={twMerge(
              'fixed top-0 left-0 md:static md:bg-transparent w-fit md:w-full p-6 pt-10 md:p-0 flex flex-col md:flex-row md:justify-between transition-all duration-300 bg-black',
              isMenuActive
                ? 'translate-x-0'
                : '-translate-x-full md:translate-x-0'
            )}
          >
            <button
              className="md:hidden absolute top-4 right-4"
              onClick={closeMenu}
              aria-label="Fechar menu"
            >
              <Close className="w-4 h-4" />
            </button>
            <ul className="flex flex-col md:flex-row md:items-center md:gap-10">
              {loggedOutMenu.map((item, idx) => (
                <li
                  key={idx}
                  className="py-4 not-last:border-b border-green md:border-none"
                >
                  <Link
                    href={item.url}
                    onClick={closeMenu}
                    className="block text-lg w-full md:w-fit text-center md:font-semibold translate-0 hover:-translate-y-2 duration-200 transition-all"
                  >
                    {item.text}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="hidden md:flex items-center md:gap-6">
              <Cta
                {...subscribeCta}
                onClick={() => {
                  dispatch(setIsAuthModalOpen(true));
                  dispatch(setCurrentAuthModal('subscribe'));
                }}
              />
              <Cta
                {...loginCta}
                onClick={() => {
                  dispatch(setIsAuthModalOpen(true));
                  dispatch(setCurrentAuthModal('login'));
                }}
              />
            </div>
          </nav>
        </>
      )}
    </>
  );
};

export default NavMenu;
