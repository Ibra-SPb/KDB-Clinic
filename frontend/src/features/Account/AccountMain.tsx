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
      <div className="account__body">
        <ul className="account__main">
          <li>
            <NavLink to="/account/profile">
              <a href="#">Профиль</a>
            </NavLink>
          </li>
          <li>
            <NavLink to="/account/visits">
              <a href="#">Приёмы</a>
            </NavLink>
          </li>
          <li>
            <NavLink to="/account/results">
              <a href="#">Результаты</a>
            </NavLink>
          </li>
          {'email' in user && user.name === 'admin' && user.id === 1 && (
            <li>
              <NavLink to="/account/upload">
                <a href="#">Загрузка результатов</a>
              </NavLink>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}
