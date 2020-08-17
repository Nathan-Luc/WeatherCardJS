import React from 'react'
import styled from '@emotion/styled'

const Icons = (props) => {
    
    const Icon = styled.img`
        width: 40%;
    `
    var icon =''
    switch(props.condition){
        case 'Clear':
            icon = './Icons/Mostly Sunny-2x.png';
            break;
        case 'Clouds':
            icon = './Icons/Mostly Cloudy Night-2x.png';
            break;
        case 'Haze':
            icon = './Icons/Haze-2x.png';
            break;
        case 'Hail':
            icon = './Icons/Hail-2x.png';
            break;
        case 'Fog':
            icon = './Icons/Fog-2x.png';
            break;
        case 'Tornado':
            icon = './Icons/Tornado-2x.png';
            break;
        case 'Thunder':
            icon = './Icons/Severe Thunderstorm-2x.png';
            break;
        case 'Blizzard':
            icon = './Icons/Blizzard-2x.png';
            break;
        case 'Snow':
            icon = './Icons/Snow-2x.png';
            break;
        case 'Rain':
            icon = './Icons/Rain-2x.png';
            break;
        case 'Breezy':
            icon = './Icons/Breezy-2x.png';
            break;
        default:
            icon = './Icons/Drizzle-2x.png'
            break;
            
        
    }
    return ( 
        <Icon src= {icon} alt="Weather Icon"/>
     );
}
 
export default Icons;