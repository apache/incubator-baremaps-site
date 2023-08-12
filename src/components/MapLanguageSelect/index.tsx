import cn from 'clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLanguage } from '@fortawesome/free-solid-svg-icons';
import styles from './style.module.css';

interface MapLanguageSelectProps {
  map: maplibregl.Map;
}

export const MapLanguageSelect: React.FC<MapLanguageSelectProps> = ({
  map,
}) => {

  let languages = [
    {name: 'Default', code: 'name'},
    {name: 'English', code: 'name:en'},
    {name: 'Spanish', code: 'name:es'},
    {name: 'French', code: 'name:fr'},
    {name: 'German', code: 'name:de'},
    {name: 'Italian', code: 'name:it'},
    {name: 'Japanese', code: 'name:ja'},
    {name: 'Korean', code: 'name:ko'},
    {name: 'Portuguese', code: 'name:pt'},
    {name: 'Russian', code: 'name:ru'},
    {name: 'Chinese', code: 'name:zh'},
  ];

  return (
    <div className={cn(styles['ctrl-container'], 'maplibregl-ctrl-top-left')}>
      <div
        className={cn(
          styles['select-container'],
          'maplibregl-ctrl maplibregl-ctrl-group'
        )}
      >
        <FontAwesomeIcon icon={faLanguage} className={styles.icon} />
        <select
          className={styles['style-select']}
          onChange={e => {
            map.setLayoutProperty('point_label', 'text-field', [
              'coalesce',
              ['get', e.target.value],
              ['get', 'name']
            ]);
          }}
        >
          {languages.map(language => (
            <option key={language.name} value={language.code}>
              {language.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};
