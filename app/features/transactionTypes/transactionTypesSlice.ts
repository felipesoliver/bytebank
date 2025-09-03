import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  types: [
    {
      label: 'Depósito',
      value: 'deposit',
    },
    {
      label: 'DOC/TED',
      value: 'transfer',
    },
  ],
};

const transactionTypeSlices = createSlice({
  name: 'transactionTypes',
  initialState,
  reducers: {},
});

export default transactionTypeSlices.reducer;
