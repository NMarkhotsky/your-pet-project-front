import { createSlice } from '@reduxjs/toolkit';

const optionSlice = createSlice({
  name: 'option',
  initialState: {
    option: '',
  },
  reducers: {
    setOption(state, action) {
      state.option = action.payload;
    },
    clearOption(state) {
      state.option = "";
    }
  },
});

export const { setOption, clearOption } = optionSlice.actions;
export const optionReducer = optionSlice.reducer;
