import styled, { css } from 'styled-components';

export const StyledSlider = styled.div`
  display: flex;
  overflow: hidden;
  width: 100%;
  overflow-x: scroll;
  height: 100%;
  display: flex;

  &::-webkit-scrollbar {
    display: none;
  }

  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  & div:first-child {
    margin-left: 10px;
  }

  & div:last-child {
    margin-right: 10px;
  }


  ${({ nowPlaying }) =>
    nowPlaying &&
    css`
      & div {
        position: relative;

        & div {
          position: absolute;
          /* height: 100%; */
          width: 100px;
          top: 10px;
          left: 10px;
          display: flex;
          justify-content: space-evenly;

          & span {
            font-size: 1rem;
            font-weight: 500;
            background: rgba(209, 8, 9, 0.8);
            color: white;
            user-select: none;
            border-radius: 20px;
            /* border: 1px solid white; */
            padding: 5px;
          }
        }
      }
    `}
`;
