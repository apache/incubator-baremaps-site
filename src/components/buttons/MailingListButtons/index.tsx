import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

import { Button } from '../Button';
import styles from './style.module.css';

interface MailingListButtonsProps {
  list: string;
}

export const MailingListButtons: React.FC<MailingListButtonsProps> = ({
  list
}) => {
  return (
    <div className={styles.container}>
      <a
        href={`mailto:${list}-subscribe@baremaps.apache.org?subject=(send%20this%20email%20to%20subscribe)`}
      >
        <Button size="sm">Subscribe</Button>
      </a>
      <a
        href={`mailto:${list}-unsubscribe@baremaps.apache.org?subject=(send%20this%20email%20to%20unsubscribe)`}
      >
        <Button size="sm">Unsubscribe</Button>
      </a>
      <a
        href={`https://lists.apache.org/list.html?${list}@baremaps.apache.org`}
        target="_blank"
      >
        <Button size="sm">
          <span>Archive</span>
          <FontAwesomeIcon icon={faArrowUpRightFromSquare}></FontAwesomeIcon>
        </Button>
      </a>
    </div>
  );
};
