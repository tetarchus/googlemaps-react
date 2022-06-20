import styled from 'styled-components';

import type { StyledComponentProps } from '../GoogleMaps/types';

const MapWrapper = styled.div<StyledComponentProps>`
  height: ${({ height }): string => (typeof height === 'string' ? height : `${height}px`)};
  width: ${({ width }): string => (typeof width === 'string' ? width : `${width}px`)};
`;

export { MapWrapper };
