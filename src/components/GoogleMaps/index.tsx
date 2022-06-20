import { Status, Wrapper } from '@googlemaps/react-wrapper';
import React from 'react';

import { Failed } from '../Failed';
import { Loading } from '../Loading';
import { MapComponent } from '../Map';

import type { GoogleMapsProps } from './types';

const GoogleMaps: React.FC<GoogleMapsProps> = ({
  apiKey,
  failureComponent,
  height = '100%',
  mapOptions,
  loadingComponent,
  width = '100%',
}: GoogleMapsProps) => {
  const render = React.useCallback(
    (loadingStatus: Status) => {
      // eslint-disable-next-line default-case
      switch (loadingStatus) {
        case Status.LOADING:
          return loadingComponent ?? <Loading height={height} width={width} />;
        case Status.FAILURE:
          return failureComponent ?? <Failed height={height} width={width} />;
        case Status.SUCCESS:
          return <MapComponent height={height} width={width} mapOptions={mapOptions} />;
      }
    },
    [failureComponent, height, loadingComponent, mapOptions, width],
  );
  return <Wrapper apiKey={apiKey} render={render} id='map' />;
};

export { GoogleMaps };
export type { GoogleMapsProps } from './types';
