import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import OneService from './OneService';

function Service(): JSX.Element {
  const { services } = useSelector((store: RootState) => store.serviceState);

  return (
    <div className="allDoctor__container">
      {services.map((el) => (
        <OneService key={el.id} oneService={el} />
      ))}
    </div>
  );
}

export default Service;
