import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Container, Grid, Paper } from '@mui/material';
// import MenuItem from '@mui/icons-material/Menu';
import { makeStyles, ThemeProvider } from '@mui/material/styles';
import { Box } from '@mui/system';
import { Theme } from '../features/Type';
import Navigation from '../features/Main/Navigation/Navigation';
// import Registration from '../features/Auth/Registration';
// import Authorization from '../features/Auth/Authorization';

// const useStyles = makeStyles((theme: Theme) => ({
// 	root: {
// 		flexGrow: 1,
// 	},
// 	menuButton: {
// 		marginRight: theme.spacing(1),
// 	},
// 	title: {
// 		flexGrow: 1,
// 	},
// }));

function App() {
	// const classes = useStyles();
	return (
		<div className='App'>
			{/* <Routes> */}
			{/* // <ThemeProvider theme={undefined}> */}
			<Navigation />
			<main>
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
			</main>
			{/* </ThemeProvider> */}

			{/* </Routes> */}
		</div>
	);
}

export default App;
