import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserInfo {
  userName: string;
}
const initialState: UserInfo = {
  userName: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserAuthenticated: (state, action: PayloadAction<string>) => {
      state.userName = action.payload;
      localStorage.setItem('user', JSON.stringify(state.userName));
    },
  },
});

export const { setUserAuthenticated } = userSlice.actions;
export default userSlice.reducer;
