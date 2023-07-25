import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "";

export const addPet = createAsyncThunk(
  "addPet",
  async (data, thunkAPI) => {
    try {
      const response = await axios.post("", data);
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
      const response = await axios.post("", data);
      return response.data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);
