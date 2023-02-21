import React from 'react';
// import Carousel from './Carousel/Carousel';
import Service from '../../service/Service';
import Footer from '../Footer/Footer';
import Carousel from './Carousel/carousel';

function Main(): JSX.Element {
	return (
		<div>
			<div className='container_carousel'>
				<Carousel />
			</div>
			<div className='container main_container'>
				<Service />
			</div>
			<Footer />
		</div>
	);
}

export default Main;
