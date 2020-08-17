import React from 'react';
import './App.css';
import WeatherCard from './Components/WeatherCard/component';

function App() {
  return (
    <div className="App">
     <WeatherCard city = 'San Jose' country = 'United States' temp = {30} condition = "Tornado" />
     <WeatherCard temp = {-30} condition = "Clear" />
     <WeatherCard temp = {0} condition = "Snow" />
    </div>
  );
}

export default App;
