import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { RootState } from '../../store';
import './stock.css';

function Stock(): JSX.Element {
  const nav = useNavigate();

  const { stocks } = useSelector((store: RootState) => store.stockState);

  return (
    <div>
      <div className="stockContainer">
      <h1>Действующие акции</h1>
        {stocks.map((stock) => (
          <div className="stockCard" onClick={() => nav(`/stocks/${stock.id}`)}>
            <p>{stock.title}</p>
          </div>
        )
        )}
      </div>
    </div>
  );
}

export default Stock;
