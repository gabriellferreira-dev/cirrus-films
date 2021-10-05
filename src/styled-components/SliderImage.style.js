import styled, { css } from 'styled-components';

export const StyledImage = styled.img`
  width: 112px;
  height: 159px;
  margin-right: 5px;

  ${({ nowPlaying }) =>
    nowPlaying &&
    css`
      width: 350px;
      height: 100%;
    `}
`;
