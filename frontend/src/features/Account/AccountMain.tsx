import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAppDispatch } from '../../store';
import { logoutUser } from '../auth/authSlice';
import AccountHeader from './AccountHeader';

export default function AccountMain() {
  const dispatch = useAppDispatch();

  const handlelogout = (): void => {
    dispatch(logoutUser());
  };

  return (
    <div className="account__container">
      <AccountHeader />
      <div className="account__main">
        <NavLink to="/account/profile">Профиль</NavLink>
        <NavLink to="/account/visits">Приёмы</NavLink>
        <NavLink to="/account/results">Результаты</NavLink>
        <NavLink className="nav__list-item" to="/logout">
          <button type="button" onClick={handlelogout}>
            Logout
          </button>
        </NavLink>
      </div>
    </div>
  );
}
