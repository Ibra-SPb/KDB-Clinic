import {
    createAsyncThunk,
    createSlice,
   } from '@reduxjs/toolkit';
   import * as api from '../../App/api';
import {User, State} from './Types/type'   


const initialState:State = {
    user: {},
    isAuth: false,
    error: undefined,
   };

   export const registrUser = createAsyncThunk(
    'user/registr',
    (action:User) =>
       api.registr(action)
   );

    export const loginUser = createAsyncThunk(
      'user/login',
      (action:User) =>
      api.login(action)
    )
    
    export const logoutUser = createAsyncThunk(
      'user/logout',
     async() =>
      await api.logout()
    )
    export const checkUser = createAsyncThunk(
      'user/session',
      () =>
      api.checkUser()
    )
    
   const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
  
    extraReducers: (builder) => {
      builder
        .addCase(registrUser.fulfilled, (state, action) => {
          if (action.payload.user) {
            state.user = action.payload.user;
          } else {
            state.error = action.payload.error;
          }
        })
        .addCase(loginUser.fulfilled, (state, action) => {          
          if (action.payload.user) {
           state.user = action.payload.user;
          } else {
           state.error = action.payload.error;
       }
      })
        .addCase(logoutUser.fulfilled, (state) => {   
          state.user = {};
      })
        .addCase(checkUser.fulfilled, (state, action) =>{
          state.user = action.payload.user;
      })


        .addCase(registrUser.rejected, (state, action) => {
          state.error = action.error.message;
        })
        .addCase(loginUser.rejected, (state, action) => {
          state.error = action.error.message;
        })
        .addCase(logoutUser.rejected, (state, action) => {
          state.error = action.error.message;
        })
        .addCase(checkUser.rejected, (state, action) => {
          state.error = action.error.message;
        });
    },
   });







  
   export default userSlice.reducer;
  