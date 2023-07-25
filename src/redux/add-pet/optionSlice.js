import { createSlice } from "@reduxjs/toolkit";

const optionSlice = createSlice({
  name: "option",
  initialState: {
    option: "",
  },
  reducers: {
    setOption(state, action) {
      state.option = action.payload;
    }
  }
});

export const { setOption } = optionSlice.actions;
export const optionReducer = optionSlice.reducer;
