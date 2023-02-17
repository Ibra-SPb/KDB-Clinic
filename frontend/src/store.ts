import { createStore, combineReducers } from 'redux';
import { userReducer } from './features/auth/userReduser';
import { visitReducer } from './features/Appointment/visitReducer'

const store = createStore(combineReducers({ userState: userReducer, visitState: visitReducer}));

export default store;

export type RootState = ReturnType<typeof store.getState>;