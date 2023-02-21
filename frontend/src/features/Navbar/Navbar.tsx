import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import './NavBarStyles.scss';

function Navbar(): JSX.Element {
  const { user } = useSelector((store: RootState) => store.userState);

  return (
    <div>
      <div className="nav__container">
        <div className="nav__list">
          <div className="KDN_title">
            <NavLink to="/">
              <div>KDN clinic</div>
            </NavLink>
          </div>
          <div className="menu_buttons">
            <div className="KDN_title">
              <NavLink to="/services">
                <button type="button">Услуги</button>
              </NavLink>
            </div>
            <div className="KDN_title">
              <NavLink to="/doctors">
                <button type="button">Врачи</button>
              </NavLink>
            </div>
            <NavLink to="/contacts">
              <div className="KDN_title">Контакты</div>
            </NavLink>
          </div>
          {'email' in user && (
            <div className="lk_style">
              <NavLink className="nav__list-item" to="/account">
                <button type="button">Личный кабинет</button>
              </NavLink>
            </div>
          )}
          {'email' in user ? (
            <NavLink to="/appoint">
              <button type="button" className="account__appointment">
                Записаться на приём
              </button>
            </NavLink>
          ) : (
            <NavLink to="/enterPage">
              <button type="button" className="account__appointment">
                Записаться на приём
              </button>
            </NavLink>
          )}
        </div>
      </div>
      <Outlet />
    </div>
  );
}

export default Navbar;
