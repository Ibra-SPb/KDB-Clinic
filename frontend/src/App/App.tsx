import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import {
	AppBar,
	Button,
	Container,
	Grid,
	IconButton,
	Paper,
	Toolbar,
	Typography,
} from '@mui/material';
import MenuItem from '@mui/icons-material/Menu';
import { makeStyles, ThemeProvider } from '@mui/material/styles';
import { Box } from '@mui/system';
import { Theme } from '../features/Type';
import * as api from './api';

import Navbar from '../features/Navbar/Navbar';
import MainPage from '../features/MainPage/MainPage';
import NotFound from '../features/NotFound/NotFound';
import Registration from '../features/auth/Registration';
import Authorization from '../features/auth/Authorization';
import Logout from '../features/auth/Logout';


function App(): JSX.Element {
	const dispatch = useDispatch();

useEffect(()=>{
	api
	.getUsers()
	.then((data)=> dispatch({type: 'INIT_USERS', payload: data}))
},[dispatch]);

useEffect(()=>{
	api
	.checkUser()
	.then((data)=> dispatch({type:'LOG_USER', payload:data}))
},[dispatch])




	return (
		<div className="App">
		<Routes>
		  <Route path="/" element={<Navbar />}>
			<Route index element={<MainPage />} />
			<Route path="/registration" element={<Registration />} />
			<Route path="/login" element={<Authorization />} />
			<Route path="/logout" element={<Logout />} />
			<Route path="*" element={<NotFound />} />
		  </Route>
		</Routes>
	  </div>

	);
}

export default App;
