import React, { useEffect } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
// import { Theme } from '../features/Type';
import * as api from './api';
import { useDispatch } from 'react-redux';

import Navbar from '../features/Navbar/Navbar';
import RegistrationPage from '../features/auth/RegistrationPage';
import MainPage from '../features/MainPage/MainPage';
import NotFound from '../features/NotFound/NotFound';
import Registration from '../features/auth/Registration';
import Authorization from '../features/auth/Authorization';



function App(): JSX.Element {
	const dispatch = useDispatch();

// useEffect(()=>{
// 	api
// 	.getUsers()
// 	.then((data)=> dispatch({type: 'INIT_USERS', payload: data}))
// },[dispatch]);

// useEffect(()=>{
// 	api
// 	.checkUser()
// 	.then((data)=> dispatch({type:'LOG_USER', payload:data}))
// },[dispatch])




	return (
		<div className="App">
		<Routes>
		  <Route path="/" element={<Navbar />}>
			<Route index element={<MainPage />} />
			<Route path="/enterPage" element={<Authorization />} />
			<Route path="/enterPage/registration" element={<Registration />} />

			<Route path="*" element={<NotFound />} />
		  </Route>
		</Routes>
	  </div>


	);
}

export default App;
