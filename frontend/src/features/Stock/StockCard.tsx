import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { RootState } from '../../store';

function StockCard(): JSX.Element {
  const nav = useNavigate();
  const id = useParams();

  const { stocks } = useSelector((store: RootState) => store.stockState);

  return (
    <div className="stockContainer">
      {stocks.filter((stock) => stock.id === Number(id.id)).map((stock) => (
      <div>
        <h1>{stock.title}</h1>
        <div className="imgDesc">
          <img src={stock.img} alt="stockImg" />
          <p>{stock.description}</p>
        </div>
      </div>
    )
      )}
    <div onClick={() => nav(-1)}>Вернуться назад</div>
    </div>
  );
}

export default StockCard;
