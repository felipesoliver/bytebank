import React, { createContext, useState } from 'react'

export interface IStateControllerContext {
  isAuthModalOpen: boolean
  setIsAuthModalOpen: (value: boolean) => void
  isLoggedIn: boolean
  setIsLoggedIn: (value: boolean) => void
  currentAuthModal: 'login' | 'subscribe'
  setCurrentAuthModal: (value: 'login' | 'subscribe') => void
  refreshExtract: number
  triggerRefresh: () => void
}

const initialState: IStateControllerContext = {
  isAuthModalOpen: false,
  setIsAuthModalOpen: () => {},
  isLoggedIn: false,
  setIsLoggedIn: () => {},
  currentAuthModal: 'login',
  setCurrentAuthModal: () => {},
  refreshExtract: 0,
  triggerRefresh: () => {},
}

export const StateControllerContext =
  createContext<IStateControllerContext>(initialState)

const StateControllerProvider = ({ children }: React.PropsWithChildren) => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState<boolean>(initialState.isLoggedIn)
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(initialState.isAuthModalOpen)
  const [currentAuthModal, setCurrentAuthModal] = useState<'login' | 'subscribe'>(initialState.currentAuthModal)
  const [refreshExtract, setRefreshExtract] = useState<number>(initialState.refreshExtract)

  const triggerRefresh = () => {
    setRefreshExtract(prev => prev + 1)
  }

  return (
    <StateControllerContext.Provider
      value={{
        isAuthModalOpen,
        setIsAuthModalOpen,
        isLoggedIn,
        setIsLoggedIn,
        currentAuthModal,
        setCurrentAuthModal,
        refreshExtract,
        triggerRefresh,
      }}
    >
      {children}
    </StateControllerContext.Provider>
  )
}

export default StateControllerProvider
