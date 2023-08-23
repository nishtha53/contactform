// src/components/MapComponent.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

const MapComponent = () => {
  const [countriesData, setCountriesData] = useState([]);
  const [center, setCenter] = useState([0, 0]);

  useEffect(() => {
    axios.get('https://disease.sh/v3/covid-19/countries')
      .then(response => {
        // Process the response and extract country-specific data
        // Example: const countriesData = [{ country: '', active: 0, recovered: 0, deaths: 0, lat: 0, long: 0 }];
        setCountriesData(countriesData);
      })
      .catch(error => {
        console.error('Error fetching countries data', error);
      });
  }, []);

  return (
    <div>
      <h2>React Leaflet Map: Country Data</h2>
      <MapContainer center={center} zoom={2} style={{ height: '400px', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {countriesData.map(country => (
          <Marker key={country.country} position={[country.lat, country.long]}>
            <Popup>
              <div>
                <h3>{country.country}</h3>
                <p>Active: {country.active}</p>
                <p>Recovered: {country.recovered}</p>
                <p>Deaths: {country.deaths}</p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default MapComponent;
