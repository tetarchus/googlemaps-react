import React from 'react';

import { FailedWrapper, Message } from './styled';

import type { FailedProps } from './types';

const Failed: React.FC<FailedProps> = ({
  height = '100%',
  message = 'Unable to load Google Maps API',
  width = '100%',
}: FailedProps) => (
  <FailedWrapper height={height} width={width}>
    <Message>{message}</Message>
  </FailedWrapper>
);

export { Failed };
export type { FailedProps } from './types';
