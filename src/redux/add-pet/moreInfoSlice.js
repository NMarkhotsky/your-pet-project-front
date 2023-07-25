import { createSlice } from '@reduxjs/toolkit';
import { addNotice, addPet } from './operations';

const moreInfoSlice = createSlice({
  name: 'moreInfoSlice',
  initialState: {
    data: null,
    isLoad: false,
    error: null,
  },

  extraReducers: builder => {
    builder
      .addCase(addPet.pending, state => {
        state.isLoad = true;
      })
      .addCase(addPet.fulfilled, (state, action) => {
        state.isLoad = false;
        state.error = null;
        state.data = action.payload;
      })
      .addCase(addPet.rejected, (state, action) => {
        state.isLoad = false;
        state.error = action.payload;
      })
      .addCase(addNotice.pending, state => {
        state.isLoad = true;
      })
      .addCase(addNotice.fulfilled, (state, action) => {
        state.isLoad = false;
        state.error = null;
        state.data = action.payload;
      })
      .addCase(addNotice.rejected, (state, action) => {
        state.isLoad = false;
        state.error = action.payload;
      });
  },
});

export const moreInfoReducer = moreInfoSlice.reducer;
