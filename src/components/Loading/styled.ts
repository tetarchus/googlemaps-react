import styled from 'styled-components';

import type { StyledComponentProps } from './types';

const LoadingWrapper = styled.div<StyledComponentProps>`
  align-items: center;
  background-color: #bcbcbc;
  border-radius: 3%;
  display: flex;
  flex-direction: column;
  font-family: 'Arial';
  gap: 20px;
  padding: 3%;
  height: ${({ height }): string => (typeof height === 'string' ? height : `${height}px`)};
  justify-content: center;
  width: ${({ width }): string => (typeof width === 'string' ? width : `${width}px`)};
`;

const Spinner = styled.div`
  color: #000;
  font-size: 30px;
  /* text-indent: -9999em; */
  overflow: hidden;
  width: 1em;
  height: 1em;
  border-radius: 50%;
  /* margin: 72px auto; */
  /* position: relative; */
  transform: translateZ(0);
  animation: load 1.7s infinite ease, round 1.7s infinite ease;

  @keyframes load {
    0% {
      box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em,
        0 -0.83em 0 -0.477em;
    }
    5%,
    95% {
      box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em,
        0 -0.83em 0 -0.477em;
    }
    10%,
    59% {
      box-shadow: 0 -0.83em 0 -0.4em, -0.087em -0.825em 0 -0.42em, -0.173em -0.812em 0 -0.44em,
        -0.256em -0.789em 0 -0.46em, -0.297em -0.775em 0 -0.477em;
    }
    20% {
      box-shadow: 0 -0.83em 0 -0.4em, -0.338em -0.758em 0 -0.42em, -0.555em -0.617em 0 -0.44em,
        -0.671em -0.488em 0 -0.46em, -0.749em -0.34em 0 -0.477em;
    }
    38% {
      box-shadow: 0 -0.83em 0 -0.4em, -0.377em -0.74em 0 -0.42em, -0.645em -0.522em 0 -0.44em,
        -0.775em -0.297em 0 -0.46em, -0.82em -0.09em 0 -0.477em;
    }
    100% {
      box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em,
        0 -0.83em 0 -0.477em;
    }
  }
  @keyframes round {
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

const Message = styled.span``;

export { LoadingWrapper, Message, Spinner };
