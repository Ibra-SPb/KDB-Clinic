import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RootState } from '../../store';
import OneDoctor from './OneDoctor';
import './Doctorstyle.scss';

function Doctor(): JSX.Element {
  const { doctors } = useSelector((store: RootState) => store.doctorState);
  const navigation = useNavigate();
  return (
    <>
      <div className="allDoctor__container container">
        {doctors.map((el) => (
          <OneDoctor key={el.id} oneDoctor={el} />
        ))}
      </div>
      <button onClick={() => navigation(-1)} type="button">
        Вернуться на главную
      </button>
    </>
  );
}

export default Doctor;
