import { merge } from 'lodash';
import React from 'react';

import { DEFAULT_MAP_OPTIONS } from '../../constants';

import { MapWrapper } from './styled';

import type { MapProps } from './types';

const MapComponent: React.FC<MapProps> = ({ height = '100%', width = '100%', mapOptions = {} }) => {
  const mapRef = React.useRef<HTMLDivElement>(null);
  const [, setMap] = React.useState<google.maps.Map>();

  const options = React.useMemo(() => merge(DEFAULT_MAP_OPTIONS, mapOptions), [mapOptions]);

  React.useEffect(() => {
    setMap(new window.google.maps.Map(mapRef.current!, options));
  }, [mapRef, options]);

  return <MapWrapper height={height} ref={mapRef} width={width} />;
};

export { MapComponent };
