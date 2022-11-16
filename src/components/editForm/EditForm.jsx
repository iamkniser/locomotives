import {
  Button, Container, Stack, TextField,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { editLocomotive } from '../../store/locomotiveSlice';

function EditForm() {
  const locomotives = useSelector((state) => state.locomotives.locomotives);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();

  const [title, setTitle] = useState('');
  const [series, setSeries] = useState('');
  const [sections, setSections] = useState('');
  const [coordinates, setCoordinates] = useState('');

  useEffect(() => {
    setTitle(locomotives[id - 1].title);
    setSeries(locomotives[id - 1].series);
    setSections(locomotives[id - 1].sections);
    setCoordinates(locomotives[id - 1].coordinates);
  }, []);

  return (
    <Container sx={{ width: 400, paddingTop: 4 }}>
      <h2>Изменить данные:</h2>
      <Stack direction="column" spacing={2}>
        <TextField id="title" label="Наименование" variant="outlined" value={title} onChange={(e) => setTitle(e.target.value)} />
        <TextField id="series" label="Серия" variant="outlined" value={series} onChange={(e) => setSeries(e.target.value)} />
        <TextField id="sections" label="Кол-во секций" variant="outlined" value={sections} onChange={(e) => setSections(e.target.value)} />
        <TextField
          id="coordinates"
          label="Координаты"
          variant="outlined"
          value={coordinates}
          onChange={(e) => setCoordinates(e.target.value)}
        />

      </Stack>
      <Button
        variant="contained"
        color="success"
        sx={{ marginTop: 2 }}
        onClick={() => {
          dispatch(editLocomotive({
            id, title, series, sections, coordinates,
          }));
          navigate('/locomotives-list');
        }}
      >
        Изменить
      </Button>
    </Container>
  );
}

export default EditForm;
