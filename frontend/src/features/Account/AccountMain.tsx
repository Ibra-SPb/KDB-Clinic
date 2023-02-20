import React from 'react'
import Paper from '@mui/material/Paper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import Stack from '@mui/material/Stack';

export default function AccountMain() {
  return (
    <Stack direction="row" spacing={2}>
      <Paper>
        <MenuList>
          <MenuItem>Профиль</MenuItem>
          <MenuItem>Приёмы</MenuItem>
          <MenuItem>Результаты</MenuItem>
          <MenuItem>Выйти</MenuItem>
        </MenuList>
      </Paper>
    </Stack>
  );
}
