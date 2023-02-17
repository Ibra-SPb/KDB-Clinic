import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

function Navbar(): JSX.Element {
  const { user } = useSelector((store: RootState) => store.userState);
  console.log(user)

  return (
    <>
      <div className="nav__container">
        <ul className="nav__list">
          {!('id' in user) && (
            <>
              <li>
                <NavLink className="nav__list-item" to="/registration">
                  Регистрация
                </NavLink>
              </li>
              <li>
                <NavLink className="nav__list-item" to="/login">
                  Логин
                </NavLink>
              </li>
            </>
          )}
          {'id' in user && (
            <li>
              <NavLink className="nav__list-item" to="/logout">
                LogOut
              </NavLink>
            </li>
          )}
        </ul>
      </div>
      <Outlet />
    </>
  );
}

export default Navbar;