import Link from 'next/link';
import Image from 'next/image';
import cn from 'clsx';
import styles from './style.module.css';

interface Member {
  name?: string;
  apacheUsername?: string;
  githubUsername?: string;
  role: string;
}

interface MembersTableProps {
  members: Member[];
}

export const MembersTable: React.FC<MembersTableProps> = ({ members }) => {
  return (
    <div
      className={cn([
        styles.container,
        'nx-border',
        'dark:nx-border-neutral-800',
        'contrast-more:nx-border-neutral-400',
        'dark:contrast-more:nx-border-neutral-400'
      ])}
    >
      <table className={styles.table}>
        <thead className="nx-bg-black/[.05] dark:nx-bg-gray-50/10">
          <tr>
            <th>GitHub</th>
            <th>Name</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {members.map((member, i) => (
            <tr key={i}>
              <td className={styles['image-td']}>
                <Link
                  className={cn([
                    styles['image-link'],
                    member.githubUsername === null ? 'disabled' : ''
                  ])}
                  href={`https://github.com/${member.githubUsername || ''}`}
                >
                  <div
                    className={cn([
                      styles['image-container'],
                      'nx-bg-black/[.05]',
                      'dark:nx-bg-gray-50/10'
                    ])}
                  >
                    <Image
                      src={`https://github.com/${
                        member.githubUsername || ''
                      }.png`}
                      alt={member.githubUsername}
                      fill
                      style={{ objectPosition: 'center' }}
                      onError={e => {
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                  </div>
                </Link>
              </td>
              <td>{member.name}</td>
              <td>{member.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
