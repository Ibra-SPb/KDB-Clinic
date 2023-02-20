import React, { useEffect } from 'react';
import * as api from './api';
import { RootState, useAppDispatch } from '../store';
import Appointment from '../features/Appointment/Appointment';
import { loadVisit } from '../features/Visit/visitSlice';
import { loadTable } from '../features/Appointment/tableSlice';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Service from '../features/service/Service';
import { loadDoctor } from '../features/doctor/doctorSlice';
import Doctor from '../features/doctor/Doctor';
import DoctorInfo from '../features/doctor/doctorInfo';
import { loadService } from '../features/service/serviceSlice';

import Navbar from '../features/Navbar/Navbar';
import NotFound from '../features/NotFound/NotFound';
import Registration from '../features/auth/Registration';
import Authorization from '../features/auth/Authorization';
import { checkUser } from '../features/auth/authSlice';
import Main from '../features/Components/Main/Main';
import { useSelector } from 'react-redux';
import AccountMain from '../features/Account/AccountMain';
import Profile from '../features/Account/Profile';
import AccountVisits from '../features/Account/AccountVisits';
import Footer from '../features/Components/Footer/Footer';

function App() {
	const { user } = useSelector((store: RootState) => store.userState);
	console.log(user);

	const dispatch = useAppDispatch();
	useEffect(() => {
		dispatch(loadVisit());
	}, []);

	useEffect(() => {
		dispatch(loadTable());
	}, []);

	useEffect(() => {
		dispatch(loadService());
	}, []);
	useEffect(() => {
		dispatch(loadDoctor());
	}, []);
	useEffect(() => {
		dispatch(checkUser());
	}, []);
	return (
		<div className='App'>
			<Routes>
				<Route
					path='/'
					element={<Navbar />}>
					<Route
						index
						element={<Main />}
					/>
					<Route
						path='/services'
						element={<Service />}
					/>
					<Route
						path='/enterPage'
						element={<Authorization />}
					/>
					<Route
						path='/enterPage/registration'
						element={<Registration />}
					/>
					<Route
						path='/doctors'
						element={<Doctor />}
					/>
					<Route
						path='/doctors/:doctorId'
						element={<DoctorInfo />}
					/>
					<Route
						path='/appoint'
						element={<Appointment />}
					/>
					<Route
						path='*'
						element={<NotFound />}
					/>
					<Route
						path='/account'
						element={<AccountMain />}
					/>
					<Route
						path='/account/profile'
						element={<Profile />}
					/>
					<Route
						path='/account/visits'
						element={<AccountVisits />}
					/>
				</Route>
				<Route
					path='/services'
					element={<Service />}
				/>
				{/* <Route
					index
					element={<Footer />}></Route> */}
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
