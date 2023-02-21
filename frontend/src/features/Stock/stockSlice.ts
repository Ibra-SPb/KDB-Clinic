// features/counter/counterSlice.ts
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { State } from './types/types';
import * as api from '../../App/api';
// начальный state
const initialState: State = { stocks: [], error: undefined };

export const loadStock = createAsyncThunk('alltables', () => api.loadStocks());

// обявляем slice с именем “counter”
const stockSlice = createSlice({
  name: 'stock',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadStock.fulfilled, (state, action) => {
        state.stocks = action.payload;
      })
      .addCase(loadStock.rejected, (state, action) => {
        // показываем как меняется state если загрузка прошла успешно
        state.error = action.error.message;
      });
  },
});
// RTK создаёт action creators для каждого кейса редьюсера, экспортируем их
// export const { plus, minus } = createSlice.actions;
// экспортом по умолчанию будет reducer

export default stockSlice.reducer;
