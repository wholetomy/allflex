import React from 'react'
import Etapas from '../../Components/Etapas/Etapas'
import { Link } from 'react-router-dom';
import { FinalContainer, EtapasDiv, FinalizacaoDiv } from './Final.styles.jsx';
import checkboxSVG from '../../Components/Images/Final/checkbox.svg'

export default function Final() {
    return (
        <>
            <FinalContainer>
                <EtapasDiv>
                    <Etapas etapa={3} />
                </EtapasDiv>
                <FinalizacaoDiv>
                    <div>
                        <img src={checkboxSVG} alt="checkboxSVG" />
                        <h1>Sucesso!</h1>
                        <p>Seu pedido foi solicitado e em breve um atendente Allflex irá entrar em contato para finalização</p>
                        <Link to="/">
                            <button>Finalizar</button>
                        </Link>
                        <span>(Informações para contato: (11) 4004-4874 Telefone e WhatsApp)</span>
                    </div>
                </FinalizacaoDiv>
            </FinalContainer>
        </>
    )
}
