import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function SignUpButton() {
	return (
		<Stack
			spacing={2}
			direction='row'>
			<Button variant='outlined'>Sign Up</Button>
		</Stack>
	);
}
