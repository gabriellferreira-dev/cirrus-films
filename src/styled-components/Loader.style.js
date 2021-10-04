import styled from 'styled-components';

export const Loader = styled.div`
  &,
  &:after {
    border-radius: 50%;
    width: 30px;
    height: 30px;
  }

  font-size: 10px;
  position: relative;
  text-indent: -9999em;
  border-top: 0.5em solid transparent;
  border-right: 0.5em solid transparent;
  border-bottom: 0.5em solid transparent;
  border-left: 0.5em solid #ffffff;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-animation: load8 1.1s infinite linear;
  animation: load8 1.1s infinite linear;

  @-webkit-keyframes load8 {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }

  @keyframes load8 {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
`;
