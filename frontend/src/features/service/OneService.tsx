import React from 'react';
import { NavLink } from 'react-router-dom';
import { Service } from './Type/type';
import './OneServiceStyle.scss';

function OneService({ oneService }: { oneService: Service }): JSX.Element {
  return (
    <div className="doctorDIv">
      <div className="doctorImg">
        <img className="photo" src={oneService.img} alt="doctor_image" />
      </div>
      <div className="doctorInfo">
        <div className="oneDoctorName">{oneService.title}</div>

        <div>{oneService.price}</div>
        <NavLink to={`/:${oneService.id}`}>
          <p className="main_page_btn">Подробнее</p>
        </NavLink>
      </div>
    </div>
  );
}

export default OneService;
