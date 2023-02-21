import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, NavLink } from 'react-router-dom';
import { RootState, useAppDispatch } from '../../store';
import { loginUser } from './authSlice';

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
    <div className="form__container">
      <form
        className="form__body"
        style={{ display: 'flex', flexDirection: 'column' }}
        onSubmit={login}
      >
        <label htmlFor="type">Почта</label>
        <input
          id="type"
          name="email"
          type="text"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="img">Пароль</label>
        <input
          id="img"
          name="password"
          type="password"
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit" className="button-color">
          Войти
        </button>
        <p className="error" />
      </form>
      <NavLink className="nav__list-item" to="/enterPage/registration">
        <button type="button">Регистрация</button>
      </NavLink>
    </div>
  );
}

export default Authorization;
