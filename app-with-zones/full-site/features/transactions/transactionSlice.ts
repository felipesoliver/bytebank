import { IBankStatementItem } from '@/types/types';
import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';

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
      let amount = Math.abs(action.payload.amount);

      if (action.payload.type !== 'deposit') {
        amount = -amount;
      }

      state.transactions.push({
        ...action.payload,
        id: state.transactions.length + 1,
        amount,
      });
    },
  },
});

export const selectTransactions = createSelector(
  (state) => state.transactions.transactions,
  (transactions) => {
    return transactions;
  }
);

export const selectBalance = createSelector(
  selectTransactions,
  (transactions: IBankStatementItem[]) =>
    transactions.reduce((balance: number, t) => balance + t.amount, 0)
);

export const { addTransaction } = transactionSlice.actions;
export default transactionSlice.reducer;
