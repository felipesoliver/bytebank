import { useContext, useMemo } from 'react'

import { StateControllerContext } from '@/contexts/state-controller'

function useStateController() {
  const {
    isAuthModalOpen,
    setIsAuthModalOpen,
    isLoggedIn,
    setIsLoggedIn,
    currentAuthModal,
    setCurrentAuthModal,
    refreshExtract,
    triggerRefresh
  } = useContext(StateControllerContext)

  const authModalStatus = useMemo(() => isAuthModalOpen, [isAuthModalOpen])
  const authStatus = useMemo(() => isLoggedIn, [isLoggedIn])
  const selectedModal = useMemo(() => currentAuthModal, [currentAuthModal])

  return {
    authModalStatus,
    setIsAuthModalOpen,
    authStatus,
    setIsLoggedIn,
    selectedModal,
    setCurrentAuthModal,
    refreshExtract,
    triggerRefresh
  }
}

export default useStateController
