import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import {
	AppBar,
	Button,
	Container,
	Grid,
	IconButton,
	Paper,
	Toolbar,
	Typography,
} from '@mui/material';
import MenuItem from '@mui/icons-material/Menu';
import { makeStyles, ThemeProvider } from '@mui/material/styles';
import { Box } from '@mui/system';
import { Theme } from '../features/Type';
import Registration from '../features/Auth/Registration';
import Authorization from '../features/Auth/Authorization';

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
		<div className="App">
			<Routes>
		// <ThemeProvider theme={undefined}>
		<>
			<AppBar position='fixed'>
				<Container fixed>
					<Toolbar>
						<IconButton
							edge='start'
							// className={classes.menuButton}
							color='inherit'
							aria-label='menu'>
							<MenuItem />
						</IconButton>
						<Typography
							variant='h6'
							// className={classes.title}
						>
							KDN Clinic
						</Typography>
						<Box mr={3}>
							<Button
								color='inherit'
								variant='outlined'>
								Log In
							</Button>
						</Box>
						<Button
							variant='contained'
							color='secondary'>
							Sign Up
						</Button>
					</Toolbar>
				</Container>
			</AppBar>

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
		</>
		</Routes>
		</div>
	);
}

export default App;
