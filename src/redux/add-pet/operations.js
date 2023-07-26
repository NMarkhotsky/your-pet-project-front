import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = 'https://mypets-backend.onrender.com/api/';

export const addPet = createAsyncThunk(
  "addPet",
  async (data, thunkAPI) => {
    try {
      const response = await axios.post("/pets", data, {
      headers: {
        "Content-Type": "multipart/form-data",
      }
    });
      console.log(response);
      return response.data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const addNotice = createAsyncThunk(
  "addNotice",
  async (data, thunkAPI) => {
    try {
      const response = await axios.post("", data, {
      headers: {
        "Content-Type": "multipart/form-data",
      }
    });
      return response.data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);
