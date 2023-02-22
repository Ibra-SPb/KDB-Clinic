import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as api from '../../App/api';
import { State } from '../auth/Types/type';

const initialState: State = {
  user: {},
  users: [],
  files: [],
  error: undefined,
  isAuth: false,
};

export const addFiles = createAsyncThunk('allFiles', (action: any) =>
  api.addFiles(action)
);

const fileSlice = createSlice({
  name: 'file',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addFiles.fulfilled, (state, action) => {
        state.error = action.payload.message;
      })
      .addCase(addFiles.rejected, (state, action) => {
        // показываем как меняется state если загрузка прошла успешно
        state.error = action.error.message;
      });
  },
});

export default fileSlice;
