import cn from 'clsx';

import styles from './style.module.css';

interface CopyrightProps {
  copyrights: {
    name: string;
    url: string;
  }[];
}

export const Copyright: React.FC<CopyrightProps> = ({ copyrights }) => {
  return (
    <div
      className={cn(
        'maplibregl-ctrl-attrib-inner mapboxgl-ctrl-attrib-inner',
        styles.copyright
      )}
    >
      {copyrights.map((c, i) => {
        return (
          <span key={i}>
            {'© '}
            <a href={c.url} target="_blank" rel="noopener noreferrer">
              {c.name}
            </a>
          </span>
        );
      })}
    </div>
  );
};
