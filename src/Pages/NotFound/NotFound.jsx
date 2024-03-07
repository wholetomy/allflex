import React from 'react'
import { Link } from 'react-router-dom';
import { NotFoundContainer, NotFoundDiv } from './NotFound.styles.jsx';
import Error from '../../Components/Images/NotFound/NotFound.svg'

export default function NotFound() {
  return (
    <NotFoundContainer>
      <NotFoundDiv>
        <div>
          <img src={Error} alt="checkboxSVG" />
          <h1>Erro 404</h1>
          <p>Ops! Essa página não existe.</p>
          <Link to="/">
            <button>Voltar</button>
          </Link>
        </div>
      </NotFoundDiv>
    </NotFoundContainer>
  )
}
