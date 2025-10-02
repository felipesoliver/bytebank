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
      let amount = Math.abs(action.payload.value);

      if (action.payload.type !== 'deposit') {
        amount = -amount;
      }

      state.transactions.push({
        ...action.payload,
        id: state.transactions.length + 1,
        value: amount,
      });
    },
    removeTransaction: (state, action: PayloadAction<number>) => {
      console.log('to aqui dentro');
      console.log('o payload é', action.payload);
      console.log('transaction', state.transactions);
      state.transactions = state.transactions.filter(
        (t) => t.id !== action.payload
      );

      console.log('esse é o state', state.transactions);
    },
    updateTransaction: (
      state,
      action: PayloadAction<{
        id?: number;
        updated: Partial<IBankStatementItem>;
      }>
    ) => {
      const { id, updated } = action.payload;

      const index = state.transactions.findIndex((t) => t.id === id);
      if (index !== -1) {
        const existing = state.transactions[index];

        let amount = updated.value ?? existing.value;

        if (updated.type && updated.type !== 'deposit') {
          amount = -Math.abs(amount);
        } else if (updated.type === 'deposit') {
          amount = Math.abs(amount);
        }

        state.transactions[index] = {
          ...existing,
          ...updated,
          value: amount,
        };
      }
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
    transactions.reduce((balance: number, t) => balance + t.value, 0)
);

export const { addTransaction, removeTransaction, updateTransaction } =
  transactionSlice.actions;
export default transactionSlice.reducer;
