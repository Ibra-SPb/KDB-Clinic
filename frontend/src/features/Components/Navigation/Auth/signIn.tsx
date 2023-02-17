import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const style = {
	// flexgrow: 1,
	marginRight: 2,
	marginLeft: 15,
	borderRadius: 1,
};
export default function SignInButton() {
	return (
		<Stack
			direction='row'
			sx={style}>
			<Button variant='contained'>Sign In</Button>
		</Stack>
	);
}
