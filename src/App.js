import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import axios from 'axios';
import imagen from './cryptomonedas.png';
import Formulario from './components/Formulario';
import Convertidor from './components/Convertidor';
import Spinner from './components/Spinner';
import Footer from './components/ui/Footer';

const Contenedor = styled.div`
  max-width: 900px;
  margin: 0 auto;
  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`;
const Imagen = styled.img`
  max-width: 100%;
  margin-top: 5rem;
`;
const Heading = styled.h1`
  font-family: "Bebas Neue", cursive;
  color: #fff;
  text-align: left;
  font-weight: 700;
  font-size: 50px;
  margin-bottom: 50px;
  margin-top: 80px;

  &::after {
    content: "";
    width: 100px;
    height: 6px;
    background-color: #ff6c02;
    display: block;
  }
`;



function App() {

  const [ moneda, guardarMoneda ] = useState('');
  const [ criptomoneda, guardarCriptomoneda ] = useState('');
  const [ resultado, guardarResultado ] = useState({});
  const [ cargando, guardarCargando ] = useState(false);

  useEffect(() => {
    if (!moneda || !criptomoneda) return;
  
    const calcularCriptomoneda = async () => {
      try {
        guardarCargando(true);
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`;
        const resultado = await axios.get(url);
  
        setTimeout(() => {
          guardarCargando(false);
          guardarResultado(resultado?.data?.DISPLAY?.[criptomoneda]?.[moneda] || {});
        }, 3000);
      } catch (error) {
        console.error("Error al obtener datos:", error);
        guardarCargando(false);
      }
    };
  
    calcularCriptomoneda();
  }, [moneda, criptomoneda]);
  

  const componente = (cargando) ? <Spinner /> : <Convertidor resultado={resultado} />

  return (
    <> {/* Fragmento para envolver todo */}
      <Contenedor>
        <div>
          <Imagen 
            src={imagen}
            alt="imagen criptomoneda" />
        </div>
        <div>
          <Heading>Convertidor de Criptomonedas</Heading>
          <Formulario 
            guardarMoneda={guardarMoneda}
            guardarCriptomoneda={guardarCriptomoneda}
          />
          {componente}
        </div>
      </Contenedor>
      
      <Footer /> {/* Se asegura que Footer esté dentro del Fragmento */}
    </>
  );
}

export default App;
