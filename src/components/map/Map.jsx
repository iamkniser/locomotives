import {
  GoogleMap, InfoWindow, Marker, useLoadScript,
} from '@react-google-maps/api';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import './Map.css';

function Map() {
  const locomotives = useSelector((state) => state.locomotives.locomotives);
  console.log('locomotives', locomotives);
  const [selectedLocomotive, setSelectedLocomotive] = useState(null);
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_API_KEY,
  });
  if (!isLoaded) {
    return (
      <div>
        <h2>Loading...</h2>
      </div>
    );
  }
  return (
    <GoogleMap
      zoom={6}
      center={{ lat: 51.153086, lng: 71.416181 }}
      mapContainerClassName="map-container"
    >
      {locomotives.map((locomotive) => (
        <Marker
          key={locomotive.id}
          position={{ lat: locomotive.coordinates[0], lng: locomotive.coordinates[1] }}
          onClick={() => { setSelectedLocomotive(locomotive); }}
        />
      ))}

      {selectedLocomotive
        && (
        <InfoWindow
          position={{
            lat: selectedLocomotive.coordinates[0],
            lng: selectedLocomotive.coordinates[1],
          }}
          onCloseClick={() => { setSelectedLocomotive(null); }}
        >
          <div>
            <h2>{selectedLocomotive.title}</h2>
            <p>{`Серия: ${selectedLocomotive.series}`}</p>
            <p>{`Кол-во секций: ${selectedLocomotive.sections}`}</p>
            <p>{`Координаты: ${selectedLocomotive.coordinates}`}</p>
          </div>
        </InfoWindow>
        )}
    </GoogleMap>

  );
}

export default Map;
