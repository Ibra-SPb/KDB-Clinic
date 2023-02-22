import React from 'react';
import Service from '../../service/Service';
import Carousel from './Carousel/carousel';

function Main(): JSX.Element {
  return (
    <div className="main_page_wrapper">
      <div className="container_carousel">
        <Carousel />
      </div>
      <div className="container main_container">
        <Service />
      </div>
    </div>
  );
}

export default Main;
