import { FC } from 'react';
import { options } from '@/stories/constants';
import styles from './Card.module.css';
import { getClasses } from '@/helpers/styles';

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
  const getFirstFunction = getClasses(styles);
  const getStyles = getFirstFunction({
    color,
    size,
  });

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
