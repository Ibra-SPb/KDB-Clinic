import React, { useEffect } from 'react';
import AccountMain from '../features/Account/AccountMain';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Container, Grid, Paper } from '@mui/material';
// import MenuItem from '@mui/icons-material/Menu';
import { makeStyles, ThemeProvider } from '@mui/material/styles';
import { Box } from '@mui/system';
// import { Theme } from '../features/Type';
import * as api from './api';
import { useDispatch } from 'react-redux';

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

// import { Theme } from '../features/Components/Types/Type';
// import Navigation from '../features/Components/Navigation/Navigation';
// import Main from '../features/Components/Main/Main';
// import { useDispatch, useSelector } from 'react-redux';
// import { RootState } from '../store';
// import SignUp from '../features/Components/Navigation/Auth/signUp';
// import SignIn from '../features/Components/Navigation/Auth/signIn';

// // import Registration from '../features/Auth/Registration';
// // import Authorization from '../features/Auth/Authorization';

// function App() {
// 	// const classes = useStyles();
// 	const dispatch = useDispatch();
// 	useEffect(() => {
// 		api.loadVisits().then((data) =>
// 			dispatch({ type: 'INIT_VISITS', payload: data })
// 		);
// 	}, []);

// 	const { visits } = useSelector((store: RootState) => store.visitState);
// 	console.log(visits);

// 	return (
// 		<div className='App'>
// 			<Routes>
// 				<Route
// 					path='/'
// 					element={<Navigation />}>
// 					{/* <Route
// 						index
// 						element={<Main />}
// 					/> */}
// 					<Route
// 						path='/login'
// 						element={<SignIn />}
// 					/>
// 					<Route
// 						path='/registration'
// 						element={<SignUp />}
// 					/>
// 					{/* <main>
// 						<Main />
// 					</main> */}
// 				</Route>
// 			</Routes>
// 		</div>
	);
}

export default App;
