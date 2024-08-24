import { withStyles } from '@/hoc/withStyles';
import styles from '@/stories/Picture/Picture.module.css';
import Picture from '@/stories/Picture';
import { options } from '@/stories/constants';

type AvatarProps = {
  getStyles: (...props: any[]) => string;
  src: string;
  size: (typeof options.sizes)[number];
  alt: string;
};

const imgSizes = {
  sm: '32px',
  md: '48px',
  lg: '64px',
};

export const Avatar = ({ getStyles, src, size, alt }: AvatarProps) => {
  const imgSize = imgSizes[size];

  return (
    <div className={getStyles('avatar')}>
      <Picture
        getStyles={getStyles}
        src={src}
        alt={alt}
        width={imgSize}
        height={imgSize}
        isRounded
      />
    </div>
  );
};

export default withStyles(styles)(Avatar);
