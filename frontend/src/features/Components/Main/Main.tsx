import React from 'react';
// import Carousel from './Carousel/Carousel';
import Service from '../../service/Service';
import Footer from '../Footer/Footer';

function Main(): JSX.Element {
	return (
		<div>
			{/* <div className='container'>
				<Carousel />
			</div> */}
			<div className='container main_container'>
				<Service />
			</div>
			<Footer />
		</div>
	);
}

export default Main;
