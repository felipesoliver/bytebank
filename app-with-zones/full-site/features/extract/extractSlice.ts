import { createSlice } from '@reduxjs/toolkit';

interface ExtractState {
  refreshExtract: number;
}

const initialState: ExtractState = {
  refreshExtract: 0,
};

const extractSlice = createSlice({
  name: 'extract',
  initialState,
  reducers: {
    triggerRefresh(state) {
      state.refreshExtract += 1;
    },
  },
});

export const { triggerRefresh } = extractSlice.actions;
export default extractSlice.reducer;
