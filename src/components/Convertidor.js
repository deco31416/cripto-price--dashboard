import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';


const Contenedor = styled.div`
    color: #fff;
    font-family: Arial, Helvetica, sans-serif;
`;
const Info = styled.p`
    font-size: 18px;
    span {
        font-weight:bold;
    }
`;
const Precio = styled.p`
    font-size: 30px;
    span {
        font-weight:bold;
    }
`;


const Convertidor = ({ resultado }) => {
   
    if(Object.keys(resultado).length === 0) return null;
    return (
        <Contenedor>
            <Precio>El precio es: <span>{resultado.PRICE}</span></Precio>
            <Info>Precio más alto del día: <span>{resultado.HIGHDAY}</span></Info>
            <Info>El precio más bajo del día <span>{resultado.LOWDAY}</span></Info>
            <Info>Variación últimas 24h: <span>{resultado.CHANGEPCT24HOUR}</span></Info>
            <Info>Última actualización: <span>{resultado.LASTUPDATE}</span></Info>
        </Contenedor>
     );
}

Convertidor.propTypes = {
    resultado: PropTypes.object.isRequired
}    

export default Convertidor;