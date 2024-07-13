import { FC } from 'react';
import { options } from '@/stories/constants';
import styles from './Card.module.css';
import { withStyles } from '@/hoc/withStyles';

export type CardProps = {
  color?: (typeof options.colors)[number];
  size?: (typeof options.sizes)[number];
  children: React.ReactNode;
  isClickable?: boolean;
  isDraggable?: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  getStyles: (...props: any[]) => string;
};

export const Card: FC<CardProps> = ({
  getStyles,
  children,
  isClickable,
  isDraggable,
}) => {
  return (
    <div
      className={getStyles('card', ['color', 'size'], {
        'is-clickable': isClickable,
        'is-draggable': isDraggable,
      })}
    >
      {children}
    </div>
  );
};

Card.defaultProps = {
  color: 'primary',
  size: 'md',
};

export default withStyles(styles)(Card);
