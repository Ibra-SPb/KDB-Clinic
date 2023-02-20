import React, { useState } from "react";
import { useSelector } from "react-redux";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { RootState } from "../../store";
import { Service } from "./Type/type";

const ServiceInfo = (): JSX.Element => {
  const { serviceId } = useParams();

  const navigation = useNavigate();
  const { services } = useSelector((store: RootState) => store.serviceState);
  const serv = services.find(
    (service) => service.id === Number(serviceId?.[1])
  );

  return (
    <>
      {serv && (
        <div className="allDoctor__container container">
          <div className="doctor__Item">
            <div className="doctor__Photo">
              <img className="doctor__Img" src={serv.img}></img>
            </div>
            <div className="doctor__Info">
              <div>{serv.title}</div>
              <div>{serv.body}</div>
              <div>{serv.price}</div>
              <button onClick={() => navigation(-1)} type="button">
                На главную
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default ServiceInfo;
