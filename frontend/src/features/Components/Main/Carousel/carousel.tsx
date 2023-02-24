import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RootState } from '../../../../store';
import './CarouselStyle.scss';

function Carousel(): JSX.Element {
  const { stocks } = useSelector((store: RootState) => store.stockState);
  const nav = useNavigate();
  return (
    <div
      id="carouselExampleIndicators"
      className="carousel slide wrapper exmpl img"
      data-ride="carousel"
    >
      <ol className="carousel-indicators">
        <li
          data-target="#carouselExampleIndicators"
          data-slide-to="0"
          className="active"
        />
        <li data-target="#carouselExampleIndicators" data-slide-to="1" />
        <li data-target="#carouselExampleIndicators" data-slide-to="2" />
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item active" onClick={() => nav('stocks/1')}>
          <div className="salse">{`${stocks[0]?.title}`} со скидкой 20%</div>
          <img
            src={`${stocks[0]?.img}`}
            className="d-block w-100"
            alt="firstPromo"
          />
        </div>
        <div className="carousel-item" onClick={() => nav('stocks/2')}>
          <div className="salse">{`${stocks[1]?.title}`}</div>
          <img
            src={`${stocks[1]?.img}`}
            className="d-block w-100"
            alt="secondPromo"
          />
        </div>
        <div className="carousel-item" onClick={() => nav('stocks/3')}>
          <div className="salse">{`${stocks[2]?.title}`}</div>
          <img
            src={`${stocks[2]?.img}`}
            className="d-block w-100"
            alt="thirdPromo"
          />
        </div>
      </div>
      <a
        className="carousel-control-prev"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="prev"
      >
        <span
          className="carousel-control-prev-icon"
          aria-hidden="true"
        />
        <span className="visually-hidden">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="next"
      >
        <span
          className="carousel-control-next-icon"
          aria-hidden="true"
        />
        <span className="visually-hidden">Next</span>
      </a>
    </div>
  );
}

export default Carousel;
