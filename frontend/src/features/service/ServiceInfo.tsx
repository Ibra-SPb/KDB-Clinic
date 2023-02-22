import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { RootState } from '../../store';

function ServiceInfo(): JSX.Element {
  const { serviceId } = useParams();

  const navigation = useNavigate();
  const { services } = useSelector((store: RootState) => store.serviceState);
  const serv = services.find(
    (service) => service.id === Number(serviceId?.[1])
  );

  return (
    <div>
      {serv && (
        <div className="allDoctor__container container">
          <div className="doctor__Item">
            <div className="doctor__Photo">
              <img className="doctor__Img" src={serv.img} alt="doctor_image" />
            </div>
            <div className="doctor__Info">
              <div className="oneServiceTitle">{serv.title}</div>
              <div>{serv.body}</div>
              <div>{serv.price}</div>
              <button
                type="button"
                className="btnDoctors"
                onClick={() => navigation('/')}
              >
                &#10226;
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
export default ServiceInfo;
