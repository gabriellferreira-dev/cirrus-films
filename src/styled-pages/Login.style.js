import styled from 'styled-components';

const StyledLoginPage = styled.section`
  width: 100%;
  height: 100vh;
  background: #0e0e0e;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  & > div {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;

    & img {
      width: 210px;
      height: 98px;
    }

    & form {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 7px;
      width: 80%;
      height: 170px;
      justify-content: space-between;

      & input {
        padding: 15px;
        width: 280px;
        background: rgba(255, 255, 255, 0.1);
        border-radius: 5px;
        outline: none;
        border: none;
        font-size: 1.6rem;
        width: 100%;
        color: #fff;

        &::placeholder {
          color: #fff;
        }
      }
    }
  }

  & p {
    color: #fff;
    font-size: 1.6rem;
    position: relative;
    bottom: 20px;
    text-align: center;

    & span {
      color: #d10809;
    }
  }
`;

export default StyledLoginPage;
