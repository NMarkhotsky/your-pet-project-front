import { createSlice } from '@reduxjs/toolkit';
import { addNotice, addPet } from './operations';

const moreInfoSlice = createSlice({
  name: 'moreInfoSlice',
  initialState: {
    data: {
      comments: '',
      sex: '',
      location: '',
      price: '',
      photo: '',
    },
    isLoad: false,
    error: null,
    redirect: false,
  },
  reducers: {
    saveComment(state, action) {
      state.data.comments = action.payload;
    },
    saveSex(state, action) {
      state.data.sex = action.payload;
    },
    saveLocationOrPrice(state, { payload }) {
      state.data[payload.name] = payload.value;
    },
    savePhoto(state, action) {
      state.data.photo = action.payload;
    },
    clearMoreInfo(state) {
      state.data.comments = '';
      state.data.sex = '';
      state.data.location = '';
      state.data.price = '';
      state.redirect = false;
    },
    clearRedirect(state) {
      state.redirect = false;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(addPet.pending, state => {
        state.isLoad = true;
        state.redirect = false;
      })
      .addCase(addPet.fulfilled, state => {
        state.isLoad = false;
        state.error = null;
        state.redirect = true;
      })
      .addCase(addPet.rejected, (state, action) => {
        state.isLoad = false;
        state.error = action.payload;
        state.redirect = false;
      })
      .addCase(addNotice.pending, state => {
        state.isLoad = true;
        state.redirect = false;
      })
      .addCase(addNotice.fulfilled, state => {
        state.isLoad = false;
        state.error = null;
        state.redirect = true;
      })
      .addCase(addNotice.rejected, (state, action) => {
        state.isLoad = false;
        state.error = action.payload;
        state.redirect = false;
      });
  },
});

export const {
  saveComment,
  saveSex,
  saveLocationOrPrice,
  clearMoreInfo,
  savePhoto,
  clearRedirect,
} = moreInfoSlice.actions;
export const moreInfoReducer = moreInfoSlice.reducer;
