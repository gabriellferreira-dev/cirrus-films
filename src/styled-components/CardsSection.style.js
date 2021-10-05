import styled, { css } from 'styled-components';

export const StyledCardsSection = styled.div`
  width: 100%;
  height: 200px;
  overflow: hidden;
  margin-bottom: 30px;
  padding-right: 0;
  display: flex;
  flex-direction: column;

  & p {
    font-size: 1.6rem;
    color: white;
    font-weight: bold;
    margin-left: 10px;
    margin-bottom: 10px;
  }

  ${({ nowPlaying }) =>
    nowPlaying &&
    css`
      height: 250px;
      margin: 30px 0;
    `}
`;
