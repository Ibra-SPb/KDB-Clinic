import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const style = {
	fontColor: 'white',
	flexgrow: 1,
	marginRight: 1,
	background: 'white',
	borderRadius: 1,
};
export default function SignUpButton() {
	return (
		<Stack
			spacing={2}
			direction='row'
			sx={style}>
			<Button variant='outlined'>Sign Up</Button>
		</Stack>
	);
}
