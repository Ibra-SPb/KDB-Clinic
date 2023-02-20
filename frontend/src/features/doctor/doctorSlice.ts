import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { State } from "./Type/type";
import * as api from "../../App/api";

const initialState: State = {
  doctors: [],
  error: undefined,
};
export const loadDoctor = createAsyncThunk("alldoctors", () =>
  api.loadDoctors()
);

const doctorSlice = createSlice({
  name: "doctor",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadDoctor.fulfilled, (state, action) => {
        state.doctors = action.payload;
      })
      .addCase(loadDoctor.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export default doctorSlice.reducer;
