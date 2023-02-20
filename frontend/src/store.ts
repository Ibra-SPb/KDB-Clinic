import {configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import userSlice from './features/auth/authSlice';

const store = configureStore({
    reducer:{
        userState: userSlice,
    }
})

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export type RootState = ReturnType<typeof store.getState>;
export default store;

