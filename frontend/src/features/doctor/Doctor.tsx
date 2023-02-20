import { log } from "console";
import React from "react";
import { useSelector } from "react-redux";
import { Route, useNavigate } from "react-router-dom";
import { RootState } from "../../store";
import OneDoctor from "./OneDoctor";

const Doctor = () => {
  const { doctors } = useSelector((store: RootState) => store.doctorState);
  const navigation = useNavigate();
  return (
    <div className="allDoctorDiv">
      {doctors.map((el) => (
        <OneDoctor key={el.id} oneDoctor={el} />
        //   <Route
        //   path="/doctors/:id"
        //   element={<OneDoctor key={el.id} oneDoctor={el} />}
        // />
      ))}
      <button onClick={() => navigation(-1)} type="button">
        Вернуться на главную
      </button>
    </div>
  );
};

export default Doctor;
