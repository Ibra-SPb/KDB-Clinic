/* eslint-disable react/react-in-jsx-scope */
import { NavLink, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../store';
import { logoutUser } from '../auth/authSlice';
import './NavBarStyles.scss';
import AccountHeader from '../Account/AccountHeader';

function Navbar(): JSX.Element {
  const { user } = useSelector((store: RootState) => store.userState);

  const dispatch = useAppDispatch();

  const handlelogout = (): void => {
    dispatch(logoutUser());
  };

  return (
    <>
      <div className="navbar_btn">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <div>
              <NavLink to="/">
                <a className="navbar-brand" href="#">
                  <span className="btn-one">KDB Clinic</span>
                </a>
              </NavLink>
            </div>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse navbar-brand"
              id="navbarSupportedContent"
            >
              <div className="navbar-nav mr-auto mb-2 mb-lg-0 navbar_center">
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle active navbar_text "
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <span className="btn-one">УСЛУГИ</span>
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <NavLink to="/:1">
                        <a className="dropdown-item" href="#">
                          Неврология
                        </a>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/:2">
                        <a className="dropdown-item" href="#">
                          Акупунктура
                        </a>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/:3">
                        <a className="dropdown-item" href="#">
                          Лечебный массаж
                        </a>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/:4">
                        <a className="dropdown-item" href="#">
                          Физиотерапия
                        </a>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/:5">
                        <a className="dropdown-item" href="#">
                          Косметология
                        </a>
                      </NavLink>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <NavLink to="/doctors">
                    <a
                      className="nav-link active navbar_text"
                      aria-current="page"
                      href="#"
                    >
                      <span className="btn-three btn-one">ВРАЧИ</span>
                    </a>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/contacts">
                    <a className="nav-link active navbar_text" href="#">
                      <span className="btn-one">О НАС</span>
                    </a>
                  </NavLink>
                </li>
                {'email' in user ? (
                  <>
                    <NavLink to="/appoint">
                      <AccountHeader />
                    </NavLink>
                    <li className="nav-item auth_btns lk_btn nav_item navbar_text">
                      <NavLink className="nav__list-item" to="/account">
                        <a className="nav-link active lk" href="#">
                          <span className="btn-one lk"> Личный кабинет</span>
                        </a>
                      </NavLink>
                    </li>
                    <li className="nav-item auth_btns quit_btn">
                      <NavLink
                        className="nav__list-item navbar_text"
                        to="/enterPage"
                      >
                        <a
                          onClick={handlelogout}
                          className="nav-link active"
                          href="#"
                        >
                          <span className="btn-one">Выйти</span>
                        </a>
                      </NavLink>
                    </li>
                  </>
                ) : (
                  <li className="nav-item auth_btns">
                    <NavLink className="nav__list-item " to="/enterPage">
                      <a className="nav-link active navbar_text" href="#">
                        <span className="btn-one">Личный кабинет</span>
                      </a>
                    </NavLink>
                  </li>
                )}
              </div>
            </div>
          </div>
        </nav>
      </div>
      <Outlet />
    </>
  );
}

export default Navbar;
