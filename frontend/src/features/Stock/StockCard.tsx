import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { RootState } from '../../store';

function StockCard(): JSX.Element {
  const nav = useNavigate();

  const { stocks } = useSelector((store: RootState) => store.stockState);

  return (
    <div className="stockContainer">
      {stocks.map((stock) => (
          <div className="stockCard">
            <p>{stock.title}</p>
          </div>
        )
        )}
    </div>
  );
}

export default StockCard;
