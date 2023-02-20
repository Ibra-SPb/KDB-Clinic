import { log } from 'console';
import React from 'react';
import { useSelector } from 'react-redux';
import { Route, useNavigate } from 'react-router-dom';
import { RootState } from '../../store';
import OneDoctor from './OneDoctor';
import './Doctorstyle.scss';
import Footer from '../Components/Footer/Footer';

const Doctor = () => {
	const { doctors } = useSelector((store: RootState) => store.doctorState);
	const navigation = useNavigate();
	return (
		<>
			<div className='allDoctor__container container'>
				{doctors.map((el) => (
					<OneDoctor
						key={el.id}
						oneDoctor={el}
					/>
				))}
			</div>
			<button
				onClick={() => navigation(-1)}
				type='button'>
				Вернуться на главную
			</button>
		</>
	);
};

export default Doctor;
