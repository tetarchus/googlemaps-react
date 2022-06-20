import type React from 'react';

type StyledComponentProps = {
  height: number | string;
  width: number | string;
};

type GoogleMapsProps = Partial<StyledComponentProps> & {
  apiKey: string;
  children?: React.ReactNode;
  mapOptions?: google.maps.MapOptions;
  failureComponent?: JSX.Element;
  loadingComponent?: JSX.Element;
};

export type { GoogleMapsProps, StyledComponentProps };
