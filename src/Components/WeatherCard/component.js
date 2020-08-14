import React from 'react';
import styled from '@emotion/styled';

import Location from './location' 
import Condition from './condition'

const WeatherCard = (props) => {
    const red = 60;
    const Card = styled.div` 
        margin: 0 auto;
        background: linear-gradient(to top, rgba(${red},255,255), lightblue);
        width: 200px;
        height: 300px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        border-radius: 15px;
    `
    return ( 
        <Card className = "card">
            <Location/>
            <img classname = 'icon' src="./Mcloud.png" alt="Weather Icon"/>
            <Condition/>
        </Card>
     );
}
 
export default WeatherCard; 