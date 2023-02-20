import React, { useState } from "react";
import { useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import { RootState } from "../../store";
import { Doctor } from "./Type/type";

const OneDoctor = ({ oneDoctor }: { oneDoctor: Doctor }) => {
  const { doctorId } = useParams();
  console.log(doctorId);

  return (
    <div className={`doctorDIv`}>
      <div className="doctorImg">
        <img className="photo" src={oneDoctor.img}></img>
      </div>
      {/* <div className="random"> */}
      <div className="doctorInfo">
      <div className="random">{oneDoctor.name}</div>
      <p className="random2">{oneDoctor.specific}</p>
      {/* </div> */}
      <NavLink to={`/doctors/:${oneDoctor.id}`}>
        <p className="random3">подробная информация</p>
      </NavLink>
      </div>
    </div>
  );
};

export default OneDoctor;
