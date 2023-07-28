import { createSlice } from "@reduxjs/toolkit";
import { initialStatePersonalDetails } from "../../constants";

const personalDetailsSlice = createSlice({
  name: "personal-details",
  initialState: initialStatePersonalDetails,
  reducers: {
    setPersonalDetails(state, action) {
      state.name = action.payload.name;
      state.birthday = action.payload.birthday;
      state.type = action.payload.type;

      if (action.payload.title !== undefined) {
        state.title = action.payload.title;
      }
    },
    clearPersonalDetails(state) {
      state.name = "";
      state.birthday = "2020-07-31";
      state.type = "";
      state.title = "";
    }
  }
});

export const { setPersonalDetails, clearPersonalDetails } = personalDetailsSlice.actions;
export const personalDetailsReducer = personalDetailsSlice.reducer;