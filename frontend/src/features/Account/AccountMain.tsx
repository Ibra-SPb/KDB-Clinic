import React from 'react';
import { NavLink } from 'react-router-dom';
import AccountHeader from './AccountHeader';

export default function AccountMain() {
  return (
    <div className="account__container">
      <AccountHeader />
      <div className="account__main">
        <NavLink to="/account/profile">Профиль</NavLink>
        <NavLink to="/account/visits">Приёмы</NavLink>
        <div>Результаты</div>
        <div>Выйти</div>
      </div>
    </div>
  );
}
