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
import { useDispatch, useSelector } from 'react-redux';
import LocomotiveItem from './LocomotiveItem';

export default function LocomotivesList() {
  const locomotives = useSelector((state) => state.locomotives.locomotives);
  const navigate = useNavigate();
  const dispatch = useDispatch();

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
              {locomotives.map((locomotive) => (
                <LocomotiveItem
                  key={locomotive.id}
                  locomotive={locomotive}
                />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Container>
  );
}
