import React from 'react';

import { LoadingWrapper, Message, Spinner } from './styled';

import type { LoadingProps } from './types';

const Loading: React.FC<LoadingProps> = ({ height = '100%', width = '100%' }) => (
  <LoadingWrapper height={height} width={width}>
    <>
      <Spinner />
      <Message>Loading Map...</Message>
    </>
  </LoadingWrapper>
);

export { Loading };
export type { LoadingProps } from './types';
