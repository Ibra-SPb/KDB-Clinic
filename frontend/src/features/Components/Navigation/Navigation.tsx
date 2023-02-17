import React from 'react';
import {
	AppBar,
	Box,
	Button,
	Container,
	createTheme,
	FormControl,
	IconButton,
	InputLabel,
	makeStyles,
	MenuItem,
	Select,
	SelectChangeEvent,
	Toolbar,
	Typography,
} from '@mui/material';
import { Theme } from '../Types/Type';
import { number } from 'yargs';
import './NavigationStyle.css';
import BasicSelect from './BasicSelect/BasicSelect';
import SignInButton from './Auth/signIn';
import SignUpButton from './Auth/signUp';
import About from './MenuButtons/about';
import Doctors from './MenuButtons/doctors';

const style = {
	flexgrow: 1,
	marginRight: 1,
	background: 'black',
};

function Navigation(): JSX.Element {
	return (
		<AppBar position='fixed'>
			<Container
				className='navigation'
				sx={style}>
				<Toolbar>
					<Typography
						variant='h6'
						className='kdn_logo'>
						KDN Clinic
					</Typography>
					<BasicSelect />
					<Doctors />
					<About />
					{/* <div className='logreg_buttons'> */}
					<SignInButton />
					<SignUpButton />
					{/* </div> */}
				</Toolbar>
			</Container>
		</AppBar>
	);
}

export default Navigation;
