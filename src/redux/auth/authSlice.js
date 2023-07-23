import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { login, logout, register } from './operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isNewUser: false,
  isRefreshing: false,
  error: null,
};

const handlePending = state => {
  state.isRefreshing = true;
  state.error = null;
};
const handleRejected = (state, action) => {
  state.isRefreshing = false;
  state.error = action.payload;
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setIsNewUserFalse: {
      reducer(state) {
        state.isNewUser = false;
      },
    },
  },
  extraReducers: builder => {
    builder
      .addCase(register.fulfilled, (state, action) => {
        state.isRefreshing = false;
        state.error = null;
        state.isLoggedIn = true;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isNewUser = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isRefreshing = false;
        state.error = null;
        state.isLoggedIn = true;
        state.user = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(logout.fulfilled, state => {
        state.isRefreshing = false;
        state.error = null;
        state.isLoggedIn = false;
        state.user = { name: null, email: null, password: null };
        state.token = null;
      })
      .addMatcher(
        isAnyOf(register.pending, login.pending, logout.pending),
        state => handlePending(state)
      )
      .addMatcher(
        isAnyOf(register.rejected, login.rejected, logout.rejected),
        (state, action) => handleRejected(state, action)
      );
  },
});

export const { setIsNewUserFalse } = authSlice.actions;
export const authReducer = authSlice.reducer;
