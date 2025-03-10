import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import axios from 'axios';
import useMoneda from '../hooks/useMoneda';
import useCriptomoneda from '../hooks/useCriptomoneda';
import Error from './Error';
import PropTypes from 'prop-types';


const Boton = styled.input`
  margin-top: 20px;
  font-weight: bold;
  font-size: 20px;
  padding: 10px;
  background-color: #ff6c02;
  border: none;
  width: 100%;
  border-radius: 10px;
  color: #fff;
  transition: background-color .3s ease;  

  &:hover {
      background-color: #ff6c02;
      cursor: pointer;
  }
`;


const Formulario = ({ guardarMoneda, guardarCriptomoneda }) => {
    //Listado de criptomonedas
    const [ listacripto, guardarCriptomonedas] = useState([]);
    //Validación
    const [ error, guardarError ] = useState(false);
    //Listado de monedas
    const MONEDAS = [
        {codigo: 'EUR', nombre: 'Euro'},
        {codigo: 'USD', nombre: 'Dolar EEUU'},
        {codigo: 'GBP', nombre: 'Libra'},
        {codigo: 'MXN', nombre: 'Peso Mexicano'},
        {codigo: 'COP', nombre: 'Peso Colombiano'}
    ];

    //Utilizar useMoneda
    const [ moneda, SelectMonedas ] = useMoneda('Elige tu moneda','', MONEDAS);
    // Utilizar useCriptomoneda
    const [ criptomoneda, SelectCriptomoneda ] = useCriptomoneda('Elige tu criptomoneda', '', listacripto)
    //Ejecutar llamar a la REST API
    useEffect(() => {
        const consultarAPI = async () => {
            const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';
            const resultado = await axios.get(url);
            guardarCriptomonedas(resultado.data.Data);
        }
        consultarAPI();
    }, []);
    
    //Cando el usuario hace submit
    const convertirMoneda = e => {
        e.preventDefault();
        if(moneda.trim() === '' || criptomoneda.trim() === ''){
            guardarError(true);
            return;
        }
        guardarError(false);
        guardarMoneda(moneda);
        guardarCriptomoneda(criptomoneda);
    }


    return ( 
        <form
            onSubmit={convertirMoneda}
        >
            {error ? <Error mensaje="Todos los campos son obligatorios" /> : null}
            <SelectMonedas />
            <SelectCriptomoneda />
            <Boton
                type="submit"
                value="calcular"
            />
        </form>
     );
}

Formulario.propTypes = {
    guardarMoneda: PropTypes.func.isRequired,
    guardarCriptomoneda: PropTypes.func.isRequired
}; 

export default Formulario;