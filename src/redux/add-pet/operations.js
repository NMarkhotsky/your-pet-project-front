import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASE_URL } from '../../constants/globalConstants';

axios.defaults.baseURL = BASE_URL;

export const addPet = createAsyncThunk('addPet', async (data, thunkAPI) => {
  try {
    const response = await axios.post('/pets', data, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
    return thunkAPI.rejectWithValue(error);
  }
});

export const addNotice = createAsyncThunk(
  'addNotice',
  async (data, thunkAPI) => {
    try {
      const response = await axios.post('/notices', data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      return response.data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);
