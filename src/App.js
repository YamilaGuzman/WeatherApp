import React from 'react';
import './App.css';
import WeatherLocation from './components/WeatherLocations';


function App() {
  return (
    <div className="App">
      <h1>Aplicación del Clima</h1>
      <WeatherLocation></WeatherLocation>
    </div>
  );
}

export default App;
