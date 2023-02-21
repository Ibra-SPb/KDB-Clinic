import React from 'react';
import { NavLink } from 'react-router-dom';
import { Doctor } from './Type/type';

function OneDoctor({ oneDoctor }: { oneDoctor: Doctor }): JSX.Element {
  return (
    <div className="doctorDIv">
      <div className="doctorImg">
        <img className="photo" src={oneDoctor.img} alt="doctor_image" />
      </div>
      <div className="doctorInfo">
        <div className="oneDoctorName">{oneDoctor.name}</div>
        <p className="oneDoctorScecific">{oneDoctor.specific}</p>
        <NavLink to={`/doctors/:${oneDoctor.id}`}>
          <p className="oneDoctorMore">подробная информация</p>
        </NavLink>
      </div>
    </div>
  );
}

export default OneDoctor;
