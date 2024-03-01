import styled from "styled-components";

export const AcessoriosContainer = styled.div`
    padding: 25px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    grid-gap: 5px;
    background-color: #f8f8f8;
`;

export const AcessoriosDiv = styled.div`
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

export const AcessoriosLeft = styled.div`
    padding: 15px;
    background-color: #3f83bd;
    color: #ffffff;
    width: 334px;
    border-radius: 14px;
    height: 100%;
    overflow-y: auto;
    position: relative;
    display: flex;
    flex-direction: column;

    .acessoriosDiv-div {
        max-height: calc(100% - 80px);
        overflow: auto;
    }

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

    .carrinho-vazio-div {
        margin-top: 10px;
    }

    .buttons-div-div {
        position: absolute;
        bottom: 15px;
        width: calc(100% - 30px);
    }

    .buttons-div {
        display: flex;
        justify-content: space-between;
        
        button {
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

        .button-proxima-etapa {

        }

        .button-voltar {
            color: #5c3161;
            background-color: #bee9e8;
        }
    }

    @media screen and (max-width: 810px) {
        width: 100%;
        height: 400px;
    }
`;

export const AcessoriosRight = styled.div`
    padding: 15px;
    width: calc(100% - 334px);
    display: flex;
    grid-gap: 15px;
    flex-wrap: wrap;
    overflow-y: auto;

    .cards {
        width: 300px;
        height: 365px;
    }

    .cards-img-div {
        background-color: #ffffff;
        width: 300px;
        height: 300px;
        border-radius: 4px;
        box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
        border: 1px solid rgba(0, 0, 0, 0.17);
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        overflow: hidden;

        img {
            width: 100%;
        }
    }

    .text-and-button-div {
        display: flex;
        align-items: center;
        flex-direction: column;

        h3 {
            margin: 5px 0;
        }
    }

    button {
        width: 140px;
        height: 30px;
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
    }

    @media screen and (max-width: 810px) {
        width: 100%;
        height: 400px;

        .cards {
            width: 100%;
            height: unset;
        }

        .cards-img-div {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            height: 400px;

            img {
                object-fit: cover;
                width: 100%;
            }
        } 
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

    .x-button {
        position: absolute;
        right: 25px;
        cursor: pointer;
    }

    .modal-content-div {
        display: flex;
        grid-gap: 25px;

        .left {
            width: 300px;
            height: 300px;
            display: flex;
            align-items: center;
            justify-content: center;

            .img {
                width: 100%;
            }
        }

        .right {
            width: 300px;

            button {
                padding: 8px 20px;
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
                position: absolute;
                bottom: 25px;
                right: 28px;
            }

            span {
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
                font-weight: 700;
                color: #5c3161;
                font-size: 22px;
            }
        }
    }

    @media screen and (max-width: 980px) {
        
        .modal-content-div {
            flex-direction: column;
            /* height: 630px; */

            .right {
                min-height: 200px;

                button {
                    margin-top: 10px;
                    position: unset;
                }
            }
        }
    }
`;

export const ItemCarrinho = styled.div`
    width: 100%;
    border: 1px solid #ffffff;
    border-radius: 4px;
    display: flex;
    grid-gap: 10px;
    margin-top: 10px;
    position: relative;

    .left {
        width: 60px;
        height: 60px;
        border-radius: 4px;
        background-color: #ffffff;
        display: flex;
        align-items: center;
        justify-content: center;

        .img {
            width: 100%;
            border-radius: 4px;
        }
     }

     .right {
        display: flex;
        flex-direction: column;
        /* grid-gap: 8px; */
        justify-content: space-around;
        width: 100%;

        h3 {
            font-size: 16px;
            font-weight: 500;
            width: calc(100% - 20px);
        }

        .buttons {
            display: flex;
            grid-gap: 10px;

            div {
                background-color:#5c3161;
                display: flex;
                align-items: center;
                justify-content: center;
                cursor: pointer;
                width: 17px;
                height: 17px;
                border-radius: 4px;
            }

            input {
                outline: none;
                border: none;
                text-align: center;
                width: 20px;
                height: 17px;
                border-radius: 4px;
            }
        }
     }

     .trash-div {
        position: absolute;
        right: 1px;
        top: 0px;
        width: 17px;
        height: 17px;
        cursor: pointer;

        img {
            width: 100%;
        }
    }
     
`;

export const EtapasDiv = styled.div`
    @media screen and (max-width: 500px) {
        display: none;
    }
`; 