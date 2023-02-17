import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import '../../../Main/Navigation/NavigationStyle.css';

export default function BasicSelect() {
	const [age, setAge] = React.useState('');

	const handleChange = (event: SelectChangeEvent) => {
		setAge(event.target.value as string);
	};

	return (
		<Box
			className='services'
			sx={{ minWidth: 120 }}>
			<FormControl fullWidth>
				<InputLabel id='demo-simple-select-label'>Услуги</InputLabel>
				<Select
					labelId='demo-simple-select-label'
					id='demo-simple-select'
					value={age}
					label='Услуги'
					onChange={handleChange}>
					<MenuItem value={10}>Первая услуга</MenuItem>
					<MenuItem value={20}>Вторая услуга</MenuItem>
					<MenuItem value={30}>Третья услуга</MenuItem>
				</Select>
			</FormControl>
		</Box>
	);
}
