import React from 'react';
import './App.css';
import WeatherCard from './Components/WeatherCard/component';

function App() {
  const data = async() => {
    const apiRes = await fetch(
      "http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=354c35ca53bb100ba6f404e49d0bba03"
    );
    const resJSON = await apiRes.json();
    return resJSON;
  }
    console.log(data());
  return (
    <div className="App">
     <WeatherCard city = 'San Jose' country = 'United States' temp = {30} condition = "Tornado" />
     <WeatherCard temp = {-30} condition = "Clear" />
     <WeatherCard temp = {0} condition = "Snow" />
    </div>
  );
}

export default App;
