import styled from "styled-components";

export const FinalizacaoContainer = styled.div`
    padding: 25px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    grid-gap: 5px;
    background-color: #f8f8f8;
`;

export const FinalizacaoDiv = styled.div`
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

export const FinalizacaoLeft = styled.div`
    padding: 15px;
    background-color: #3f83bd;
    color: #ffffff;
    width: 334px;
    border-radius: 14px;
    height: 100%;
    overflow-y: auto;
    position: relative;

    .title {
        display: flex;
        align-items: center;
        grid-gap: 10px;

        span {
            background-color: #5c3161;
            min-width: 30px;
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

    .options-div-master {
        max-height: calc(100% - 65px);
        overflow-y: auto;
    }

    .options-div-buttons {
        position: absolute;
        bottom: 15px;
        width: calc(100% - 30px);
        display: flex;
        justify-content: space-between;
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
    
    .options-div-long {
        display: flex;
        flex-direction: column;
        width: 100%;
    }

    .options-div-small {
        display: flex;
        flex-direction: column;
        /* width: 140px; */
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
        width: 140px;
    }

    .button-voltar {
        color: #5c3161;
        background-color: #bee9e8;
    }

    .required {
        color: red;
    }

    @media screen and (max-width: 810px) {
        width: 100%;
        height: 400px;

        .button {
            width: 100%;
        }
    }
`;

export const FinalizacaoRight = styled.div`
    padding: 15px;
    width: calc(100% - 334px);
    overflow-y: auto;
    display: flex;
    grid-gap: 15px;
    flex-direction: column;
    
    .identificadores-div {
        max-height: 50%;
        overflow: auto;
    }

    .acessorios-div {
        max-height: 50%;
        overflow-y: auto;
    }

    .identificadores-div h1, 
    .acessorios-div h1 {
        color: #5c3161;
        font-size: 1.6rem;
    }

    .identificadores-table {
        width: 100%;
        border-collapse: collapse;
    }

    .identificadores-table th,
    .identificadores-table td {
        border: 1px solid #ddd;
        padding: 0.1rem;
        text-align: left;
        white-space: nowrap;
    }

    .identificadores-table th {
        background-color: #3f83bd;
        color: #ffffff;
        padding-right: 10px;
    }

    .identificadores-table tbody tr:hover {
        background-color: #f2f2f2;
    }

    .identificadores-table td button {
        background-color: transparent;
        border: none;
        cursor: pointer;
    }

    .acessorios-table {
        width: 100%;
        border-collapse: collapse;

        .button-quantidade {
            background-color: #5c3161;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            width: 17px;
            height: 17px;
            border-radius: 4px;
            color: white;
            border: none;
            outline: none; /* para remover a borda de foco no clique */
        }
    }

    .acessorios-table > tbody > tr > td:nth-child(2) {
        display: flex;
        grid-gap: 10px;
        align-items: center;
    }

    .acessorios-table .trash-icon,
    .identificadores-table .trash-icon {
        cursor: pointer;
    }

    .acessorios-table th,
    .acessorios-table td {
        border: 1px solid #ddd;
        padding: 8px;
        text-align: left;
        white-space: nowrap;
    }

    .acessorios-table th {
        background-color: #3f83bd;
        color: #ffffff;
        padding-right: 10px;
    }

    .acessorios-table tbody tr:hover {
        background-color: #f2f2f2;
    }

    .acessorios-table td button {
        background-color: transparent;
        border: none;
        cursor: pointer;
    }

    .acessorios-table th:first-child,
    .identificadores-table th:first-child {
        border-top-left-radius: 5px;
    }

    .acessorios-table th:last-child,
    .identificadores-table th:last-child {
        border-top-right-radius: 5px;
    }

    .acessorios-table td:first-child,
    .identificadores-table td:first-child {
        border-bottom-left-radius: 5px;
    }

    .acessorios-table td:last-child,
    .identificadores-table td:last-child {
        border-bottom-right-radius: 5px;
    }

    .identificadores-table > tbody > tr > td:nth-child(12) > img {
        width: 25px;
    }

    @media screen and (max-width: 810px) {
        width: 100%;
        height: 400px;
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