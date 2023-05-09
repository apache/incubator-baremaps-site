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
  ipToLoc?: boolean;
}

export default function Map({
  longitude = 6.625,
  latitude = 46.51,
  zoom = 14,
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
          map.jumpTo({
            center: [longitude, latitude],
            zoom: zoom
          });
        } catch (err) {
          // For the moment, we fallback to the default values
        }
      }
      setMap(
        new maplibregl.Map({
          container: mapContainer.current,
          style: `https://demo.baremaps.com/style.json`,
          center: [longitude, latitude],
          zoom: zoom
        })
      );
    };
    initMap();
  }, []);

  // Add controls to the map
  useEffect(() => {
    if (map) {
      map.addControl(new maplibregl.NavigationControl({}));
      // Add the inspect control to the map.
      map.addControl(
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
      map.addControl(
        new MaplibreTileBoundaries({
          showBoundaries: false
        })
      );
    }
  }, [map]);

  return (
    <div className={styles.wrap}>
      <GeocoderSearch url="http://localhost:9000/api/geocoder" map={map} />
      <div ref={mapContainer} className={styles.map} />
    </div>
  );
}
