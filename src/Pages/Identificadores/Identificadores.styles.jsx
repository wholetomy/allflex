import styled from "styled-components";

export const IdentificadoresContainer = styled.div`
    padding: 25px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    grid-gap: 5px;
    background-color: #f8f8f8;
`;

export const IdentificadoresDiv = styled.div`
    width: 100%;
    background-color: #ffffff;
    border-radius: 14px;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    height: calc(100vh - 105px);
    display: flex;

    @media screen and (max-width: 810px) {
        flex-direction: column;
        height: unset;
    }
`;

export const IdentificadoresLeft = styled.div`
    padding: 15px;
    background-color: #3f83bd;
    color: #ffffff;
    width: 334px;
    border-radius: 14px;
    height: 100%;
    overflow-y: auto;
    position: relative;

    .options-div-master {
        max-height: calc(100% - 75px);
        overflow-y: auto;
    }

    .title {
        display: flex;
        align-items: center;
        /* justify-content: space-between; */
        grid-gap: 10px;

        span {
            background-color: #5c3161;
            width: 30px;
            height: 30px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 17px;
            font-weight: 600;
        }

        h3 {
            font-weight: 600;
            font-size: 21px;
        }
    }

    .options-div {
        margin: 5px 0;
        display: flex;
        justify-content: space-between;

        span {
            font-weight: 600;
        }

        select, input {
            height: 30px;
            border-radius: 4px;
            outline: none;
            border: none;
        }

        input, textarea {
            padding: 0 4px;
        }

        input[type="file"] {
            padding: initial;
            height: 100%;
        }

        textarea {
            resize: none;
            width: 100%;
            border-radius: 4px;
            outline: none;
            border: none;
        }
    }
    
    .options-div-buttons {
        position: absolute;
        bottom: 15px;
        width: calc(100% - 30px);
        display: flex;
        justify-content: space-between;
    }
    
    .options-div-long {
        display: flex;
        flex-direction: column;
        width: 100%;
    }

    .options-div-small {
        display: flex;
        flex-direction: column;
        /*  width: 140px; */
        width: 49%;
        justify-content: flex-end;
    }

    .button {
        padding: 8px 16px;
        background-color: #5c3161;
        color: #ffffff;
        outline: none;
        border: none;
        border-radius: 4px;
        display: flex;
        align-items: center;
        justify-content: center;
        grid-gap: 5px;
        cursor: pointer;
        bottom: 25px;
        right: 28px;
        /* width: 140px; */
        width: 100%;
    }

    .notification {
        position: absolute;
        width: 15px;
        height: 15px;
        color: #5c3161;
        background-color: #bee9e8;
        border-radius: 50%;
        font-weight: 600;
        display: flex;
        align-items: center;
        justify-content: center;
        top: -5px;
        right: -5px;
        font-size: 11px;
    }

    .button-with-notification {
        position: relative;
    }

    .required {
        color: red;
    }

    @media screen and (max-width: 810px) {
        width: 100%;
        height: 400px;
    }
`;

export const IdentificadoresRight = styled.div`
    padding: 15px;
    width: calc(100% - 334px);
    display: flex;
    justify-content: space-between;
    grid-gap: 15px;

    .macho-div {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 50%;

        svg {
            width: 200px;
            height: 200px;
            /* width: 400px;
            height: 400px; */
        }

        .macho-cor path,
        .macho-cor rect {
            fill: ${(props) => props.corSelecionada};
        }

        /* Adiciona uma regra para sobrescrever o fill apenas para círculos específicos */
        .macho-cor circle:not([fill="url(#paint0_angular_2058_936)"]):not([fill="white"]):not([fill="url(#paint0_angular_2058_943)"]):not([fill="url(#paint0_angular_2058_937)"]):not([fill="url(#paint0_angular_2058_940)"]):not([fill="url(#paint0_angular_2058_946)"]) {
            fill: ${(props) => props.corSelecionada};
        }
    }

    .femea-div {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 50%;
        position: relative;

        svg {
            width: 200px;
            height: 200px;
            /* width: 400px;
            height: 400px; */
        }

        div {
            position: relative;
        }

        div span {
            position: absolute;
            bottom: 10px;
            left: 85px;
        }

        .femea-cor path:not([fill="white"]):not([fill="0B0C0B"]):not([fill="#646464"]),
        .femea-cor circle:not([fill="#0B0C0B"]):not([fill="black"]):not([fill="white"]),
        .femea-cor ellipse:not([fill="#0B0C0B"]) {
            fill: ${(props) => props.corSelecionada};
        }
    }

    .imagem-gado {
        width: 100%;
        object-fit: cover;
        object-position: top;
        border-radius: 14px;
    }

    @media screen and (max-width: 810px) {
        width: 100%;
        flex-wrap: wrap;
        overflow-y: auto;
        grid-gap: unset;
        align-items: center;
        min-height: 400px;
    }

    @media screen and (max-width: 480px) {
        .macho-div, .femea-div {
            width: 100%;
        }
    }
`;

export const LogoViewer = styled.div`
    position: absolute;
    background-color: #5c3161;
    right: 0px;
    top: -142px;
    width: 100%;
    z-index: 1;
    padding: 5px;
    height: 140px;
    border-radius: 4px;

    img {
        width: 100%;
        height: 100%;
    }
`;

export const Carrinho = styled.div`
    padding: 15px;
    width: calc(100% - 334px);

    .carrinho-title-div {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 5px;

        h1 {
            color: #5c3161;
            font-size: 1.6rem;
            width: 100%;
            text-align: left;
        }

        @media screen and (max-width: 810px) {
            flex-direction: column-reverse;
        }
    }

    .carrinho-table-div {
        height: 93%;
        width: 100%;
        overflow-y: auto;
        margin-bottom: 10px;
    }

    .carrinho-table-div > table > tbody > tr > td:nth-child(12) > img {
        width: 25px;
    }

    .carrinho-table {
        width: 100%;
        border-collapse: collapse;
    }

    .carrinho-table .trash-icon {
        cursor: pointer;
    }

    .carrinho-table th, .carrinho-table td {
        border: 1px solid #ddd;
        padding: 0.1rem;
        text-align: left;
        white-space: nowrap;
    }

    .carrinho-table th {
        background-color: #3f83bd;
        color: #ffffff;
        padding-right: 10px;
    }

    .carrinho-table tbody tr:hover {
        background-color: #f2f2f2;
    }

    .carrinho-table td button {
        background-color: transparent;
        border: none;
        cursor: pointer;
    }

    .proxima-etapa-button-div {
        display: flex;
        grid-gap: 10px;
    }

    .voltar-button {
        padding: 8px 16px;
        background-color: #bee9e8;
        color: #5c3161;
        outline: none;
        border: none;
        border-radius: 4px;
        display: flex;
        align-items: center;
        justify-content: center;
        grid-gap: 5px;
        cursor: pointer;
        bottom: 25px;
        right: 28px;
        width: 140px;
        /* width: 100%; */
    }

    .proxima-etapa-button {
        padding: 8px 16px;
        background-color: #5c3161;
        color: #ffffff;
        outline: none;
        border: none;
        border-radius: 4px;
        display: flex;
        align-items: center;
        justify-content: center;
        grid-gap: 5px;
        cursor: pointer;
        bottom: 25px;
        right: 28px;
        width: 140px;
        /* width: 100%; */
    }

    @media screen and (max-width: 810px) {
        width: 100%;
        flex-wrap: wrap;
        grid-gap: unset;
        align-items: center;
        height: 400px;

        .carrinho-table-div {
            height: 80%;
        }

        .proxima-etapa-button-div, 
        .proxima-etapa-button {
            width: 100%;
        }

        .proxima-etapa-button-div a {
            width: 49%;
        }
 
        .voltar-button {
            width: 49%;
        }
    }
`;

export const EtapasDiv = styled.div`
    @media screen and (max-width: 500px) {
        display: none;
    }
`;

export const Modal = styled.div`
    position: absolute;
    max-width: 800px;
    padding: 25px;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    background-color: #ffffff;
    border: 1px solid rgba(0, 0, 0, 0.17);
    border-radius: 14px;
    margin: 25px;

    .x-button {
        position: absolute;
        right: 25px;
        cursor: pointer;
    }
`;