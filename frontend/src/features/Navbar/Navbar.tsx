/* eslint-disable react/react-in-jsx-scope */
import { NavLink, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../store';
import { logoutUser } from '../auth/authSlice';
import './NavBarStyles.scss';

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
            <NavLink to="/">
              <a className="navbar-brand" href="#">
                KDN Clinic
              </a>
            </NavLink>
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
              <ul className="navbar-nav mr-auto mb-2 mb-lg-0">
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle active"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Услуги
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
                    <a className="nav-link active" aria-current="page" href="#">
                      Врачи
                    </a>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/contacts">
                    <a className="nav-link active" href="#">
                      О нас
                    </a>
                  </NavLink>
                </li>
                {'email' in user ? (
                  <li className="nav-item auth_btns">
                    <NavLink className="nav__list-item" to="/enterPage">
                      <a
                        onClick={handlelogout}
                        className="nav-link active"
                        href="#"
                      >
                        Выйти
                      </a>
                    </NavLink>
                  </li>
                ) : (
                  <li className="nav-item auth_btns">
                    <NavLink className="nav__list-item" to="/enterPage">
                      <a className="nav-link active" href="#">
                        Личный кабинет
                      </a>
                    </NavLink>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <Outlet />
    </>
  );
}

export default Navbar;
