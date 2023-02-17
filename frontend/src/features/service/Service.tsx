import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import OneService from "./OneService";

const Service = () => {
  const { services } = useSelector((store: RootState) => store.serviceState);
  // console.log(services);
  
  return (
    <div>
      {services.map((el) => (
        <OneService key={el.id} oneService={el} />
      ))}
    </div>
  );
};

export default Service;
