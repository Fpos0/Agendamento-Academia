import { createGlobalStyle } from 'styled-components';
import githubBackground from '../assets/githubbackground.svg';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;

    }

    body {
        background-color: #eeebfa;

    }

    body,input,button {
        font: 16px Roboto ,sans-serif;
    }



    button {
        cursor: pointer;
    }
`;
