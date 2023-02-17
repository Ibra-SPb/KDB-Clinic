import React from 'react';
import {
	AppBar,
	Box,
	Button,
	Container,
	IconButton,
	Toolbar,
	Typography,
} from '@mui/material';

function Navigation(): JSX.Element {
	return (
		<AppBar position='fixed'>
			<Container fixed>
				<Toolbar>
					<IconButton
						edge='start'
						// className={classes.menuButton}
						color='inherit'
						aria-label='menu'>
						{/* <MenuItem /> */}
					</IconButton>
					<Typography variant='h6'>KDN Clinic</Typography>
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
	);
}

export default Navigation;
