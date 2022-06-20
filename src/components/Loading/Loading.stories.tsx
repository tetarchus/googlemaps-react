import { Loading as LoadingComponent } from '.';

import type { LoadingProps } from './types';
import type { ComponentMeta, StoryObj } from '@storybook/react';

const LoadingMeta: ComponentMeta<typeof LoadingComponent> = {
  title: 'Default/Status/Loading',
  component: LoadingComponent,
};

const Loading: StoryObj<LoadingProps> = {
  args: {
    height: 200,
    width: 200,
  },
};

export default LoadingMeta;
export { Loading };
