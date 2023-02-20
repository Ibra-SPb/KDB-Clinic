import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import tableSlice from './features/Appointment/tableSlice';
import servisSlice from './features/service/servisSlice';
import visitSlice from './features/Visit/visitSlice';
// Слайсы - это отдельные модули нашего приложения. У каждого слайса - свой редьюсер.
const store = configureStore({
 // теперь функция combineReducers не нужна
 reducer: {
   visitState: visitSlice,
   tableState: tableSlice,
   serviceState: servisSlice
 },
});
// для правильной типизации будем использовать useAppDispatch вместо
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;