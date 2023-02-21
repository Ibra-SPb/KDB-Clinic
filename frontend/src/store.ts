import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import userSlice from './features/auth/authSlice';
import tableSlice from './features/Appointment/tableSlice';
import doctorSlice from './features/doctor/doctorSlice';
import serviceSlice from './features/service/serviceSlice';
import visitSlice from './features/Visit/visitSlice';
import stockSlice from './features/Stock/stockSlice';
// Слайсы - это отдельные модули нашего приложения. У каждого слайса - свой редьюсер.
const store = configureStore({
  // теперь функция combineReducers не нужна
  reducer: {
    visitState: visitSlice,
    tableState: tableSlice,
    serviceState: serviceSlice,
    doctorState: doctorSlice,
    userState: userSlice,
    stockState: stockSlice,
  },
});
// для правильной типизации будем использовать useAppDispatch вместо
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
