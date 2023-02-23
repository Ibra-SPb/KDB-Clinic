import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { State } from './Type/type';
import * as api from '../../App/api';

const initialState: State = {
  doctors: [],
  filterDoc: [],
  error: undefined,
};
export const loadDoctor = createAsyncThunk('alldoctors', () =>
  api.loadDoctors()
);

const doctorSlice = createSlice({
  name: 'doctor',
  initialState,
  reducers: {
    filterDoctors: (state, action) => {
      state.filterDoc = state.doctors.filter(
        (el) => el['Service_Doctors.serviceId'] === +action.payload
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadDoctor.fulfilled, (state, action) => {
        state.doctors = action.payload.doctors;
        state.filterDoc = action.payload.doctorsAll;
      })
      .addCase(loadDoctor.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export default doctorSlice.reducer;
export const { filterDoctors } = doctorSlice.actions;
