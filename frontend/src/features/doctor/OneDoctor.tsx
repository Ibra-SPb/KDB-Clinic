import React, { useState } from "react";
import { useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import { RootState } from "../../store";
import { Doctor } from "./Type/type";

const OneDoctor = ({ oneDoctor }: { oneDoctor: Doctor }) => {
  return (
    <div className={`doctorDIv`}>
      <div className="doctorImg">
        <img className="photo" src={oneDoctor.img}></img>
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
};

export default OneDoctor;
