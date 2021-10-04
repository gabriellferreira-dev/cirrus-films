import styled, { css } from 'styled-components';

const Button = styled.button`
  border-radius: 5px;
  font-size: 1.6rem;
  border: none;
  color: #fff;
  padding: 10px;
  width: 200px;
  background: #d10809;
  transition: all 0.5s ease;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;

  ${({butonClicked}) => butonClicked && css`
    width: 50px;
    border-radius: 30px;
  `}

  /* &:hover {
    background: #f72f30;
  } */

  ${({ google }) =>
    google &&
    css`
      background: transparent;
      border: 1px inset #fff;
      display: flex;
      justify-content: space-around;
      align-items: center;
      top: -10px;
      position: relative;

      &:hover {
        background-color: rgba(255, 255, 255, 0.2);
      }

      & svg {
        width: 20px;
        height: 20px;
      }
    `}
`;

export default Button;
