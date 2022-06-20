import styled from 'styled-components';

import type { StyledComponentProps } from './types';

const FailedWrapper = styled.div<StyledComponentProps>`
  align-items: center;
  background-color: #bcbcbc;
  border-radius: 3%;
  display: flex;
  font-family: 'Arial';
  padding: 3%;
  height: ${({ height }): string => (typeof height === 'string' ? height : `${height}px`)};
  justify-content: center;
  width: ${({ width }): string => (typeof width === 'string' ? width : `${width}px`)};
`;

const Message = styled.span`
  text-align: center;
`;

export { FailedWrapper, Message };
