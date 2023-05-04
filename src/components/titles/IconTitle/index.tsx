import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './style.module.css';
import { type IconDefinition } from '@fortawesome/fontawesome-svg-core';

interface IconTitleProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  icon: IconDefinition;
}

export const IconTitle: React.FC<IconTitleProps> = ({
  children,
  icon,
  ...props
}) => {
  return (
    <div className={styles['title-container']} {...props}>
      <FontAwesomeIcon icon={icon} fontSize={40} />
      {children}
    </div>
  );
};
