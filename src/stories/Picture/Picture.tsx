import { withStyles } from '@/hoc/withStyles';
import styles from './Picture.module.css';

type PictureProps = {
  getStyles: (...props: any[]) => string;
  src: string;
  width: string;
  height: string;
  isRounded: boolean;
  alt: string;
};

export const Picture = ({
  getStyles,
  src,
  width,
  height,
  isRounded,
  alt,
}: PictureProps) => {
  return (
    <picture className={getStyles('picture', { 'is-rounded': isRounded })}>
      <img alt={alt} src={src} style={{ height, maxWidth: width }} />
    </picture>
  );
};

export default withStyles(styles)(Picture);
