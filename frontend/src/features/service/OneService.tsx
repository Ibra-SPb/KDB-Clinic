import React from 'react';
import { NavLink } from 'react-router-dom';
import { Service } from './Type/type';

function OneService({ oneService }: { oneService: Service }): JSX.Element {
  return (
    <div className="doctorDIv">
      <div className="doctorImg">
        <img className="photo" src={oneService.img} alt="doctor_image" />
      </div>
      <div className="doctorInfo">
        <div className="oneDoctorName">{oneService.title}</div>

        <div>{oneService.price}</div>
        <NavLink className="navlink" to={`/:${oneService.id}`}>
          <p className="random3">подробная информация</p>
        </NavLink>
      </div>
    </div>
  );
}

export default OneService;
