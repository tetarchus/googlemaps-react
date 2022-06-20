const DEFAULT_CENTER = { lat: 0, lng: 0 };
const DEFAULT_ZOOM = 5;
const DEFAULT_MAP_OPTIONS: google.maps.MapOptions = {
  center: DEFAULT_CENTER,
  streetViewControl: false,
  rotateControl: true,
  mapTypeControl: false,
  styles: [
    {
      featureType: 'poi',
      elementType: 'labels',
      stylers: [{ visibility: 'off' }],
    },
  ],
  zoom: DEFAULT_ZOOM,
};

export { DEFAULT_CENTER, DEFAULT_MAP_OPTIONS, DEFAULT_ZOOM };
