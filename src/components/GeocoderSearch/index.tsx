import { useCallback, useState } from 'react';
import maplibregl from 'maplibre-gl';
import cn from 'clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import styles from './style.module.css';

type GeocoderResults = {
  data: {
    name: string;
    latitude: number;
    longitude: number;
  } & Record<string, any>;
}[];

interface InputSearchProps {
  url: string;
  map?: maplibregl.Map;
}

export const GeocoderSearch: React.FC<InputSearchProps> = ({ url, map }) => {
  const [search, setSearch] = useState('');
  const [results, setResults] = useState<GeocoderResults>([]);
  const [marker, setMarker] = useState<maplibregl.Marker | null>(null);
  const [error, setError] = useState(false);

  const onChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    if (e.target.value.length < 3) {
      setResults([]);
      setError(false);
      return;
    }
    try {
      const res = await fetch(
        url + '?' + new URLSearchParams({ queryText: e.target.value }),
        { method: 'GET' }
      );
      const data = await res.json();
      setResults(data.results.slice(0, 10) as GeocoderResults);
      setError(false);
    } catch (err) {
      setError(true);
    }
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (results.length > 0) {
      const first = results[0].data;
      updateMap(first);
    }
  };

  const updateMap = useCallback(
    (result: GeocoderResults[0]['data']) => {
      if (!map) {
        return;
      }
      if (marker) {
        marker.remove();
      }
      const newMarker = new maplibregl.Marker()
        .setLngLat([result.longitude, result.latitude])
        .addTo(map);
      setMarker(newMarker);
      map.panTo([result.longitude, result.latitude]);
      setResults([]);
      setSearch(result.name);
    },
    [map, marker]
  );

  return (
    <div className={cn(styles['ctrl-container'], 'maplibregl-ctrl-top-left')}>
      <div
        className={cn(
          styles['ctrl-group'],
          'maplibregl-ctrl maplibregl-ctrl-group'
        )}
      >
        <FontAwesomeIcon icon={faSearch} className={styles['search-icon']} />
        <form onSubmit={onSubmit} className={styles['search-form']}>
          <input
            className={cn(styles.search)}
            type="text"
            placeholder="Search"
            value={search}
            onChange={e => onChange(e)}
          />
        </form>
      </div>
      {(results.length > 0 || error) && (
        <div
          className={cn(
            styles['ctrl-group-dropdown'],
            'maplibregl-ctrl maplibregl-ctrl-group'
          )}
        >
          {error ? (
            <div className={styles['search-error']}>
              An error occured while searching...
            </div>
          ) : (
            <>
              <ul className={styles['search-results']}>
                {results.map((result, index) => (
                  <li
                    key={index}
                    className={styles['search-result']}
                    onClick={() => updateMap(result.data)}
                  >
                    <div className={styles['search-result-name']}>
                      {result.data.name}
                    </div>
                    <div className={styles['search-result-country']}>
                      {result.data.countryCode}
                    </div>
                  </li>
                ))}
              </ul>
              <small className={styles['attribution']}>© GeoNames</small>
            </>
          )}
        </div>
      )}
    </div>
  );
};
