import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { RootState } from '../../store';
import './Account.scss';

export default function AccountVisits(): JSX.Element {
  const { visits } = useSelector((store: RootState) => store.visitState);
  const { user } = useSelector((store: RootState) => store.userState);

  const nav = useNavigate();
  const a = { ...user };

  const userVisits = visits?.filter((visit) => visit.userId === a.id);

  return (
    <div className="visits__container">
      <h3 className="visits__title">Приёмы</h3>
      <div className="visits__body">
        <div className="visits__main">
          {userVisits && userVisits.length > 0 ? (
            <div>
              {userVisits?.map((visit) => (
                <div key={visit.id}>
                  <p>-------------------------------------</p>
                  <p>{visit.date.toLocaleString()}</p>
                  <p>{visit.time}</p>
                  <p>{visit.doctor?.name}</p>
                  <p>{visit.service?.title}</p>
                  <p>-------------------------------------</p>
                </div>
              ))}
            </div>
          ) : (
            <div>
              <span>Приемов нет</span>
              <button type="button" className="account__appointment">
                <NavLink to="/appoint">Записаться</NavLink>
              </button>
            </div>
          )}
        </div>
        <div className="visits__table" />
      </div>
      <button type="button" className="btn-back" onClick={() => nav(-1)}>Назад</button>
    </div>
  );
}
