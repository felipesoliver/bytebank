'use client';

import useStateController from '@/hooks/use-state-controller';
import { LoginForm, RegisterForm } from '../auth';
import React from 'react';

import Close from '@/assets/icons/close.svg';

interface ModalProps {
  children?: React.ReactNode;
}

const Modal = ({ children }: ModalProps) => {
  const {
    selectedModal,
    setCurrentAuthModal,
    authModalStatus,
    setIsAuthModalOpen,
    setIsLoggedIn,
  } = useStateController();

  if (!authModalStatus) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex justify-center bg-[#00000080] overflow-y-auto">
      <div className="relative bg-gray-light lg:rounded-2xl w-full lg:w-[49.5rem] h-fit shadow-2xl animate-showup lg:my-20">
        <button
          aria-label="Fechar modal"
          onClick={() => setIsAuthModalOpen(false)}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-xl z-10 w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
        >
          <Close className="w-4 h-4" />
        </button>
        <div className="px-6 py-8">
          {children ? (
            children
          ) : (
            <>
              {selectedModal === 'login' ? (
                <>
                  <LoginForm />
                  <button
                    className="text-sm text-green underline"
                    onClick={() => {
                      setCurrentAuthModal('subscribe');
                    }}
                  >
                    Não tem conta? Cadastre-se
                  </button>
                </>
              ) : (
                <>
                  <RegisterForm onSubmit={() => setCurrentAuthModal('login')} />
                  <button
                    className="text-sm text-green underline"
                    onClick={() => setCurrentAuthModal('login')}
                  >
                    Já tem conta? Faça login
                  </button>
                </>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;
