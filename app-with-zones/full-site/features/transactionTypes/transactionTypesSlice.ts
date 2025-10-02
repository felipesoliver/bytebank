import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  types: [
    {
      label: 'Depósito',
      value: 'Credit',
    },
    {
      label: 'DOC/TED',
      value: 'Debit',
    },
  ],
};

const transactionTypeSlices = createSlice({
  name: 'transactionTypes',
  initialState,
  reducers: {},
});

export default transactionTypeSlices.reducer;
