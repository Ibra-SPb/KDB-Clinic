import React from 'react';
import Paper from '@mui/material/Paper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import Stack from '@mui/material/Stack';
import AccountHeader from './AccountHeader';
import { NavLink } from 'react-router-dom';

export default function AccountMain() {
  return (
    <div className="account__container">
      <AccountHeader />
      <div className="account__main">
        <Stack direction="row" spacing={2}>
          <Paper>
            <MenuList>
              <MenuItem>
                <NavLink to="/account/profile">Профиль</NavLink>
              </MenuItem>
              <MenuItem>
                <NavLink to="/account/visits">Приёмы</NavLink>
              </MenuItem>
              <MenuItem>Результаты</MenuItem>
              <MenuItem>Выйти</MenuItem>
            </MenuList>
          </Paper>
        </Stack>
      </div>
    </div>
  );
}
