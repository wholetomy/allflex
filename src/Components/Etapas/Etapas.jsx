import React from 'react'
import { EtapasContainer, CirculoEtapa } from './Etapas.styles'

export default function Etapas({ etapa }) {
    return (
        <>
            <EtapasContainer>
                <CirculoEtapa etapa={etapa >= 1 ? 1 : null}>1</CirculoEtapa>
                <span></span>
                <CirculoEtapa etapa={etapa >= 2 ? 2 : null}>2</CirculoEtapa>
                <span></span>
                <CirculoEtapa etapa={etapa === 3 ? 3 : null}>3</CirculoEtapa>
            </EtapasContainer>
        </>
    )
}




