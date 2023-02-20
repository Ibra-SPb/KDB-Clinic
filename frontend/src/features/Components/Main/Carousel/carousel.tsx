import React from 'react';
import '../../Navigation/NavigationStyle.css';

function Carousel(): JSX.Element {
	return (
		<>
			<div
				id='carouselExampleIndicators'
				className='carousel slide wrapper exmpl img'
				data-ride='carousel'>
				<ol className='carousel-indicators'>
					<li
						data-target='#carouselExampleIndicators'
						data-slide-to='0'
						className='active'></li>
					<li
						data-target='#carouselExampleIndicators'
						data-slide-to='1'></li>
					<li
						data-target='#carouselExampleIndicators'
						data-slide-to='2'></li>
				</ol>
				<div className='carousel-inner'>
					<div className='carousel-item active'>
						<img
							src='https://source.unsplash.com/random'
							className='d-block w-100'
							alt='firstPromo'
						/>
					</div>
					<div className='carousel-item'>
						<img
							src='https://source.unsplash.com/random'
							className='d-block w-100'
							alt='secondPromo'
						/>
					</div>
					<div className='carousel-item'>
						<img
							src='https://source.unsplash.com/random'
							className='d-block w-100'
							alt='thirdPromo'
						/>
					</div>
				</div>
				<a
					className='carousel-control-prev'
					href='#carouselExampleIndicators'
					role='button'
					data-slide='prev'>
					<span
						className='carousel-control-prev-icon'
						aria-hidden='true'></span>
					<span className='visually-hidden'>Previous</span>
				</a>
				<a
					className='carousel-control-next'
					href='#carouselExampleIndicators'
					role='button'
					data-slide='next'>
					<span
						className='carousel-control-next-icon'
						aria-hidden='true'></span>
					<span className='visually-hidden'>Next</span>
				</a>
			</div>
		</>
	);
}

export default Carousel;
