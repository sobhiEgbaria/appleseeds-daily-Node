import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import { BASE_URL } from './config';

function App() {
  const [select, setSelect] = useState('Holon');

  const handleSelect = ({ target: { value } }) => setSelect(value);
  console.log(select);

  const fetchMyWeather = async () => {
    const response = await fetch(`${BASE_URL}/weather/${select}`, {
      method: 'GET',
    });

    const weather = await response.json();
    console.log(weather);
  };

  return (
    <div className='App'>
      <select defaultValue={select} onChange={handleSelect}>
        <option value={'Holon'}>Holon</option>
        <option value={'Tel Aviv'}>Tel Aviv</option>
      </select>
      <button onClick={fetchMyWeather}>Fetch My Weather</button>
    </div>
  );
}

export default App;
