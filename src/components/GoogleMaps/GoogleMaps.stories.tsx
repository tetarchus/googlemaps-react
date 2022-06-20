import { GoogleMaps as GoogleMapsComponent } from '.';

import type { GoogleMapsProps } from './types';
import type { ComponentMeta, StoryObj } from '@storybook/react';

const GoogleMapsMeta: ComponentMeta<typeof GoogleMapsComponent> = {
  title: 'Default/Map',
  component: GoogleMapsComponent,
};

const GoogleMaps: StoryObj<GoogleMapsProps> = {
  args: {
    apiKey: 'AIzaSyDJAPPVVqH_xuAbsyJwwsHX6vDx8hwGL4U',
    height: 500,
    width: 500,
  },
};

export default GoogleMapsMeta;
export { GoogleMaps };
