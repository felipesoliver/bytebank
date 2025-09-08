import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  types: ['login', 'subscribe'],
};

const modalTypesSlice = createSlice({
  name: 'modalTypes',
  initialState,
  reducers: {},
});

export default modalTypesSlice.reducer;
