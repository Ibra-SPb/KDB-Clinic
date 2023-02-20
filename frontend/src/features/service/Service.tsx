import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import Footer from '../Components/Footer/Footer';
import OneService from './OneService';

const Service = () => {
  const { services } = useSelector((store: RootState) => store.serviceState);

  return (
    <div className="allDoctor__container">
      {services.map((el) => (
        <OneService key={el.id} oneService={el} />
      ))}
    </div>
  );
};

export default Service;
