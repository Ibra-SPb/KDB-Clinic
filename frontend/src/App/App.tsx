import React, { useEffect } from 'react';
import AccountMain from '../features/Account/AccountMain';

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
	const dispatch = useDispatch()
  useEffect(() => {
    api.loadVisits().then((data) => dispatch({ type: 'INIT_VISITS', payload: data }));
  }, []);

	const {visits} = useSelector((store:RootState)=>store.visitState)
	console.log(visits)

	return (
		<div className='App'>
			{/* <Routes> */}
			<Navigation />
			<main>
				<Main />
			</main>
			{/* </Routes> */}
		</div>
	);
}

export default App;
