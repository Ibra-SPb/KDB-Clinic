import React, { useEffect } from 'react';
import AccountMain from '../features/Account/AccountMain';
import * as api from './api';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Container, Grid, Paper } from '@mui/material';
// import MenuItem from '@mui/icons-material/Menu';
import { makeStyles, ThemeProvider } from '@mui/material/styles';
import { Box } from '@mui/system';
import { Theme } from '../features/Components/Types/Type';
import Service from "../features/service/Service";
import Navigation from '../features/Components/Navigation/Navigation';
import Main from '../features/Components/Main/Main';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import SignUp from '../features/Components/Navigation/Auth/signUp';
import SignIn from '../features/Components/Navigation/Auth/signIn';

// import Registration from '../features/Auth/Registration';
// import Authorization from '../features/Auth/Authorization';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    api
      .loadService()
      .then((data) => dispatch({ type: "INIT_SERVICE", payload: data }));
  }, []);
  
	useEffect(() => {
		api.loadVisits().then((data) =>
			dispatch({ type: 'INIT_VISITS', payload: data })
		);
	}, []);

	const { visits } = useSelector((store: RootState) => store.visitState);

	return (
		<div className='App'>
			<Routes>
				<Route
					path='/'
					element={<Navigation />}>
					{/* <Route
						index
						element={<Main />}
					/> */}
					<Route
						path='/login'
						element={<SignIn />}
					/>
					<Route
						path='/registration'
						element={<SignUp />}
					/>
					{/* <main>
						<Main />
					</main> */}
				</Route>
			</Routes>
		</div>
	);
}

export default App;
