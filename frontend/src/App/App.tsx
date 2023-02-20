import React, { useEffect } from "react";
import AccountMain from "../features/Account/AccountMain";
import * as api from "./api";
import { RootState, useAppDispatch } from "../store";
import Appointment from "../features/Appointment/Appointment";
import { loadVisit } from "../features/Visit/visitSlice";
import { loadTable } from "../features/Appointment/tableSlice";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Service from "../features/service/Service";

import { loadDoctor } from "../features/doctor/doctorSlice";
import Doctor from "../features/doctor/Doctor";
import DoctorInfo from "../features/doctor/doctorInfo";
import Navigation from '../features/Components/Navigation/Navigation';
import Main from '../features/Components/Main/Main';
import { useDispatch, useSelector } from 'react-redux';
import SignUp from '../features/Components/Navigation/Auth/signUp';
import SignIn from '../features/Components/Navigation/Auth/signIn';
import Carousel from '../features/Components/Main/Carousel/carousel';
import { loadService } from '../features/service/serviceSlice';
// import Registration from '../features/Auth/Registration';
// import Authorization from '../features/Auth/Authorization';

function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(loadVisit());
  }, [dispatch]);

  useEffect(() => {
    dispatch(loadTable());
  }, [dispatch]);

  useEffect(() => {
    dispatch(loadService());
  }, []);
  useEffect(() => {
    dispatch(loadDoctor());
  }, []);
  
  //const dispatch = useDispatch();
  //useEffect(() => {
  // api
  //  .loadService()
  //  .then((data) => dispatch({ type: "INIT_SERVICE", payload: data }));
  //}, []);
  //
  //useEffect(() => {
  //api.loadVisits().then((data) =>
  //	dispatch({ type: 'INIT_VISITS', payload: data })
  //);
  //}, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Service />} />
          {/* <Route
						index
						element={<Main />}
					/> */}
          <Route path="/login" element={<SignIn />} />
          <Route path="/registration" element={<SignUp />} />
          {/* <main>
						<Main />
					</main> */}
        </Route>
        <Route path="/doctors" element={<Doctor />} />
        <Route path="/doctors/:doctorId" element={<DoctorInfo />} />
        <Route path="/appoint" element={<Appointment />} />
      </Routes>
    </div>
  );
}

export default App;
