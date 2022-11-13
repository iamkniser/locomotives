// import logo from './logo.svg';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AddForm from '../addForm/AddForm';
import LocomotivesList from '../locomotives/LocomotivesList';
import Map from '../map/Map';
import Navbar from '../Navbar';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <div className="wrapper">
        {/* <h1>Our Gorgeous Application will be placed here!</h1> */}
        <Routes>
          <Route path="/locomotives-list" element={<LocomotivesList />} />
          <Route path="/map" element={<Map />} />
          <Route path="/locomotive" element={<AddForm />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
