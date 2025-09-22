import { configureStore } from '@reduxjs/toolkit';
import transactionTypes from '../features/transactionTypes/transactionTypesSlice';
import transactions from '../features/transactions/transactionSlice';
import modal from '@/features/modal/modalSlice';
import authSlice from '@/features/auth/authSlice';
import extractSlice from '@/features/extract/extractSlice';
import user from '@/features/user/userSlice';

const store = configureStore({
  reducer: {
    transactionTypes,
    transactions,
    modal,
    auth: authSlice,
    extract: extractSlice,
    user,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
