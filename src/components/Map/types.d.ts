type StyledComponentProps = {
  height: number | string;
  width: number | string;
};

type MapProps = Partial<StyledComponentProps> & {
  mapOptions?: google.maps.MapOptions | undefined;
  center?: google.maps.LatLngLiteral;
  zoom?: number;
};

export type { MapProps, StyledComponentProps };
