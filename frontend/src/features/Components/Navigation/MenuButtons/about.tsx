import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function About() {
	return (
		<Stack
			spacing={2}
			direction='row'>
			<Button variant='text'>О нас</Button>
		</Stack>
	);
}
