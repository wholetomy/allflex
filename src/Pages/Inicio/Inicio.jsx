import React from 'react';
import { Link } from 'react-router-dom';
import { InicioContainer } from './Inicio.styles';
import gadoComBrinco from '../../Components/Images/Inicio/gado-com-brinco.jpg';

export default function Inicio() {
  return (
    <>
      <InicioContainer>
        <div className='left-div'>
          <div className='texts'>
            <h1>Identificadores Allflex</h1>
            <p>Descubra o poder da inovação na gestão de rebanhos com identificadores Allflex. Oferecemos soluções que proporcionam eficiência e controle total do seu negócio. Simplifique o manejo do rebanho e eleve seus resultados com a qualidade incomparável dos produtos Allflex.</p>
            <Link to="/identificadores">
              <button>Comprar Agora</button>
            </Link>
          </div>
        </div>
        <div className='right-div'>
          <img src={gadoComBrinco} alt='Gado com brinco' />
        </div>
      </InicioContainer>
    </>
  );
}