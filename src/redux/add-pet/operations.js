import { createAsyncThunk } from '@reduxjs/toolkit';
import { api, getErrorMessage } from '../../services/api';
import { errorMessage } from '../../utils/messages';

export const addPet = createAsyncThunk('addPet', async (data, thunkAPI) => {
  try {
    const response = await api.post('/pets', data, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  } catch (error) {
    errorMessage(getErrorMessage(error));
    return thunkAPI.rejectWithValue(getErrorMessage(error));
  }
});

export const addNotice = createAsyncThunk(
  'addNotice',
  async (data, thunkAPI) => {
    try {
      const response = await api.post('/notices', data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      return response.data;
    } catch (error) {
      errorMessage(getErrorMessage(error));
      return thunkAPI.rejectWithValue(getErrorMessage(error));
    }
  }
);
