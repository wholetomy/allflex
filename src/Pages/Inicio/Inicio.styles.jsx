import styled from "styled-components";

export const InicioContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 50px;
    width: 100%;
    height: 100vh;
    grid-gap: 50px;

    .left-div {
        height: 100%;
        width: 50%;
    }

    .right-div {
        height: 100%;
        width: 50%;
    }

    .texts {
        width: 75%;
    }

    h1 {
        color: #5c3161;
        font-weight: 700;
        font-size: 4.5rem;
    }

    p {
        color: #263642;
        font-size: 16px;
        font-weight: 500;
        margin-bottom: 30px;
    }

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
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 14px;
    }

    @media screen and (max-width: 980px) {
        flex-direction: column;
        height: unset;
        grid-gap: 25px;
        padding: 25px;

        .left-div {
            width: 100%;
        }

        .right-div {
            width: 100%;
        }

        .texts {
            text-align: center;
            width: unset;
        }

        h1 {
            font-size: 3rem;
        }

        button {
            width: 210px;
            height: 50px;
        }
    }
`;