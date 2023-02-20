import React from 'react';
// import { useSelector } from 'react-redux';
import './Account.scss';

export default function AccountVisits(): JSX.Element {
  return (
    // Условный рендеринг
    <div className="visits__container">
      <h3 className="visits__title">Приёмы</h3>
      <div className="visits__body">
        <div className="visits__main">
          {/* <span>Приемов нет</span>
          <button type="button" className="account__appointment">
            Записаться
          </button> */}
        </div>
        <div className='visits__table'>
          <table>
            <tr className='visits__table__head'>
              <th>Врач</th>
              <th>Услуга</th>
              <th>Дата приёма</th>
            </tr>
            <tr>
              <td>Какой-то врач</td>
              <td>Какая-то услуга</td>
              <td>Какая-то дата</td>
            </tr>
            <tr>
              <td>Какой-то врач</td>
              <td>Какая-то услуга</td>
              <td>Какая-то дата</td>
            </tr>
            <tr>
              <td>Какой-то врач</td>
              <td>Какая-то услуга</td>
              <td>Какая-то дата</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
}
