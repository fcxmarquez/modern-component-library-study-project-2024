import { FC } from 'react';
import { options } from '@/stories/constants';
import styles from './Card.module.css';
import classNames from 'classnames';

export type CardProps = {
  color?: (typeof options.colors)[number];
  size?: (typeof options.sizes)[number];
  children: React.ReactNode;
  isClickable?: boolean;
  isDraggable?: boolean;
};

export const Card: FC<CardProps> = ({
  children,
  color = 'primary',
  size = 'md',
  isClickable,
  isDraggable,
}) => {
  return (
    <div
      className={classNames(styles.card, {
        [styles[`color-${color}`]]: color,
        [styles[`size-${size}`]]: size,
        [styles['is-clickable']]: isClickable,
        [styles['is-draggable']]: isDraggable,
      })}
    >
      {children}
    </div>
  );
};
