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

const fontStyle = {
	fontSize: 10,
	background: 'white',
	color: 'orange',
	borderColor: 'orange',
};
export default function Doctors() {
	return (
		<Stack
			spacing={2}
			direction='row'
			sx={style}>
			<Button
				variant='text'
				sx={fontStyle}>
				Врачи
			</Button>
		</Stack>
	);
}
