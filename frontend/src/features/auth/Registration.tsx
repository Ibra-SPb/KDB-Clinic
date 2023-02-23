import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RootState, useAppDispatch } from '../../store';
import { registrUser } from './authSlice';
import './AuthorizationStyles.scss';

function Registration(): JSX.Element {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const nav = useNavigate();
  const dispatch = useAppDispatch();

  const { user, error } = useSelector((store: RootState) => store.userState);
  useEffect(() => {
    if ('name' in user) {
      nav('/');
    }
  }, [user]);

  const registr = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    dispatch(registrUser({ name, email, password, password2, phone }));
  };

  return (
    <div className="form__container input_div_form">
      <form onSubmit={registr} className="input_form">
        <div className="mb-3 input_form">
          <label htmlFor="name" className="form-label">
            Введите ваше имя
          </label>
          <input
            name="name"
            type="text"
            value={name}
            className="form-control input_login"
            id="name"
            placeholder="Иван Иванов"
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-3 input_form">
          <label htmlFor="email" className="form-label">
            Введите вашу почту
          </label>
          <input
            placeholder="example@mail.ru"
            id="email"
            name="email"
            type="text"
            value={email}
            className="form-control input_login"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-3 input_form">
          <label htmlFor="phone" className="form-label">
            Введите ваш телефон
          </label>
          <input
            placeholder="89991234567"
            id="phone"
            name="phone"
            type="text"
            value={phone}
            className="form-control input_login"
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>
        <div className="mb-3 input_form">
          <label htmlFor="password" className="form-label">
            Введите пароль
          </label>
          <input
            id="password"
            placeholder="Ваш пароль"
            name="password"
            type="password"
            value={password}
            className="form-control input_login"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="mb-3 input_form">
          <label htmlFor="password2" className="form-label">
            Повторите пароль
          </label>
          <input
            id="password2"
            placeholder="Повторите пароль"
            name="password2"
            type="password"
            value={password2}
            className="form-control input_login"
            onChange={(e) => setPassword2(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="registr_btn">
          Зарегистрироваться
        </button>
        <p> {error}</p>
      </form>
    </div>
  );
}

export default Registration;
