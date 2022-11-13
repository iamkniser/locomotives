import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Stack } from '@mui/system';
import {
  AppBar, Button, Toolbar, Typography,
} from '@mui/material';

function Navbar() {
  const navigate = useNavigate();
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Samal Software
        </Typography>
        <Stack direction="row" spacing={2}>
          <Button color="inherit" onClick={() => navigate('/locomotives-list')}>Локомотивы</Button>
          <Button color="inherit" onClick={() => navigate('/map')}>Карта</Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
