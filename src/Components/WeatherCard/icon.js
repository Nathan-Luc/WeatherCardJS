import React from 'react'
import styled from '@emotion/styled'

const Icons = (props) => {
    
    const Icon = styled.img`
        width: 40%;
    `

    return ( 
        <Icon classname = 'icon' src="./Icons/Blizzard Night-2x.png" alt="Weather Icon"/>
     );
}
 
export default Icons;