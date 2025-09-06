import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { StateControllerContext } from '@/contexts/state-controller'
import React from 'react'

// Componente Modal customizado para Storybook (sem dependência do SVG externo)
const ModalForStorybook = ({ children }: { children?: React.ReactNode }) => {
  const context = React.useContext(StateControllerContext)
  
  // Valores mock para o Storybook
  const selectedModal = context.currentAuthModal
  const authModalStatus = context.isAuthModalOpen
  const setCurrentAuthModal = context.setCurrentAuthModal
  const setIsAuthModalOpen = context.setIsAuthModalOpen
  const setIsLoggedIn = context.setIsLoggedIn

  if (!authModalStatus) return null

  return (
    <div className="fixed inset-0 z-[9999] flex justify-center bg-[#00000080] overflow-y-auto">
      <div className="relative bg-gray-light lg:rounded-2xl w-full lg:w-[49.5rem] h-fit shadow-2xl animate-showup lg:my-20">
        <button
          aria-label="Close modal"
          onClick={() => setIsAuthModalOpen(false)}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-xl z-10 w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
        >
          {/* SVG Close inline para Storybook */}
          <svg 
            width="16" 
            height="16" 
            viewBox="0 0 16 16" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4"
          >
            <path 
              d="M12 4L4 12M4 4L12 12" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <div className="px-6 py-8">
          {children ? (
            children
          ) : (
            <>
              {selectedModal === 'login' ? (
                <>
                  <div className="text-center">
                    <h2 className="text-2xl font-bold mb-4">Login</h2>
                    <p className="text-gray-600 mb-6">Formulário de login simulado</p>
                    <button 
                      className="w-full px-4 py-2 bg-green text-white rounded-lg hover:bg-green-dark transition-colors"
                      onClick={() => {
                        setIsLoggedIn(true)
                        setIsAuthModalOpen(false)
                      }}
                    >
                      Fazer Login
                    </button>
                  </div>
                  <button
                    className="text-sm text-green underline mt-4"
                    onClick={() => setCurrentAuthModal('subscribe')}
                  >
                    Não tem conta? Cadastre-se
                  </button>
                </>
              ) : (
                <>
                  <div className="text-center">
                    <h2 className="text-2xl font-bold mb-4">Cadastro</h2>
                    <p className="text-gray-600 mb-6">Formulário de cadastro simulado</p>
                    <button 
                      className="w-full px-4 py-2 bg-green text-white rounded-lg hover:bg-green-dark transition-colors"
                      onClick={() => setCurrentAuthModal('login')}
                    >
                      Cadastrar
                    </button>
                  </div>
                  <button 
                    className="text-sm text-green underline mt-4" 
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
  )
}

const meta: Meta<typeof ModalForStorybook> = {
  title: 'Components/Modal',
  component: ModalForStorybook,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <StateControllerContext.Provider value={{
        isAuthModalOpen: true,
        setIsAuthModalOpen: () => {},
        isLoggedIn: false,
        setIsLoggedIn: () => {},
        currentAuthModal: 'login',
        setCurrentAuthModal: () => {},
        refreshExtract: 0,
        triggerRefresh: () => {},
      }}>
        <Story />
      </StateControllerContext.Provider>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}

  