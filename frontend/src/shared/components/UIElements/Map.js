// import React, { useRef, useEffect } from 'react';
import React, { useRef, useEffect } from 'react';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax

import './Map.css';

mapboxgl.accessToken =
  'pk.eyJ1IjoiZGFsYXN0MSIsImEiOiJja3ZvMGU3dmwwZTVmMzBxdjkzZTE2cHl4In0.p8qmuBvPh4D_LDQs8CDMKQ';

const Map = (props) => {
  const mapContainer = useRef(null);
  const map = useRef(null);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [props.center.lng, props.center.lat],
      zoom: props.zoom,
    });
  });

  return <div ref={mapContainer} className="map" />;
};

export default Map;
