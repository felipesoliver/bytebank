// store/modalSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type AuthModalType = 'login' | 'subscribe';

interface ModalState {
  isAuthModalOpen: boolean;
  currentAuthModal: AuthModalType;
}

const initialState: ModalState = {
  isAuthModalOpen: false,
  currentAuthModal: 'login',
};

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    setIsAuthModalOpen: (state, action: PayloadAction<boolean>) => {
      state.isAuthModalOpen = action.payload;
    },
    setCurrentAuthModal: (state, action: PayloadAction<AuthModalType>) => {
      state.currentAuthModal = action.payload;
    },
  },
});

export const { setIsAuthModalOpen, setCurrentAuthModal } = modalSlice.actions;
export default modalSlice.reducer;
