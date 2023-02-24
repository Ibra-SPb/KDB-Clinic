import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RootState } from '../../store';
import './stock.css';

function Stock(): JSX.Element {
  const nav = useNavigate();

  const { stocks } = useSelector((store: RootState) => store.stockState);

  return (
    <div className="stocksContainer">
      <p>Действующие акции</p>
      <div className="allStocks">
        {stocks.map((stock) => (
          <div className="stockCard" onClick={() => nav(`/stocks/${stock.id}`)}>
            <div><h1>{stock.title}</h1></div>
          </div>
        )
        )}
      </div>
    </div>
  );
}

export default Stock;
