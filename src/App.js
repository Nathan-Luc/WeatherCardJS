import React from 'react';
import './App.css';
import WeatherCard from './Components/WeatherCard/component';

function App() {
  return (
    <div className="App">
     <WeatherCard temp = {30} />
     <WeatherCard temp = {0} />
     <WeatherCard temp = {-30} />
     <WeatherCard temp = {-100} />
    </div>
  );
}

export default App;
