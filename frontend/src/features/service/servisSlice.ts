// features/counter/counterSlice.ts
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { State } from './Type/type';
import * as api from '../../App/api';
// начальный state
const initialState: State = { services: [], error: undefined };

export const loadServices = createAsyncThunk(
  'allservices',
  () => 
  api.loadService()
)

// обявляем slice с именем “counter”
const servisSlice = createSlice({
 name: 'table',
 initialState,
 reducers: {},
 extraReducers: (builder) => {
  builder.addCase(loadServices.fulfilled, (state, action) => {
      state.services = action.payload;
  })
  .addCase(loadServices.rejected, (state, action) => {
    // показываем как меняется state если загрузка прошла успешно
    state.error = action.error.message;
  });
 }
});
// RTK создаёт action creators для каждого кейса редьюсера, экспортируем их
// export const { plus, minus } = createSlice.actions;
// экспортом по умолчанию будет reducer

export default servisSlice.reducer;