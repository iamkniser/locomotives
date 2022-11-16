import {
  Button, Container, Stack, TextField,
} from '@mui/material';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

function EditForm() {
  const locomotives = useSelector((state) => state.locomotives.locomotives);
  const navigate = useNavigate();
  // const dispatch = useDispatch();
  const { id } = useParams();
  console.log(id);

  // const [formData, setFormData] = useState({
  //   title: '', series: '', sections: '', coordinates: '',
  // });

  const {
    title, series, sections, coordinates,
  } = locomotives[id - 1];

  const handleEdit = (e) => {

  };

  return (
    <Container sx={{ width: 400, paddingTop: 4 }}>
      <h2>Изменить данные:</h2>
      <Stack direction="column" spacing={2}>
        <TextField id="outlined-basic" label="Наименование" variant="outlined" value={title} onChange={(e) => handleEdit(e)} />
        <TextField id="outlined-basic" label="Серия" variant="outlined" value={series} onChange={(e) => handleEdit(e)} />
        <TextField id="outlined-basic" label="Кол-во секций" variant="outlined" value={sections} onChange={(e) => handleEdit(e)} />
        <TextField
          id="outlined-basic"
          label="Координаты"
          variant="outlined"
          value={coordinates}
          onChange={(e) => handleEdit(e)}
        />

      </Stack>
      <Button
        variant="contained"
        color="success"
        sx={{ marginTop: 2 }}
        onClick={() => {
          // dispatch(addLocomotive({
          //   title, series, sections, coordinates,
          // }));
          navigate('/locomotives-list');
        }}
      >
        Изменить
      </Button>
    </Container>
  );
}

export default EditForm;
