// import logo from './logo.svg';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AddForm from '../addForm/AddForm';
import EditForm from '../editForm/EditForm';
import LocomotivesList from '../locomotives/LocomotivesList';
import Map from '../map/Map';
import Navbar from '../Navbar';

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/locomotives-list" element={<LocomotivesList />} />
        <Route path="/map" element={<Map />} />
        <Route path="/locomotive" element={<AddForm />} />
        <Route path="/locomotive/:id" element={<EditForm />} />
      </Routes>

    </>
  );
}

export default App;
