import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { RootState } from '../../store';
import AccountHeader from './AccountHeader';

export default function AccountMain(): JSX.Element {
  const { user } = useSelector((store: RootState) => store.userState);

  return (
    <div className="account__container">
      <AccountHeader />
      <div className="account__main">
        <NavLink to="/account/profile">
          <button type="button">Профиль</button>
        </NavLink>
        <NavLink to="/account/visits"><button type="button">Приёмы</button></NavLink>
        <NavLink to="/account/results"><button type="button">Результаты</button></NavLink>
        {'email' in user && user.name === 'admin' && user.id === 1 && (
          <NavLink to="/account/upload"><button type="button">Загрузка результатов</button></NavLink>
        )}
      </div>
    </div>
  );
}
