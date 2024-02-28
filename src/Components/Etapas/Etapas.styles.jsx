import styled from "styled-components";

export const EtapasContainer = styled.div`
    display: flex;
    width: 435px;
    align-items: center;
    justify-content: space-between;

    span {
        background-color: #d9d9d9;
        height: 1px;
        width: 130px;
    }
`;

export const CirculoEtapa = styled.div`
    width: 45px;
    height: 45px;
    background-color: ${props => props.etapa ? '#5c3161' : '#d9d9d9'}; // Pinta o círculo se houver etapa
    color: #ffffff;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 17px;
    font-weight: 600;
`;
