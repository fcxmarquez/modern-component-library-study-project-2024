import { FC } from 'react';
import { options } from '@/stories/constants';
import './Card.css';
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
      className={classNames('card', {
        [`color-${color}`]: color,
        [`size-${size}`]: size,
        'is-clickable': isClickable,
        'is-draggable': isDraggable,
      })}
    >
      {' '}
      {children}{' '}
    </div>
  );
};
