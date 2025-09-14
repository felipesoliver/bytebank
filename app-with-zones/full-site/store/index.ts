import { configureStore } from '@reduxjs/toolkit';
import transactionTypes from '../features/transactionTypes/transactionTypesSlice';
import transactions from '../features/transactions/transactionSlice';

const store = configureStore({
  reducer: {
    transactionTypes,
    transactions,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
