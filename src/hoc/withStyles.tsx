import { getClasses } from '@/helpers/styles';
import { CardProps } from '@/stories/Card/Card';

export const withStyles =
  (styles: CSSModuleClasses) =>
  (WrappedComponent: React.ComponentType<CardProps>) => {
    const WithStylesComponent = (props: React.PropsWithChildren<CardProps>) => {
      const allProps = { ...WrappedComponent.defaultProps, ...props };

      return (
        <WrappedComponent {...props} getStyles={getClasses(styles)(allProps)} />
      );
    };

    WithStylesComponent.displayName = WrappedComponent.displayName;

    return WithStylesComponent;
  };
