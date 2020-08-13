import React from 'react'

const WeatherCard = (props) => {
    return ( 
        <div className = "card">
            <h1 className = "city" >Sydney</h1>
            <h3 className = 'country'>AU</h3>
            <img classname = 'icon' src="" alt="Weather Icon"/>
            <h1 className = 'temp'>20 C</h1>
            <h3 className = 'condition'>Clouds</h3>
        </div>
     );
}
 
export default WeatherCard; 