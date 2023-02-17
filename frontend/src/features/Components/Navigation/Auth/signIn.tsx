import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';

const style = {
	// flexgrow: 1,
	marginRight: 2,
	marginLeft: 12,
	borderRadius: 1,
};
const fontStyle = {
	fontSize: 10,
	background: 'orange',
};
export default function SignInButton() {
	return (
		<>
			<NavLink to='login'>
				<Stack
					direction='row'
					sx={style}>
					<Button
						variant='contained'
						sx={fontStyle}>
						<div>Sign In</div>
					</Button>
				</Stack>
			</NavLink>
		</>
	);
}
