import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import '../NavigationStyle.css';

export default function BasicSelect() {
	const [service, setService] = React.useState('');

	const handleChange = (event: SelectChangeEvent) => {
		setService(event.target.value as string);
	};
	const style = {
		color: 'white',
		fontSize: 10,
		flexgrow: 1,
		marginRight: 1,
		// marginLeft: 4,
		background: 'white',
		minWidth: 160,
		// maxHeight: 10,
		borderRadius: 1,
	};
	const fontStyle = {
		fontSize: 15,
		background: 'white',
		color: 'orange',
		borderColor: 'orange',
	};

	const boxStyle = {
		minWidth: 160,
		fontSize: 10,
	};

	const blockStyle = {
		borderColor: 'orange',
	};
	return (
		<Box
			sx={boxStyle}
			// sx={style}
			// sx={{ minWidth: 160 }}
		>
			<FormControl sx={style}>
				<InputLabel sx={fontStyle}>Услуги</InputLabel>
				<Select
					// labelId='demo-simple-select-label'
					// id='demo-simple-select'
					value={service}
					label='Услуги'
					onChange={handleChange}
					// sx={fontStyle}
				>
					<MenuItem
						value={1}
						sx={fontStyle}>
						<div className='servicesBtnOne'>Неврология </div>
					</MenuItem>
					<MenuItem
						value={2}
						sx={fontStyle}>
						<div className='servicesBtn'>Акупунктура </div>
					</MenuItem>
					<MenuItem
						value={3}
						sx={fontStyle}>
						<div className='servicesBtn'>Лечебный массаж </div>
					</MenuItem>
					<MenuItem
						value={4}
						sx={fontStyle}>
						<div className='servicesBtn'>Физиотерапия </div>
					</MenuItem>
					<MenuItem
						value={5}
						sx={fontStyle}>
						<div className='servicesBtn'>Косметология </div>
					</MenuItem>
				</Select>
			</FormControl>
		</Box>
	);
}
