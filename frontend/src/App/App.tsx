import React from 'react';
import './App.css';
import {
	AppBar,
	Button,
	Container,
	IconButton,
	Toolbar,
	Typography,
} from '@mui/material';
import MenuItem from '@mui/icons-material/Menu';
import { makeStyles } from '@mui/material/styles';
import { Box } from '@mui/system';
import { Theme } from '../features/Type';

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
	);
}

export default App;
