import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { State } from './Types/type';
import * as api from '../../App/api';
// начальный state
const initialState: State = { results: [], error: undefined };

export const loadResults = createAsyncThunk('allResults', () => api.loadResults());

const resultSlice = createSlice({
  name: 'result',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadResults.fulfilled, (state, action) => {
        state.results = action.payload;
      })
      .addCase(loadResults.rejected, (state, action) => {
        // показываем как меняется state если загрузка прошла успешно
        state.error = action.error.message;
      });
  },
});
// RTK создаёт action creators для каждого кейса редьюсера, экспортируем их
// export const { plus, minus } = createSlice.actions;
// экспортом по умолчанию будет reducer

export default resultSlice.reducer;
