import { createAsyncThunk } from '@reduxjs/toolkit';
import { errorMessage } from '../../utils/messages';
import {
  fetchUserByToken,
  loginUser,
  logoutUser,
  registerUser,
} from '../../services/AuthApi';

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      return await registerUser(credentials);
    } catch (e) {
      errorMessage(e.message);
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      return await loginUser(credentials);
    } catch (e) {
      errorMessage(e.message);
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const logout = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    return logoutUser();
  } catch (e) {
    errorMessage(e.message);
    return thunkAPI.rejectWithValue(e.message);
  }
});

export const fetchCurrentUser = createAsyncThunk(
  'auth/fetchCurrentUser',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }
    try {
      return fetchUserByToken(persistedToken);
    } catch (e) {
      errorMessage(e.message);
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
