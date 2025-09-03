import { IBankStatementItem } from '@/types/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type TransactionState = {
  transactions: IBankStatementItem[];
};
const initialState: TransactionState = {
  transactions: [],
};

const transactionSlice = createSlice({
  name: 'transactions',
  initialState,
  reducers: {
    addTransaction: (state, action: PayloadAction<IBankStatementItem>) => {
      state.transactions.push({
        ...action.payload,
        id: state.transactions.length + 1,
      });
    },
  },
});

export const { addTransaction } = transactionSlice.actions;
export default transactionSlice.reducer;
