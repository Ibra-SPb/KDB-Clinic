import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Navigate, NavLink } from 'react-router-dom';

const style = {
	fontColor: 'white',
	flexgrow: 1,
	marginRight: 1,
	background: 'white',
	borderRadius: 1,
};

const fontStyle = {
	fontSize: 10,
	background: 'white',
	color: 'orange',
	borderColor: 'orange',
};
export default function SignUpButton() {
	return (
		<>
			<NavLink to='/registration'>
				<Stack
					spacing={2}
					direction='row'
					sx={style}>
					<Button
						variant='outlined'
						sx={fontStyle}>
						Sign Up
					</Button>
				</Stack>
			</NavLink>
		</>
	);
}
