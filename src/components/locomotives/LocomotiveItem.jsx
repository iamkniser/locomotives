/* eslint-disable react/prop-types */
import {
  Button, Stack, TableCell, TableRow,
} from '@mui/material';
import React from 'react';
import ClearIcon from '@mui/icons-material/Clear';
import EditIcon from '@mui/icons-material/Edit';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { removeLocomotive } from '../../store/locomotiveSlice';

function LocomotiveItem({ locomotive }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    id, title, series, sections, coordinates,
  } = locomotive;

  return (
    <TableRow
      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
    >
      <TableCell component="th" scope="row">
        {title}
      </TableCell>
      <TableCell align="center">{series}</TableCell>
      <TableCell align="right">{sections}</TableCell>
      <TableCell align="right">{`${coordinates[0]} ${coordinates[1]}`}</TableCell>
      <TableCell align="right">
        <Stack direction="row" spacing={2} justifyContent="flex-end">
          <Button variant="contained" color="primary" onClick={() => navigate(`/locomotive/${locomotive.id}`)}><EditIcon /></Button>
          <Button variant="contained" color="error" onClick={() => dispatch(removeLocomotive(id))}><ClearIcon /></Button>
        </Stack>
      </TableCell>

    </TableRow>
  );
}

export default LocomotiveItem;
