import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface FormProps{
    hasError: boolean;
}

export const Container = styled.div`
    max-width: 960px;
    margin: 0 auto;
    padding: 40px 20px;
    display:grid;
    grid-template-columns: 70% 30%;

    h1 {
        padding-top: 50px;
        font-size: 30px;
        margin-bottom: 10px;
        font-family: 'Courier New', Courier, monospace;
        text-transform: uppercase;
    }
`;
export const PopUpConfirm = styled.div`
    display:flex;

    color:black;
        /* height: 350px;
        width:650px; */
    width:400px;
    flex-direction: column ;
    font-family: 'Courier New', Courier, monospace;
    text-transform: uppercase;
    text-align: center;
    align-items: center;

    * {
         padding: 7px 0px 7px 0px;
     }

    button {
         background-color:#c20404;
        color: white;
        border-radius: 10px;

        :hover {
             border: 2px solid gray;
         }
        span {
            margin: 15px;
         }
    }

`;
export const SelectFranchise = styled.div`
    /* background-color: #202575; */
    height: 140px;

`;

export const SelectDate = styled.div`
    /* background-color: #73106b; */
    height: 100px;
    margin-top: 0px;
    input {
        text-align:center;
        height: 33px;
        width: 100%;
        padding: 1px;
        border-radius:5px;
        border: 0px;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }

`;

export const Title = styled.h1`
    font-size: 48px;
    color: #3a3a3a;
    max-width: 450px;
    line-height: 56px;

    margin-top:80px;
`;

export const Form = styled.form<FormProps>`
    margin-top: 40px;
    max-width: 700px;

    display: flex;

    input {
        flex: 1;
        height: 70px;
        padding: 0 24px;
        border: 0;
        border-radius: 5px 0 0 5px;
        color: #3a3a3a;
        border: 2px solid #fff;
        border-right: 0;

        ${(props) => props.hasError && css`
            border-color:#c53030;
        `}

        &::placeholder {
            color: #a8a8b3
        }
    }

    button{
        width: 210px;
        height: 70px;
        background: #04d361;
        border-radius: 0 5px 5px 0;
        border: 0;
        color: #fff;
        font-weight: bold;
        transition: background-color 0.2s;

        &:hover{
            background: ${shade(0.2, '#04d361')}
        }

    }
`;
export const ButtonAg = styled.button`
    /* background-color: #202575; */
    width: 279px;
    height: 69px;
    color: white;
    border: 0;
    background: #C51212;
    border-radius: 37px;
    align-content:center;
    margin:20px 0px 0px 40px;
    span {
       font-size: 23px;
       padding-bottom: 10px;
    }

`;
