import { Container, Grid, Paper } from '@mui/material';
import React from 'react';
import Carousel from './Carousel/carousel';

function Main(): JSX.Element {
	return (
		<>
			<div className='container'>
				<Carousel />
			</div>
		</>
	);
}

export default Main;
