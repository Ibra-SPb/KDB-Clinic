import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import '../NavigationStyle.css';

export default function BasicSelect() {
	const [age, setAge] = React.useState('');

	const handleChange = (event: SelectChangeEvent) => {
		setAge(event.target.value as string);
	};
	const style = {
		color: 'white',
		flexgrow: 1,
		marginRight: 1,
		background: 'white',
		minWidth: 160,
	};
	return (
		<Box
			sx={style}
			// sx={{ minWidth: 160 }}
		>
			<FormControl
				fullWidth
				// className='services'
			>
				<InputLabel

				// id='demo-simple-select-label'
				>
					<div className='servicesBtn'>Услуги </div>
				</InputLabel>
				<Select
					// labelId='demo-simple-select-label'
					// id='demo-simple-select'
					value={age}
					label='Услуги'
					onChange={handleChange}
					// className='servicesBtn'
				>
					<MenuItem value={10}>
						<div className='servicesBtnOne'>Неврология </div>
					</MenuItem>
					<MenuItem value={20}>
						<div className='servicesBtn'>Акупунктура </div>
					</MenuItem>
					<MenuItem value={30}>
						<div className='servicesBtn'>Лечебный массаж </div>
					</MenuItem>
					<MenuItem value={30}>
						<div className='servicesBtn'>Физиотерапия </div>
					</MenuItem>
					<MenuItem value={30}>
						<div className='servicesBtn'>Косметология </div>
					</MenuItem>
				</Select>
			</FormControl>
		</Box>
	);
}
