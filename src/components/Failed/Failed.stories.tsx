import { Failed as FailedComponent } from '.';

import type { FailedProps } from './types';
import type { ComponentMeta, StoryObj } from '@storybook/react';

const FailedMeta: ComponentMeta<typeof FailedComponent> = {
  title: 'Default/Status/Failed',
  component: FailedComponent,
};

const Failed: StoryObj<FailedProps> = {
  args: {
    height: 500,
    width: 500,
  },
};

export default FailedMeta;
export { Failed };
