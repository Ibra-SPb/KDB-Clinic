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
import '../Navigation/NavigationStyle.css';
import BasicSelect from './BasicSelect/BasicSelect';

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
					<div className='logreg_buttons'>
						<Box mr={3}>
							<Button variant='outlined'>
								<div className='signInButton'>Log In</div>
							</Button>
						</Box>
						<Button variant='contained'>
							<div className='signUpButton'>Sign Up</div>
						</Button>
					</div>
				</Toolbar>
			</Container>
		</AppBar>
	);
}

export default Navigation;
