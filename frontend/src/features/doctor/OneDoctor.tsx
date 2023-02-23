import React from "react";
import { NavLink } from "react-router-dom";
import { Doctor } from "./Type/type";

function OneDoctor({ oneDoctor }: { oneDoctor: Doctor }): JSX.Element {
  return (
    <>
      <div className="doctorDIv">
        <NavLink className="navlink" to={`/doctors/:${oneDoctor.id}`}>
          <div className="doctorImg">
            <img className="photo" src={oneDoctor.img} alt="doctor_image" />
          </div>
          <div className="doctorInfo">
            <div className="oneDoctorName">{oneDoctor.name}</div>
            <p className="oneDoctorScecific">{oneDoctor.specific}</p>
            <p className="oneDoctorMore">подробная информация</p>
          </div>
        </NavLink>
      </div>
    </>
  );
}

export default OneDoctor;
