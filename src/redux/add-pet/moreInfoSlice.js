import { createSlice } from '@reduxjs/toolkit';
import { addNotice, addPet } from './operations';

const moreInfoSlice = createSlice({
  name: 'moreInfoSlice',
  initialState: {
    data: {
      comments: "",
      sex: "",
      location: "",
      price: "",
    },
    isLoad: false,
    error: null,
  },
  reducers: {
    saveComment(state, action) {
      state.data.comments = action.payload;
    },
    saveSex(state, action) {
      state.data.sex = action.payload;
    },
    saveLocation(state, action) {
      state.data.location = action.payload;
    },
    savePrice(state, action) {
      state.data.price = action.payload;
    },
    clearMoreInfo(state) {
      state.comments = "";
      state.sex = "";
      state.location = "";
      state.price = "";
    }
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

export const { saveComment, saveSex, saveLocation, savePrice, clearMoreInfo } = moreInfoSlice.actions;
export const moreInfoReducer = moreInfoSlice.reducer;
