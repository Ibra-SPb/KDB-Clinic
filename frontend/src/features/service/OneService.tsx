import React from "react";
import { useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import { RootState } from "../../store";
import { Service } from "./Type/type";

const OneService = ({ oneService }: { oneService: Service }) => {
  return (
    <div className="doctorDIv">
      <div className="doctorImg">
        <img className="photo" src={oneService.img}></img>
      </div>
      <div className="doctorInfo">
        <div className="oneDoctorName">{oneService.title}</div>

        <div>{oneService.price}</div>
        <NavLink to={`/:${oneService.id}`}>
          <p className="random3">подробная информация</p>
        </NavLink>
      </div>
    </div>
  );
};

export default OneService;
