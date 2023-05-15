import React, { useRef, useEffect, useState } from 'react';
import maplibregl from 'maplibre-gl';
import MaplibreInspect from '@/lib/maplibre/dist/maplibre-gl-inspect/maplibre-gl-inspect';
import MaplibreTileBoundaries from '@/lib/maplibre/dist/maplibre-gl-tile-boundaries/maplibre-gl-tile-boundaries';

import styles from './style.module.css';
import { GeocoderSearch } from '../GeocoderSearch';

interface MapProps {
  longitude?: number;
  latitude?: number;
  zoom?: number;
  mapStyle?: string | maplibregl.StyleSpecification;
  /**
   * 'getMapStyle' a function we might want to fetch the style from the server
   *
   * Note: This precedes 'mapStyle' if both are defined
   */
  getMapStyle?: () => Promise<string | maplibregl.StyleSpecification>;
  mapOptions?: Partial<maplibregl.MapOptions>;
  /**
   * 'getControls' a function because some controls access the window object
   * which is not available until the component is mounted
   */
  getControls?: () => maplibregl.IControl[];
  geocoder?: boolean;
  ipToLoc?: boolean;
}

export const getDefaultControls = (): maplibregl.IControl[] => [
  // Add navigation control (the +/- zoom and compass buttons)
  new maplibregl.NavigationControl({}),
  // Add the inspect control to the map.
  new MaplibreInspect({
    showMapPopup: true,
    showMapPopupOnHover: false,
    showInspectMapPopupOnHover: false,
    popup: new maplibregl.Popup({
      closeButton: true,
      closeOnClick: true
    })
  }),
  // Add the tile boundaries control to the map.
  new MaplibreTileBoundaries({
    showBoundaries: false
  })
];

export default function Map({
  longitude = 6.625,
  latitude = 46.51,
  zoom = 14,
  mapStyle = `https://demo.baremaps.com/style.json`,
  getMapStyle,
  mapOptions = {} as maplibregl.MapOptions,
  getControls = getDefaultControls,
  geocoder = true,
  ipToLoc = true
}: MapProps) {
  const mapContainer = useRef(null);
  const [map, setMap] = useState(null);

  // Initialize map when component mounts
  useEffect(() => {
    const initMap = async () => {
      if (ipToLoc) {
        try {
          const response = await fetch(`https://demo.baremaps.com/api/iploc`);
          const results = await response.json();
          if (results.length > 0) {
            longitude = results[0].longitude;
            latitude = results[0].latitude;
          }
        } catch (err) {
          // For the moment, we fallback to the default values
        }
      }
      const newMap = new maplibregl.Map({
        container: mapContainer.current,
        style: getMapStyle !== undefined ? await getMapStyle() : mapStyle,
        center: [longitude, latitude],
        zoom: zoom,
        ...mapOptions
      });
      // Add default controls
      getControls().forEach(control => {
        newMap.addControl(control);
      });

      setMap(newMap);
    };
    initMap();
  }, []);

  return (
    <div className={styles.wrap}>
      {geocoder && (
        <GeocoderSearch
          url="https://demo.baremaps.com/api/geocoder"
          map={map}
        />
      )}
      <div ref={mapContainer} className={styles.map} />
    </div>
  );
}
