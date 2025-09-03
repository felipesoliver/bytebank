import { configureStore } from '@reduxjs/toolkit';
import transactionTypes from '../features/transactionTypes/transactionTypesSlice';

const store = configureStore({
  reducer: {
    transactionTypes,
  },
});
export type RootState = ReturnType<typeof store.getState>;

export default store;
