// features/counter/counterSlice.ts
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { State } from "./Types/types";
import * as api from "../../App/api";
// начальный state
const initialState: State = { service_doctors: [], error: undefined };

export const loadTable = createAsyncThunk("alltables", () => api.loadTables());

// обявляем slice с именем “counter”
const tableSlice = createSlice({
  name: "table",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadTable.fulfilled, (state, action) => {
        state.service_doctors = action.payload;
      })
      .addCase(loadTable.rejected, (state, action) => {
        // показываем как меняется state если загрузка прошла успешно
        state.error = action.error.message;
      });
  },
});
// RTK создаёт action creators для каждого кейса редьюсера, экспортируем их
// export const { plus, minus } = createSlice.actions;
// экспортом по умолчанию будет reducer

export default tableSlice.reducer;
