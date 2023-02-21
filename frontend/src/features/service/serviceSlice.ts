import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { State } from './Type/type';
import * as api from '../../App/api';

const initialState: State = {
  services: [],
  error: undefined,
};
export const loadService = createAsyncThunk('allservices', () =>
  api.loadService()
);

const serviceSlice = createSlice({
  name: 'service',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadService.fulfilled, (state, action) => {
        state.services = action.payload;
      })
      .addCase(loadService.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export default serviceSlice.reducer;
