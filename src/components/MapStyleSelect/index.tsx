import cn from 'clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFillDrip } from '@fortawesome/free-solid-svg-icons';
import { MapStyle } from '../map/mapStyles';
import styles from './style.module.css';

interface MapStyleSelectProps {
  map: maplibregl.Map;
  mapStyles: MapStyle[];
}

export const MapStyleSelect: React.FC<MapStyleSelectProps> = ({
  map,
  mapStyles
}) => {
  return (
    <div className={cn(styles['ctrl-container'], 'maplibregl-ctrl-top-left')}>
      <div
        className={cn(
          styles['select-container'],
          'maplibregl-ctrl maplibregl-ctrl-group'
        )}
      >
        <FontAwesomeIcon icon={faFillDrip} className={styles.icon} />
        <select
          className={styles['style-select']}
          onChange={e => {
            const style = mapStyles.find(
              style => style.name === e.target.value
            );
            if (style) {
              map.setStyle(style.styleUrl);
            }
          }}
        >
          {mapStyles.map(style => (
            <option key={style.name} value={style.name}>
              {style.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};
