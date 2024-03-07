import styled from "styled-components";

export const FinalContainer = styled.div`
    padding: 25px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    grid-gap: 5px;
    background-color: #f8f8f8;
`;

export const EtapasDiv = styled.div`
    @media screen and (max-width: 500px) {
        display: none;
    }
`;

export const FinalizacaoDiv = styled.div`
    width: 100%;
    background-color: #ffffff;
    border-radius: 14px;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    height: calc(100vh - 105px);
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 15px;
    overflow: auto;

    div {
        display: flex;
        align-items: center;
        max-width: 530px;
        flex-direction: column;
        text-align: center;

        button {
            width: 234px;
            height: 64px;
            border-radius: 30px;
            color: #ffffff;
            background-color: #009ada;
            outline: none;
            border: none;
            font-weight: 600;
            font-size: 20px;
            cursor: pointer;
            box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
            margin-bottom: 10px;
        }

        h1 {
            color: #5c3161;
            font-size: 48px;
        }

        p {
            color: #263642;
            font-weight: 600;
            font-size: 30px;
        }
    }



    /* @media screen and (max-width: 810px) {
        flex-direction: column;
        height: unset;
    } */
`;
