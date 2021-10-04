import styled from 'styled-components';

export const HeaderButton = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  color: white;
  background-color: transparent;
  border: none;
  outline: none;
  /* padding: 5px; */
  height: 40px;
  font-size: 1.4rem;

  & svg {
    font-size: 1.8rem;
  }
`;