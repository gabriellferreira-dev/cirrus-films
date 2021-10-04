import styled, { css } from 'styled-components';

export const StyledHeader = styled.header`
  width: 100%;
  height: 556px;
  background-color: #0e0e0e;
  position: relative;
  display: flex;
  justify-content: center;

  ${({ posterPath }) =>
    posterPath &&
    css`
      background: linear-gradient(
          180deg,
          rgba(14, 14, 14, 0.2) 50%,
          #0e0e0e 100%
        ),
        url(${posterPath});
      background-size: cover;
      background-position: center;
    `}
  
  & > div {

    position: absolute;
    bottom: 40px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
  }
`;
