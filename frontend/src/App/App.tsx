import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Container, Grid, Paper } from '@mui/material';
// import MenuItem from '@mui/icons-material/Menu';
import { makeStyles, ThemeProvider } from '@mui/material/styles';
import { Box } from '@mui/system';
import { Theme } from '../features/Components/Types/Type';
import Navigation from '../features/Components/Navigation/Navigation';
import Main from '../features/Components/Main/Main';
// import Registration from '../features/Auth/Registration';
// import Authorization from '../features/Auth/Authorization';

function App() {
	// const classes = useStyles();
	return (
		<div className='App'>
			{/* <Routes> */}
			{/* // <ThemeProvider theme={undefined}> */}
			<Navigation />
			<main>
				<Main />
			</main>
			{/* </ThemeProvider> */}

			{/* </Routes> */}
		</div>
	);
}

export default App;
