import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const style = {
	colortext: 'white',
	flexgrow: 1,
	marginRight: 1,
	background: 'white',
	borderRadius: 1,
};
export default function About() {
	return (
		<Stack
			spacing={2}
			direction='row'
			sx={style}>
			<Button variant='text'>О нас</Button>
		</Stack>
	);
}
