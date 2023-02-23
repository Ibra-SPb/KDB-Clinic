import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { RootState } from '../../store';
import './Account.scss';

export default function AccountVisits(): JSX.Element {
  const { userVisits } = useSelector((store: RootState) => store.visitState);
  console.log(userVisits);

  return (
    // Условный рендеринг
    <div className="visits__container">
      <h3 className="visits__title">Приёмы</h3>
      <div className="visits__body">
        <div className="visits__main">
          <span>Приемов нет</span>
          <button type="button" className="account__appointment">
            <NavLink to="/appoint">Записаться</NavLink>
          </button>
        </div>
        <div className="visits__table">
          {userVisits.map((visit) => (
            <div key={visit.id}>
              {/* <p>{visit.date}</p> */}
              <p>{visit.time}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
