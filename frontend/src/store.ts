import { createStore, combineReducers } from 'redux';
import { userReducer } from './features/auth/userReduser';

const store = createStore(combineReducers({ userState: userReducer }));

export default store;

export type RootState = ReturnType<typeof store.getState>;