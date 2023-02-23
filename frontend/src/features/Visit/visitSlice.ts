// features/counter/counterSlice.ts
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { State } from './Types/types';
import * as api from '../../App/api';
// начальный state
const initialState: State = { visits: [], userVisits: [], error: undefined };

export const loadVisit = createAsyncThunk('allvisits', () => api.loadVisits());

export const loadUserVisit = createAsyncThunk('alluservisits', () => api.loadVisits());

// обявляем slice с именем “counter”
const visitSlice = createSlice({
  name: 'visit',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadVisit.fulfilled, (state, action) => {
        // console.log(action.payload);
        state.visits = action.payload;
      })
      .addCase(loadUserVisit.fulfilled, (state, action) => {
        // console.log(action.payload);
        state.visits = action.payload;
      })
      .addCase(loadVisit.rejected, (state, action) => {
        // показываем как меняется state если загрузка прошла успешно
        state.error = action.error.message;
      })
      .addCase(loadUserVisit.rejected, (state, action) => {
        // показываем как меняется state если загрузка прошла успешно
        state.error = action.error.message;
      });
  },
});
// RTK создаёт action creators для каждого кейса редьюсера, экспортируем их
// export const { plus, minus } = createSlice.actions;
// экспортом по умолчанию будет reducer

export default visitSlice.reducer;
