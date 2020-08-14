import React from 'react';
import styled from '@emotion/styled';

const Loction = (props) => {
    const Container = styled.div`
    text-align: center;  
    `
    const City = styled.div`
        font-family: 'Merriweather', serif;
        font-size: 1.6em;
    `
    const Country = styled.div`
    font-family: 'Fira Sans', sans-serif;
    font-size: 1.1rem;
    `
    return ( 
        <Container>
            <City>Sydney</City>
            <Country>AU</Country>
        </Container>
    );
}
 
export default Loction;