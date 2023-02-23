import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import AccountHeader from './AccountHeader';
import AccountResults from './AccountResults';
import AccountUpload from './AccountUpload';
import AccountVisits from './AccountVisits';
import Profile from './Profile';

export default function AccountMain(): JSX.Element {
  const [page, setPage] = useState('Профиль');
  const { user } = useSelector((store: RootState) => store.userState);

  return (
    <div className="account__container">
      <AccountHeader />
      <div className="account__main">
        <button onClick={() => setPage('Профиль')} type="button">
          Профиль
        </button>
        <button onClick={() => setPage('Приёмы')} type="button">Приёмы</button>
        <button onClick={() => setPage('Результаты')} type="button">Результаты</button>
        {'email' in user && user.name === 'admin' && user.id === 1 && (
          <button onClick={() => setPage('Загрузка результатов')} type="button">Загрузка результатов</button>
        )}
      </div>
      <div>{page === 'Профиль' && <Profile />}</div>
      <div>{page === 'Приёмы' && <AccountVisits />}</div>
      <div>{page === 'Результаты' && <AccountResults />}</div>
      <div>{page === 'Загрузка результатов' && <AccountUpload />}</div>
    </div>
  );
}
