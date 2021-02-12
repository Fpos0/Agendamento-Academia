import styled, { css } from 'styled-components';

interface HoraSelecionada {
    isSelected : boolean;
}
export const Container = styled.div`
    /* display:grid; */
`;

export const HourButton = styled.button``;

export const HourB = styled.button<HoraSelecionada>`
    background-color: grey;
    border: 2px solid grey;
    text-align: center;
    border-radius:25px;
    width: 70px;
    height: 40px;
    border: 0px;
    margin: 7px;
    color: white;

    span {
        padding: 5px 5px 5px 5px;
        margin: 17px;

        text-decoration: none;

    }

    ${(props) => props.isSelected && css`
        background-color: #c9002c;
        border: 2px solid #c9002c;

    `}
    `;
