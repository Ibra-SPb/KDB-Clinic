import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { RootState } from '../../store';
import './DoctorInfo.scss';

function DoctorInfo(): JSX.Element {
  const { doctorId } = useParams();

  const navigation = useNavigate();
  const { doctors } = useSelector((store: RootState) => store.doctorState);
  const doc = doctors.find((doctor) => doctor.id === Number(doctorId?.[1]));

  return (
    <div>
      {doc && (
        <div className="allDoctor__container container">
          <div className="doctor__Item">
            <div className="doctor__Photo">
              <img className="doctor__Img" src={doc.img} alt="doctor_image" />
            </div>
            <div className="doctor__Info">
              <div className="oneDoctorName">{doc.name}</div>

              <div className="oneDoctor_info">
                {doc.info}
                <div className="oneDoctor_specific">
                  Направлениe: {doc.specific}
                </div>
                <button
                  type="button"
                  className="btnDoctors"
                  onClick={() => navigation('/doctors')}
                >
                  &#10226;
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
export default DoctorInfo;
