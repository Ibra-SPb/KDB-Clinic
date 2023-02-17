import { Container, Grid, Paper } from '@mui/material';
import React from 'react';

function Main(): JSX.Element {
	return (
		<Paper style={{ backgroundColor: 'blue' }}>
			<Container fixed>
				<Grid container>
					<Grid
						item
						md={3}></Grid>
					<div>{/* здесь должна быть карусель */}</div>
				</Grid>
			</Container>
		</Paper>
	);
}

export default Main;
