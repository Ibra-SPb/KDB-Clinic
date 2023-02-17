import React from 'react';
import { AppBar, Container, Toolbar, Typography } from '@mui/material';
import './NavigationStyle.css';
import BasicSelect from './MenuButtons/BasicSelect';
import SignInButton from './Auth/signIn';
import SignUpButton from './Auth/signUp';
import About from './MenuButtons/about';
import Doctors from './MenuButtons/doctors';
import LogoutButton from './Auth/logout';
import '../Navigation/NavigationStyle.css';

const style = {
	flexgrow: 1,
	marginRight: 1,
	background: 'green',
};

function Navigation(): JSX.Element {
	return (
		<AppBar position='fixed'>
			<Container
				sx={style}
				className='navigation'>
				<Toolbar>
					<Typography
						variant='h6'
						className='kdn_logo'>
						KDN Clinic
					</Typography>
					<BasicSelect />
					<Doctors />
					<About />
					<SignInButton />
					<SignUpButton />
				</Toolbar>
			</Container>
		</AppBar>
	);
}

export default Navigation;
