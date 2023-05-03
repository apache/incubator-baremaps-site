import React, { useRef, useEffect, useState } from 'react';
import maplibregl from 'maplibre-gl';
import MaplibreInspect from '@/lib/maplibre/dist/maplibre-gl-inspect/maplibre-gl-inspect';
import MaplibreTileBoundaries from '@/lib/maplibre/dist/maplibre-gl-tile-boundaries/maplibre-gl-tile-boundaries';

import styles from './style.module.css';

export default function Map() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng] = useState(6.625);
  const [lat] = useState(46.51);
  const [zoom] = useState(14);

  useEffect(() => {
    if (map.current) return;
    map.current = new maplibregl.Map({
      container: mapContainer.current,
      style: `https://demo.baremaps.com/style.json`,
      center: [lng, lat],
      zoom: zoom
    });
    map.current.addControl(new maplibregl.NavigationControl({}));

    // Add the inspect control to the map.
    map.current.addControl(
      new MaplibreInspect({
        showMapPopup: true,
        showMapPopupOnHover: false,
        showInspectMapPopupOnHover: false,
        popup: new maplibregl.Popup({
          closeButton: true,
          closeOnClick: true
        })
      })
    );

    // Add the tile boundaries control to the map.
    map.current.addControl(
      new MaplibreTileBoundaries({
        showBoundaries: false
      })
    );
  });

  return (
    <div className={styles.wrap}>
      <div ref={mapContainer} className={styles.map} />
    </div>
  );
}
