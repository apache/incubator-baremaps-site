import styles from './style.module.css';

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  size?: 'sm' | 'md';
}

export const Button: React.FC<ButtonProps> = props => {
  const classes = [
    'nx-rounded',
    'nx-transition-colors',
    styles.btn,
    props.className
  ];
  if (props.size === 'sm') {
    classes.push(styles['btn-sm']);
  }
  return (
    <button {...props} className={classes.join(' ')}>
      {props.children}
    </button>
  );
};
