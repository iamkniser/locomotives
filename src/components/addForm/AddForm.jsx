import {
  Button, Container, Stack, TextField,
} from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
// import SelectTextFields from './SelectTextFields';

function AddForm() {
  const navigate = useNavigate();
  return (
    <Container>
      <h2>Добавить локомотив:</h2>
      <Stack direction="column" spacing={2}>
        <TextField id="outlined-basic" label="Наименование" variant="outlined" />
        <TextField id="outlined-basic" label="Серия" variant="outlined" />
        <TextField id="outlined-basic" label="Кол-во секций" variant="outlined" />
        <TextField id="outlined-basic" label="Координаты" variant="outlined" />
        <Button variant="contained" color="success" onClick={() => navigate('/locomotives-list')}>Добавить</Button>
      </Stack>
    </Container>
  );
}

export default AddForm;
