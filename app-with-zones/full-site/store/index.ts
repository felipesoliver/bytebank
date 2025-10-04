import { configureStore } from '@reduxjs/toolkit';
import modal from '@/features/modal/modalSlice';
import authSlice from '@/features/auth/authSlice';
import user from '@/features/user/userSlice';

const store = configureStore({
  reducer: {
    modal,
    auth: authSlice,
    user,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
