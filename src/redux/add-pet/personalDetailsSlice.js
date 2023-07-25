import { createSlice } from "@reduxjs/toolkit";
import { initialStatePersonalDetails } from "../../constants";

const personalDetailsSlice = createSlice({
  name: "personal-details",
  initialState: initialStatePersonalDetails,
  reducers: {
    setPersonalDetails(state, action) {
      state.title = action.payload.title;
      state.name = action.payload.name;
      state.birthday = action.payload.birthday;
      state.type = action.payload.type;
    }
  }
});

export const { setPersonalDetails } = personalDetailsSlice.actions;
export const personalDetailsReducer = personalDetailsSlice.reducer;