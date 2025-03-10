import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';


const MensajeError = styled.p`
  color: #fff;
  background-color: #b7322c;
  font-size: 30px;
  padding: 1rem;
  text-transform: uppercase;
  font-weight: bold;
  text-align:center;
  font-family: 'Bebas Neue', cursive;
`;

const Error = ({ mensaje }) => {
    return ( 
       <MensajeError>{mensaje}</MensajeError>
     );
}

Error.propTypes = {
    mensaje: PropTypes.string.isRequired
};

export default Error;