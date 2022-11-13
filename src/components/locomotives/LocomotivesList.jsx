import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {
  Box, Button, Container, Stack,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import ClearIcon from '@mui/icons-material/Clear';
import EditIcon from '@mui/icons-material/Edit';

function createData(name, calories, fat, carbs) {
  return {
    name, calories, fat, carbs,
  };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, '51.471980 71.206835'),
  createData('Ice cream sandwich', 237, 9.0, 37, 51.471980, 71.206835),
  createData('Eclair', 262, 16.0, 24, 51.471980, 71.206835),
  createData('Cupcake', 305, 3.7, 67, 51.471980, 71.206835),
  createData('Gingerbread', 356, 16.0, 49, 51.471980, 71.206835),
];

export default function LocomotivesList() {
  const navigate = useNavigate();
  return (
    <Container>
      <Stack direction="row" spacing={2} alignItems="center" justifyContent="space-between">
        <h2>Список локомотивов:</h2>
        <Button variant="contained" color="secondary" startIcon={<AddIcon />} onClick={() => navigate('/locomotive')}>Добавить локомотив</Button>
      </Stack>
      <Box>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Наименование</TableCell>
                <TableCell align="center">Серия</TableCell>
                <TableCell align="right">Кол-во секций</TableCell>
                <TableCell align="right">Координаты</TableCell>
                <TableCell align="right">Действие</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="center">{row.calories}</TableCell>
                  <TableCell align="right">{row.fat}</TableCell>
                  <TableCell align="right">{row.carbs}</TableCell>
                  <TableCell align="right">
                    <Stack direction="row" spacing={2} justifyContent="flex-end">
                      <Button variant="contained" color="primary"><EditIcon /></Button>
                      <Button variant="contained" color="error"><ClearIcon /></Button>
                    </Stack>
                  </TableCell>

                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Container>
  );
}
