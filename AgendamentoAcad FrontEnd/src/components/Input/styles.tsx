import styled, { css } from 'styled-components';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  InputSize?: string;
}
// background: ${({ bgColor }: ContainerButtonProps): string =>
//     bgColor || '#fff'};
export const Container = styled.div<ContainerProps>`
  /* padding: 5px;
  flex: 1;
  text-align: center; */

  span {
    width: 216px;
    height: 22px;
    margin-left: 8px;
    font-family: Poppins;
    font-style: normal;
    font-weight: 800;
    font-size: 16px;
    line-height: 18px;

    color: #000000;
  }
  input {
    width: ${({ InputSize }: ContainerProps): string => (InputSize ? `${InputSize}px` : '200px')};
    height: 26px;
    left: 13px;
    top: 1px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

    border: 1px solid #ada7a7;
    box-sizing: border-box;
    border-radius: 4px;
    padding-left: 8px;

    ${(props) => props.isFocused
      && css`
        color: #6d6c77;
        border: 2px solid #150baa;
      `}

    ${(props) => props.isFilled
      && css`
        border: 2px solid #06a568;
      `}
  }
`;

// export const Input = styled.input``;
