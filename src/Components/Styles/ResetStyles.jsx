import { createGlobalStyle } from 'styled-components';

const ResetStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Source Sans 3', sans-serif;
    }

    body,
    button,
    input,
    select,
    textarea {
        font-family: inherit;
        font-size: inherit;
        line-height: inherit;
    }

    a {
        text-decoration: none;
    }

    ::-webkit-scrollbar {
        width: 5px;
        height: 5px;
    }

    ::-webkit-scrollbar-track {
        background: none;
    }


    ::-webkit-scrollbar-thumb {
        background: #5c3161;
        border-radius: 50px;
    }

    ::-webkit-scrollbar-thumb:hover {
        background: #5c3161;
    }
`;

export default ResetStyles;
