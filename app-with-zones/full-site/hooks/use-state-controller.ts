import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '@/store';
import {
  setIsAuthModalOpen,
  setCurrentAuthModal,
} from '@/features/modal/modalSlice';
import { setIsLoggedIn } from '@/features/auth/authSlice';

function useStateControllerRedux() {
  const dispatch = useDispatch<AppDispatch>();

  const authModalStatus = useSelector(
    (state: RootState) => state.modal.isAuthModalOpen
  );
  const selectedModal = useSelector(
    (state: RootState) => state.modal.currentAuthModal
  );
  const authStatus = useSelector((state: RootState) => state.auth.isLoggedIn);

  return {
    authModalStatus,
    setIsAuthModalOpen: (value: boolean) => dispatch(setIsAuthModalOpen(value)),
    selectedModal,
    setCurrentAuthModal: (value: 'login' | 'subscribe') =>
      dispatch(setCurrentAuthModal(value)),
    authStatus,
    setIsLoggedIn: (value: boolean) => dispatch(setIsLoggedIn(value)),
  };
}

export default useStateControllerRedux;
