import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, NavLink } from 'react-router-dom';
import { RootState, useAppDispatch } from '../../store';
import { loginUser } from './authSlice';
import './AuthorizationStyles.scss';

function Authorization(): JSX.Element {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const nav = useNavigate();
  const dispatch = useAppDispatch();

  const { user } = useSelector((store: RootState) => store.userState);

  useEffect(() => {
    if ('email' in user) {
      nav('/');
    }
  }, [user]);

  const login = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    dispatch(loginUser({ email, password }));
  };

  return (
    <div className="form__container input_div_form">
      <form onSubmit={login} className="input_form">
        <div className="mb-3 input_form">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Введите вашу почту
          </label>
          <input
            type="email"
            className="form-control input_login"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Введите пароль
          </label>
          <input
            type="password"
            className="form-control input_login"
            id="exampleInputPassword1"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="log_btn">
          Войти
        </button>
      </form>
      <span>или</span>
      <NavLink className="nav__list-item" to="/enterPage/registration">
        <button type="button" className="reg_btn">
          Зарегистрироваться
        </button>
      </NavLink>
    </div>
  );
}

export default Authorization;
