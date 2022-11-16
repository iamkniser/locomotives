import {
  Button, Container, Stack, TextField,
} from '@mui/material';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addLocomotive } from '../../store/locomotiveSlice';

function AddForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [series, setSeries] = useState('');
  const [sections, setSections] = useState('');
  const [coordinates, setCoordinates] = useState();

  return (
    <Container sx={{ width: 400, paddingTop: 4 }}>
      <h2>Добавить локомотив:</h2>
      <Stack direction="column" spacing={2}>
        <TextField id="outlined-basic" label="Наименование" variant="outlined" onChange={(e) => setTitle(e.target.value)} />
        <TextField id="outlined-basic" label="Серия" variant="outlined" onChange={(e) => setSeries(e.target.value)} />
        <TextField id="outlined-basic" label="Кол-во секций" variant="outlined" onChange={(e) => setSections(e.target.value)} />
        <TextField
          id="outlined-basic"
          label="Координаты"
          variant="outlined"
          onChange={(e) => setCoordinates(((e.target.value).split(', ')).map((el) => +el))}
        />

      </Stack>
      <Button
        variant="contained"
        color="success"
        sx={{ marginTop: 2 }}
        onClick={() => {
          dispatch(addLocomotive({
            title, series, sections, coordinates,
          }));
          navigate('/locomotives-list');
        }}
      >
        Добавить
      </Button>
    </Container>
  );
}

export default AddForm;
