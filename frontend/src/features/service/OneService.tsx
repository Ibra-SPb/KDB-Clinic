import React from 'react';
import { NavLink } from 'react-router-dom';
import { Service } from './Type/type';
import './OneServiceStyle.scss';

function OneService({ oneService }: { oneService: Service }): JSX.Element {
  return (
    <div className="doctorDIv">
      <NavLink className="navlink" to={`/services/:${oneService.id}`}>
        <div className="doctorImg">
          <img className="photo" src={oneService.img} alt="doctor_image" />
        </div>
        <div className="doctorInfo">
          <div className="oneDoctorName">{oneService.title}</div>

          <div>{oneService.price}</div>

          <p className="moreInfo">подробная информация</p>
        </div>
      </NavLink>
    </div>
  );
}

export default OneService;
